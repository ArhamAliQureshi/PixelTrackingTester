function postIt(){
    var url = "users";
    var params = "?lorem=ipsum&name=binny";
    //url+= params;
    var xmlHttp = null;
    try{
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, true);
        //Send the proper header information along with the request
        xmlHttp.setRequestHeader("Content-type", "text/plain");
        xmlHttp.setRequestHeader("data", "Arham");
        xmlHttp.onreadystatechange = function() {//Call a function when the state changes.
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
        };
        xmlHttp.send(url);
    }
    catch (e){
        console.log(e);
    }
}