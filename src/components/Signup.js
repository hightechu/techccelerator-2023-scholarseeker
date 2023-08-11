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

      <div className="container-fluid">
        <h2>Sign Up</h2>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          Already registered? <a href="/login">Login</a>
        </p>
      </div>

    </>
  );
};

export default Signup;