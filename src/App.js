import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
   <div className="container-fluid background">
       <h1>Scholar Seeker</h1>
       <p>
         Scholarships at your fingertips
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
