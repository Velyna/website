function runYoutubeEmbed(data) {

    function generateVideoListRow(videoListElements) {
        try {
            const videoListRowTemplate = `<div class="row-padding">${videoListElements}</div>`

            return videoListRowTemplate;

        } catch (error) {
            console.log('Youtube Error - Video List Row Generation Failed: ');
            return;
        }
    }

    function generateThumbnail(data) {
        try {
            const embedURL = data.url;
            const thumbnailTemplate = `
                <div class="col l3 m6 margin-bottom">
                    <div class="display-container">
                        <iframe width="340" height="215" src="${embedURL}" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            `

            return thumbnailTemplate;

        } catch (error) {
            console.log('Youtube Error - Thumbnail Embed Generation Failed: ');
            return;
        }
    }

    try {
        const youtubeVideoListID = document.getElementById('youtube-videos');
        const youtubeVideoListRows = [];
        const videoList1 = [];
        const videoList2 = [];
    
        for (let i = 0; i < 7; i++) {
            if (i>3) {
                videoList2.push(generateThumbnail(data[i].url));
            } else {
                videoList1.push(generateThumbnail(data[i].url));
            }
        }

        youtubeVideoListRows.push(generateVideoListRow(videoList1.join('\n')));
        youtubeVideoListRows.push(generateVideoListRow(videoList2.join('\n')));


        if (youtubeVideoListRows.length === 2) {
            youtubeVideoListID.innerHTML = youtubeVideoListRows.join('\n');
        } else {
            youtubeVideoListID.innerHTML = '';
        }

    } catch (error) {
        console.log('Youtube Error: ', error);
    }
};

export { runYoutubeEmbed };