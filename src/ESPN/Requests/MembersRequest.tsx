import { Member } from "../Member";
import { League } from "../League";
import axios from "axios";
import { plainToInstance } from "class-transformer";

class MembersRequest {
  static getMembers(year: string): Member[] {
    let teams: Member[] = [];

    fetch(
      `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/1525510`
    )
      .then((response) => response.json())
      .then((json) => {
        var league = plainToInstance(League, json);
        console.log(`league has ${league.members.length} teams`);
        teams = league.members;
        console.log("returning fetch response");
        return teams;
      })
      .catch((error) => console.error(error));

    console.log("returning default response");
    return teams;
  }
  /* static async getMembers(year: string): Promise<Member[]> {
    let teams: Member[] = [];

    await axios
      .get(
        `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/1525510`
      )
      .then(function (response) {
        const contentType = response.headers["content-type"];
        const data = response.data;

        // handle success
        var league = plainToInstance(League, data);
        console.log(`league has ${league.members.length} teams`);
        teams = league.members;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        console.log("error caught, returning empty array");
        return [] as Member[];
      });

    return teams;
  } */
}

export default MembersRequest;
