import { useState } from "react";
import { signIn } from "firebase_setup/firebase";
import { useNavigate } from 'react-router-dom';

// Login a user and redirect them to the user homepage
const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await signIn(email, password);
    if (res.error) seterror(res.error);
    navigate("/applicationpage");
  };
  return (              
    <>
      <div className="container-fluid">
       
              <h1>Login</h1>
              {error ? <div>{error}</div> : null}
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
              </form>
              <br>
              </br>
              <p>
                Don't have an account? <a href="/signup">Sign up here.</a>
              </p>
        
      </div>
      
    </>
  );
};
export default Login;

// <div className="container-fluid">
//       <div class="d-grid gap-2 col-6 mx-auto">
//   <button class="btn btn-primary" type="button">LOGIN</button>
  
// </div>
//               <h1>LOGIN</h1>
//               {error ? <div>{error}</div> : null}
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="email"
//                   value={email}
//                   placeholder="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <input type="LOGIN" value="LOGIN" />
//               </form>
//               <br>
//               </br>
            
//                  <a href="/signup">Forgot Password?</a>
              