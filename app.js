function getHistory(){
    return document.getElementById('history-value').innerText;
}
function printHistory(num){
document.getElementById('history-value').innerText = num;
}

function printOutput(num){
    if(num == ''){
    document.getElementById('output-value').innerText = num;}
    
 else{
document.getElementById('output-value').innerText = getFormattedNum(num);
    function getFormattedNum(num){
        var n = Number(num);
        var value = n.toLocaleString();
        return value;
}
}

}
function getOutput(){
    return document.getElementById('output-value').innerText;
}


function reverseNumberFormat(num){
return Number(num.replace(/,/g,''));
}

let operation = document.getElementsByClassName('operator');
for(var i =0;i<operation.length;i++){
	operation[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
                    printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
                }
                printOutput('');
			}
		}
		
	});
}

let number = document.getElementsByClassName('number');
for(let i = 0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        let output = reverseNumberFormat(getOutput());
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }
    })
}