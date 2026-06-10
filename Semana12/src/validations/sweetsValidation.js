const Sweets = require('../model/sweets');

async function checkSweetsExists(id) {
    if (!id) return null;
    const found = await Sweets.findById(id);
    return found;
}

module.exports = { checkSweetsExists };
