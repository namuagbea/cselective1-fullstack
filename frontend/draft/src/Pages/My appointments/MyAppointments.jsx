import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FiLogOut } from "react-icons/fi";
import { Hourglass } from 'react-loader-spinner'

 


const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    // Call the parent function to update the isLoggedIn state
    window.location.reload();
  };



  const bookingCount = "";
  const formatDateTime = (dateTime) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateTime).toLocaleString("en-US", options);
  };

  const formatService = (service) => {
    switch (service) {
      case 'metalCeramicBraces':
        return 'Metal & Ceramic Braces';
      case 'teethWhitening':
        return 'Teeth Whitening';
      case 'anteriorFixedVeneers':
        return 'Anterior Fixed Bridge & Veneers';
      case 'toothMolarExtraction':
        return 'Tooth/Molar Extraction';
      case 'oralProphylaxis':
        return 'Oral Prophylaxis';
      case 'toothRestoration':
        return 'Tooth Restoration';
      case 'diastemaClosure':
        return 'Diastema Closure';
      case 'orthodonticTreatment':
        return 'Orthodontic Treatment';
      default:
        return service;
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        if (token) {
          const response = await fetch("http://127.0.0.1:8000/test_token", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const userResponse = await fetch("http://127.0.0.1:8000/user/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
            const userData = await userResponse.json();
            setUsername(userData);

            const appointmentsResponse = await fetch(
              "http://127.0.0.1:8000/api/appointments/",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const appointmentsData = await appointmentsResponse.json();
            setAppointments(appointmentsData);
          } else if (response.status === 401) {
            setLoading(true);
            console.log("Token expired, trying to refresh it...");
            const refreshToken = sessionStorage.getItem("authToken");
            if (refreshToken) {
              const refreshResponse = await fetch("http://127.0.0.1:8000/refresh_token/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
              });
              if (refreshResponse.ok) {
                const newTokenData = await refreshResponse.json();
                sessionStorage.setItem("authToken", newTokenData.access_token);
                setLoading(false);
                console.log("Token refreshed");
                checkToken();
              } else {
                console.log("Token refresh failed");
                navigate("/");
              }
            } else {
              navigate("/");
            }
          } else {
            navigate("/");
          }
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking token:", error);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, [navigate]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    /></div>;
  }

  const handleAppointmentClick = (appointment) => {
    navigate("/MyAppointments/ViewAppointment", { state: { appointment, username, bookingCount: appointments.length } });
  };

  const handleDeleteAppointment = async (id) => {
    try {
      const token = sessionStorage.getItem("authToken");
      const response = await fetch("http://127.0.0.1:8000/api/delete_appointment/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: id }), 
      });
      if (response.ok) {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      } else {
        console.error("Failed to delete appointment");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div>
      <div className="bg-[#1E456A]">
        {/* Menubar */}
        <div className="lg:z-50 flex justify-between md:justify-between lg:px-6 lg:h-24 lg:py-5 lg:w-full text-white ">
          <div className="flex items-center flex-1 ">
            <Link to="/" className="flex-row">
              <span className="lg:text-3xl font-bold mt-1 md:text-xl ">
                Smile Prime
              </span>
            </Link>



            <div className="lg:flex cursor-pointer md:flex md:flex-1 lg:flex-1 items-center justify-end hidden"
              onClick={() => setDropdownOpen((prev) => !prev)}>

              <a
                className="bg-[#00B3DE] text-[#F1F9FC] px-3 py-2 ml-8 md:mr-3 text-[18px] rounded-2xl"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size="20"
                  className="text-sm md:text-base"
                ></FontAwesomeIcon>
                <span className="ml-2">{username}</span>
              </a>

              {/* Dropdown menu  */}

              {dropdownOpen && (
                <div className="absolute text-[#c41a1a] mt-24 right-9 bg-white text-sm text-center py-2 px-2 rounded-lg shadow-md hover:cursor-pointer font-bold">
                  <ul className="flex flex-row p-1">
                    <FiLogOut fontSize={20} />
                    <li className="pl-1" onClick={handleLogout}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="font-semibold text-[31px]">
              Bookings({appointments.length})
            </h2>
          </div>
          <Link
            to="/MakeAppointment"
            className="hover:bg-slate-200 rounded-lg  flex items-center mr-2 p-2"
          >
            <GrFormAdd fontSize={25} />
            <span className="ml-1 pb-[1px] font-semibold pr-1">
              New appointment
            </span>
          </Link>
        </div>
        {/* Booking container list */}
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            onClick={() => handleAppointmentClick(appointment)}
            className="hover:bg-zinc-100 border-solid border-[0.2px] rounded-[16px] flex justify-between flex-row shadow-md mt-4 cursor-pointer"
          >
            <div className="px-6 py-3">
              <h3 className="font-bold text-[32px] text-[#404040]">
                {formatService(appointment.service)}
              </h3>
              <h6 className="text-[10px] mt-[-6px]">
                Created:{" "}
                <span>{formatDateTime(appointment.created_at)}</span>
              </h6>
            </div>

            {/* Trashcan */}
            <div className=" flex justify-center place-items-center pr-6 hover:opacity-50">
              <FaTrash
                color="#AD0202"
                fontSize={20}
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleDeleteAppointment(appointment.id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
