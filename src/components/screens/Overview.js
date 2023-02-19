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
            <NumberLeft>$48,789.50</NumberLeft>
            <NumberRight>
              -58%
              <LogoImage>
                <Arrow></Arrow>
              </LogoImage>
            </NumberRight>
          </NumberContainer>
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
            <NumberLeft>$48,789</NumberLeft>
            <NumberRight>
              +0.58%
              <LogoImage>
                <Arrow></Arrow>
              </LogoImage>
            </NumberRight>
          </NumberContainer>
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
            <NumberLeft>$489.50</NumberLeft>
            <NumberRight>
              -58%
              <LogoImage>
                <Arrow></Arrow>
              </LogoImage>
            </NumberRight>
          </NumberContainer>
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
            <NumberLeft>$489.50</NumberLeft>
            <NumberRight>
              -0.88%
              <LogoImage>
                <Arrow></Arrow>
              </LogoImage>
            </NumberRight>
          </NumberContainer>
        </Box4>
      </BoxContainer>

      <RightbarContainer>
        <ListContainer>
          <Left>Market Status</Left>

          <ViewButton>View all</ViewButton>
        </ListContainer>
        <TextContainer>
          <NoteContainer>
            <Icon></Icon>
          </NoteContainer>
          <TotalContainer>
            <Text>Total Supply</Text>
            <Number>17.5M</Number>
          </TotalContainer>
          <MaxContainer>
            <Text>Max Supply</Text>
            <DownContainer>
              <Down></Down>
              <Number>17.5%</Number>
            </DownContainer>
          </MaxContainer>
        </TextContainer>
        <TextContainer>
          <NoteContainer>
            <Icon></Icon>
          </NoteContainer>
          <TotalContainer>
            <Text>Total Supply</Text>
            <Number>17.5M</Number>
          </TotalContainer>
          <MaxContainer>
            <Text>Max Supply</Text>
            <DownContainer>
              <Down></Down>
              <Number>17.5%</Number>
            </DownContainer>
          </MaxContainer>
        </TextContainer>
        <TextContainer>
          <NoteContainer>
            <Icon></Icon>
          </NoteContainer>
          <TotalContainer>
            <Text>Total Supply</Text>
            <Number>17.5M</Number>
          </TotalContainer>
          <MaxContainer>
            <Text>Max Supply</Text>
            <DownContainer>
              <Down></Down>
              <Number>17.5%</Number>
            </DownContainer>
          </MaxContainer>
        </TextContainer>
      </RightbarContainer>
    </Container>
  );
}
export default Overview;

const Container = styled.div`
  position: relative;
  // display: flex;
  width: 85%;
  position: absolute;
  top: 110px;
  right: 0px;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  // width: 97%;
`;
const Box1 = styled.div`
  width: 17%;
  // height: 130px;
  background: #20b8fe;
  padding: 20px;
  // justify-content: space-between;
  border-radius: 24px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image1 = styled.div`
  border-radius: 50%;
  background: #d9d9d9;
  // width: 25px;
  // height: 26px;
  padding: 4px 6px;
  align-items: center;
`;
const IconImage1 = styled.small`
  background: url(${image});
  display: inline-block;
  width: 18px;
  height: 20px;
  background-position: -425px -22px;
`;
const Button = styled.button`
  color: #fff;
  background-color: #d9d9d9;
  border: none;
  font-weight: 700;
  border-radius: 6px;
  padding: 5px 7px;
`;
const SubHeading = styled.h3`
  color: #fff;
  margin: 2px;
  margin-left: 23px;
`;
const NumberContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-evenly;
`;
const NumberLeft = styled.h5`
  color: #fff;
  margin: 2px;
`;
const NumberRight = styled.h5`
  color: #fff;
  display: flex;
  margin: 2px;
`;
const LogoImage = styled.div``;
const Arrow = styled(IconImage1)`
  background-position: -474px -115px;
`;
const Box2 = styled.div`
  width: 17%;
  // height: 150px;
  background: linear-gradient(to right, #5531fa, #aabbee);
  padding: 20px;
  // justify-content: space-between;
  border-radius: 24px;
`;
const LightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image2 = styled.div``;
const IconImage2 = styled(IconImage1)`
  background-position: -425px -54px;
`;
const Box3 = styled.div`
  width: 17%;
  // height: 150px;
  background: #55a55e;
  padding: 20px;
  justify-content: space-between;
  border-radius: 24px;
`;
const DarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image3 = styled.div``;
const Box4 = styled.div`
  width: 17%;
  // height: 150px;
  background: linear-gradient(to right, #20b8fe, #aabbee);
  padding: 20px;
  justify-content: space-between;
  border-radius: 24px;
`;
const GreyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image4 = styled.div``;

const RightbarContainer = styled.div`
  position: absolute;
  right: 40px;
  margin-top: 10px;
  width: 30%;
  padding: 10px;
  background: #5c5c5c;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: #55a55e;
`;
const Left = styled.span`
   color: #fff;
   font-size: 15px;
   font-weight: bold;
`;

const ViewButton = styled.button`
   color: #fff;
   border: 1px solid #fff;
   border-radius: 5px;
   background-color: #5b869b;
   font-size: 12px; 
   padding: 3px 7px;
`;
const TextContainer = styled.div`
  display: flex;
  // justify-content: space-evenly;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
`;
const NoteContainer = styled.div`
  background: #000;
  margin-right: 5px;
  border-radius: 50%;
  margin-right: 1px;
  padding: 8px;
`;
const Icon = styled.small`
  background: url(${image});
  display: block;
  width: 24px;
  height: 25px;
  background-position: -427px -196px;
`;
const TotalContainer = styled.div`
margin-right: 130px;
`;
const Text = styled.span`
  display: block;
  font-size: 12px;
`;
const Number = styled.span`

  
`;
const MaxContainer = styled.div`
justify-content: space-evenly;


`;
const DownContainer = styled.div`
  display: flex;
  align-items: center;

`;
const Down = styled.small`
  background: url(${image});
  display: inline-block;
  width: 17px;
  height: 20px;
  background-position: -474px -22px;
`;

