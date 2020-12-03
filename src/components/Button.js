import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
export default function Button() {
  return (
    <Link to="log-in">
      <button className="btn">Log In</button>
    </Link>
  );
}
