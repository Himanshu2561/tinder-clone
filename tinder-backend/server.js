import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:0zADdMIW7RrsYqkS@cluster0.2scki.mongodb.net/tinderdb?retryWrites=true&w=majority';


// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url);
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });

// API Endpoints
app.get("/", (request, response) => response.status(200).send("HELLO PROGRAMMERS!!"));

app.post('/tinder/cards', (req, resp) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            resp.status(500).send(err);
        } else {
            resp.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, resp) => {
    Cards.find((err, data) => {
        if (err) {
            resp.status(500).send(err);
        } else {
            resp.status(200).send(data);
        }
    });
});

// Listeners
app.listen(port, () => console.log(`listning on localhost: ${port}`));
