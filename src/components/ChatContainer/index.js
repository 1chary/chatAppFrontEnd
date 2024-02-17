import { Component } from "react";
import MessageListContainer from "../MessageListContainer";
import "./index.css";

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1708153398~exp=1708153998~hmac=78d0b0520af9edd9a87e6f6a192db4ce481b8f3af9d23bacd1453caabe7fdc11",
    name: "Devon Lane",
    role: "Software Developer",
  },
  {
    uniqueNo: 5,
    imageUrl:
      "https://img.freepik.com/premium-photo/young-man-with-glasses-posing-while-wondering_1194-62641.jpg?w=996",
    name: "Micheal Wing",
    role: "Software Developer",
  },
];

class ChatContainer extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="chatsContainer">
          <h1>Chats</h1>
          <input type="search" className="inputBox" />
          <hr className="line" />
          <ul className="unOrderedLIst">
            {userDetailsList.map((eachItem) => (
              <MessageListContainer key={eachItem.uniqueNo} list={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChatContainer;
