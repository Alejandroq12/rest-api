// Add middleware / dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Array of jokes to serve
let jokes = [
  {
    id: 1,
    joke: "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
  },
  {
    id: 2,
    joke: "I'm reading a book on anti-gravity. It's impossible to put down.",
  },
  {
    id: 3,
    joke: 'Did you hear about the guy who invented Lifesavers? He made a mint.',
  },
  { id: 4, joke: "I used to be a baker, but I couldn't make enough dough." },
  { id: 5, joke: 'What do you call a pile of cats? A meowntain.' },
  {
    id: 6,
    joke: 'What do you get when you cross a snowman and a vampire? Frostbite.',
  },
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the root entry point for the rest API
app.get('/', (req, res) => {
  res.send('Welcome to the my API. Visit /jokes to see the list.');
});

// Define a route to retrieve all jokes
app.get('/jokes', (req, res) => {
  res.send(jokes);
});

// Define a route to retrieve a random joke
app.get('/randomjoke', (req, res) => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(joke);
}

// Define a route to add a new joke
app.post('/jokes', (req, res) => {
  // Generate a new id for the joke
  const newId = jokes[jokes.length - 1].id + 1;

  // Get the joke from the request body
  const joke = req.body;

    // Output the joke to the console for debugging
    console.log(joke);
    jokes.push({ id: newId, joke: joke });

    // res.send('A new joke has been added to the array.');
    res.send({ id: newId, joke: joke });
});

// Define a route to delete a joke
app.delete('/jokes/:id', (req, res) => {
  // Get the joke ID from the request parameters
  const jokeId = req.params.id;

  // Find the joke with the matching id
  const jokeIndex = jokes.findIndex(joke => joke.id == jokeId;

  // Remove the joke from the array
  jokes.splice(jokeIndex, 1);

  // Send a message as a response
  res.send({ message: "Joke deleted successfully" });
});

// Start the REST API server
app.listen(port, () => console.log(`Jokes API listening on port ${port}!`));
