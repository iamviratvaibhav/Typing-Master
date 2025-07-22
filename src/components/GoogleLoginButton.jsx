import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginButton() {
  return (
    <GoogleOAuthProvider clientId="18485793166-k46ec4399eo1jiog4359jd68g0vlsprj.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          // You can verify token on backend (optional)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
