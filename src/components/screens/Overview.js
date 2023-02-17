import React from 'react'
import styled from 'styled-components';
function Overview() {
  return (
     <Container>
         <BoxContainer>
            <Box1>
                <IconContainer>
                    <IconImage src="" alt="Icon"/>
                </IconContainer>
                <Button>BUY</Button>
                <Button>Trade</Button>
                <SubHeading>Bitcoin</SubHeading>
                <Text>$48,789.50 -58%</Text>
                <LogoImage src="" alt="Image"/>
            </Box1>
            <Box2>
            <IconContainer>
                <IconImage src="" alt="Icon"/>
            </IconContainer>
                <Button>BUY</Button>
                <Button>Trade</Button>
                <SubHeading>Ethereum</SubHeading>
                <Text>$48,789 +0.58%</Text>
                <LogoImage src="" alt="Image"/>
            </Box2>
            <Box3>
            <IconContainer>
                <IconImage src="" alt="Icon"/>
            </IconContainer>
                <Button>BUY</Button>
                <Button>Trade</Button>
                <SubHeading>Steller</SubHeading>
                <Text>$489.50 +2.58%</Text>
                <LogoImage src="" alt="Image"/>
            </Box3>
            <Box4>
            <IconContainer>
                <IconImage src="" alt="Icon"/>
            </IconContainer>
                <Button>BUY</Button>
                <Button>Trade</Button>
                <SubHeading>Solana</SubHeading>
                <Text>$489.50 -0.88%</Text>
                <LogoImage src="" alt="Image"/>
            </Box4>
         </BoxContainer>
     </Container>
    
  );
}
export default Overview;
const Container = styled.div`
`;
const BoxContainer = styled.div`
   display: flex;
   justify-content: space-between;
   widht: 80%;
`;
const Box1 = styled.div`
   width: 25%;
   height: 30px;
   background-color: #fff;
`;
const IconContainer = styled.div``;
const IconImage = styled.img``;
const Button = styled.button``;
const SubHeading = styled.button``;
const Text = styled.button``;
const LogoImage = styled.img``;
const Box2 = styled.div``;
const Box3 = styled.div``;
const Box4 = styled.div``;



