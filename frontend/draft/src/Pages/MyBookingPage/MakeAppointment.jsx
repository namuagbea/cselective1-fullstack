import React from "react";
import ClinicPictureDark from "../../../media/ClinicPictureDark.png";
import Footer from "../../GeneralComponents/Footer.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useFormAction } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FiLogOut } from "react-icons/fi";

const MyBooking = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);//for empty inputs

  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    // Call the parent function to update the isLoggedIn state
    window.location.reload();
  };

  const [formData, setFormData] = useState({
    service: "",
    dentist: "",
    date: "",
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    address: "",
    other: "",
  });

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
            setIsLoggedIn(true);
            const userResponse = await fetch("http://127.0.0.1:8000/user/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
            const userData = await userResponse.json();
            setUsername(userData);
          } else if (response.status === 401) {
            console.log("Token expired, trying to refresh it...");
            setLoading(true);
            const refreshToken = sessionStorage.getItem("refreshToken");
            if (refreshToken) {
              const refreshResponse = await fetch("http://127.0.0.1:8000/refresh_token/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
              });
              console.log("Token fetched");
              if (refreshResponse.ok) {
                const newTokenData = await refreshResponse.json();
                sessionStorage.setItem("authToken", newTokenData.access_token);
                console.log("Token refreshed");
                setLoading(false);
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
        setIsLoggedIn(false);
      } finally {
        setLoading(false); 
      }
    };
  
    checkToken();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
   

    e.preventDefault();
    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create_appointments/",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      navigate("/AppointmentConfirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    if (!service || !dentist || !first_name || !last_name || !email || !contact_number) {
      setErrorMessage("Please fill up all required fields.");
      return;
    }
  };

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

  return (
    <div className="relative min-h-screen">
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${ClinicPictureDark})` }}
      >
        <div className="bg-[#224F79]">
          {/* Menubar */}
          <div className="lg:z-50 flex justify-between md:justify-between lg:px-6 lg:h-24 lg:py-5 lg:w-full text-white ">
            <div className="flex items-center flex-1 ">
              <Link to="/" className="flex-row">
                <span className="lg:text-3xl font-bold mt-1 md:text-xl ">
                  Smile Prime
                </span>
              </Link>

              <div
                className="lg:flex cursor-pointer md:flex md:flex-1 lg:flex-1 items-center justify-end hidden"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <Link
                  className="text-[2.5vh] font-semibold "
                  to="/MyAppointments"
                  
                >
                  {isLoggedIn && <span className="hover:border-b hover:border-white duration-100">My Bookings</span>}
                  
                </Link>

                <a className="bg-[#00B3DE] text-[#F1F9FC] px-3 py-2 ml-8 md:mr-3 text-[18px] rounded-2xl">
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

        <div className="relative top-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold">Welcome to Smile Prime Online</h1>
          <h1 className="text-4xl font-bold">Booking System</h1>
          <p className="mt-2 text-lg">
            Please fill up necessary information below and
          </p>
          <p className="text-lg">confirm your appointment!</p>
        </div>

        <div className="flex justify-center">
          <div className="pt-16 mx-2 bg-white bg-opacity-75 rounded-lg p-8 w-[80vw]">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Book Appointment
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="pt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="mx-5">
                {/* Type of Service */}
                <h3 className="font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79]">Type of Service</h3>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2 text-gray-400"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="metalCeramicBraces">
                    Metal & Ceramic Braces
                  </option>
                  <option value="teethWhitening">Teeth Whitening</option>
                  <option value="anteriorFixedVeneers">
                    Anterior Fixed Bridge & Veneers
                  </option>
                  <option value="toothMolarExtraction">
                    Tooth/Molar Extraction
                  </option>
                  <option value="oralProphylaxis">Oral Prophylaxis</option>
                  <option value="toothRestoration">Tooth Restoration</option>
                  <option value="diastemaClosure">Diastema Closure</option>
                  <option value="orthodonticTreatment">
                    Orthodontic Treatment
                  </option>
                </select>

                {/* Select Dentist */}
                <h3 className="font-bold mt-4 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79] ">Dentist</h3>
                <select
                  name="dentist"
                  value={formData.dentist}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2 text-gray-400"
                  required
                >
                  <option value="">Select a dentist</option>
                  <option value="karlSubido">Dr. Karl Nigel Subido</option>
                  <option value="kristinaUy">Dr. Kristinna Uy</option>

                  <option value="robertJohnsonJr">
                    Dr. Robert Johnson Jr.
                  </option>
                  <option value="victoriaAshworth">
                    Dr. Victoria Ashworth
                  </option>
                </select>

                <h3 className="font-bold mt-4 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79]">Date</h3>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  className="w-full rounded-lg border p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#224F79]"
                  required
                />


                {/* Select Time */}
                <h3 className="font-bold mt-4 mb-2">Pick your time</h3>
                <ul
                  id="timetable"
                  className="grid w-full grid-cols-3 gap-2 mb-5"
                  aria-required
                >
                  <li>
                    <input
                      type="radio"
                      id="8-30-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="8-30-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      8:30 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="9-00-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="9-00-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      9:00 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="9-30-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="9-30-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      9:30 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="10-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="10-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      10:00 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="10-30-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="10-30-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      10:30 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="11-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="11-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      11:00 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="11-30-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="11-30-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      11:30 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="12-am"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                      defaultChecked
                    />
                    <label
                      htmlFor="12-am"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      12:00 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="12-30-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="12-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      12:30 PM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="1-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="1-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      01:00 PM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="1-30-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="1-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      01:30 PM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="2-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="2-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      02:00 PM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="2-30-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="2-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      02:30 PM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="3-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="3-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      03:00 PM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="3-30-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="3-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      03:30 PM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="4-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="4-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      4:00 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="4-30-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="4-30-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      4:30 AM
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="5-pm"
                      defaultValue
                      className="hidden peer"
                      name="timetable"
                    />
                    <label
                      htmlFor="5-pm"
                      className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-100 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500"
                    >
                      5:00 AM
                    </label>
                  </li>
                </ul>
              </div>

              <div className="mx-5">
                <h3 className="font-bold mb-2">Personal Information</h3>
                {/* Firstname */}
                <input
                  name="first_name"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-lg border p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79]"
                  required
                />
                {/* Lastname */}
                <input
                  name="last_name"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-lg border p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79]"
                  required
                />
                {/* Email */}
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79]"
                  required
                />
                {/* Contact Number */}
                <input
                  name="contact_number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full rounded-lg border p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79] "
                  required
                />
                {/* Address */}
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full rounded-lg h-28 border p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79]"
                ></textarea>
                {/* Other */}
                <textarea
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  placeholder="Other"
                  className="w-full h-20 rounded-lg border p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#224F79]"
                ></textarea>

                <div>
                  {errorMessage && (
                    <div className="text-sm text-[#d56751] font-semibold flex justify-center">
                      Please fill necessary inputs
                    </div>
                  )}
                </div>

                <div className="flex justify-end mt-6">
                  <Link
                    to="/MyAppointments"
                    className="bg-red-500 text-white px-6 py-2 rounded-2xl mr-4"
                  >
                    Cancel
                  </Link>

                  <button
                    type="submit"
                    className="bg-[#00B3DE] text-white px-6 py-2 rounded-2xl"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div></div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
