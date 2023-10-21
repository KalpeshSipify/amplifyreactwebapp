import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import formstyle from "./loginform.module.css";
import { useContext, useState } from "react";
import { UserAuthcontext } from "../../Context/Userauth.context";
// import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

const LoginForm = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigate();
  const { setuser } = useContext(UserAuthcontext);
  const handleonchange = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleonsubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(formdata.email, formdata.password);
      setuser(true);
      navigation("/userdetails");
    } catch (err) {
      console.log({ err });
    }
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const Response = await Auth.federatedSignIn({
  //       provider: CognitoHostedUIIdentityProvider.Google,
  //     });

  //     console.log("resp", Response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      <div className={formstyle.form}>
        <div className={formstyle.headingdiv}>
          <p>I Already Have An Account</p>
        </div>
        <div className={formstyle.logininput}>
          <form onSubmit={handleonsubmit}>
            <input
              type="Email"
              placeholder="Enter Your Email.."
              name="email"
              value={formdata.email}
              onChange={handleonchange}
              required
            />
            <input
              type="Password"
              placeholder="Enter Your Password.."
              name="password"
              value={formdata.password}
              onChange={handleonchange}
              required
            />
            <div className={formstyle.buttondiv}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        {/* <p>OR</p>
        <div className={formstyle.googleloginbutton}>
          <button onClick={handleGoogleSignIn}>Open Google</button>
        </div> */}
      </div>
    </>
  );
};

export default LoginForm;
