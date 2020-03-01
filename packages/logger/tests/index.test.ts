import Logger from "../src"


const logger: Logger = new Logger("Example: ")


describe("logger", () => {

    test("should log with prefix", () => {

        console.log = jest.fn()
        logger.log("Test")
        expect(console.log).toHaveBeenCalledWith("Example: Test")

    })

})
