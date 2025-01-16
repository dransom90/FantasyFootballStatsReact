export interface Root {
  draftDetail: DraftDetail;
  gameId: number;
  id: number;
  schedule: Schedule[];
  scoringPeriodId: number;
  seasonId: number;
  segmentId: number;
  status: Status;
}

export interface DraftDetail {
  drafted: boolean;
  inProgress: boolean;
}

export interface Schedule {
  away?: Away;
  home: Home;
  id: number;
  matchupPeriodId: number;
  playoffTierType: string;
  winner: string;
}

export interface Away {
  adjustment: number;
  cumulativeScore: CumulativeScore;
  pointsByScoringPeriod: PointsByScoringPeriod;
  teamId: number;
  tiebreak: number;
  totalPoints: number;
  totalPointsLive?: number;
}

export interface CumulativeScore {
  losses: number;
  statBySlot: any;
  ties: number;
  wins: number;
}

export interface PointsByScoringPeriod {
  "17"?: number;
  "16"?: number;
  "15"?: number;
  "1"?: number;
  "2"?: number;
  "3"?: number;
  "4"?: number;
  "5"?: number;
  "6"?: number;
  "7"?: number;
  "8"?: number;
  "9"?: number;
  "10"?: number;
  "11"?: number;
  "12"?: number;
  "13"?: number;
  "14"?: number;
}

export interface Home {
  adjustment: number;
  cumulativeScore: CumulativeScore2;
  pointsByScoringPeriod: PointsByScoringPeriod2;
  teamId: number;
  tiebreak: number;
  totalPoints: number;
  totalPointsLive?: number;
}

export interface CumulativeScore2 {
  losses: number;
  statBySlot: any;
  ties: number;
  wins: number;
}

export interface PointsByScoringPeriod2 {
  "1"?: number;
  "2"?: number;
  "3"?: number;
  "4"?: number;
  "5"?: number;
  "6"?: number;
  "7"?: number;
  "8"?: number;
  "9"?: number;
  "10"?: number;
  "11"?: number;
  "12"?: number;
  "13"?: number;
  "14"?: number;
  "15"?: number;
  "16"?: number;
  "17"?: number;
}

export interface Status {
  activatedDate: number;
  createdAsLeagueType: number;
  currentLeagueType: number;
  currentMatchupPeriod: number;
  finalScoringPeriod: number;
  firstScoringPeriod: number;
  isActive: boolean;
  isExpired: boolean;
  isFull: boolean;
  isPlayoffMatchupEdited: boolean;
  isToBeDeleted: boolean;
  isViewable: boolean;
  isWaiverOrderEdited: boolean;
  latestScoringPeriod: number;
  previousSeasons: number[];
  standingsUpdateDate: number;
  teamsJoined: number;
  transactionScoringPeriod: number;
  waiverLastExecutionDate: number;
  waiverProcessStatus: WaiverProcessStatus;
}

export interface WaiverProcessStatus {
  "2023-09-05T07:11:18.702+00:00": number;
  "2023-09-07T07:15:59.002+00:00": number;
  "2023-09-13T07:40:18.105+00:00": number;
  "2023-09-14T08:09:06.417+00:00": number;
  "2023-09-20T07:56:01.557+00:00": number;
  "2023-09-22T07:34:35.011+00:00": number;
  "2023-09-23T07:36:38.007+00:00": number;
  "2023-09-27T08:01:44.075+00:00": number;
  "2023-09-28T08:17:48.634+00:00": number;
  "2023-10-04T07:12:56.340+00:00": number;
  "2023-10-05T08:13:05.268+00:00": number;
  "2023-10-08T08:03:28.817+00:00": number;
  "2023-10-11T08:13:34.142+00:00": number;
  "2023-10-12T08:06:44.574+00:00": number;
  "2023-10-18T09:53:14.073+00:00": number;
  "2023-10-19T07:41:21.483+00:00": number;
  "2023-10-20T07:32:21.694+00:00": number;
  "2023-10-25T07:28:50.626+00:00": number;
  "2023-10-27T07:26:57.610+00:00": number;
  "2023-11-01T08:10:18.324+00:00": number;
  "2023-11-02T09:28:22.747+00:00": number;
  "2023-11-08T09:55:03.812+00:00": number;
  "2023-11-09T08:18:31.148+00:00": number;
  "2023-11-10T10:06:00.336+00:00": number;
  "2023-11-11T09:07:34.958+00:00": number;
  "2023-11-15T08:38:06.276+00:00": number;
  "2023-11-16T09:30:52.850+00:00": number;
  "2023-11-17T09:18:39.260+00:00": number;
  "2023-11-18T08:02:57.070+00:00": number;
  "2023-11-22T08:53:02.698+00:00": number;
  "2023-11-23T08:29:09.645+00:00": number;
  "2023-11-29T10:23:39.330+00:00": number;
  "2023-11-30T10:11:32.890+00:00": number;
  "2023-12-02T10:21:31.015+00:00": number;
  "2023-12-06T08:20:16.093+00:00": number;
  "2023-12-07T08:32:36.224+00:00": number;
  "2023-12-08T09:01:53.075+00:00": number;
  "2023-12-13T10:03:06.138+00:00": number;
  "2023-12-14T08:38:00.046+00:00": number;
  "2023-12-15T10:43:43.158+00:00": number;
  "2023-12-16T08:59:24.698+00:00": number;
  "2023-12-20T10:26:39.434+00:00": number;
  "2023-12-27T08:30:53.405+00:00": number;
}
