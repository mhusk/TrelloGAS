const key = ScriptProperties.getProperty('key');
const token = ScriptProperties.getProperty('token');
const idList = '633703c47e355102f3436482'

function addCard(){
  let url = `https://api.trello.com/1/cards?idList=${idList}&key=${key}&token=${token}`;
  
  let options = {
    method: 'post',
    payload:{
      name:'Card Added from Apps Script',
      desc: 'Description from Card added in Apps Script',
    }
  }
  let response = UrlFetchApp.fetch(url,options);
  console.log(response.getResponseCode())
  console.log(response.getContentText())
}
