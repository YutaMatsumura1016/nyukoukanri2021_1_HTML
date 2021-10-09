function doGet(e) {

  //アプリに返す
  var htmlTemplate = HtmlService.createTemplateFromFile("success");
  return htmlTemplate.evaluate();
  
}

