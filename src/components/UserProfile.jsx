import React, { use, useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import assets from '../assets/assets.js'

function UserProfile() {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const backendUrl = import.meta.env.BACKEND_URL

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/getAllUsers');
      if (data.success) {
        setUserData(data.user)
      }
      else {
        console.log(data.message);
        toast(data.message);
      }
    } catch (error) {
      console.log(error);

    }
  }

  const updateUser = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('firstname', userData.firstname)
    formData.append('lastname', userData.lastname)
    formData.append('profession', userData.profession)
    formData.append('about', userData.about)

    const {data} = await axios.post(backendUrl + '/api/updateUser', formData);
    if(data.success){
      toast.success(data.message);
      await getUserData();
      setEdit(false);
      setImage(false);
    }else{
      toast.error(data.message);
    }
   
  }

  return (
    // userData && (
    //   <div className='bg-red-500'>
    //     {edit?(
    //       <label htmlFor='image'>
    //         <div>
    //           <img 
    //             src={image ? URL.createObjectURL(image): userData.image}
    //             alt=''
    //             className="w-36 rounded opacity-75"

    //           />
    //           <img 
    //             src={image ? "" :assets.update_icon}
    //             alt=''
    //             className="w-10 absolute bottom-12 right-12"
    //           />
    //         </div>
    //         <input 
    //            onChange={(e)=>setImage(e.target.files[0])}
    //            type='file'
    //            id='image'
    //            hidden
    //         />
    //       </label>
          
    //     ):(
    //       <img className='w-36 rounded' src={userData.image} alt='' />
    //     )}
    //     { edit ? (
    //       <input 
    //       type='text'
    //       className='bg-zinc-900 text-white p-2 rounded'
    //       value={userData.firstname}
    //       onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
    //       />
      
    //     ) : (
    //       <p className='font medium text-3xl text-neutral-800 mt-4'>{userData.firstname}</p>
    //     )}
    //   </div>
    // )
    
  userData && (
      <div className="max-w-lg flex flex-col gap-2 text-md">
        {edit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer">
              <img
                src={image ? URL.createObjectURL(image) : userData.image}
                alt=""
                className="w-36 rounded opacity-75"
              />
              <img
                src={image ? "" : assets.upload_icon}
                alt=""
                className="w-10 absolute bottom-12 right-12"
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img className="w-36 rounded" src={userData.image} alt="" />
        )}
        {edit ? (
          <input
            type="text"
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-4 outline-primary"
            value={userData.name}
            spellCheck={false}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-800 mt-4">
            {userData.name}
          </p>
        )}
        <hr className="bg-zinc-400 h-[1px] border-none" />
        <div>
          <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Email Id:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {edit ? (
              <input
                type="tel"
                className="bg-gray-100 max-w-52 outline-primary"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-500">{userData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {edit ? (
              <p>
                <input
                  type="text"
                  className="bg-gray-50 outline-primary"
                  value={userData.address.line1}
                  spellCheck={false}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <br />
                <input
                  type="text"
                  value={userData.address.line2}
                  className="bg-gray-50 outline-primary"
                  spellCheck={false}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </p>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Gender:</p>
            {edit ? (
              <select
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className="max-w-20 bg-gray-100 outline-primary"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {edit ? (
              <input
                type="date"
                value={userData.dob}
                className="max-w-28 bg-gray-100 outline-primary"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>
        <div className="mt-10">
          {edit ? (
            <button
              className="border border-primary px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all duration-300 flex items-center justify-center"
              onClick={updateUserProfileData}
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin text-xl" />
              ) : (
                "Save Information"
              )}
            </button>
          ) : (
            <button
              className="border border-primary px-8 py-2 rounded-full hover:text-white hover:bg-primary transition-all duration-300"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    )
  
  )
}

export default UserProfile
