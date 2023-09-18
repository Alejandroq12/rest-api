// Add middleware / dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Array of jokes to serve
let jokes = [
    { id: 1, joke: "Why couldn't the bicycle stand up by itself? Because it was two-tired." },
    { id: 2, joke: "I'm reading a book on anti-gravity. It's impossible to put down." },
    { id: 3, joke: "Did you hear about the guy who invented Lifesavers? He made a mint." },
    { id: 4, joke: "I used to be a baker, but I couldn't make enough dough." },
    { id: 5, joke: "What do you call a pile of cats? A meowntain." },
    { id: 6, joke: "What do you get when you cross a snowman and a vampire? Frostbite." }
  ];

  app.use(cors());