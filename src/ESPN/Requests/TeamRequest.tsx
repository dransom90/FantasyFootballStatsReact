export interface Root {
    draftDetail: DraftDetail
    gameId: number
    id: number
    members: Member[]
    scoringPeriodId: number
    seasonId: number
    segmentId: number
    status: Status
    teams: Team[]
  }
  
  export interface DraftDetail {
    drafted: boolean
    inProgress: boolean
  }
  
  export interface Member {
    displayName: string
    firstName: string
    id: string
    lastName: string
    notificationSettings: NotificationSetting[]
  }
  
  export interface NotificationSetting {
    enabled: boolean
    id: string
    type: string
  }
  
  export interface Status {
    activatedDate: number
    createdAsLeagueType: number
    currentLeagueType: number
    currentMatchupPeriod: number
    finalScoringPeriod: number
    firstScoringPeriod: number
    isActive: boolean
    isExpired: boolean
    isFull: boolean
    isPlayoffMatchupEdited: boolean
    isToBeDeleted: boolean
    isViewable: boolean
    isWaiverOrderEdited: boolean
    latestScoringPeriod: number
    previousSeasons: number[]
    teamsJoined: number
    transactionScoringPeriod: number
    waiverLastExecutionDate: number
    waiverProcessStatus: WaiverProcessStatus
  }
  
  export interface WaiverProcessStatus {}
  
  export interface Team {
    abbrev: string
    currentProjectedRank: number
    divisionId: number
    draftDayProjectedRank: number
    id: number
    isActive: boolean
    logo: string
    logoType: string
    name: string
    owners: string[]
    playoffSeed: number
    points: number
    pointsAdjusted: number
    pointsDelta: number
    primaryOwner?: string
    rankCalculatedFinal: number
    rankFinal: number
    record: Record
    tradeBlock: TradeBlock
    transactionCounter: TransactionCounter
    waiverRank: number
    autoPilotStatus?: AutoPilotStatus
  }
  
  export interface Record {
    away: Away
    division: Division
    home: Home
    overall: Overall
  }
  
  export interface Away {
    gamesBack: number
    losses: number
    percentage: number
    pointsAgainst: number
    pointsFor: number
    streakLength: number
    streakType: string
    ties: number
    wins: number
  }
  
  export interface Division {
    gamesBack: number
    losses: number
    percentage: number
    pointsAgainst: number
    pointsFor: number
    streakLength: number
    streakType: string
    ties: number
    wins: number
  }
  
  export interface Home {
    gamesBack: number
    losses: number
    percentage: number
    pointsAgainst: number
    pointsFor: number
    streakLength: number
    streakType: string
    ties: number
    wins: number
  }
  
  export interface Overall {
    gamesBack: number
    losses: number
    percentage: number
    pointsAgainst: number
    pointsFor: number
    streakLength: number
    streakType: string
    ties: number
    wins: number
  }
  
  export interface TradeBlock {}
  
  export interface TransactionCounter {
    acquisitionBudgetSpent: number
    acquisitions: number
    drops: number
    matchupAcquisitionTotals: MatchupAcquisitionTotals
    misc: number
    moveToActive: number
    moveToIR: number
    paid: number
    teamCharges: number
    trades: number
  }
  
  export interface MatchupAcquisitionTotals {}
  
  export interface AutoPilotStatus {
    enabled: boolean
  }
  