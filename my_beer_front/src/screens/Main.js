import React, { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { beersSet, updateFavorites } from '../redux/reducers/beersReducer';
import { searchBeersAndFood } from '../requests/Requests';

const Main = (props) => {
    const { openModal, setBeerId, setModalType } = props
    const beers = useSelector(state => state.beers)
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const [foodInput, setFoodInput] = useState("")
    const [pageNum, setPageNum] = useState(0)
    const [displayShowMore, setDisplayShowMore] = useState(false)



    const handleChangeEvent = (e) => {
        setPageNum(0)
        setFoodInput(e.target.value);
        setDisplayShowMore(false)

    }
    const handleSearchClick = () => {
        if (foodInput) {
            setPageNum(1)
            searchBeersAndFood(1, foodInput).then((res) => {
                if(res.length > 0){
                dispatch(beersSet({ beers: res, favorites: favorites }))
                setDisplayShowMore(true)
                }
            })
        }
    }

    const handleCardClick = (index) => {
        setModalType("beer")
        openModal()
        setBeerId(index)
    }

    const handleShowMoreClick = () => {
        let num = pageNum
        if (foodInput) {
            num++
            setPageNum(num)
            searchBeersAndFood(num, foodInput).then((res) => {
                if (res.length === 0) {
                    setPageNum(1)
                    searchBeersAndFood(1, foodInput).then((res) => {
                        dispatch(beersSet({ beers: res, favorites: favorites }))
                    })
                } else {
                    dispatch(beersSet({ beers: res, favorites: favorites }))

                }
            })
        }
    }

    return (
        <MainContainer>
            Food Pairing:
            <Input onChange={handleChangeEvent} />
            <SearchButton onClick={handleSearchClick}>Search</SearchButton>
            <BeersContainer>
                {beers.length > 0 && beers.map((item, index) => {
                    return (
                        <BeerCard item={item} key={item.name} handleCardClick={() => handleCardClick(index)} />
                    )
                })}
            </BeersContainer>
            {displayShowMore && <Title onClick={handleShowMoreClick}>SHOW MORE - {pageNum}</Title>}
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
const Title = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    /* background-color:yellow; */
    display: flex;
    cursor: pointer;
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

