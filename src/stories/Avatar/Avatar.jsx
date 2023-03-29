import React from "react";
import PropTypes from "prop-types";
import "./avatar.css";

export const Avatar = ({ size, variant }) => {
  return (
    <div>
      <img
        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
        alt="avatar"
        className={["avatar", `avatar-${size}`, `avatar-${variant}`].join(" ")}
      />
    </div>
  );
};

Avatar.propTypes = {
  /**
   * How large should the avatar be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * How variant should the avatar be?
   */
  variant: PropTypes.oneOf(["circle", "rounded"]),
};

Avatar.defaultProps = {
  size: "medium",
  variant: "rounded",
};
