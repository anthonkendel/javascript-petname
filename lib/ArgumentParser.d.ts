export class ArgumentParser {
    options: {};
    /**
     *
     * @param {string} argument
     * @param {unknown} value
     * @param {string[]} validArguments
     * @param {string} key
     */
    parseArgument(argument: string, value: unknown, validArguments: string[], key: string): void;
}
