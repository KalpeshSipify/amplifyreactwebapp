import { useNavigate } from "react-router-dom";
import signupstyle from "./signup.module.css";
import { useContext, useState } from "react";
import { UserAuthcontext } from "../../Context/Userauth.context";
import { Auth } from "aws-amplify";
import { Verificationcontext } from "../../Context/VerficationContext";

const SignUp = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
  });

  const { setisSignUp } = useContext(Verificationcontext);
  const navigation = useNavigate();
  const handleonchange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleonsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Auth.signUp({
        username: formdata.email,
        email: formdata.email,
        password: formdata.password,
        attributes: {
          name: formdata.name,
        },
      });
      setisSignUp(true);
      const username = response.user.username;
      navigation("/verification", { state: { username: username } });
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <>
      <div className={signupstyle.form}>
        <div className={signupstyle.headingdiv}>
          <p>I Do Not Have An Account</p>
        </div>
        <div className={signupstyle.logininput}>
          <form onSubmit={handleonsubmit}>
            <input
              type="Text"
              value={formdata.name}
              placeholder="Enter Your Name.."
              name="name"
              onChange={handleonchange}
              required
            />
            <input
              type="Email"
              value={formdata.email}
              placeholder="Enter Your Email.."
              name="email"
              onChange={handleonchange}
              required
            />
            <input
              type="Password"
              value={formdata.password}
              placeholder="Enter Your Password.."
              name="password"
              onChange={handleonchange}
              required
            />
            <input
              type="Password"
              value={formdata.conpassword}
              placeholder="Enter Your Con-Password.."
              name="conpassword"
              onChange={handleonchange}
              required
            />
            <div className={signupstyle.buttondiv}>
              <button type="submit">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
