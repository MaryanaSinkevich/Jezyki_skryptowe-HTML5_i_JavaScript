function fibonacci() {
    var n = document.getElementById("number").value;
    document.getElementById("res").innerHTML = fibonacci_sequence (n);
}

var sequence = [0]; 
var current_num = 1;
var subsequent_num = 0;
var num = 0;

 
function fibonacci_sequence (n) {
  
    while (sequence.length < n) {
     num = current_num + subsequent_num;
     current_num = subsequent_num;
     subsequent_num = num;
     sequence.push(num);
    }
	
    return (num);
}