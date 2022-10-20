function archiveCardsInList(listID, key, token){
  try{
      
      let url = `https://api.trello.com/1/lists/${listID}/archiveAllCards?key=${key}&token=${token}`
      
      let options = {
        method: 'post'
      };

      let response = UrlFetchApp.fetch(url,options);
      
      return{
        responseCode: response.getResponseCode(),
        body: JSON.parse(response.getContentText())
      }
    } catch{
      console.log('error')
      return {
        responseCode: 404,
        body: ['Error getting archiving cards in list - Trello Integration Library']
    }
  }
}
