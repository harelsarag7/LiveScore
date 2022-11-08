import "./Card.css";
// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
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
   export interface LiveScore {
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


function Card( { game } : { game: LiveScore }): JSX.Element {




return (
  <div className="Card" key={game.event_key}>

    <ul>
      <li>{game.event_home_team}</li>
      <li>{game.event_away_team}</li>
    </ul>
  </div>
)


}



export default Card;




// // let teamsMap = teams.result;
// // return (
//   return ( teams.result? 
//     // {teamsMap.map((team) => console.log(team))}
//     <div className="Card">
//   {/* <p>{teams.map((team) => {team.event_key})}</p> */}
//   <div className="info-container">

//   <div className="home-team-image team">
//     <ul>
//     {teamsMap? teamsMap.map((game) =>
//      <li>{game.country_name}</li>): <></>}
//     </ul>
//       {props.result[0].event_home_team}
//       <img className="team-logo" src={teams.result[counter].home_team_logo} alt="" />
//     </div>
//     <div className="score-container">
//        VS
//        <span className="score-live" >{teams.result[counter].event_final_result}</span>
//        <span>{teams.result[counter].event_status}'</span>
//     </div>
//   <div className="home-team-image team">{teams.result[counter].event_away_team}
//       <img className="team-logo" src={teams.result[counter].away_team_logo} alt="" />
//   </div>
// </div>

//   {/* <button onClick={getScores(teams.result[counter].goalscorers)}>click */}
//   <div className="statistics-container">
//   <button onClick={() => getScores(teams.result? teams.result[counter] : "No Goals")}>Goals</button>
//   </div>
//   {/* <button onClick={() => {teams.result? teams.result[counter].goalscorers.length: <></>}}>click</button> */}

//    {/* {users.result[counter].event_key ?  
//    <li key={users.result[counter].country_name}>{users.result[counter].country_name}</li> : <></>
//     }
//   </ul> */}
// </div>
//   : <></>)

// };