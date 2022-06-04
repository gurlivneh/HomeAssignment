import styled from 'styled-components';
import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { favoritesAdd, favoritesRemove } from '../redux/reducers/favoritesReducer';
import { beersUpdate } from '../redux/reducers/beersReducer';
import { useSelector, useDispatch } from 'react-redux'


const BeerModalContent = (props) => {
    const { item, beerId } = props
    const beers = useSelector(state => state.beers)


    return (
        <Container>
            <Title>EBC: {beers[beerId].ebc}</Title>
            <Title>ABV: {beers[beerId].abv}</Title>
            <Title>PH: {beers[beerId].ph}</Title>
            <Title>SRM: {beers[beerId].srm}</Title>
            <Title> IBU: {beers[beerId].ibu}</Title>
        </Container>
    )
}

export default BeerModalContent

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