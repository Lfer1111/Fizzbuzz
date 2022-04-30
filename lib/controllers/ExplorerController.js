const Reader = require("../../lib/utils/Reader")
const ExplorerService = require("../../lib/services/ExplorerService")
// const FizzbuzzService = require("../../lib/services/FizzbuzzService")
const explorers = Reader.readJsonFile("explorers.json")

class ExplorerController {
    static getExplorersByMission(mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission)
        return explorersByMission
    }
    static getExplorersUsernamesByMission(mission){
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission)
        return explorersUsernames
    }
    static getExplorersAmountByMission(mission){
        const amountExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission)
        return amountExplorersByMission

    }
}

module.exports = ExplorerController