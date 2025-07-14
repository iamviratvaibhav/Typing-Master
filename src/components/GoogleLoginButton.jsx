import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginButton() {
  return (
    <GoogleOAuthProvider clientId="18485793166-05d0e0p16b94ncvfkamf20gn9iorh0kv.apps.googleusercontent.com">
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
