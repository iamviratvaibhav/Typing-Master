
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

function UserProfile() {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    profession: '',
    email: '',
    image: null
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {

    const fetchEmail = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/getUserEmailId`, {
          withCredentials: true,
        })
        console.log("user email", res.data.user.email);
        setUserData(prev => ({ ...prev, email: res.data.user.email }))
        setUserData(prev => ({ ...prev, name: res.data.user.name || " " }));
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchEmail();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setUserData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const userId=userData._id;
  //   try {
  //     const formData = new FormData();
  //     formData.append("firstname", userData.name);
  //     formData.append("lastname", userData.lastname);
  //     formData.append("profession", userData.profession);
  //     formData.append("image", userData.image);

  //     const { data } = await axios.put(`${backendUrl}/api/updateUserProfile/${userId}`, formData, {
  //       withCredentials: true,
  //     });

  //     if (data.success) {
  //       console.log("Profile updated successfully", data);
  //       toast.success("Profile saved successfully!");
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error saving profile:", error);
  //     toast.error("Failed to save profile");
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = userData._id;

    try {
      const formData = new FormData();
      formData.append("firstName", userData.name);           // ✅ match backend
      formData.append("lastName", userData.lastname);
      formData.append("profession", userData.profession);
      formData.append("profileImage", userData.image);       // ✅ match multer field name

      const { data } = await axios.put(
        `${backendUrl}/api/updateUserProfile/${userId}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        console.log("Profile updated successfully", data);
        toast.success("Profile saved successfully!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to save profile");
    }
  };


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email (Read-only)</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label>Profession</label>
          <input
            type="text"
            name="profession"
            value={userData.profession}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label>Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
