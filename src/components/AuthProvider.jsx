// import React from 'react'
// import { createContext, useState } from 'react'
// import { useContext } from 'react'
// import Cookies from 'js-cookie';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const rawUser = Cookies.get('jwt') || localStorage.getItem("typingMasterUser");
//   // const {authUser, setAuthUser} = useState(() => {
//     const [authUser, setAuthUser] = useState(() => {
//     try {
//       return rawUser ? JSON.parse(rawUser) : undefined;
//     } catch (error) {
//       console.log("Error parsing auth user:", error);
//       return undefined;
//     }
//   })
//   return (
//     <>
//       <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
//     </>
//   )
// }

// export const useAuth = () => useContext(AuthContext);



import React from 'react'

function AuthProvider() {
  return (
    <div>
      hello
    </div>
  )
}

export default AuthProvider
