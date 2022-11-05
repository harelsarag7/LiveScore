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
      event_home_team: string;
      home_team_key: number;
      event_away_team: string;
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
const [users, setUsers] = useState<liveScore>({});

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
  getApiData().then(res => {
    setUsers(res)
  });
}, []);

// Function to collect data
// const getApiData = async () => {
//   const response:[] = await fetch(
//     `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
//   ).then((response) => response.json());

//   setUsers(response);
// };

async function getApiData() {
  const response:liveScore = await fetch(
    `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
  ).then((response) => response.json());
  console.log(response.result);
  
    return response;
}



return ( users[0].event_key ?

    <div className="Card">
      event key: {users[0].event_key}
      {/* <ul> */}
      {/* {users.result[0].event_key ?  
       <li key={users.result[0].country_name}>{users.result[0].country_name}</li> : <></>
        }
      </ul> */}
    </div> : <></>


    // <div className="Card">
    //     <div className="home-team-image">Israel</div>
    //     VS
    //     <div className="home-team-image">{}</div>
    // </div>
);
    
};

export default Card;


