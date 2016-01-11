var markup = document.documentElement.innerHTML;
var regex = new RegExp("(?:href=|src=)\"([^\"]+)" , "g") ;
var data = []; 
var temp;
while (temp = regex.exec(markup)) {
data.push(temp[1]);
}
var filtered = [] ;
var i = data.length
var re =/(\b(https?|www):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    while (i--) {
        if (!re.exec(data[i])) {
            filtered.push(data[i]);
        }
    }
console.log(filtered);
console.log(data);