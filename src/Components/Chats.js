import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
//components
import Navbar from "./Navbar";
//Context
import { AuthContext } from "../contexts/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios.get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "c6c382be-23dd-43b9-b132-ef6db68bddaa",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getfile(user.photoURL)
        .then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "1e16231c-2a9e-49d9-84c4-6f9e462698c0",
              },
            })
            .then(() => setLoading(false))
            // .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getfile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image.jpeg" });
  };
  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };
  if (!user || loading) return "Loading...";
  return (
    <div>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 100px)"
        projectID="c6c382be-23dd-43b9-b132-ef6db68bddaa"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
