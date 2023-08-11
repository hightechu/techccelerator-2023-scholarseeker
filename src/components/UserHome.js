import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
 
const UserHome = () => {

    // Use this code (lines 9-18) on other pages that you only want authenticated users to see
    const currentUser = auth.currentUser;
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              // No user is logged in. Navigate them to the login page
              navigate("/login");
            }
          });    
    }, [navigate])

    const handleLogout = () => {               
        signOut(auth).then(() => {
            // Sign-out successful. Redirect to landing page
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
 
    return (
        <div className="container-fluid">        
            <h1>Welcome back, {currentUser.email}</h1>
            <p>
                This is your user homepage. This is a good place to put their main feed.
            </p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
 
export default UserHome