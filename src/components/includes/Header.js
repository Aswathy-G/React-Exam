import React from 'react'
import styled from 'styled-components';
import image from "../../Assets/images/icons.svg";


function Header() {
  return (
    <HeaderSec>
        <Wrapper>
          <LogoBox>
            <LogoImage
              src={require("../../Assets/images/logo.png")}
              alt="Image"
            />
          </LogoBox>
          <LeftSide>
            <ImageContainer>
              <IconImage></IconImage>
            </ImageContainer>
            <Heading>Overview</Heading>
          </LeftSide>
          <RightSide>
            <IconContainer>
              <IconImage2></IconImage2>
              <IconImage3></IconImage3>
              <GraphIcon></GraphIcon>
            </IconContainer>
            <Title>Reports</Title>
            <ImageSection>
              <Person
                src={require("../../Assets/images/Rectangle profile.jpg")}
                alt="Image"
              />
            </ImageSection>
            <SubHeader>Wade Warren</SubHeader>
            <ArrowContainer>
              <ArrowImage></ArrowImage>
            </ArrowContainer>
          </RightSide>
        </Wrapper>
      </HeaderSec>
  )
}

const HeaderSec = styled.header`
  height: 19%;
  background: #1b1c30;
  display: flex;
  width: 100%;
  position: fixed;
`;
const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  // justify-content: space-between;
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
  margin-left: 100px;
  margin-right: 450px;
`;
const ImageContainer = styled.div`
  margin-right: 8px;
  padding: 8px;
  border-radius: 24px;
  background: #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconImage = styled.small`
  background: url(${image});
  display: inline-block;
  width: 24px;
  height: 24px;
  background-position: -459px -208px;

  -items: align center;
`;
const Heading = styled.h2`
  color: #fff;
  margin-top: 15px;
  font-size: 24px;

`;
const RightSide = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconImage2 = styled(IconImage)`
  background-position: -458px -161px;
  margin-right: 10px;
`;
const IconImage3 = styled(IconImage)`
  background-position: -421px -160px;
  margin-right: 10px;
`;
const GraphIcon = styled.img``;
const Title = styled.h3`
  color: #fff;
  font-size: 16px;
`;
const ImageSection = styled.div`
  width: 40px;
`;
const Person = styled.img`
  width: 100%;
  display: block;
  border-radius: 50%;
`;
const SubHeader = styled.h3`
  color: #fff;
  font-size: 16px;
`;
const ArrowContainer = styled.div``;
const ArrowImage = styled(IconImage)`
  background-position: -305px -172px;
`;

export default Header