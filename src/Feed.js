import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import CreateIcon from "@mui/icons-material/Create";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__post">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5103AQGA8ISR0RmZMA/profile-displayphoto-shrink_200_200/0/1516438624380?e=1674691200&v=beta&t=PddbQv05ehhskgrZdIMcT7u1MqjWu30QR3rPot7xkqU"
            alt="profile"
          />
          <form className="feed__input">
            <CreateIcon />
            <input
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SmartDisplayIcon} title="Video" color="#5F9B41" />
          <InputOption
            Icon={EventAvailableIcon}
            title="Event"
            color="#C37D22"
          />
          <InputOption
            Icon={NewspaperIcon}
            title="Write article"
            color="#E16745"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, photoUrl, message, description } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
