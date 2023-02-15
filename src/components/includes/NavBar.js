import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <MainContainer>
      <LeftContainer>
        <LogoImage
          src={require("../../Assets/images/Logo.jpg")}
          alt="Image"
        ></LogoImage>
        <MenuContainer>
          <ListItem className="Title">MENU</ListItem>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Overview" />
            </ImageContainer>
            Overview
          </ListItemLink>
          <ListItemLink>
            <ImageContainer>
              <Image src="" alt="Trader Profile" />
            </ImageContainer>
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
const LeftContainer = styled.div``;
const LogoImage = styled.img``;
const MenuContainer = styled.div``;
const ListItem = styled.h3``;
const ListItemLink = styled.a``;
const ImageContainer = styled.div``;
const Image = styled.img``;
const Button = styled.button``;
const ButtonImage = styled.img``;
