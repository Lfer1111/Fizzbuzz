const Reader = require("../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsernames;
    }
    static getExplorersAmountByMission(mission){
        const amountExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountExplorersByMission;
    }
    static getTrickOfExplorerRequested(number){
        const explorersFizzBuzz = FizzbuzzService.applyValidationInNumber(number);
        return explorersFizzBuzz;
    }
}

module.exports = ExplorerController;