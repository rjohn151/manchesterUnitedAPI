import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Standings.css'

const Standings = () => {

  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2021");
  const [data, setData] = useState([]);

//   const url = `https://soccer.sportmonks.com/api/v2.0/standings/season/19735?api_token=zwG26NmkG1HhOvrlE9tg27BkVsU4NrPfqP9vstcooebPBF944RlUE9TsThUG`

//   useEffect(() => {
//     axios(url).then((response) => {
//       console.log(response.data.data[0].standings.data);
//       setData(response.data.data[0].standings.data.map(item => item))
      
//     }).catch((error) => console.log(error))
//   }, []);

const url = `https://api.football-data.org/v2/competitions/2021/standings?standingType=TOTAL`

useEffect(() => {
    axios.get(url, {
        headers: {
            "X-Auth-Token" : "7e787d04a5c645989d00d5b830bbaeea"
        }
    })
        .then(response => {
        console.log(response.data.standings[0].table)
        setData(response.data.standings[0].table.map(item => item))
    }).catch((error) => {
        console.log(error)
    })
}, [])

    return(
        <div className='standings' >
            <h1 className='standings-title'>League Table</h1>

        <select className='select-size'
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
        //   onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="eng.1">English Premier League</option>
 
        </select>

            <div >
            {data.map(item => (

                <div 
                    className='standings-content' 
                    key={item.team.id}
                    >
                    <h2> {item.position}. </h2>
                    <img src={item.team.crestUrl} alt="team-logos" />
                    <h2> {item.team.name} P: </h2>
                    <h2> {item.playedGames} W: </h2>
                    <h2> {item.won} D: </h2>
                    <h2> {item.draw} L: </h2>
                    <h2> {item.lost} Pts: </h2>
                    <h2> {item.points} </h2>
                    <img className='player-img' src={item.image_path} alt="" 
                    />
                </div> 
            
            ))}

        </div>
 
        
        </div>
    )
}

export default Standings