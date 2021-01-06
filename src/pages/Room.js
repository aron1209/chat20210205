import React from "react";
import { auth } from "../config/firebase";

const Room = () => {
  return (
    <div>
      <h1>Room</h1>
      <button onClick={() => auth.signOut()}>ログアウト</button>
    </div>
  );
};

export default Room;
