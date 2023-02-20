import React from "react";
import styled from "styled-components";
import Header from "../includes/Header";
import NavBar from "../includes/NavBar";
import image from "../../Assets/images/icons.svg";


function Demo() {
  return (
    <GridMain>
      <HeaderSec>
        <Header />
      </HeaderSec>
      <SideBar>
        <NavBar />
      </SideBar>
      <MarketList>
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
                  <Arrow></Arrow>y
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
      </MarketList>
      <Price>
      <MiddleContainer>
          <SectionContainer>
            <Title>Price</Title>
            <SubTitle>The price of Bitcoin over the last day</SubTitle>
            <ColorContainer>
              <Sub1>178.41 EH/s</Sub1>
              <Sub2>Esitimated rated</Sub2>
            </ColorContainer>
            <TagContainer>
              <ButtonTag></ButtonTag>
              <Icon></Icon>
            </TagContainer>
            <ImageBarContainer>
              <ImageBar
                src={require("../../Assets/images/bar-middle.png")}
                alt="Bar"
              />
            </ImageBarContainer>
          </SectionContainer>
        </MiddleContainer>

      </Price>
      <MarketStatus>
      <RightbarContainer>
          <ListContainer>
            <Left>Market Status</Left>
            <ViewButton>View all</ViewButton>
          </ListContainer>
          <TextContainer>
            <NoteContainer1>
              <Icon1></Icon1>
            </NoteContainer1>
            <TotalContainer>
              <Text>Total Supply</Text>
              <Number1>17.5M</Number1>
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
            <NoteContainer2>
              <Icon2></Icon2>
            </NoteContainer2>
            <TotalContainer>
              <Text>Total Supply</Text>
              <Number1>17.5M</Number1>
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
            <NoteContainer3>
              <Icon3></Icon3>
            </NoteContainer3>
            <TotalContainer>
              <Text>Total Supply</Text>
              <Number1>17.5M</Number1>
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
      </MarketStatus>
      <PriceChange>
      <MainContainer>
          <Caption>USD Price Change</Caption>
          <PriceContainer>
            <UsContainer>
              <ChangeContainer>Period</ChangeContainer>
              <ChangeContainer>Change</ChangeContainer>
              <ChangeContainer>Change</ChangeContainer>
              <ChangeContainer>High</ChangeContainer>
              <ImageArrow>
                <Arrow />
              </ImageArrow>
              <ChangeContainer>Low</ChangeContainer>
              <ArrowTag>
                <TagImage />
              </ArrowTag>
            </UsContainer>
            <UsContainer1>
              <ChangeContainer1>5 May-12May</ChangeContainer1>
              <ChangeContainer2>-$ 40.45</ChangeContainer2>
              <ChangeContainer3>-0.27%</ChangeContainer3>
              <ChangeContainer4>$0.21%</ChangeContainer4>
              <ArrowTab>
                <ArrowIcon />
              </ArrowTab>
              <ChangeContainer5>$0.21%</ChangeContainer5>
              <Arrow1>
                <ArrowIcon1 />
              </Arrow1>
            </UsContainer1>
            <UsContainer1>
              <ChangeContainer1>5 May-12May</ChangeContainer1>
              <ChangeContainer2>-$ 40.45</ChangeContainer2>
              <ChangeContainer3>-0.27%</ChangeContainer3>
              <ChangeContainer4>$0.21%</ChangeContainer4>
              <ArrowTab>
                <ArrowIcon />
              </ArrowTab>
              <ChangeContainer5>$0.21%</ChangeContainer5>
              <Arrow1>
                <ArrowIcon1 />
              </Arrow1>
            </UsContainer1>
            <UsContainer1>
              <ChangeContainer1>5 May-12May</ChangeContainer1>
              <ChangeContainer2>-$ 40.45</ChangeContainer2>
              <ChangeContainer3>-0.27%</ChangeContainer3>
              <ChangeContainer4>$0.21%</ChangeContainer4>
              <ArrowTab>
                <ArrowIcon />
              </ArrowTab>
              <ChangeContainer5>$0.21%</ChangeContainer5>
              <Arrow1>
                <ArrowIcon1 />
              </Arrow1>
            </UsContainer1>
          </PriceContainer>
        </MainContainer>
      </PriceChange>
      <Analytics>
      <BottomContainer>
            <RightContainer>
              <Heading>Market Analytics</Heading>
              <ImageContainer>
                <Image
                  src={require("../../Assets/images/graph-bottom.png")}
                  alt="Graph"
                />
              </ImageContainer>
              <MarketContainer>
                <CopContainer>
                  <Word1>Market Cop</Word1>
                  <String1>$1.23B</String1>
                  <IconArrow1></IconArrow1>
                </CopContainer>
                <VolumeContainer>
                  <Word2>7 day Volume</Word2>
                  <String2>$125.42M</String2>
                  <IconArrow2></IconArrow2>
                </VolumeContainer>
              </MarketContainer>
            </RightContainer>
          </BottomContainer>
      </Analytics>
    </GridMain>
  );
}

const GridMain = styled.div`
  display: grid;
  grid-template-columns: .2fr 1fr .5fr;
  grid-template-rows: repeat(2, .5fr) repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* height: 100vh; */
`;
const HeaderSec = styled.div`
  grid-area: 1 / 1 / 2 / 4;
`;
const SideBar = styled.div`
grid-area: 2 / 1 / 5 / 2;
`;
const MarketList = styled.div`
grid-area: 2 / 2 / 3 / 4;
`;
const Price = styled.div`
grid-area: 3 / 2 / 4 / 3;
`;
const MarketStatus = styled.div`
grid-area: 3 / 3 / 4 / 4;
margin-bottom: 70px;
`;
const PriceChange = styled.div`
grid-area: 4 / 2 / 5 / 3;
`;
const Analytics = styled.div`
grid-area: 4 / 3 / 5 / 4;
`;



const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
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
  background: #4780ff;
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
  background: linear-gradient(to right, #50247d, #aabbee);
  padding: 20px;
  // justify-content: space-between;
  border-radius: 24px;
`;
const LightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image2 = styled.div`
  border-radius: 50%;
  background: #8668a6;
  padding: 4px 6px;
  align-items: center;
`;
const IconImage2 = styled(IconImage1)`
  background-position: -425px -54px;
`;
const Box3 = styled.div`
  width: 17%;
  // height: 150px;
  background: linear-gradient(to right, #e56290, #ea856d);
  padding: 20px;
  justify-content: space-between;
  border-radius: 24px;
`;
const DarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image3 = styled.div`
  border-radius: 50%;
  background: #f0979c;
  padding: 4px 6px;
  align-items: center;
`;
const Box4 = styled.div`
  width: 17%;
  // height: 150px;
  background: linear-gradient(to right, #326e86, #6cb9b7);
  padding: 20px;
  justify-content: space-between;
  border-radius: 24px;
`;
const GreyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Image4 = styled.div`
  border-radius: 50%;
  background: #6ca5b1;
  padding: 4px 6px;
  align-items: center;
`;


const RightbarContainer = styled.div`
  // position: absolute;
  right: 40px;
  margin-top: 9px;
  padding: 20px;
  height: 100%;
  width: 90%;
  background: #171c26;
  border-radius: 20px;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: #55a55e;
  // padding-right: 8px;
`;
const Left = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  //  padding-right: 10px;
`;

const ViewButton = styled.button`
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #171c26;
  font-size: 12px;
  padding: 3px 7px;
`;
const TextContainer = styled.div`
  display: flex;
  // justify-content: space-evenly;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 5px;
  border-bottom: 1px solid #333;
  padding-left: 15px;
`;
const NoteContainer1 = styled.div`
  background: linear-gradient(to right, #2579f1, #94befa);
  margin-right: 5px;
  border-radius: 50%;
  margin-right: 1px;
  padding: 8px;
  // margin: 5px;
`;
const Icon1 = styled.small`
  background: url(${image});
  display: block;
  width: 24px;
  height: 25px;
  background-position: -427px -196px;
  // background: linear-gradient(to right, #5531fa, #aabbee);
`;

const TotalContainer = styled.div`
  margin-right: 130px;
`;
const Text = styled.span`
  display: block;
  font-size: 12px;
  color: #262b36;
`;
const Number1 = styled.span`
  color: #fff;
  font-size: 13px;
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
  color: #206252;
`;
const Number = styled.span`
  color: #206252;
`;

const Icon2 = styled(Icon1)`
  width: 23px;
  height: 25px;
  background-position: -427px -257px;
`;
const Icon3 = styled(Icon1)`
  width: 25px;
  height: 28px;
  background-position: -427px -316px;
`;
const NoteContainer2 = styled.div`
  // background: linear-gradient(to right, #20b8fe, #aabbee);
  background: linear-gradient(to right, #b531a1, #7c40e2);
  margin-right: 5px;
  border-radius: 50%;
  margin-right: 1px;
  padding: 8px;
`;
const NoteContainer3 = styled.div`
  background: linear-gradient(to right, #c05036, #eb8440);
  margin-right: 5px;
  border-radius: 50%;
  margin-right: 1px;
  padding: 8px;
`;

const BottomContainer = styled.div`
  width: 95%;
  background: #171c26;
  border-radius: 10px;
`;


const RightContainer = styled.div``;
const Heading = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 20px;
`;
const ImageContainer = styled.div`
  /* width: 70%; */
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const MarketContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CopContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Word1 = styled.span`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
const String1 = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
const IconArrow1 = styled.small``;
const VolumeContainer = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const Word2 = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
const IconArrow2 = styled.small``;
const String2 = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;


const MiddleContainer = styled.div`
  margin-top: 9px;
  width: 95%;
  /* height: 240px; */
  padding: 20px;
  background: #171c26;
  border-radius: 20px;
`;


const SectionContainer = styled.span``;
const Title = styled.span``;
const SubTitle = styled.span``;
const ColorContainer = styled.div``;
const Sub1 = styled.span``;
const Sub2 = styled.span``;
const TagContainer = styled.div``;
const ButtonTag = styled.button``;
const Icon = styled.small``;
const ImageBarContainer = styled.div`
  width: 100%;
`;
const ImageBar = styled.img`
  width: 100%;
  height: 192px;
  display: block;
`;



const MainContainer = styled.div``;
const Caption = styled.div``;
const PriceContainer = styled.div``;
const UsContainer = styled.div``;
const ChangeContainer = styled.div``;
const ImageArrow = styled.small``;
const ArrowTab = styled.small``;
const ArrowTag = styled.div``;
const TagImage = styled.div``;
const UsContainer1 = styled.div``;
const ChangeContainer1 = styled.div``;
const ChangeContainer2 = styled.div``;
const ChangeContainer3 = styled.div``;
const ArrowIcon = styled.div``;
const ChangeContainer4 = styled.div``;
const ChangeContainer5 = styled.div``;
const Arrow1 = styled.div``;
const ArrowIcon1 = styled.div``;


export default Demo;
