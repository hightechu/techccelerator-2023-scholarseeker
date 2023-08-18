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
       
        <h2>Scholarship Search Engine!</h2>

        <form class="searchbutton">
          <input type="text" placeholder="Search.." name="search2"></input><button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>

    </>
  );
};

export default Signup;