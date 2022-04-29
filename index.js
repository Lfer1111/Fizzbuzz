const Reader = require("../fizzbuz/lib/utils/Reader")
const ExplorerService = require("../fizzbuz/lib/services/ExplorerService")
const FizzbuzzService = require("../fizzbuz/lib/services/FizzbuzzService")


// ----> Reader
const explorers = Reader.readJsonFile("explorers.json")
// console.log(explorers)


// ----> ExplorerService
// console.log(ExplorerService.filterByMission(explorers, "node"))
// console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
// console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))


// ----> FizzbuzzService

const explorer1 = {name: "Explorer1", score: 1}
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}