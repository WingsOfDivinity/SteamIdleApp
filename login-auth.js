const SteamUser = require('steam-user');
const prompt = require('prompt-sync')();

const client = new SteamUser(); // create steamclient



//login details
const username = prompt("Enter Username: ");
const password = prompt("Enter Password: ");
const appID = prompt("Enter appID: ");

//Logging in
console.log("Attempting to log into Steam...");
client.logOn({
    accountName: username,
    password: password,
});


// Event: logged in successfully 
client.on('loggedOn', () => {
    console.log("Logged into Steam successfully!");
    client.setPersona(SteamUser.EPersonaState.Online);
    console.log("Status set to Online.");

    //Start idling
    console.log(`Starting to idle game with App ID ${appID}...`);
    client.gamesPlayed([appID]);
    console.log(`Now idling game with App ID ${appID}...`);
});

// Event: Handle Steam Guard
client.on('auth_code_required', (isEmail) => {
    if (isEmail) {
        console.log(`Steam Guard code sent to Email associated with username: ${username}`);
    } else {
        console.log(`Steam Guard code required from authenticator associated with username: ${username}`)
    }
    process.stdout.write("Enter Steam Guard code: "); // Prompt user for the code
    process.stdin.once('data', (data) => {
        client.provideAuthCode(data.toString().trim()); // Submit the code
    });
});

// Event: Handle errors
client.on('error', (err) => {
    console.error(`An error occurred: ${err.message}`);
});

