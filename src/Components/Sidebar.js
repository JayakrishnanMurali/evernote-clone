import {
  AccountCircle,
  Book,
  CheckCircle,
  Delete,
  FlashOn,
  Home,
  KeyboardArrowDown,
  LocalOffer,
  NoteAdd,
  People,
  Search,
  Star,
} from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarMenu, SidebarStyled } from "./Sidebar.elements";

function Sidebar() {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <SidebarStyled>
      <div className="sidebar__top">
        <div className="sidebar__userInfo">
          <h3>
            <AccountCircle className="sidebar__avatarIcon" />
          </h3>
          <h4>{truncate("jayakrishnan1012@gmail.com", 19)}</h4>
          <h6>
            <KeyboardArrowDown className="sidebar__downArrow" />
          </h6>
        </div>
        <div className="sidebar__searchBox">
          <input type="text" placeholder="Search" />
          <Search className="sidebar__searchIcon" />
        </div>
        <button>New</button>
        <SidebarMenu>
          <li>
            <NavLink activeClassName="selected" exact to="/home" class>
              <Home />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/shortcuts">
              <Star />
              Shortcuts
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/notes">
              <NoteAdd />
              Notes
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/tasks">
              <CheckCircle />
              Tasks
            </NavLink>
          </li>
        </SidebarMenu>
        <SidebarMenu>
          <li>
            <NavLink activeClassName="selected" to="/notebooks">
              <Book />
              Notebooks
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/tags">
              <LocalOffer />
              Tags
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/sharedwithme">
              <People />
              Shared with Me
            </NavLink>
          </li>
        </SidebarMenu>
        <SidebarMenu>
          <li>
            <NavLink activeClassName="selected" to="/trash">
              <Delete />
              Trash
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/upgrade">
              <FlashOn />
              Upgrade
            </NavLink>
          </li>
        </SidebarMenu>
      </div>

      <div className="sidebar__down">
        <div className="sidebar__whatsnew">
          <Star />
          <h3>What's New</h3>
        </div>
        <h4>3</h4>
      </div>
    </SidebarStyled>
  );
}

export default Sidebar;
