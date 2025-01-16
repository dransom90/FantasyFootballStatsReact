import { Team } from "./Requests/TeamRequest";

class TeamInfo{
    team: Team;
    constructor(team: Team){
        if(team != undefined)
            this.team = team;
    }

    
}
