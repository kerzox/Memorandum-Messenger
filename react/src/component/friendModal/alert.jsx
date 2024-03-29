import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../button";
import { Subtitle } from "../text/TextComponent";

const NewFriendAlert = ({ show, request, update, profile, socket }) => {
  const [visible, setVisible] = useState(show);
  console.log(show);

  const accept = async (username) => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/users/friend/${username}/accept`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender_id: profile.user.id,
          }),
        }
      );

      const data = await res.json();
      if (res.status === 201) {
        setVisible(false);

        update();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setVisible(show);
  }, []);

  return visible ? (
    <div
      className="popupAlert"
      style={{
        padding: 25,
        backgroundColor: "#2196F3",
        color: "white",
        transition: "opacity 0.6s",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <strong>{request.username} </strong>
          wants to be your friend.
        </div>
        <Button
          onClick={() => setVisible(false)}
          style={{
            backgroundColor: "transparent",
            width: 15,
            cursor: "pointer",
            color: "white",
          }}
        >
          &times;
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => accept(request.username)}
          className="submitBtn"
          style={{
            width: "50%",
            cursor: "pointer",
            color: "white",
          }}
        >
          Accept?
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NewFriendAlert;
