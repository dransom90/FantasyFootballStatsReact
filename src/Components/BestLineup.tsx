import Psychic from "../ESPN/Client";

Psychic.runForWeek({
  seasonId: 2023,
  matchupPeriodId: 4,
  scoringPeriodId: 4,
}).then((result) => {
  console.log(result);
  return result;
});
