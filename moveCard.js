/**
 * This will move a card to a new list
 * @param {String} cardID id of the card you want to move
 * @param {String} newListID id of the list you want to add card to
 * @param {String} key
 * @param {String} token
 */
function moveCard(cardID, newListID, key, token){
  try{
    let url = `https://api.trello.com/1/cards/${cardID}?key=${key}&token=${token}`
    
    let options = {
      method: 'put',
      payload:{
        "idList": newListID
      }
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
