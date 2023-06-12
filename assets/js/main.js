import Twitch from 'https://player.twitch.tv/js/embed/v1.js';
import runTwitchEmbed from './twitchEmbed.js';
import runYoutubeEmbed from './twitchEmbed.js';

async function getData() {
    try {
        const url = 'https://github.com/Velyna/website/data/videos.json';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetching Data Failed: ', error);
        return;
    }
}

window.onload = async (event) => {
    console.log('Fetching External Resources...');
    let videoData = await getData();

    console.log('Loading Client Resources...');
    const embedElement = document.getElementById("twitch");

    try {
        if (embedElement) {
            runTwitchEmbed(Twitch);
            runYoutubeEmbed(videoData);
        } else {
            throw "Twitch Embed Element Undefined."
        }
    } catch (error) {
        console.log('Client Error: ', error);
    }
};
