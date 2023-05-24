

function display(val){
     document.getElementById('result').value+=val;

    }
     var answer =0;
    function equate(){
    	let x=document.getElementById('result').value;
        let y=eval(x);
        document.getElementById('result').value=y;
      display.value = result;
      answer = result;
    }
    
    function ans() {
      var display = document.getElementById('result');
      display.value = answer;
    }

function clr(){
		document.getElementById('result').value="";
	}

function deleteButton() {

  var result = document.getElementById('result');
  var currentValue = result.value;
  
  if (currentValue.length > 0) {
    result.value = currentValue.slice(0, currentValue.length - 1);
  }
}