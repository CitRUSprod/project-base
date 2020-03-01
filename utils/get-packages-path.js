const path = require("path")


const packagesDir = "packages"


/**
 * Gets packages path.
 *
 * @param {...string} pathParts - Parts of path.
 * @returns {string} Packages path.
 * @example
 * ```javascript
 * getPackagesPath("app")
 * // => "[PATH]/packages/app"
 * ```
 */
function getPackagesPath(...pathParts) {

    return path.join(__dirname, "..", packagesDir, ...pathParts)

}


module.exports = getPackagesPath
