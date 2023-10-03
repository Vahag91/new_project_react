import { Container } from "react-bootstrap";
import Header from "../Header";
import NewsCard from "../NewsCard/NewsCard";
import UserCard from "../UserCard";

function App() {

  const cardData = [
    { title: "Test word", text: "Here is frash news", img: "/Statics/Images/nkar1.jpeg", id: 0 },
    { title: "Test word", text: "Here is frash news", img: "/Statics/Images/nkar2.jpeg", id: 1 },
    { title: "Test word", text: "Here is frash news", img: "/Statics/Images/nkar3.jpeg", id: 2 },
    { title: "Test word", text: "Here is frash news", img: "/Statics/Images/nkar4.jpeg", id: 3 },
  ]


  return (
    <div className="">
      <Header />
      {/* <NewsCard cardData={cardData} />
      <footer className="bg-dark text-white p-3 text-center">
        <Container>
          &copy; 2023 News portal, All Rights Reserved
        </Container>
      </footer> */}
      <UserCard/>
    </div>

  );


}

export default App