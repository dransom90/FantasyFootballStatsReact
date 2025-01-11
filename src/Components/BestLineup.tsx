import React, { useState } from "react";
import Client from "espn-fantasy-football-api";

type BestLineupProps = {
  showComponent: boolean;
  actualScore: number;
  optimalScore: number;
};

const BestLineup: React.FC<BestLineupProps> = ({
  showComponent,
  actualScore,
  optimalScore,
}: BestLineupProps): React.JSX.Element => {
  if (!showComponent) return <></>;

  const p1 = `You scored ${actualScore} points this week.`;
  const p2 = `Your optimal score was ${optimalScore}.`;
  let analysis = "";
  if (optimalScore === actualScore) {
    analysis =
      "You aced your lineup this week. Apparently you're pretty good at this fantasy thing. Or your team sucks and you had no other options.";
  }

  if (optimalScore - actualScore <= 10) {
    analysis = "Not bad...";
  } else if (optimalScore - actualScore <= 20) {
    analysis = "Pay more attention next week.";
  } else if (optimalScore - actualScore > 20)
    analysis =
      "Wow. You put on a masterclass this week on how not to play this game.";

  return (
    <>
      <p>You scored {actualScore} points this week.</p>
      <p>You could have scored {optimalScore} points this week.</p>
      <h3>Analysis</h3>
      <p>{analysis}</p>
    </>
  );
};

export default BestLineup;
