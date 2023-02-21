import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../Assets/images/icons.svg";

function NavBar() {
  return (
    <>
      <LeftContainer>
        <Wrapper2>
          <MenuContainer>
            <ListItem className="Title">MENU</ListItem>
            <ListItemLink to="/">
              <Icon1></Icon1>
              Overview
            </ListItemLink>
            <ListItemLink to="/traderprofile">
              <Icon2></Icon2>
              Trader Profile
            </ListItemLink>
            <ListItemLink to="/echart">
              <Icon3></Icon3>
              Echart
              <DownArrow></DownArrow>
            </ListItemLink>
            <ListItemLink to="/mailbox">
              <Icon4></Icon4>
              Mailbox
            </ListItemLink>
            <ListItemLink to="/pages">
              <Icon5></Icon5>
              Pages
              <DownArrow></DownArrow>
            </ListItemLink>
            <ListItem className="Title">OTHERS</ListItem>
            <ListItemLink to="/support">
              <Icon6></Icon6>
              Support
            </ListItemLink>
            <ListItemLink to="/settings">
              <Icon7></Icon7>
              Settings
              <DownArrow></DownArrow>
            </ListItemLink>
          </MenuContainer>
          <Button>
            <PlusIcon></PlusIcon>
            connect wallet
            <RightArrow></RightArrow>
          </Button>
        </Wrapper2>
      </LeftContainer>
    </>
  );
}
export default NavBar;

// const MainContainer = styled.div`
//   background: #000;
//   height: 100vh;
// `;

const LeftContainer = styled.div`
  width: 20%;
  /* height: calc(100vh - 90px); */
  /* position: fixed; */
  background: #1b1c30;
  /* margin-top: -19px; */
  /* display: inline-block; */

`;
const Wrapper2 = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  /* width: 60%; */
`;
const MenuContainer = styled.div``;
const ListItem = styled.h3`
  /* margin-bottom: 20px; */
  /* margin-top: 45px; */
  font-size: 15px;
  color: #4d525f;
  margin: 0 0 30px;
`;
const ListItemLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-bottom: 50px;
  color: #4d525f;
  // margin-left: 25px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const Icon1 = styled.small`
  background: url(${image});
  display: inline-block;
  width: 24px;
  height: 24px;
  background-position: -20px -103px;
  margin-right: 19px;
`;
const Icon2 = styled(Icon1)`
  background-position: -61px -103px;
`;
const Icon3 = styled(Icon1)`
  background-position: -140px -103px;
`;
const DownArrow = styled(Icon1)`
  width: 24px;
  height: 18px;
  background-position: -303px -105px;
  margin-left: 13px;
`;
const Icon4 = styled(Icon1)`
  background-position: -182px -103px;
`;
const Icon5 = styled(Icon1)`
  background-position: -263px -103px;
`;

const Icon6 = styled(Icon1)`
  background-position: -98px -103px;
`;
const Icon7 = styled(Icon1)`
  background-position: -221px -104px;
`;
const Button = styled.button`
  padding: 12px 7px;
  background: linear-gradient(to right, #aabbee, #20b8fe);
  border: 2px solid;
  border-radius: 24px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PlusIcon = styled.small`
  background: url(${image});
  display: inline-block;
  width: 20px;
  height: 20px;
  background-position: -427px -109px;
  margin-right: 7px;
`;
const RightArrow = styled(PlusIcon)`
  width: 22px;
  height: 16px;
  background-position: -305px -176px;
  margin-left: 7px;
  transform: rotate(-90deg);
`;
