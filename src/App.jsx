import './App.css'
//import Title from './Components/Title'
import TeamDropdown from './Components/TeamDropdown'
import Title from './Components/Title';
//import Psychic from './ESPN/Client'
import Client from './ESPN/Client'
import 'reflect-metadata'

function App() {

  //var members = Client.getLeagueTeams('2023');
  
 /*  const bestLineups = Psychic.runForWeek({ seasonId: 2019, matchupPeriodId: 4, scoringPeriodId: 4 }).then((result) => {
    console.log(result);
    return result;
  }); */

  //const teams = Psychic.getTeamsAtWeek ({seasonId: 2022, scoringPeriodId: 4});
  

  //var parsedJson = JSON.parse(response);
  //console.log(parsedJson)

  //console.log(`App: received ${members.length} teams`);
  return (
    <>
      <div>
        <Title />
      </div>
      <div>
      <TeamDropdown />
      </div>
    </>
  )
}

export default App
