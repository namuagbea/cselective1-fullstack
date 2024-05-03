import React, { useState, useEffect } from "react";
import MenuBarV2 from "../../GeneralComponents/MenubarV2.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
              Authorization: `Token ${token}`,
            },
          });
          if (response.ok) {
            const userResponse = await fetch("http://127.0.0.1:8000/user/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
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
                  Authorization: `Token ${token}`,
                },
              }
            );
            const appointmentsData = await appointmentsResponse.json();
            setAppointments(appointmentsData);
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
    return <div>Loading...</div>;
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
          Authorization: `Token ${token}`,
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
        <MenuBarV2 username={username} />
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
