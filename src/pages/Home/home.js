import ChatBox from "../../components/ChatBox";
import Welcome from "../../components/Welcome";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function Home(){
  const [user] = useAuthState(auth);

    return(
        <>
        
        {!user ? (
        <Welcome/>
      ) : (
        <>
          <ChatBox />
        </>
      )}
        </>
    )
}

export default Home;