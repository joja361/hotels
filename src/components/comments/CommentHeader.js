const CommentHeader = ({ firstName, lastName }) => {
  const name = `${firstName} ${lastName}`;

  return <h5 className="comment-name">{name}</h5>;
};

export default CommentHeader;
