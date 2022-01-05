import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: "es6 modules are awesome but tiring sometimes" });
});

app.listen(port, () => console.log("server listening on port", port));