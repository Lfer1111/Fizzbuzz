const Reader = require("../../lib/utils/Reader")
const ExplorerService = require("../../lib/services/ExplorerService")

describe("Test para ExplorerService", () => {
    test("1. Calcular todos los explorers con Node", () => {
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(10)
    })

    test("2. Calcular todos los explorers con Java", () => {
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersInNode = ExplorerService.filterByMission(explorers, "java")
        expect(explorersInNode.length).toBe(5)
    })

})