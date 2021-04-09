function getText() {
    var text = document.getElementById("textareabox").value;
    console.log(text);
    var cCount = text.split(' ').join('').length;
    var count = 0;
    var countS = 0;
    var split = text.split(' ');
    var splitS = text.split('.');
    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }
    for (var i = 0; i < splitS.length-1; i++) {
        if (split[i] != "") {
            countS += 1;
        }
    }
    if(text == "") {
        console.log("sorry")
    } else {
        textDetails = "<p> <span class='count'>Characters : </span>"+cCount+"</p>";
        textDetails += "<p> <span class='count'>Words : </span>"+count+"</span></p>";
        textDetails += "<p> <span class='count'>Sentences : </span>"+countS+"</span></p>";
        document.getElementById("res").innerHTML = textDetails;
        console.log(cCount);
    }
}
