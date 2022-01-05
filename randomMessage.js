// This program will display a random message on startup

const Messages = ["Message 1", "Message 2", "Message 3", "Message 4", "Message 5"];

// This is where we will put code
const randomMessage = Messages[Math.floor(Math.random() * Messages.length)];
console.log(randomMessage);
