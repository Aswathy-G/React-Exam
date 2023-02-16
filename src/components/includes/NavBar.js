import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <MainContainer>
      <Header>
        <Wrapper>
          <LogoBox>
            <LogoImage
              src={require("../../Assets/images/logo.png")}
              alt="Image"
            />
          </LogoBox>
          <LeftSide>
            <ImageContainer>
              <IconImage src="" alt="Image" />
            </ImageContainer>
            <Heading>Overview</Heading>
          </LeftSide>
          <RightSide>
            <IconContainer>
              <Image src="" alt="Image" />
              <Image src="" alt="Image" />
              <Image src="" alt="Image" />
            </IconContainer>
            <Title>Reports</Title>
            <ImageSection>
              <Person
                src={require("../../Assets/images/Rectangle profile.jpg")}
                alt="Image"
              />
            </ImageSection>
            <SubHeader>wade warren</SubHeader>
            <ArrowContainer>
              <ArrowImage src="" alt="Image" />
            </ArrowContainer>
          </RightSide>
        </Wrapper>
      </Header>
      <Wrapper>
        <LeftContainer>
          <MenuContainer>
            <ListItem className="Title">MENU</ListItem>
            <ListItemLink>
              <Icon1></Icon1>
              Overview
            </ListItemLink>
            <ListItemLink>
              <Icon2></Icon2>
              Trader Profile
            </ListItemLink>
            <ListItemLink>
              <Icon3></Icon3>
              Echart
              <CheckImage src="" alt="Arrow" />
            </ListItemLink>
            <ListItemLink>
              <Icon4></Icon4>
              Mailbox
            </ListItemLink>
            <ListItemLink>
              <Icon5></Icon5>
              Pages
              <ReverseImage src="" alt="Arrow" />
            </ListItemLink>
            <ListItem className="Title">OTHERS</ListItem>
            <ListItemLink>
              <Icon6></Icon6>
              Support
            </ListItemLink>
            <ListItemLink>
              <Icon7></Icon7>
              Settings
              <MoveImage src="" alt="Arrow" />
            </ListItemLink>
          </MenuContainer>
          <Button>
            <ButtonImage src="" alt="" />
            <ButtonImage src="" alt="" />
            connect wallet
          </Button>
        </LeftContainer>
      </Wrapper>
    </MainContainer>
  );
}
export default NavBar;

const MainContainer = styled.div``;
const Header = styled.header`
  height: 100px;
  background: #111;
`;
const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoBox = styled.div`
  width: 150px;
`;
const LogoImage = styled.img`
  width: 100%;
  display: block;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div``;
const IconImage = styled.img``;
const Heading = styled.h2``;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled.div``;
const Image = styled.img``;
const Title = styled.h3``;
const ImageSection = styled.div`
  width: 40px;
`;
const Person = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
`;
const SubHeader = styled.h3``;
const ArrowContainer = styled.div``;
const ArrowImage = styled.img``;

const LeftContainer = styled.div`
  width: 15%;
  height: 100vh;
  background: #333;
`;
const MenuContainer = styled.div``;
const ListItem = styled.h3``;
const ListItemLink = styled.a``;
const Icon1 = styled.small`
  background: url(../../Assets/images/icons.svg);
  display: inline-block;
  width: 23px;
  height: 22px;
  background-position: 20px 21px;
`;
const Icon2 = styled.small``;
const Icon3 = styled.small``;
const CheckImage = styled.img``;
const Icon4 = styled.small``;
const Icon5 = styled.small``;
const ReverseImage = styled.img``;
const Icon6 = styled.small``;
const Icon7 = styled.small``;
const MoveImage = styled.img``;
const Button = styled.button``;
const ButtonImage = styled.img``;
