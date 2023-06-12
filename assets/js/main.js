async function getData() {
    try {
        const url = 'https://www.velyna.net/data/videos.json';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetching Data Failed: ', error);
        return;
    }
}

window.onload = async (event) => {
    try {
        console.log('Youtube: Fetching External Resources...');
        let videoData = await getData();
    
        console.log('Youtube: Loading Client Resources...');
        const embedElement = document.getElementById("youtube-videos");
    
        if (embedElement) {
            console.log('Youtube: Generating Video List...');
            runYoutubeEmbed(videoData, embedElement);
            runTwitchEmbed();

        } else {
            throw "Client Onload Event Failed."
        }
    } catch (error) {
        console.log('Client Error: ', error);
    }
};