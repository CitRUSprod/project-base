const ts = require("typescript")
const fs = require("fs-extra")
const getPackageNames = require("./get-package-names")
const getPackagesPath = require("./get-packages-path")


/**
 * Creates d.ts files.
 *
 * @example
 * ```javascript
 * createDeclarationFiles()
 * // Files created
 * ```
 */
function createDeclarationFiles() {

    const packageNames = getPackageNames()

    const paths = {}

    for (const name of packageNames) {

        const srcFilePath = getPackagesPath(name, "src/index.ts").replace(/\\/g, "/")
        const distFilePath = getPackagesPath(name, "dist/index.d.ts").replace(/\\/g, "/")

        paths[srcFilePath] = distFilePath

    }

    const options = {
        declaration: true,
        emitDeclarationOnly: true
    }

    const host = ts.createCompilerHost(options)

    host.writeFile = (filePath, content) => {

        const srcFilePath = filePath.replace(/\.d\.ts$/, ".ts")

        if (paths[srcFilePath] !== undefined) {

            fs.outputFileSync(paths[srcFilePath], content)

        }

    }

    const program = ts.createProgram(Object.keys(paths), options, host)
    program.emit()

}


module.exports = createDeclarationFiles
