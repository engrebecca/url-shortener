function generateShortcode() {
    let newShortcode = "";
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (let i = 0; i < 6; i++) {
        newShortcode += characters[Math.floor(Math.random() * 62)]
    }
    return newShortcode;
}
module.exports = generateShortcode;