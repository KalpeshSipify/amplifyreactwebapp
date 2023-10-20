import { useContext, useEffect } from "react";
import userdetailsstyle from "./userdetails.module.css";
import { UserAuthcontext } from "../../Context/Userauth.context";
import { Auth } from "aws-amplify";

const UserDetails = () => {
  const { userprofile, setuserprofile } = useContext(UserAuthcontext);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setuserprofile(user.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <>
      <div className={userdetailsstyle.maincontainer}>
        <div>
          <h3>Welcome: {userprofile.name}</h3>
          {userprofile.picture ? (
            <img src={userprofile.picture} alt="Loading image..." />
          ) : (
            <img
              src={`https://robohash.org/${userprofile.name}?set=set2`}
              alt="loading img"
            />
          )}

          <p>Name: {userprofile.name}</p>
          <br />
          <p>UserEmail: {userprofile.email}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
