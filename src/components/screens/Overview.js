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
          
      <SidebarContainer>
             <ListContainer>
                  <Left>Market Status</Left>
                  <Right>
                    <ViewButton>View all</ViewButton>
                  </Right>
             </ListContainer>
             <TextContainer1>
                <NoteContainer>
                   <Icon></Icon>
                </NoteContainer>
                <TotalContainer>
                  <Text>Total Supply</Text>
                  <Number>17.5M</Number>
                </TotalContainer>
                <MaxContainer>
                  <Text>Max Supply</Text>
                  <Down></Down>
                  <Number>17.5%</Number>
                </MaxContainer>
             </TextContainer1>
             <TextContainer2>
                <NoteContainer>
                   <Icon></Icon>
                </NoteContainer>
                <TotalContainer>
                  <Text>Total Supply</Text>
                  <Number>17.5M</Number>
                </TotalContainer>
                <MaxContainer>
                  <Text>Max Supply</Text>
                  <Down></Down>
                  <Number>17.5%</Number>
                </MaxContainer>
             </TextContainer2>
             <TextContainer3>
                <NoteContainer>
                   <Icon></Icon>
                </NoteContainer>
                <TotalContainer>
                  <Text>Total Supply</Text>
                  <Number>17.5M</Number>
                </TotalContainer>
                <MaxContainer>
                  <Text>Max Supply</Text>
                  <Down></Down>
                  <Number>17.5%</Number>
                </MaxContainer>
             </TextContainer3>                                                             
      </SidebarContainer>
    </Container>
    

  );

}
export default Overview;

const Container = styled.div`
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
  justify-content: space-between;
`;
const Image1 = styled.div`
  border-radius: 50%;
  background: #D9D9D9;
  width: 25px;
  height: 26px;
  align-items: center;
`;
const IconImage1 = styled.small`
  background: url(${image});
  display: inline-block;
  width: 18px;
  height: 20px;
  // background-position: -425px -22px;
  background-position:-420px -18px;
`;
const Button = styled.button`
  color: #fff;
  background-color: #d9d9d9;
  border: none;
`;
const SubHeading = styled.h3`
  color: #fff;
  margin: 2px;
`;
const NumberContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
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

const SidebarContainer = styled.div``;
const ListContainer = styled.div``;
const Left = styled.h3``;
const Right = styled.button``;
const ViewButton = styled.button``;
const TextContainer1 = styled.div``;
const NoteContainer = styled.div``;
const Icon = styled.small``;
const TotalContainer = styled.div``;
const Text = styled.h5``;
const Number = styled.h3``;
const MaxContainer = styled.div``;
const Down = styled.small``;
const TextContainer2 = styled.div``;
const TextContainer3 = styled.div``;




