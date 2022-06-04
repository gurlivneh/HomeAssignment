import { list } from '../mock/Beers';
import React, { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { beersSet } from '../redux/reducers/beersReducer';

const Favorites = () => {
    const beers = useSelector(state => state.beers)
    const dispatch = useDispatch()


    return (
        <Container>
            {beers && beers.map((item) => {
                if (item.isFavorite) {
                    return (
                        <BeerCard item={item} key={item.id} />
                    )
                }
            })}
        </Container>
    )
}

export default Favorites



const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: gray;
`;
