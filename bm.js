function toQueryString(obj) {    
  var parts = [];    
  for(var each in obj) if (obj.hasOwnProperty(each)) {
    parts.push(encodeURIComponent(each) + '=' + encodeURIComponent(obj[each]));    
  }    
  return parts.join('&');  
};

function res_handler(rsp) {   
    if(rsp.data){           
        yql_results = rsp.data;
    }
}

document.body.ondblclick = function() {
    var sel = window.getSelection();
    var sel_txt = "";
    var yql_base_uri = "http://query.yahooapis.com/v1/yql";
    var yql_results = "";
    var yql_query = "SELECT * from html where url = 'http://dictionary.reference.com/browse/weird' and xpath='//div[@dndata]'";

    if (sel.anchorNode.nodeType == Node.TEXT_NODE
        && sel.focusNode.nodeType == Node.TEXT_NODE) {
        sel_txt = sel.toString(); 
    }
};

alert('Activated en2te. Double click on a word to pull up meaning in Telugu ');