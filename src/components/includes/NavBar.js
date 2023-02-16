import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <MainContainer>
      <Header>
        <LogoImage
          src={require("../../Assets/images/logo.png")}
          alt="Image"
        ></LogoImage>
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
          <ImageSection
            src={require("../../Assets/images/Rectangle profile.jpg")}
            alt="Image"
          ></ImageSection>
          <Header>wade warren</Header>
          <ArrowImage>
            <Image src="" alt="Image" />
          </ArrowImage>
        </RightSide>
      </Header>

      <LeftContainer>
        <MenuContainer>
          <ListItem className="Title">MENU</ListItem>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Overview" />
            </ImageContainer>
            Overview
          </ListItemLink>
          <ListItemLink>
            <Icon1></Icon1>
            Trader Profile
          </ListItemLink>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Echart" />
            </ImageContainer>
            Echart
            <Image src="" alt="Arrow" />
          </ListItemLink>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Mailbox" />
            </ImageContainer>
            Mailbox
          </ListItemLink>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Pages" />
            </ImageContainer>
            Pages
            <Image src="" alt="Arrow" />
          </ListItemLink>
          <ListItem className="Title">OTHERS</ListItem>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Support" />
            </ImageContainer>
            Support
          </ListItemLink>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Settings" />
            </ImageContainer>
            Settings
            <Image src="" alt="Arrow" />
          </ListItemLink>
        </MenuContainer>
        <Button>
          <ButtonImage src="" alt="" />
          <ButtonImage src="" alt="" />
          connect wallet
        </Button>
      </LeftContainer>
    </MainContainer>
  );
}
export default NavBar;

const MainContainer = styled.div``;
const Header = styled.header`
  width: 100px;
  background: #111;
  display: flex;
  justify-content: space-between;
`;

const LogoImage = styled.img``;
const LeftSide = styled.div``;
const ImageContainer = styled.div``;
const IconImage = styled.img``;
const Heading = styled.h2``;
const RightSide = styled.div``;
const IconContainer = styled.div``;
const Image = styled.img``;
const Title = styled.h3``;
const ImageSection = styled.img``;
const Header = styled.h3``;
const ArrowImage = styled.div``;
const Image = styled.img``;


const LeftContainer = styled.div`
  width: 15%;
  height: 100vh;
  background: #333;
`;
const MenuContainer = styled.div``;
const ListItem = styled.h3``;
const ListItemLink = styled.a``;
const ImageContainer = styled.div``;
const Icon1 = styled.small`
  background: url(../../Assets/images/icons.svg);
  display: inline-block;
  width: 23px;
  height: 22px;
  background-position: 20px 21px;
`;
const Image = styled.img``;
const Button = styled.button``;
const ButtonImage = styled.img``;
