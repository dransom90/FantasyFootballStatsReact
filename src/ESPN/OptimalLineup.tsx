import Player from "../Player";

type OptimalLineup = {
  bestSum: number;
  bestRoster: Player[];
  currentScore: number;
  numChanges: number;
};

export default OptimalLineup;