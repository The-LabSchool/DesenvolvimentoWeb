const User = require('../model/user');

async function checkUserExists(id) {
    if (!id) return null;
    const found = await User.findById(id);
    return found;
}

module.exports = { checkUserExists };
