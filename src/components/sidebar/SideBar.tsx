import styled from "styled-components";
const SideBar = () => {
  const channels = [
    {
      title: "Team Channel",
    },
    {
      title: "Org Channel",
    },
    {
      title: "Pipeline Notifications",
    },
  ];
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {channels.map((channel, i) => {
          return <MenuItem>{"# " + channel.title}</MenuItem>;
        })}
      </div>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  background-color: rgb(62, 25, 65);
  min-width: 250px;
  height: auto;
  border-style: solid;
  border-color: grey;
  border-width: 1px;
`;

const MenuItem = styled.div`
  color: white;
  width: auto;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 10px;
`;
