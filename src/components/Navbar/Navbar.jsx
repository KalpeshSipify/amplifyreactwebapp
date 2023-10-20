import { useContext } from "react";
import navbarstyle from "./navbar.module.css";
import { UserAuthcontext } from "../../Context/Userauth.context";
import { Auth } from "aws-amplify";

const Navbar = () => {
  const { user, setuser, setuserprofile } = useContext(UserAuthcontext);

  // log out function to log the user out of google and set the profile array to null
  const logOut = async () => {
    try {
      await Auth.signOut();
      setuser(false);
      setuserprofile(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={navbarstyle.maincontainer}>
      <div>
        <div className={navbarstyle.logodiv}>
          <p>WorkDays</p>
        </div>
        <div className={navbarstyle.loginbuttondiv}>
          {user ? (
            <button onClick={logOut}>SIGNOUT</button>
          ) : (
            <button>SIGNIN</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
