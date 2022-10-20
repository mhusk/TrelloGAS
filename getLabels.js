
/**
 * This will return all the labels on a board
 * @param {String} boardID id of the board
 * @param {String} key
 * @param {String} token
 */
function getLabels(boardID, key, token){
  try{
      let url = `https://api.trello.com/1/boards/${boardID}/labels?key=${key}&token=${token}`
      
      let options = {
        method: 'get'
      };

      let response = UrlFetchApp.fetch(url,options);
      return{
        responseCode: response.getResponseCode(),
        body: JSON.parse(response.getContentText())
      }
    } catch{
      return {
        responseCode: 404,
        body: ['Error getting labels - Trello Integration Library']
    }
  }
}