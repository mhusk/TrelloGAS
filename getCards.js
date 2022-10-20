/**
 * This will get all of the cards from a specified list in Trello
 * @returns {responseCode: Number, body: JSON[]} 
 */
function getCards(listID, key, token){
  try{
    let url = `https://api.trello.com/1/lists/${listID}/cards?key=${key}&token=${token}`
    
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
      body: ['Error getting cards from list - Trello Integration Library']
    }
  }

}
