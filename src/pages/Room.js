import React, { useState, useEffect, useContext } from "react";
import { auth, firestore } from "../config/firebase";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthService";

const Room = () => {
  const { register, handleSubmit, reset } = useForm();
  const [messages, setMessage] = useState([]);
  // const [value, setValue] = useState("");

  useEffect(() => {
    firestore
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMessage(messages);
      });
  }, []);
  console.log(messages);

  const user = useContext(AuthContext);
  console.log(user);
  const submit = ({ message }) => {
    firestore.collection("messages").add({
      content: message,
      user: user.displayName,
      timestamp: new Date(),
    });
    reset();
  };

  return (
    <div>
      <h1>Room</h1>
      <ul>
        {messages
          .map((message) => {
            return (
              <li key={message.id}>
                {message.user} : {message.content}
              </li>
            );
          })
          .sort()}
      </ul>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type='text'
          ref={register({ required: true })}
          name='message'
          id='message'></input>
        <button type='submit'>送信</button>
      </form>
      <button onClick={() => auth.signOut()}>ログアウト</button>
    </div>
  );
};

export default Room;
