function closeLb() {
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
};

function cbfunc(o){
    var data = o.query.results.p;
    document.getElementById('light').innerHTML = "<b>En2Te</b> meaning for <b>" + sel_txt + "</b>:<br/>";
    document.getElementById('light').innerHTML += "<p>" + data + "</p>";
    document.getElementById('light').innerHTML += "<p><a href='#' onClick='closeLb(); return false;'>Close</a></p>";
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
};

document.body.ondblclick = function() {
    var sel = window.getSelection();

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

var sel_txt = "";

var light = document.createElement('div');
light.id = "light";
light.style.display = "none";
light.style.position = "absolute";
light.style.top = "25%";
light.style.left = "25%";
light.style.width = "50%";
light.style.height = "50%";
light.style.padding = "16px";
light.style.border =  "16px solid orange";
light.style.backgroundColor = "white";
light.style.zIndex = "1002";
light.style.overflow = "auto;";
light.innerHTML = "Loading, please wait...";

document.documentElement.appendChild(light);

var fade = document.createElement('div');
fade.id = "fade";
fade.style.display = "none";
fade.style.position = "absolute";
fade.style.top = "0%";
fade.style.left = "0%";
fade.style.width = "100%";
fade.style.height = "100%";
fade.style.backgroundColor = "black";
fade.style.zIndex = "1001";
fade.style.mozOpacity = "0.8";
fade.style.opacity = ".80";
fade.style.filter = "alpha(opacity=80)";

document.documentElement.appendChild(fade);

alert('Activated en2te. Double click on a word to pull up meaning in Telugu ');