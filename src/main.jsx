// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// -----------------------



// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <StrictMode>
//       <GoogleOAuthProvider clientId="18485793166-k46ec4399eo1jiog4359jd68g0vlsprj.apps.googleusercontent.com">

//       <App />
//     </GoogleOAuthProvider>
//   </StrictMode>
// );
// -----------------------------


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById('root'));
const clientId=import.meta.env.CLIENT_ID;
root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);


