import type {
	APIBattleList,
	APIChallengeChainsList,
	APIClan,
	APIClanList,
	APIClanMemberList,
	APIClanRankingList,
	APIClanWarLog,
	APICurrentRiverRace,
	APIItemList,
	APILadderTournamentList,
	APILadderTournamentRankingList,
	APILeagueSeason,
	APILeagueSeasonList,
	APILocation,
	APILocationList,
	APIPlayer,
	APIPlayerRankingList,
	APIRiverRaceLog,
	APITournament,
	APITournamentHeaderList,
	APIUpcomingChests,
} from ".";

/**
 * Values of an object
 */
export type ValueOf<T> = T extends (infer R)[] | Map<any, infer R>
	? R
	: T[keyof T];

/**
 * A list of API routes
 */
export const Routes = {
	/**
	 * Retrieve clan's clan war log.
	 * @param clanTag - Tag of the clan
	 * @deprecated **This API endpoint has been temporarily disabled, possibilities to bring it back are being investigated.
	 * Use {@link Routes.RiverRaceLog} instead**
	 */
	WarLog: (clanTag: string) => `/clans/${clanTag}/warlog` as const,

	/**
	 * Search all clans by name and/or filtering the results using various criteria.
	 * At least one filtering criteria must be defined and if name is used as part of search, it is required to be at least three characters long.
	 * It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the future releases of the API.
	 */
	Clans: () => "/clans" as const,

	/**
	 * Retrieve clan's river race log.
	 * @param clanTag - Tag of the clan
	 */
	RiverRaceLog: (clanTag: string) => `/clans/${clanTag}/riverracelog` as const,

	/**
	 * Get information about a single clan by clan tag.
	 * Clan tags can be found using clan search operation.
	 * @param clanTag - Tag of the clan
	 */
	Clan: (clanTag: string) => `/clans/${clanTag}` as const,

	/**
	 * List clan members.
	 * @param clanTag - Tag of the clan
	 */
	ClanMembers: (clanTag: string) => `/clans/${clanTag}/members` as const,

	/**
	 * Retrieve information about clan's current river race.
	 * @param clanTag - Tag of the clan
	 */
	CurrentRiverRace: (clanTag: string) =>
		`/clans/${clanTag}/currentriverrace` as const,

	/**
	 * Get information about a single player by player tag.
	 * Player tags can be found either in game or by from clan member lists.
	 * @param playerTag - Tag of the player
	 */
	Player: (playerTag: string) => `/players/${playerTag}` as const,

	/**
	 * Get list of reward chests that the player will receive next in the game.
	 * @param playerTag - Tag of the player
	 */
	UpcomingChests: (playerTag: string) =>
		`/players/${playerTag}/upcomingchests` as const,

	/**
	 * Get list of recent battles for a player.
	 * @param playerTag - Tag of the player
	 */
	BattleLog: (playerTag: string) => `/players/${playerTag}/battlelog` as const,

	/**
	 * Get list of available cards.
	 */
	Cards: () => "/cards" as const,

	/**
	 * Search all tournaments by name.
	 * It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the future releases of the API.
	 */
	Tournaments: () => "/tournaments" as const,

	/**
	 * Get information about a single tournament by a tournament tag.
	 * @param tournamentTag - Tag of the tournament to retrieve
	 */
	Tournament: (tournamentTag: string) =>
		`/tournaments/${tournamentTag}` as const,

	/**
	 * Get clan rankings for a specific location.
	 * @param locationId - Identifier of the location to retrieve
	 */
	ClanRankings: (locationId: number | `${number}`) =>
		`/locations/${locationId}/rankings/clans` as const,

	/**
	 * Get player rankings for a specific location.
	 * @param locationId - Identifier of the location to retrieve
	 */
	PlayerRankings: (locationId: number | `${number}`) =>
		`/locations/${locationId}/rankings/players` as const,

	/**
	 * Get clan war rankings for a specific location.
	 * @param locationId - Identifier of the location to retrieve
	 */
	ClanWarRankings: (locationId: number | `${number}`) =>
		`/locations/${locationId}/rankings/clanwars` as const,

	/**
	 * Get top player league season.
	 * @param seasonId - Identifier of the season to retrieve
	 */
	Season: (seasonId: string) =>
		`/locations/global/seasons/${seasonId}` as const,

	/**
	 * Get top player rankings for a season.
	 * @param seasonId - Identifier of the season to retrieve
	 */
	TopPlayerRankings: (seasonId: string) =>
		`/locations/global/seasons/${seasonId}/rankings/players` as const,

	/**
	 * Lists top player league seasons.
	 */
	Seasons: () => "/locations/global/seasons" as const,

	/**
	 * List locations.
	 */
	Locations: () => "/locations" as const,

	/**
	 * Get information about specific location.
	 * @param locationId - Identifier of the location to retrieve
	 */
	Location: (locationId: number | `${number}`) =>
		`/locations/${locationId}` as const,

	/**
	 * Get global tournament rankings.
	 * @param tournamentTag - Tag of the tournament to retrieve
	 */
	GlobalTournamentRankings: (tournamentTag: string) =>
		`/locations/global/rankings/tournaments/${tournamentTag}` as const,

	/**
	 * Get current and upcoming challenges.
	 * Challenges are returned as chains.
	 * Chains are either of type singleChallenge or challengeChain.
	 * Possible types for prizes are: none, cardStack, chest, cardStackRandom, resource, tradeToken, consumable.
	 */
	Challenges: () => "/challenges" as const,

	/**
	 * Get list of global tournaments.
	 */
	GlobalTournaments: () => "/globaltournaments" as const,
} as const;
export type Routes = {
	[K in keyof typeof Routes]: ReturnType<typeof Routes[K]>;
};

/**
 * The path for a request to the API
 */
export type Path = ValueOf<Routes>;

/**
 * The response type of the API for every route.
 */
export type ResponseType<T extends ValueOf<Routes>> = T extends Routes["WarLog"]
	? APIClanWarLog
	: T extends Routes["Clans"]
	? APIClanList
	: T extends Routes["RiverRaceLog"]
	? APIRiverRaceLog
	: T extends Routes["ClanMembers"]
	? APIClanMemberList
	: T extends Routes["CurrentRiverRace"]
	? APICurrentRiverRace
	: T extends Routes["UpcomingChests"]
	? APIUpcomingChests
	: T extends Routes["BattleLog"]
	? APIBattleList
	: T extends Routes["Cards"]
	? APIItemList
	: T extends Routes["Tournaments"]
	? APITournamentHeaderList
	: T extends Routes["ClanRankings"]
	? APIClanRankingList
	: T extends Routes["PlayerRankings"]
	? APIPlayerRankingList
	: T extends Routes["ClanWarRankings"]
	? APIClanRankingList
	: T extends Routes["TopPlayerRankings"]
	? APIPlayerRankingList
	: T extends Routes["Seasons"]
	? APILeagueSeasonList
	: T extends Routes["Locations"]
	? APILocationList
	: T extends Routes["Challenges"]
	? APIChallengeChainsList
	: T extends Routes["GlobalTournaments"]
	? APILadderTournamentList
	: T extends Routes["Clan"]
	? APIClan
	: T extends Routes["Player"]
	? APIPlayer
	: T extends Routes["Tournament"]
	? APITournament
	: T extends Routes["Season"]
	? APILeagueSeason
	: T extends Routes["Location"]
	? APILocation
	: T extends Routes["GlobalTournamentRankings"]
	? APILadderTournamentRankingList
	: never;

export default Routes;
