/**
 * Generates a normal message or chat text
 * @param {String} username 
 * @param {String} text 
 */
const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date().getTime()
  }
}

/**
 * Generates a message for sharing location
 * @param {String} username 
 * @param {String} url 
 */
const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: new Date().getTime(),
  }
}

module.exports = {
  generateMessage,
  generateLocationMessage
}