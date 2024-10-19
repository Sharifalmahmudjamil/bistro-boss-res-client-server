import useAuth from "../../../Hooks/useAuth";
import pic from "../../../assets/dashboard/freepik-export-20241013061924RybP.jpeg";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi,</span>
        {user?.displayName ? user.displayName : "Back"}
        <img src={pic} className="mt-3" alt="" />
      </h2>
    </div>
  );
};

export default UserHome;
