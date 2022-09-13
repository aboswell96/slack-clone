import styled from "styled-components";
import ChatBox from "./components/chat-box/ChatBox";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <Container>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100hw",
          height: "100%",
        }}
      >
        <SideBar />
        <ChatBox />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: rgb(62, 25, 65);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
