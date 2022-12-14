import React from "react";
import IconNavitem from "./IconNavItem";
import CommentIcon from "./CommentIcon";
import FacebookIcon from "./FacebookIcon";
import LikeIcon from "./LikeIcon";
import "../../blogcards/blogcards.css";


export const ThemeContext = React.createContext('icons');

export default function IconNavbar({ blogCardData }) {
  return (
    <ThemeContext.Provider value="icon">
      <nav className="icon-navigation">
        <div>
          <ul className="icon-navlist">
            <IconNavitem>
              <FacebookIcon blogCardData={blogCardData} />
            </IconNavitem>
            <IconNavitem>
              <LikeIcon />
            </IconNavitem>
            <IconNavitem>
              <CommentIcon />
            </IconNavitem>
          </ul>
        </div>
      </nav>
    </ThemeContext.Provider>
  );
}
