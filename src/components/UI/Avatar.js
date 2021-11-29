import { Image } from "react-bootstrap";

const Avatar = ({ avatar, user = "RANDOM+TEST", sizeFor = null }) => {
  const avatarSrc = avatar
    ? avatar
    : `https://eu.ui-avatars.com/api/?name=${user}}&background=random&rounded=true&background=2d3340&color=fff`;

  const avatarSize = sizeFor ? sizeFor : "comment-avatar";

  return (
    <Image
      src={avatarSrc}
      alt="avatar"
      roundedCircle
      className={`ms-1 ${avatarSize}`}
    />
  );
};

export default Avatar;
