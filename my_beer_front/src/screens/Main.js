import { list } from '../mock/Beers'
import React, { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { beersSet } from '../redux/reducers/beersReducer';
const Main = () => {
    // const favorites = useSelector(state => state.user.favorites)
    const beers = useSelector(state => state.beers)
    const dispatch = useDispatch()
    useEffect( () => {
        
        dispatch(beersSet(list))  
    
    }, []);

    return (
        <Container>
            {beers && beers.map( (item) => {
                return(
                    <BeerCard item={item}/>
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

