import React, { useState, useEffect } from "react";
import MenuBarV2 from "../../GeneralComponents/MenubarV2.jsx";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [openDropDown, setOpenDropdown] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        if (token) {
          const response = await fetch("http://127.0.0.1:8000/test_token", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          });
          if (response.ok) {
            setIsLoggedIn(true);
            const response = await fetch("http://127.0.0.1:8000/user/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${sessionStorage.getItem("authToken")}`,
              },
            });
            const data = await response.json();
            setUsername(data);

            const response2 = await fetch(
              "http://127.0.0.1:8000/api/appointments/",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${token}`,
                },
              }
            );
            const data2 = await response2.json();
            setAppointments(data2);
          } else {
            setIsLoggedIn(false);
            navigate("/");
          }
        } else {
          setIsLoggedIn(false);
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking token:", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-[#1E456A]">
        <MenuBarV2 username={username} />
      </div>
      <div className="p-10">
        <h2 className="font-semibold text-[31px]">
          Bookings (<span>1</span>)
        </h2>

        {/* Booking conatiner list */}
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="hover:bg-zinc-100 border-solid border-[0.2px] rounded-[16px] flex justify-between flex-row shadow-md mt-4"
          >
            <div className="px-6 py-3">
              <h3 className="font-bold text-[32px] text-[#404040]">
                {appointment.service}
              </h3>
              <h6 className="text-[10px] mt-[-6px]">
                Created: <span>{appointment.first_name}</span>
              </h6>
            </div>

            {/* Trashcan */}
            <div className=" flex justify-center place-items-center pr-6">
              <FaTrash color="#AD0202" fontSize={20} />
            </div>
          </div>
        ))}
      </div>

      {openDropDown && (
        <div className="absolute bg-[#FFFFFF] right-14 top-[16rem]"></div>
      )}
    </div>
  );
};

export default MyAppointments;
