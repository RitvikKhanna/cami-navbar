import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
export default function Chat() {
  return (
    <>
      <h1 className="chat">Chat</h1>

      <Link to="/funding">
        <button className="btn">Funding</button>
      </Link>
      <Link to="/cb">
        <button className="btn">Challenging Behavior</button>
      </Link>
    </>
  );
}
