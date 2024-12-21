const SteamUser = require('steam-user');
const prompt = require('prompt-sync')();

const client = new SteamUser(); // create steamclient



//login details
const username = prompt("Enter Username: ");
