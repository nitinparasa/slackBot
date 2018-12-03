const SlackBot = require('slackbots');
const axios = require('axios'); 

const bot = new SlackBot({
    token: '1nxdgh9FKkG5XFhwW1lVznEw',
    name: 'learnbot'
});

// Start the handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley'
    };

    // Post a message
    bot.postMessageToChannel(
        'general',
        'Heyya there! Get ready to learn with "@LernBot"',
        params
    );
});

// Error Handler
bot.on('error', err => console.log(`Error occured: ${err}`));

// Message Handler
bot.on('message', data => {
    if(data.type !== 'message'){
        return;
    }

    handleMessage(data.text);
});

// Response to the data
function handleMessage(message){
    if(message.includes(' help')){
        runHelp();
    }
}

// Show Help Text
function runHelp(){
    const params = {
        icon_emoji: ':question:'
    };

    bot.postMessageToChannel(
        'general',
        `Type @learnbot with either 'clinicaltrials', 'javascript' or salesforce to get to started with learning those.`,
        params
    );
}