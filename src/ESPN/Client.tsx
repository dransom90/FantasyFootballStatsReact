/* import _ from "lodash";
import { Client } from "espn-fantasy-football-api"; // web development build
import Team from '../ESPN/Team'
const myClient = new Client({ leagueId: 1525510 }); */

import axios from "axios";
import { plainToInstance } from "class-transformer";
import { League } from "./League";
import { Member } from "./Member";
import MembersRequest from "./Requests/MembersRequest.tsx";

import { Data } from "./Data";

class Client {
  static getLeagueTeams(year: string): Member[] {
    let teams: Member[] = [];
    let league: League;

    //return Promise.resolve(MembersRequest.getMembers(year));
    //let result: Promise<Member> = await MembersRequest.getMembers(year);

    teams = MembersRequest.getMembers(year);
    console.log(`teams has ${teams.length} `);
    return teams;
  }
}

export default Client;

/* class Psychic {
  static filterPosition(boxscorePlayer, position) {
    return (
      boxscorePlayer.position === position ||
      _.includes(boxscorePlayer.player.eligiblePositions, position)
    );
  }

  static handleNonFlexPosition(lineup, position) {
    const players = lineup.filter((player) =>
      this.filterPosition(player, position)
    );
    const sortedPlayers = _.sortBy(players, ["totalPoints"]);
    return _.last(sortedPlayers);
  }

  static analyzeLineup(lineup, score) {
    let bestSum = 0;
    const bestRoster: [] = [];
    let numChanges = 0;

    const bestQB = this.handleNonFlexPosition(lineup, "QB");
    bestRoster.push(bestQB.player.fullName);
    bestSum += bestQB.totalPoints;
    if (bestQB.position === "Bench") {
      numChanges += 1;
    }

    const bestDefense = this.handleNonFlexPosition(lineup, "D/ST");
    bestRoster.push(bestDefense.player.fullName);
    bestSum += bestDefense.totalPoints;
    if (bestDefense.position === "Bench") {
      numChanges += 1;
    }

    const bestKicker = this.handleNonFlexPosition(lineup, "K");
    bestRoster.push(bestKicker.player.fullName);
    bestSum += bestKicker.totalPoints;
    if (bestKicker.position === "Bench") {
      numChanges += 1;
    }

    const flexPlayers = _.filter(
      lineup,
      (player) =>
        this.filterPosition(player, "RB") ||
        this.filterPosition(player, "WR") ||
        this.filterPosition(player, "TE")
    );
    const sortedFlexPlayers = _.sortBy(flexPlayers, ["totalPoints"]);

    const flexPos = { RB: 2, WR: 2, TE: 1, FLEX: 1 };

    while (_.sum(_.values(flexPos)) && !_.isEmpty(sortedFlexPlayers)) {
      const player = sortedFlexPlayers.pop();
      const acceptPlayer = () => {
        bestRoster.push(player.player.fullName);
        bestSum += player.totalPoints;
        if (player.position === "Bench") {
          numChanges += 1;
        }
      };

      if (flexPos.RB && _.includes(player.player.eligiblePositions, "RB")) {
        acceptPlayer();
        flexPos.RB -= 1;
      } else if (
        flexPos.WR &&
        _.includes(player.player.eligiblePositions, "WR")
      ) {
        acceptPlayer();
        flexPos.WR -= 1;
      } else if (
        flexPos.TE &&
        _.includes(player.player.eligiblePositions, "TE")
      ) {
        acceptPlayer();
        flexPos.TE -= 1;
      } else if (flexPos.FLEX) {
        acceptPlayer();
        flexPos.FLEX -= 1;
      }
    }

    return {
      bestSum,
      bestRoster,
      currentScore: score,
      numChanges,
    };
  }

  static runForWeek({ seasonId, matchupPeriodId, scoringPeriodId }) {
    const bestLineups = {};
    return myClient
      .getBoxscoreForWeek({ seasonId, matchupPeriodId, scoringPeriodId })
      .then((boxes) => {
        _.forEach(boxes, (box) => {
          bestLineups[box.awayTeamId] = this.analyzeLineup(
            box.awayRoster,
            box.awayScore
          );
          bestLineups[box.homeTeamId] = this.analyzeLineup(
            box.homeRoster,
            box.homeScore
          );
        });

        return bestLineups;
      });
  }

  static getTeamsAtWeek({ seasonId, scoringPeriodId }) {
    return myClient.getTeamsAtWeek({
      seasonId,
      scoringPeriodId,
    });
  }
}

export default Psychic; */
