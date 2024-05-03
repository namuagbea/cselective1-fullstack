import React from "react";
import MenubarV2 from "../../GeneralComponents/MenubarV2.jsx";
import ClinicPictureDark from "../../../media/ClinicPictureDark.png";
import Footer from "../../GeneralComponents/Footer.jsx";
import "./MakeAppointment.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ThreeDots} from '@agney/react-loading';

const MyBooking = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  


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
            console.log(data + " this is the username");
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
    return <div className="flex flex-col place-content-center items-center">
      
        <ThreeDots/>
        <span>please wait...</span>
      
    </div>;
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
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response.data);
      navigate('/AppointmentConfirmation');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  if (loading) {
    return (
      <div>helo.</div>
      
    )
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${ClinicPictureDark})` }}
      >
        <div className="bg-[#224F79]">
          <MenubarV2 username={username} />
        </div>

        <div className="relative top-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold">Welcome to Smile Prime Online</h1>
          <h1 className="text-4xl font-bold">Booking System</h1>
          <p className="mt-2 text-lg">
            Please fill up necessary information below and
          </p>
          <p className="text-lg">confirm your appointment!</p>
        </div>

        <div className="relative top-full left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg p-8 w-3/4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Book Appointment
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mx-5">
                <h3 className="font-bold mb-2">Type of Service</h3>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2 text-gray-400"
                >
                  <option value="">Select a service</option>
                  <option value="metalCeramicBraces">Metal & Ceramic Braces</option>
                  <option value="teethWhitening">Teeth Whitening</option>
                  <option value="anteriorFixedVeneers">Anterior Fixed Bridge & Veneers</option>
                  <option value="toothMolarExtraction">Tooth/Molar Extraction</option>
                  <option value="oralProphylaxis">Oral Prophylaxis</option>
                  <option value="toothRestoration">Tooth Restoration</option>
                  <option value="diastemaClosure">Diastema Closure</option>
                  <option value="orthodonticTreatment">Orthodontic Treatment</option>
                </select>

                <h3 className="font-bold mt-4 mb-2 ">Dentist</h3>
                <select
                  name="dentist"
                  value={formData.dentist}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2 text-gray-400"
                >
                  <option value="">Select a dentist</option>
                  <option value="karlSubido">
                    Dr. Karl Nigel Subido
                  </option>
                  <option value="kristinaUy">Dr. Kristinna Uy</option>

                  <option value="robertJohnsonJr">
                    Dr. Robert Johnson Jr.
                  </option>
                  <option value="victoriaAshworth">
                    Dr. Victoria Ashworth
                  </option>
                </select>

                <h3 className="font-bold mt-4 mb-2">Date</h3>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  className="w-full rounded-lg border p-2 text-gray-400"
                />
              
                <h3 className="font-bold mt-4 mb-2">Pick your time</h3>

                  <ul id="timetable" className="grid w-full grid-cols-3 gap-2 mb-5">
                    <li>
                      <input type="radio" id="10-am" defaultValue className="hidden peer" name="timetable" />
                    <label htmlFor="10-am" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        10:00 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="10-30-am" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="10-30-am" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        10:30 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="11-am" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="11-am" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        11:00 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="11-30-am" defaultValue className="hidden peer" name="timetable" />
                    <label htmlFor="11-30-am" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        11:30 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="12-am" defaultValue className="hidden peer" name="timetable" defaultChecked />
                      <label htmlFor="12-am" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        12:00 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="12-30-pm" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="12-30-pm" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        12:30 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="1-pm" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="1-pm" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        01:00 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="1-30-pm" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="1-30-pm" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        01:30 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="2-pm" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="2-pm" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        02:00 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="2-30-pm" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="2-30-pm" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        02:30 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="3-pm" defaultValue className="hidden peer" name="timetable" />
                      <label htmlFor="3-pm" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        03:00 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="3-30-pm" defaultValue className="hidden peer" name="timetable" />
                    <label htmlFor="3-30-pm" className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-black dark:hover:text-white bg-white dark:bg-zinc-300 border rounded-lg cursor-pointer text-black border-gray-200 dark:border-gray-500 dark:hover:border-gray-600 dark:peer-checked:text-white peer-checked:bg-blue-50 peer-checked:text-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:peer-checked:bg-gray-500">
                        03:30 PM
                      </label>
                    </li>
                  </ul>
                  



              </div>

              <div className="mx-5">
                <h3 className="font-bold mb-2">Personal Information</h3>
                <input
                  name="first_name"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-lg border p-2 mb-2"
                />
                <input
                  name="last_name"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-lg border p-2 mb-2"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border p-2 mb-2"
                />
                <input
                  name="contact_number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full rounded-lg border p-2 mb-2"
                />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full rounded-lg border p-2 mb-2"
                ></textarea>
                <textarea
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  placeholder="Other"
                  className="w-full rounded-lg border p-2 mb-2"
                ></textarea>

                <div className="flex justify-end mt-6">
                  <button className="bg-red-500 text-white px-6 py-2 rounded-2xl mr-4">
                    Cancel
                  </button>
                  <div
                    type="submit"
                    className="bg-[#00B3DE] text-white px-6 py-2 rounded-2xl"
                  >
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;