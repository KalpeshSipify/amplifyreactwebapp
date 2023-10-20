import { useState } from "react";
import verficationSytle from "./verification.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const Verification = () => {
  const [formdata, setformdata] = useState({
    Verification: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state;

  const handleonchange = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(username, formdata.Verification);
      setformdata({
        Verification: "",
      });

      navigate("/");
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <>
      <div className={verficationSytle.mainContainer}>
        <div className={verficationSytle.form}>
          <div className={verficationSytle.headingdiv}>
            <p>Check Your Mail And Verify Account.</p>
          </div>
          <div className={verficationSytle.logininput}>
            <form onSubmit={handleOnSubmit}>
              <input
                type="Text"
                placeholder="Enter Verification Code"
                name="Verification"
                value={verficationSytle.email}
                onChange={handleonchange}
                required
              />
              <div className={verficationSytle.buttondiv}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
