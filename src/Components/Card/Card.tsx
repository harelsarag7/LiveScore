import "./Card.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// interface Live {
//   result?: any,
//   event_key?: number,
//   event_home_team?: string
// }
// declare module namespace {
   interface Goalscorer {
      time: string;
      home_scorer: string;
      home_scorer_id: string;
      home_assist: string;
      home_assist_id: string;
      score: string;
      away_scorer: string;
      away_scorer_id: string;
      away_assist: string;
      away_assist_id: string;
      info: string;
      info_time: string;
  }
   interface Substitute {
      time: string;
      home_scorer: any;
      home_assist: string;
      score: string;
      away_scorer: any;
      away_assist: string;
      info: string;
      info_time: string;
  }
   interface Card {
      time: string;
      home_fault: string;
      card: string;
      away_fault: string;
      info: string;
      home_player_id: string;
      away_player_id: string;
      info_time: string;
  }
   interface HomeTeam {
      starting_lineups: any[];
      substitutes: any[];
      coaches: any[];
      missing_players: any[];
  }
   interface AwayTeam {
      starting_lineups: any[];
      substitutes: any[];
      coaches: any[];
      missing_players: any[];
  }
   interface Lineups {
      home_team: HomeTeam;
      away_team: AwayTeam;
  }
   interface Statistic {
      type: string;
      home: string;
      away: string;
  }
   interface Result {
      event_key: number;
      event_date: string;
      event_time: string;
      event_home_team?: string;
      home_team_key: number;
      event_away_team?: string;
      away_team_key: number;
      event_halftime_result: string;
      event_final_result: string;
      event_ft_result: string;
      event_penalty_result: string;
      event_status: string;
      country_name: string;
      league_name: string;
      league_key: number;
      league_round: string;
      league_season: string;
      event_live: string;
      event_stadium: string;
      event_referee: string;
      home_team_logo: string;
      away_team_logo: string;
      event_country_key: number;
      league_logo: string;
      country_logo: string;
      event_home_formation: string;
      event_away_formation: string;
      fk_stage_key: number;
      stage_name: string;
      league_group?: any;
      goalscorers: Goalscorer[];
      substitutes: Substitute[];
      cards: Card[];
      lineups: Lineups;
      statistics: Statistic[];
  }
   interface liveScore {
      success?: number;
      result?: Result[];
  }

// }

const apiKey = "581fb55ff92d00056049811d83a45652c46ae3ff89ec0166c24366d92d25a22c"
function Card(): JSX.Element {
const [teams, setTeams] = useState<liveScore>({});
const counter = 2;

    // const apiKey = "5aa9fcce24396558941310cd46d3a4499e45318738e277271468dd16c1e5e412"
//     let homeTeamImage ;
//     let awayTeamImage ;
    
//     async function getLiveScores(){
//         const liveScores = await fetch(`https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`).then(res => res.json());
//     //         // let homeTeamName = document.querySelector("#main-event-home-team-name");
//     //         // homeTeamName.innerText = val.liveScores[0].  event_home_team;
// console.log(liveScores.result[0].event_home_team);

//         homeTeamImage = liveScores.result[0].event_home_team
//         awayTeamImage = liveScores.result[0].event_away_team
//     // return liveScores;
//     //         // let awayTeamName = document.querySelector("#main-event-away-team-name");
//     //         // awayTeamName.innerText = val.liveScores[0].event_away_team;
// }
// getLiveScores();


useEffect(() => {
  getApiDataLastMonth().then(res => {
    setTeams(res)
    console.log(res.result);
  });
  
}, []);

// Function to collect data
// const getApiData = async () => {
//   const response:[] = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
//   ).then((response) => response.json());

//   setUsers(response);
// };



// goalsscorers - need to change to modal or collape
function getScores(game: any) {
  let home_scorers = []
  let away_scorers = []
  for(let i = 0; i < game.goalscorers.length; i++){
    if(game.goalscorers[i].home_scorer){
      home_scorers.push(game.goalscorers[i].home_scorer? game.goalscorers[i].home_scorer : <></> )
    } else if(game.goalscorers[i].away_scorers){

      away_scorers.push(game.goalscorers[i].away_scorers? game.goalscorers[i].away_scorers : <></> )
    } 

    if(home_scorers.length === 0){
      home_scorers.push("No Goals")
    } else if(away_scorers.length === 0){
      away_scorers.push("No Goals")
    } 
  }

  // alert(`Home: ` + home_scorers `\n` + "Away: " + away_scorers )
  alert(`${game.event_home_team}: ${home_scorers} \n  ${game.event_away_team}: ${away_scorers} `)
  
//  return console.log(parameter)
}




  // regular api
// async function getApiData() {
//   const response:liveScore = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
//   ).then((response) => response.json());


// async function getApiData() {
//   const response:liveScore = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Livescore&countryId=6&APIkey=${apiKey}`
//   ).then((response) => response.json());




//country id 62 = israel
//country id 6 = spain


async function getApiDataLastMonth() {
  const response:liveScore = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Fixtures&countryId=62&APIkey=${apiKey}&from=2022-10-01&to=2022-11-06`
  ).then((response) => response.json());



  
    return response;
}


let teamsMap = teams.result;
// return (
  return ( teams.result? 
      // {teamsMap.map((team) => console.log(team))}
      <div className="Card">
    {/* <p>{teams.map((team) => {team.event_key})}</p> */}
    <div className="info-container">

    <div className="home-team-image team">
      <ul>
      {teamsMap? teamsMap.map((team) =>
       <li>{team.country_name}</li>): <></>}
      </ul>
        {teams.result[counter].event_home_team}
        <img className="team-logo" src={teams.result[counter].home_team_logo} alt="" />
      </div>
      <div className="score-container">
         VS
         <span className="score-live" >{teams.result[counter].event_final_result}</span>
         <span>{teams.result[counter].event_status}'</span>
      </div>
    <div className="home-team-image team">{teams.result[counter].event_away_team}
        <img className="team-logo" src={teams.result[counter].away_team_logo} alt="" />
    </div>
  </div>

    {/* <button onClick={getScores(teams.result[counter].goalscorers)}>click */}
    <div className="statistics-container">
    <button onClick={() => getScores(teams.result? teams.result[counter] : "No Goals")}>Goals</button>
    </div>
    {/* <button onClick={() => {teams.result? teams.result[counter].goalscorers.length: <></>}}>click</button> */}

     {/* {users.result[counter].event_key ?  
     <li key={users.result[counter].country_name}>{users.result[counter].country_name}</li> : <></>
      }
    </ul> */}
  </div>
    : <></>)
// return (teams.result?

//     <div className="Card">
//       {/* <p>{teams.map((team) => {team.event_key})}</p> */}
//       <div className="info-container">

//       <div className="home-team-image team">
        
//           {teams.result[counter].event_home_team}
//           <img className="team-logo" src={teams.result[counter].home_team_logo} alt="" />
//         </div>
//         <div className="score-container">
//            VS
//            <span className="score-live" >{teams.result[counter].event_final_result}</span>
//            <span>{teams.result[counter].event_status}'</span>
//         </div>
//       <div className="home-team-image team">{teams.result[counter].event_away_team}
//           <img className="team-logo" src={teams.result[counter].away_team_logo} alt="" />
//       </div>
//     </div>

//       {/* <button onClick={getScores(teams.result[counter].goalscorers)}>click */}
//       <div className="statistics-container">
//       <button onClick={() => getScores(teams.result? teams.result[counter] : "No Goals")}>Goals</button>
//       </div>
//       {/* <button onClick={() => {teams.result? teams.result[counter].goalscorers.length: <></>}}>click</button> */}

//        {/* {users.result[counter].event_key ?  
//        <li key={users.result[counter].country_name}>{users.result[counter].country_name}</li> : <></>
//         }
//       </ul> */}
//     </div> : <></>
//     // }

//     // <div className="Card">
//     //     <div className="home-team-image">Israel</div>
//     //     VS
//     //     <div className="home-team-image">{}</div>
//     // </div>
// );
    
};

export default Card;


