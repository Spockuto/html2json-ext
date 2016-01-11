var markup = document.documentElement.innerHTML;
var regex = new RegExp("(?:src=)\"([^\"]+)" , "g") ;
var data = []; 
var temp;
while (temp = regex.exec(markup)) {
data.push(temp[1]);
}
var filtered = [] ;
var i = data.length
console.log(data.length);
var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    while (i--) {
        if (!re.test(data[i])) {
            filtered.push(data[i]);
        }
    }
console.log(filtered);
/*function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status;
}

var i = filtered.length;

while(i--){
	console.log(UrlExists(filtered[i]));
}*/