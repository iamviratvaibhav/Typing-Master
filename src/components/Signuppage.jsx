
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';

// function Signuppage() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const password = watch('password');

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post('http://localhost:5000/typing-master/signup', data);
//     //   alert(response.data.message);
//     toast.success(response.data.message);
//     } catch (error) {
//     //   alert(error.response?.data?.message || 'Signup failed');
//     toast.error(error.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center px-4 text-white">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-zinc-950 border border-zinc-700 rounded-2xl shadow-xl p-8 w-full max-w-md transition-transform duration-300 hover:scale-[1.02] transition duration-800"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
//           Create Account
//         </h2>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="block text-sm text-zinc-300 mb-1">Full Name</label>
//           <input
//             {...register('name', { required: 'Name is required' })}
//             type="text"
//             placeholder="Enter your name"
//             className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
//           />
//           {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-sm text-zinc-300 mb-1">Email</label>
//           <input
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: 'Enter a valid email',
//               },
//             })}
//             type="email"
//             placeholder="example@mail.com"
//             className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
//           />
//           {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block text-sm text-zinc-300 mb-1">Password</label>
//           <input
//             {...register('password', {
//               required: 'Password is required',
//               minLength: { value: 8, message: 'Minimum 8 characters' },
//               pattern: {
//                 value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
//                 message: 'Must include upper, lower, and number',
//               },
//             })}
//             type="password"
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
//           />
//           {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <label className="block text-sm text-zinc-300 mb-1">Confirm Password</label>
//           <input
//             {...register('confirmPassword', {
//               required: 'Confirm password is required',
//               validate: (value) => value === password || 'Passwords do not match',
//             })}
//             type="password"
//             placeholder="Re-enter password"
//             className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
//           />
//           {errors.confirmPassword && (
//             <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-md shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
//         >
//           Sign Up
//         </button>

//           <p> Have any Account?{""}
//             <Link to={"/login"} className='font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500'>{""}
//               Login
//             </Link>
//           </p>
//       </form>
//     </div>
//   );
// }

// export default Signuppage;
