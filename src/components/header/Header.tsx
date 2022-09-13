import styled from "styled-components";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import SearchBar from "./Searchbar";
import HistoryIcon from "@mui/icons-material/History";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const Header = () => {
  return (
    <Container>
      <div style={{ marginLeft: "25px" }}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <HistoryIcon sx={{ color: "white" }} />
        <SearchBar />
      </div>
      <div style={{ marginRight: "25px" }}>
        <HelpOutlineIcon sx={{ color: "white" }} />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: rgb(62, 25, 65);
  border: 1px white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
