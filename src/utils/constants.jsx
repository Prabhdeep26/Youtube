export const YOUTUBE_VIDEOS_API =
	`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` +
	import.meta.env.VITE_YT_API_KEY;

export const YOUTUBE_SEARCH_API =
	"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 50;

export const YOUTUBE_SEARCH_LIST_API =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=" +
	import.meta.env.VITE_YT_API_KEY;