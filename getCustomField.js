/**
 * This will return the custom fields associated with a card
 * @returns {responseCode: Number, body: String} 
 */
function getCustomFields(cardID, key, token){
  try{
    let url = `https://api.trello.com/1/cards/${cardID}/customFieldItems?key=${key}&token=${token}`
    
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
