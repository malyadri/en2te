document.body.ondblclick = function() {
    var sel = window.getSelection();
    if (sel.anchorNode.nodeType == Node.TEXT_NODE
        && sel.focusNode.nodeType == Node.TEXT_NODE) {
        alert(sel.toString()); 
    }
};

alert('Activated en2te!');