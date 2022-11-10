import React from "react";
import IconNavitem from "./IconNavItem";
import CommentIcon from "./CommentIcon";
import FacebookIcon from "./FacebookIcon";
import LikeIcon from "./LikeIcon";
import "../../blogcards/blogcards.css";

export default function IconNavbar({ blogCardData }) {
  console.log(blogCardData);
  return (
    <nav className="icon-navigation">
      <div>
        <ul className="icon-navlist">
          <IconNavitem>
            <FacebookIcon href={blogCardData.cardShareLink} />
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
  );
}
