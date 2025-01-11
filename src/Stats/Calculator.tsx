import _ from "lodash";
import Player from "../Player";
import OptimalLineup from "../ESPN/OptimalLineup.tsx";

class Calculator {
  static calculateOptimalLineup(weekInfo: any, teamId: number): OptimalLineup {
    if (teamId === undefined)
      return { bestSum: 0, bestRoster: [], currentScore: 0, numChanges: 0 };

    let team;
    console.log(`weekInfo length: ${weekInfo.length}`);
    for (let s of weekInfo) {
      if (s.away.teamId == teamId) {
        team = s.away;
        break;
      }
      if (s.home.teamId == teamId) {
        team = s.home;
        break;
      }
    }

    let players = this.flattenPlayer(team);
    let optimal = this.analyzeLineup(players);
    optimal.currentScore = team.rosterForMatchupPeriod.appliedStatTotal;
    return optimal;
  }

  /**
   * Retrieves certain information about a roster's players.
   * @param team Team information from the ESPN server
   * @returns An array of Players. Each player has a position and score
   */
  static flattenPlayer(team: any): Player[] {
    const players: Player[] = [];
    let entries = team.rosterForCurrentScoringPeriod.entries;
    for (let x of entries) {
      console.log(
        `player position: ${x.playerPoolEntry.player.defaultPositionId}`
      );
      let player: Player = {
        score: x.playerPoolEntry.appliedStatTotal,
        position: this.convertPosition(
          x.playerPoolEntry.player.defaultPositionId
        ),
      };
      players.push(player);
    }

    return players;
  }

  static convertPosition(position: number): string {
    switch (position) {
      case 1:
        return "QB";
      case 2:
        return "RB";
      case 3:
        return "WR";
      case 4:
        return "TE";
      case 5:
        return "K";
      case 16:
        return "DST";
      default:
        return "ERROR";
    }
  }

  static analyzeLineup(players: Player[]): OptimalLineup {
    let bestSum = 0;
    const bestRoster: Player[] = [];
    let numChanges = 0;

    const bestQB = this.handleNonFlexPosition(players, "QB");
    bestRoster.push(bestQB);
    bestSum += bestQB.score;

    let index = players.indexOf(bestQB);
    if (index > -1) players.splice(index, 1);

    const bestDST = this.handleNonFlexPosition(players, "DST");
    bestRoster.push(bestDST);
    bestSum += bestDST.score;
    index = players.indexOf(bestDST);
    if (index > -1) players.splice(index, 1);

    const bestKicker = this.handleNonFlexPosition(players, "K");
    bestRoster.push(bestKicker);
    bestSum += bestKicker.score;
    index = players.indexOf(bestKicker);
    if (index > -1) players.splice(index, 1);

    const flexPos = { RB: 2, WR: 2, TE: 1, FLEX: 1 };

    // find RBs
    let rbs = players.filter((x) => x.position === "RB");
    let wrs = players.filter((x) => x.position === "WR");
    let tes = players.filter((x) => x.position === "TE");

    let bestRB = this.findHighestScoringPlayer(rbs);
    bestRoster.push(bestRB);
    bestSum += bestRB.score;
    index = rbs.indexOf(bestRB, 0);
    if (index > -1) rbs.splice(index, 1);

    bestRB = this.findHighestScoringPlayer(rbs);
    bestRoster.push(bestRB);
    bestSum += bestRB.score;
    index = rbs.indexOf(bestRB, 0);
    if (index > -1) rbs.splice(index, 1);

    // find WRs
    let bestWR = this.findHighestScoringPlayer(wrs);
    bestRoster.push(bestWR);
    bestSum += bestWR.score;
    index = wrs.indexOf(bestWR, 0);
    if (index > -1) wrs.splice(index, 1);

    bestWR = this.findHighestScoringPlayer(wrs);
    bestRoster.push(bestWR);
    bestSum += bestWR.score;
    index = wrs.indexOf(bestWR, 0);
    if (index > -1) wrs.splice(index, 1);

    // find TE
    let bestTE = this.findHighestScoringPlayer(tes);
    bestRoster.push(bestTE);
    bestSum += bestTE.score;
    index = tes.indexOf(bestTE, 0);
    if (index > -1) tes.splice(index, 1);

    // find best remaining Flex
    let remainingFlex = [...rbs, ...wrs, ...tes];
    let bestFlex = this.findHighestScoringPlayer(remainingFlex);
    bestRoster.push(bestFlex);
    bestSum += bestFlex.score;

    let optimal: OptimalLineup = {
      bestSum: bestSum,
      bestRoster: bestRoster,
      numChanges: 0,
      currentScore: 0,
    };

    return optimal;
  }

  static handleNonFlexPosition(players: Player[], position: string): Player {
    const eligblePlayers = players.filter(
      (player) => player.position === position
    );

    const sortedPlayers = _.sortBy(eligblePlayers, ["score"]);
    return this.findHighestScoringPlayer(sortedPlayers);
  }

  static findHighestScoringPlayer(players: Player[]): Player {
    return players.reduce((prev, current) =>
      prev && prev.score > current.score ? prev : current
    );
  }
}

export default Calculator;

//Away or Home/rosterForMatchupPeriod/entries[]/playerPoolEntry/player/defaultPositionId
