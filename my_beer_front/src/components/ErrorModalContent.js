import styled from 'styled-components';
import React from 'react';

const ErrorModalContent = (props) => {
    const { closeModal } = props

    const handleClosePress = () => {
        closeModal()
    }
    
    return (
        <Container>
            <Title>Somthing went wrong!!!</Title>
            <Button onClick={handleClosePress}>CLOSE</Button>    
        </Container>
    )
}

export default ErrorModalContent

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:grey;
    flex-direction:column;
    height: 470px;
    width: 400px;
`;

const Title = styled.h4`
    display: flex;
    font-size: 14;
`;

const Button = styled.button`
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 100px;
    margin: 10px;
`;