import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo from 'logo.png';

function App() {

  const navigate = useNavigate();
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is logged in
            navigate("/home");
          }
        });    
  }, [navigate])
 
  // HTML rendered here
  return (

    <div className="container-fluid background font"> 
      <img src={logo}alt="Scholarship Seekr Logo"
        width="100"
        height="100"
       ></img>

      <h1>Scholar Seeker</h1>
      <p>
        Scholarships at your  <div className="sub"> fingertips
        </div>
      </p>
   
      <div id="Login">

      </div>

      <div class="d-grid gap-4 col-5 mx-auto">

        <a href="/login" class="btn btn-primary" tabindex="1" role="button" aria-disabled="false">Login</a>
        <a href="/signup" class="btn btn-primary" tabindex="1" role="button" aria-disabled="false">Signup</a>
      </div>
    </div>
  
  );
}
 
export default App;
