import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1625098838641-b5ba90138107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">4321</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2546</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recents</p>
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("Marketing")}
        {recentItem("Developer")}
        {recentItem("Javascript")}
        {recentItem("C++")}
      </div>
    </div>
  );
}

export default Sidebar;
