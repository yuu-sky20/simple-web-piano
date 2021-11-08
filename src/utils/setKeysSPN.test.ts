import SetKeysSPN from "./setKeysSPN";

describe("Pitchの境界値分析", () => {
    test("0以下", () => {
        expect(SetKeysSPN(-6).shortGroup).toContain("C4")
        expect(SetKeysSPN(-11).longGroup).toContain("F4")
    })
    test("0より大きい", () => {
        expect(SetKeysSPN(9).shortGroup).toContain("C9")
        expect(SetKeysSPN(30).longGroup).toContain("F30")
    })
})