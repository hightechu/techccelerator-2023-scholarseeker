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
    <div className="container-fluid">
        <h1>Hello Close Friends!</h1>
        <p>
          This is Marcus here and I don't know what I'm doing :))
        </p>
        <p>
          New here? <a href="/signup">Click here if you're delulu</a> if you're not new =  <a href="/login">Make sure to login here!</a>
        </p>
    </div>
  );
}
 
export default App;
