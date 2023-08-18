import { useState } from "react";
import { signUp } from "firebase_setup/firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      setEmail("");
      setPassword("");
      const res = await signUp(email, password);
      if (res.error) seterror(res.error)

  };

  return (
    <> 

      <div className="container-fluid grad1">
        <h2>Your Saved Scholarships</h2>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder=""
            required
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <p></p>
      
          <button type="submit">Done</button>
        </form>
        <p>
        
        </p>
        
      </div>

    </>
  );
};

export default Signup;