import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: "Dzień dobry! Trzeba było dodać \"--preset env\" do babela ale działa :)" });
});

app.listen(port, () => console.log("server listening on port", port));