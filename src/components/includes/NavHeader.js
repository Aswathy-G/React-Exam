import React from 'react'
import styled from 'styled-components';

export default function NavHeader() {
  return (
    <Container>
         <LeftSide>
               <ImageContainer>
                     <Image src="" alt="Image"/>
               </ImageContainer>
               <Heading>Overview</Heading>
         </LeftSide>
         <RightSide>
               <IconContainer>
                   <Image src="" alt="Image"/>
                   <Image src="" alt="Image"/>
                   <Image src="" alt="Image"/>
               </IconContainer>
               <Title>Reports</Title>
               <ImageSection src={require("../../Assets/images/Rectangle profile.jpg").default}
                  alt="Image"></ImageSection>
                <Header>wade warren</Header>
                <ArrowImage>
                    <Image src="" alt="Image"/>
                </ArrowImage>
         </RightSide>
    </Container>
  );

}

const Container = styled.div``;
const LeftSide = styled.div``;
const ImageContainer = styled.div``;
const Heading = styled.h1``;
const RightSide = styled.div``;
const IconContainer = styled.div``;
const Title = styled.h3``;
const ImageSection = styled.img``;
const Header = styled.h3``;
const ArrowImage = styled.div``;
const Image = styled.img``;

