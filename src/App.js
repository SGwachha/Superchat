import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Navbar from "./component/Navbar";
import ChatBox from "./component/ChatBox";
import Welcome from "./component/Welcome";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;