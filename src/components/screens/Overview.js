import React from "react";
import styled from "styled-components";
import image from "../../Assets/images/icons.svg";

function Overview() {
  return (
    <Container>
      <BoxContainer>
        <Box1>
          <IconContainer>
            <Image1>
              <IconImage1></IconImage1>
            </Image1>
            <Button>BUY</Button>
            <Button>Trade</Button>
          </IconContainer>
          <SubHeading>Bitcoin</SubHeading>
          <NumberContainer>
            <Number>$48,789.50 -58%</Number>
          </NumberContainer>
          <LogoImage>
            <Arrow></Arrow>
          </LogoImage>
        </Box1>
        <Box2>
          <LightContainer>
            <Image2>
              <IconImage2></IconImage2>
            </Image2>
            <Button>BUY</Button>
            <Button>Trade</Button>
          </LightContainer>
          <SubHeading>Ethereum</SubHeading>
          <NumberContainer>
            <Number>$48,789 +0.58%</Number>
          </NumberContainer>
          <LogoImage>
            <Arrow></Arrow>
          </LogoImage>
        </Box2>
        <Box3>
          <DarkContainer>
            <Image3>
              <IconImage2></IconImage2>
            </Image3>
            <Button>BUY</Button>
            <Button>Trade</Button>
          </DarkContainer>
          <SubHeading>Steller</SubHeading>
          <NumberContainer>
            <Number>$489.50 +2.58%</Number>
          </NumberContainer>
          <LogoImage>
            <Arrow></Arrow>
          </LogoImage>
        </Box3>
        <Box4>
          <GreyContainer>
            <Image4>
              <IconImage2></IconImage2>
            </Image4>
            <Button>BUY</Button>
            <Button>Trade</Button>
          </GreyContainer>
          <SubHeading>Solana</SubHeading>
          <NumberContainer>
            <Number>$489.50 -0.88%</Number>
          </NumberContainer>
          <LogoImage>
            <Arrow></Arrow>
          </LogoImage>
        </Box4>
      </BoxContainer>
    </Container>
  );
}
export default Overview;

const Container = styled.div`
  display: inline;
  width: 50%;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  widht: 80%;
`;
const Box1 = styled.div`
  // width: 25%;
  height: 110px;
  background: #20b8fe;
  padding: 20px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image1 = styled.div``;
const IconImage1 = styled.small`
  background: url(${image});
  display: inline-block;
  width: 18px;
  height: 20px;
  background-position: -425px -22px;
`;
const Button = styled.button`
  color: #fff;
  background-color: #D9D9D9;
`;
const SubHeading = styled.h3`
  color: #fff;
`;
const NumberContainer = styled.div``;
const Number = styled.h5`
  color: #fff;
`;
const LogoImage = styled.div``;
const Arrow = styled.small``;
const Box2 = styled.div`
  // width: 15%;
  height: 110px;
  background: #5531fa;
`;
const LightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image2 = styled.div``;
const IconImage2 = styled(IconImage1)`
  background-position: -425px -54px;
`;
const Box3 = styled.div`
  // width: 15%;
  height: 110px;
  background: #55A55E;
`;
const DarkContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image3 = styled.div``;
const Box4 = styled.div`
  // width: 15%;
  height: 110px;
  background: linear-gradient(to right, #20b8fe, #aabbee);
`;
const GreyContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image4 = styled.div``;
