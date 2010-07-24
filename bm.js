function cbfunc(o){
    var data = o.query.results.p;
    alert(data);
}

document.body.ondblclick = function() {
    var sel = window.getSelection();
    var sel_txt = "";

    if (sel.anchorNode.nodeType == Node.TEXT_NODE
        && sel.focusNode.nodeType == Node.TEXT_NODE) {
        sel_txt = sel.toString(); 
    }

    var yql_query = "http://query.yahooapis.com/v1/public/yql?q=select%20content%20from%20html%20where%20url%3D'http%3A%2F%2Fen2te.sourceforge.net%2Ftel-dictionary%2Fgettelugu.php%3Fsearch_string%3D"+sel_txt+"%26submit%3DSearch'%20and%20xpath%3D%22%2F%2Fdiv%2Fp%22&format=json&diagnostics=true&callback=cbfunc";
    
    var yql_script = document.createElement('script');
    yql_script.type = 'text/javascript';
    yql_script.src = yql_query;
    document.documentElement.appendChild(yql_script);
};

alert('Activated en2te. Double click on a word to pull up meaning in Telugu ');