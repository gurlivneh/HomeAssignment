import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux'

const BeerModalContent = (props) => {
    const { beerId, closeModal } = props
    const beers = useSelector(state => state.beers)

    const handleClosePress = () => {
        closeModal()
    }

    return (
        <Container>
            <Title>EBC: {beers[beerId].ebc}</Title>
            <Title>ABV: {beers[beerId].abv}</Title>
            <Title>PH: {beers[beerId].ph}</Title>
            <Title>SRM: {beers[beerId].srm}</Title>
            <Title>IBU: {beers[beerId].ibu}</Title>
            <Button onClick={handleClosePress}>CLOSE</Button>
        </Container>
    )
}

export default BeerModalContent

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