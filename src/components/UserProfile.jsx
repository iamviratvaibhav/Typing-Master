// import React from "react";
// import { Mail, User } from "lucide-react"; // modern icons

// function UserProfile() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
//         <h2 className="text-2xl font-bold text-gray-800 text-center">
//           Complete Your Profile
//         </h2>
//         <p className="text-gray-500 text-center text-sm">
//           Please fill in your details below
//         </p>

//         {/* Full Name */}
//         <div className="relative">
//           <input
//             type="text"
//             className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
//             placeholder="Full Name"
//             required
//           />
//           <label
//             className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
//           >
//             Full Name
//           </label>
//         </div>

//         {/* Username */}
//         <div className="relative flex items-center">
//           <User className="absolute left-3 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             className="peer w-full border border-gray-300 rounded-lg pl-10 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
//             placeholder="Username"
//             pattern="[A-Za-z][A-Za-z0-9\-]*"
//             minLength="3"
//             maxLength="30"
//             title="Only letters, numbers, or dash"
//             required
//           />
//           <label
//             className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
//           >
//             Username
//           </label>
//         </div>
//         <p className="text-xs text-gray-500">
//           Must be 3–30 characters (letters, numbers, or dash)
//         </p>

//         {/* Email */}
//         <div className="relative flex items-center">
//           <Mail className="absolute left-3 text-gray-400 w-5 h-5" />
//           <input
//             type="email"
//             className="peer w-full border border-gray-300 rounded-lg pl-10 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
//             placeholder="Email"
//             required
//           />
//           <label
//             className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
//           >
//             Email
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
//         >
//           Save Profile
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
// // 



import React, { useEffect, useState } from "react";
import { Mail, User } from "lucide-react"; // modern icons
import Navbar from './Navbar';
import axios from "axios";

function UserProfile() {

  const [user, setUser] = useState({
    name: "",
    email: '',
    image: '',
    username: '',
  });
  const userId=localStorage.getItem('userId');
  const backendUrl=import.meta.env.VITE_BACKEND_URL;
  useEffect(()=>{
    if(userId){
      axios.get(`${backendUrl}/api/get-userEmail/${userId}`)
    }
  }, [userId])

  const [fileName, setFileName] = useState("");
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center">
      {/* Top Navbar with Logo */}
      <Navbar />
      {/* Form Card */}

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 mt-20 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-2">
          Complete Your Profile
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Let’s personalize your TypeFast experience
        </p>

        <div className="flex flex-col items-center border-2 mb-4 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-400 transition cursor-pointer">
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center space-y-2 cursor-pointer"
          >
            <svg
              className="h-10 w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm text-gray-600">
              {fileName ? fileName : "Click to upload or drag & drop"}
            </span>
          </label>
        </div>

        <form className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              className="peer w-full bg-transparent border border-gray-700 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 focus:outline-none"
              placeholder="Full Name"
              required
            />
            <label className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-400">
              Full Name
            </label>
          </div>

          {/* Username */}
          <div className="relative flex items-center">
            <User className="absolute left-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              className="peer w-full bg-transparent border border-gray-700 rounded-lg pl-10 pt-5 pb-2 text-white placeholder-transparent focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 focus:outline-none"
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              required
            />
            <label className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-400">
              Username
            </label>
          </div>
          {/* <p className="text-xs text-gray-500">
            Must be 3–30 characters (letters, numbers, or dash)
          </p> */}

          {/* Email */}
          <div className="relative flex items-center">
            <Mail className="absolute left-3 text-gray-500 w-5 h-5" />
            <input
              type="email"
              className="peer w-full bg-transparent border border-gray-700 rounded-lg pl-10 pt-5 pb-2 text-white placeholder-transparent focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 focus:outline-none"
              placeholder="Email"
              required
            />
            <label className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-400"
            input="email"
            value={user.email || ""}
            readOnly

            >
              Email
            </label>
           
          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-black py-3 rounded-lg font-medium hover:bg-teal-400 transition-all shadow-md hover:shadow-lg"
          >
            Save Profile
          </button>

        </form>
      </div>
    </div>


  );
}

export default UserProfile;
