import { useState, useRef } from "react";
import { signUp } from "firebase_setup/firebase";
//import { namedQuery } from "firebase/firestore";
import Dropdown from 'react-bootstrap/Dropdown';

const DatePicker = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
    </div>
  );
};


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [startDate, setStartDate] = useState(new Date());
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
            type="Firt Name"
            name="First Name"
            value={firstname}
            placeholder="First Name"
            required
            onChange={(e) => setFirstname(e.target.value)}
            
          />

          <input
            type="Last Name"
            name="Last Name"
            value={lastname}
            placeholder="Last Name"
            required
            onChange={(e) => setLastname(e.target.value)}
          />

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Create a Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
<p> </p>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        How do you identify?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Female</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Male</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

<p> </p>
          <button type="submit">Sign Up</button>
        </form>
<p> </p>
        <p>
          Already registered? <a href="/login">Login here.</a>
        </p>
      </div>

    </>
  );
};

export default Signup;