import React, { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { beersSet } from '../redux/reducers/beersReducer';
import { searchBeersAndFood } from '../requests/Requests';

const Main = (props) => {
    const { openModal, setBeerId, setModalType } = props
    const beers = useSelector(state => state.beers)
    const dispatch = useDispatch()
    const [foodInput, setFoodInput] = useState("")
    const [pageNum, setPageNum] = useState(1)

    const handleChangeEvent = (e) => {
        setFoodInput(e.target.value);
    }
    const handleSearchClick = () => {
        searchBeersAndFood(pageNum, foodInput).then((res) => {
            dispatch(beersSet(res))
        })
    }

    const handleCardClick = (index) => {
        setModalType("beer")
        openModal()
        setBeerId(index)
    }

    return (
        <MainContainer>
            Food Pairing:
            <Input onChange={handleChangeEvent} />
            <SearchButton onClick={handleSearchClick}>Search</SearchButton>
            <BeersContainer>
                {beers && beers.map((item, index) => {
                    return (
                        <BeerCard item={item} key={item.id} handleCardClick={() => handleCardClick(index)} />
                    )
                })}
            </BeersContainer>
        </MainContainer>
    )
}

export default Main

const MainContainer = styled.div`
    background-color: white;
    padding: 10px;
    justify-content: center;
    align-items: center;

`;


const BeersContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    padding:10px;

`;

const Input = styled.input`
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 150px;
    margin: 10px;
`;

const SearchButton = styled.button`
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 100px;
    margin: 10px;
`;

