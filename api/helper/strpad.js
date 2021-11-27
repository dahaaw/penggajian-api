module.exports = (num) => {
    var str = num.toString();
    var pad = "00000"
    return pad.substring(0, pad.length - str.length) + str
}