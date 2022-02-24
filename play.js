const net = require("net");

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());//object returned from client is passed to setupInput to have it used in input.js 