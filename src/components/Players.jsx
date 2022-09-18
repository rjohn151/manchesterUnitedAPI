import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Players.css'
import Pagination from './Pagination';

const Players = () => {

    const [players, setPlayers] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://api-football-v1.p.rapidapi.com/v3/players")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    // const url = `https://api-football-v1.p.rapidapi.com/v3/players`

    useEffect(() => {
        setLoading(true)
        let cancel;
        axios.get(currentPageUrl, {
            headers: {
                "X-RapidAPI-Key" : "ed5f66bf66msh3195b0687e916c5p11ad30jsndeaa1680f030",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            },
            params: {
                team: '33', league: '39', season: '2022', page: '1',
            },

        },{
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(response => {
                setLoading(false)
                // setNextPageUrl(response.data.next)
                // setPrevPageUrl(response.data.previous)
            console.log(response.data.response)
            setPlayers(response.data.response.map(item => item.player))
        }).catch((error) => {
            console.log(error)
        })

        return () => cancel()
    }, [currentPageUrl])

    const goToNextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }

    const goToPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return "LOADING..."
    


    return (
        <>
            <div className='players'>
                <h1 className='players-title'>Squad</h1>
                    <div className='players-card-container'>
                        {players.map(item => (

                        <div className='card' key={item.id}>
                            <h1>{item.name}</h1>
                            <h2>{item.nationality}</h2>
                            <h2>{item.position}</h2>
                            <img className='player-img' src={item.photo} alt="" />
                        </div> 
            
                        ))}

                    </div>
            </div>
            <Pagination
                goToNextPage={nextPageUrl ? goToNextPage : null}  
                goToPrevPage={prevPageUrl ? goToNextPage : null}  
            />

        </>
       

    )
}

export default Players