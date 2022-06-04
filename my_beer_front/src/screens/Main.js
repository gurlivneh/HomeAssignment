import { list } from '../mock/Beers';
import React, { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { beersSet } from '../redux/reducers/beersReducer';
import { searchBeersAndFood } from '../requests/Requests';

const Main = () => {
    const beers = useSelector(state => state.beers)
    const dispatch = useDispatch()
    console.log('beers', beers)
    useEffect(() => {
        if(beers.length === 0) {
            searchBeersAndFood(1,'sushi').then(res => {
                dispatch(beersSet(res)) 

            })
        }
    }, []);

    return (
        <Container>
            {beers && beers.map( (item) => {
                return(
                    <BeerCard item={item} key={item.id}/>
                )
            })}
        </Container>
    )
}

export default Main



const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: gray;
`;

