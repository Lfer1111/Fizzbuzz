const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amountExplorersInMission = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: amountExplorersInMission});
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: req.params.mission, explorers: explorersUsernamesInMission});
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = req.params.score;
    const explorerRequested = ExplorerController.getTrickOfExplorerRequested(score);
    res.json({score: req.params.score, trick: explorerRequested});
});



app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});