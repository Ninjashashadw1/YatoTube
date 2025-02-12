const axios = require("axios");
const yts = require("yt-search");

const audioQualities = ["92", "128", "256", "320"];
const videoQualities = ["144", "360", "480", "720", "1080"];

function getYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|embed\/|user\/[^\/\n\s]+\/)?(?:watch\?v=|v%3D|embed%2F|video%2F)?|youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/|youtube\.com\/playlist\?list=)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
async function searchYouTube(query) {
    try {
        const data = await yts(query);
        return {
            status: true,
            creator: "@NinjaShadow/YatoTube",
            results: data.all.map((video) => ({
                title: video.title,
                url: video.url,
                thumbnail: video.thumbnail,
                views: video.views,
                timestamp: video.timestamp,
                ago: video.ago,
            })),
        };
    } catch (error) {
        return {
            status: false,
            message: error.message,
        };
    }
}
async function saveTube(link, quality, isAudio) {
    try {
        const headers = {
            accept: '*/*',
            referer: 'https://ytshorts.savetube.me/',
            origin: 'https://ytshorts.savetube.me/',
            'user-agent': 'NinjaShadowBot/1.0.0',
            'Content-Type': 'application/json',
        };

        const cdnUrl = 'https://cdn54.savetube.su';
        const videoInfoResponse = await axios.post(`${cdnUrl}/info`, { url: link }, { headers });
        const videoInfo = videoInfoResponse.data.data;

        const downloadType = isAudio ? "audio" : "video";
        const body = {
            downloadType,
            quality,
            key: videoInfo.key,
        };

        const downloadResponse = await axios.post(`${cdnUrl}/download`, body, { headers });
        const downloadData = downloadResponse.data.data;

        return {
            status: true,
            quality: isAudio ? `${quality}kbps` : `${quality}p`,
            availableQuality: isAudio ? audioQualities : videoQualities,
            url: downloadData.downloadUrl,
            filename: `${videoInfo.title} (${isAudio ? `${quality}kbps` : `${quality}p`}).${isAudio ? 'mp3' : 'mp4'}`,
        };
    } catch (error) {
        return {
            status: false,
            message: error.message,
        };
    }
}
async function downloadMP3(link, format = 128) {
    const videoId = getYouTubeVideoId(link);
    if (!videoId) {
        return { status: false, message: "Invalid YouTube URL" };
    }

    const quality = audioQualities.includes(format.toString()) ? format : 128;
    try {
        const response = await saveTube(link, quality, true);

        return {
            status: true,
            creator: "@NinjaShadow/YatoTube",
            metadata: { url: link, id: videoId },
            download: response,
        };
    } catch (error) {
        return {
            status: false,
            message: error.message,
        };
    }
}
async function downloadMP4(link, format = 360) {
    const videoId = getYouTubeVideoId(link);
    if (!videoId) {
        return { status: false, message: "Invalid YouTube URL" };
    }

    const quality = videoQualities.includes(format.toString()) ? format : 360;
    try {
        const response = await saveTube(link, quality, false);

        return {
            status: true,
            creator: "@NinjaShadow/YatoTube",
            metadata: { url: link, id: videoId },
            download: response,
        };
    } catch (error) {
        return {
            status: false,
            message: error.message,
        };
    }
}

async function fetchTranscript(link) {
    try {
        const response = await axios.get('https://ytb2mp4.com/api/fetch-transcript', {
            params: { url: link },
            headers: {
                'User-Agent': 'NinjaShadowBot/1.0.0',
                Referer: 'https://ytb2mp4.com/youtube-transcript',
            },
        });
        return {
            status: true,
            creator: "@NinjaShadow/YatoTube",
            transcript: response.data.transcript,
        };
    } catch (error) {
        return {
            status: false,
            message: error.message,
        };
    }
}

module.exports = {
    searchYouTube,
    downloadMP3,
    downloadMP4,
    fetchTranscript,
};
