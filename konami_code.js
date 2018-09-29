const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index = 0;

function init() {
  // your code here
  var key = e.key;
  
  if (key === codes[index]) {
    index++;
    
    if ( key === codes.length) {
      alert("Hurray!");
      index = 0;
    }
    
  }
  else {
    index = 0;
  }
}
