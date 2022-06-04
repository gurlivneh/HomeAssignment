import styled from 'styled-components';
import React from 'react';


const ErrorModalContent = (props) => {
    
    return (
        <Container>
            <Title>Somthing went wrong!!!</Title>    
        </Container>
    )
}

export default ErrorModalContent

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:gray;
    flex-direction:column;
    height: 600px;
    width: 400px;
    margin: 5px;
`;

const Title = styled.h4`
    display: flex;
    font-size: 14;
`;

const Image = styled.img`
   height: 200px;
   width: 80px;
`;