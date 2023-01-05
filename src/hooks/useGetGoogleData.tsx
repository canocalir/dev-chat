import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const useGetGoogleData = () => {
  const [user] = useAuthState(auth);
  const userImage: any = user?.photoURL;
  const userName: any = user?.displayName;
  return {userImage, userName};
};

export default useGetGoogleData;
