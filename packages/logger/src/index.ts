/**
 * Easy console logs with prefix.
 *
 * @class Logger
 */
class Logger {

    /**
     * Creates an instance of Logger.
     *
     * @param prefix - Prefix for console logs.
     * @memberof Logger
     * @example
     * ```javascript
     * const logger = new Logger("Example: ")
     * ```
     */
    public constructor(private readonly prefix: string) {}

    /**
     * Logs to console.
     *
     * @param text - Text for log.
     * @memberof Logger
     * @example
     * ```javascript
     * const logger = new Logger("Example: ")
     * logger.log("Test message")
     * // Console output: "Example: Test message"
     * ```
     */
    public log(text: string): void {

        console.log(`${this.prefix}${text}`)

    }

}


export default Logger
