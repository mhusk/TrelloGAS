/**
 * Will allow you hit an Apps Script Web App from a Trello Automation
 * URL that is in Trello Automation (below)
 * https://script.google.com/macros/s/{id of deployment}/exec?cardid={cardid}
 */
function doGet(e){
  // Contents of the event object
  // {parameters={cardid=[Ljava.lang.Object;@3b3315ed}, parameter={cardid=Kg0XnOwD}, queryString=cardid=Kg0XnOwD, contextPath=, contentLength=-1.0} 

  const cardid = e.parameter.cardid;

  let result = {
    responseCode: 200, 
    body: 'Success'
  }

  return HtmlService.createHtmlOutput(JSON.stringify(result));
}
