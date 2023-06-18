function runTwitchEmbed() {

    function initiate() {
        player.addEventListener(Twitch.Player.ONLINE, handleOnline);
        player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
        player.removeEventListener(Twitch.Player.READY, initiate);
    }
    
    function handleOnline() {
        document.getElementById("twitch").classList.remove('hide');
        player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
        player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
        player.setMuted(false);
    }
    
    function handleOffline() {
        // document.getElementById("twitch").classList.add('hide');
        player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
        player.addEventListener(Twitch.Player.ONLINE, handleOnline);
        player.setMuted(true);
    }

    var options = {
        channel: "velyna",
        width: 640,
        height: 360,
        parent: ['localhost', 'velyna.net']
    };

    try {
        var player = new Twitch.Player("twitch", options);
        player.addEventListener(Twitch.Player.READY, initiate);
        
    } catch (error) {
        console.log('Twitch Error: ', error);
    }
};
