import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment"; // npm install moment --save 
import './Fixtures.css'

const Fixtures = () => {

    const [stats, setStats] = useState([])
    const [statistics, setStatistics] = useState("https://api-football-v1.p.rapidapi.com/v3/fixtures")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let cancel;
        axios.get(statistics, {
            headers: {
                "X-RapidAPI-Key" : "ed5f66bf66msh3195b0687e916c5p11ad30jsndeaa1680f030",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            },
            params: {
                team: '33', league: '39', season: '2022'
            },

        },{
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(response => {
                setLoading(false)

            console.log(response.data.response)
            setStats(response.data.response)
        }).catch((error) => {
            console.log(error)
        })

        return () => cancel()
    }, [statistics])

    return(
        <div className="fixtures">
            <h1 className="fixtures-title">Club Fixtures</h1>
                {stats.map(item => (

                    <div className='' key={item.fixture.id}>
                        <h2>{item.league.round}</h2>
                        <h5>{moment(item.fixture.date).format("MMMM D YYYY")}</h5>
                        
                        <div className="fixture"> 
                            <img className="vs" src={item.teams.home.logo} alt="" /> 
                        <h1 className="games"> {item.teams.home.name} {item.goals.home} - {item.goals.away} {item.teams.away.name} </h1> 
                            <img className="vs" src={item.teams.away.logo} alt="" />
                        </div>
                    </div>

                ))}
                
        </div>
    )
}

export default Fixtures