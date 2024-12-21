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


