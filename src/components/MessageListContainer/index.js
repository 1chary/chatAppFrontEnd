import "./index.css";

const MessageListContainer = (props) => {
  const { list } = props;
  const { name, imageUrl } = list;
  return (
    <li className="individualChatContainer">
      <img src={imageUrl} alt="avatarUrl" className="profile" />
      <h1 className="nameHeading">{name}</h1>
    </li>
  );
};

export default MessageListContainer;
