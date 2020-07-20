// Brandon Hill 05/06/2020


//Do NOT use inline JavaScript such as an onclick attribute to trigger any JavaScript.
//"use strict";
"use strict";


//window.prompt, var (or let and const if you are comfortable with those variable declaration keywords)
let name = prompt("Enter your name.");

let j = 0;
//while, ||
while(name == null || name == ''){

    //Differentiate the use of + to add versus concatenate.
    name = prompt("Enter a name. Try: " + ((j/2) + 1));
    if (j == 4){
        //window.alert();
        alert("Your name is: Anonymous");
        name = "Anonymous";
        break;
    }
    //+=
    j += 2;
}

console.log(name);
function setImageVisible(id, visible) {
    let img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

//GAME 1
function chooseProperty(){
	//document.getElementById("something2").value (probably an input element)
	let choice = document.getElementById("selectProperty").value;
	
	//if ... else
	if(choice == "tContent"){
		//document.getElementById("something1").textContent (probably a block element such as a p or h2 tag)
		document.getElementById("outputProperty").textContent =
		"New Paragraph.";

	}else if(choice =="tChoice"){
        //document.getElementById("something2").value (probably an input element)
		let val1 = document.getElementById("selectProperty").value;
		document.getElementById("outputProperty").textContent =  val1;

	}else if(choice =="tStyle"){
        //document.getElementById("something3").style (to change a style for id="something3")
		document.getElementById("outputProperty").style.color = "blue";

	}else if(choice == "tQuery"){

        //document.querySelectorAll(".something4") (to change a style for class="something4") 
		let x = document.querySelectorAll(".class1");
		x[0].style.color = "green";
	}

}
function resetParagraphs(){
    let x = document.querySelectorAll(".class1");
    x[0].style.color = "black";
    x[0].textContent = "Paragraph 2";

    outputProperty.style.color = "black";
    outputProperty.textContent = "Paragraph 1";
}

//addEventListener() to trigger all code OR you can also use individual event properties such as .onclick and assign a function to that property
document.getElementById("redo").addEventListener("click", resetParagraphs);

document.getElementById("selectProperty").onchange = chooseProperty;


function question1(){
	let choice = document.getElementById("d2").checked;
    

    //switch
	switch(choice){
	case true:
		document.getElementById("p3").textContent = "Correct!";
		break;
	default:
		document.getElementById("p3").textContent = "Try Again!";
	}
	
}
document.getElementById("button1").addEventListener("click", question1);
//END GAME 1

//GAME 2

//create several custom functions to process your game
function compareThem1(){
    let choice1 = document.getElementById("menu1");
    let chosen1 = choice1.options[choice1.selectedIndex].text;

    let compare = document.getElementById("operators");
    let chosen2 = compare.options[compare.selectedIndex].text;

    let choice2 = document.getElementById("menu2");
    let chosen3 = choice2.options[choice2.selectedIndex].text;
	let ans;	
    
    if (chosen3 == '7'){
        chosen3 = parseInt(chosen3);
    } 
    if (chosen1 == '1'){
        chosen1 = Boolean(chosen1);
    }

    //==, ===
    switch(chosen2){
    case "=": 
     ans = (chosen1 = chosen3);
    break;
    case "==":
    ans = (chosen1 == chosen3);
    break;
    case "===":
      ans = (chosen1 === chosen3);
     break;

    }
	results.textContent = "Comparison result: " + ans;
}

//addEventListener() to trigger all code OR you can also use individual event properties such as .onclick and assign a function to that property
document.getElementById("button2").addEventListener("click", compareThem1);

function question2(){
	let choice = document.getElementById("v3").checked;
	
	switch(choice){
	case true:
		document.getElementById("p4").textContent = "Correct!";
		break;
	default:
		document.getElementById("p4").textContent = "Try Again!";
	}
	
}
document.getElementById("radio2").addEventListener("click", question2);
//END GAME 2

//GAME 3
function compareThem2(){
    let choice1 = document.getElementById("menu3");
	let chosen1 = choice1.options[choice1.selectedIndex].text;
	
    let compare = document.getElementById("operators2");
	let chosen2 = compare.options[compare.selectedIndex].text;
	
    let choice2 = document.getElementById("menu4");
    let chosen3 = choice2.options[choice2.selectedIndex].text;
	let ans;	
    
    if (chosen3 == '4'){
        chosen3 = parseInt(chosen3);
    } 
    
    switch(chosen2){
    
     //!=, !==   
    case "!=":
    ans = (chosen1 != chosen3);
    break;
    case "!==":
      ans = (chosen1 !== chosen3);
     break;
    }

    //Differentiate the use of + to add versus concatenate.
    results2.textContent = "Comparison result: " + ans;
}
document.getElementById("button3").addEventListener("click", compareThem2);
//END GAME 2

//GAME 3
function question3(){

	let choice = document.getElementById("v5").checked;
    
    
	switch(choice){
	case true:

        //use JavaScript to modify images
        document.getElementById("p5").textContent = "Correct!";
        image1.src = "correct.jpg";
        setImageVisible("image1", true)
		break;
	default:
        document.getElementById("p5").textContent = "Try Again!";
        image1.src = "wrong.jpg";
        setImageVisible("image1", true);
        break;
	}	
}
document.getElementById("radio3").addEventListener("click", question3);
//END GAME 3

//GAME 4
function compareThem3(){
    let num1 = document.getElementById("num1").value;

    //console.log
    console.log(num1);

    let compare = document.getElementById("operators3");
    let chosen2 = compare.options[compare.selectedIndex].text;
    
    let num2 = document.getElementById("num2").value;
    
    let ans = false;

    //>   <   >=   <=
    if(chosen2 == "<="){
        ans = (num1 <= num2);
    }  else if(chosen2 == ">="){
        ans = (num1 >= num2);
    } else if (chosen2 == ">"){
        ans = (num1 > num2);
    } else if (chosen2 == "<"){
        ans = (num1 < num2);
    }
   
    document.getElementById("comp_result").textContent = "Result: " + ans;
}
document.getElementById("button4").addEventListener("click", compareThem3);
//END GAME 4

//GAME 5
let i = 0;


function spellName(){
    if(name == null){
        name = prompt("Please enter your name.")
    }
    document.getElementById("yourName").textContent = name[i];

    //++
    i++;
    if(i == name.length){
        i = 0;
    }
}
document.getElementById("spell").addEventListener("click", spellName);
//END GAME 5

//GAME 6
function computations(){
    let num1 = parseInt(document.getElementById("num3").value);
    console.log(num1);

    let compare = document.getElementById("operators4");
    let chosen2 = compare.options[compare.selectedIndex].text;
    
    let num2 = parseInt(document.getElementById("num4").value);
   
    let ans = false;

    //+   -   *   /   %   **
    if(chosen2 == "+"){
        ans = (num1 + num2);
    }  else if(chosen2 == "-"){
        ans = (num1 - num2);
    } else if (chosen2 == "*"){
        ans = (num1 * num2);
    } else if (chosen2 == "/"){
        ans = (num1 / num2);
    }else if (chosen2 == "%"){
        ans = (num1 % num2);
    }else if (chosen2 == "**"){
        ans = (num1 ** num2);
    }

    //console.log() to follow and debug your code -- leave these in the js file
    
    document.getElementById("result1").textContent = "Result: " + ans;
}
document.getElementById("button5").addEventListener("click", computations);
//END GAME 6

//GAME 7
function totalHeadings(){

    //document.getElementsByTagName
    let h3Collection = document.getElementsByTagName("h3");
    let totalH3 = h3Collection.length;

    //Array
    let h3Colors = ["blue", "yellow", "green", "magenta", "orange", "purple", "lightcoral"];

    //use console.log to check code
    console.log(totalH3);
    let guess = document.getElementById("num5").value;
   
    if(guess == totalH3){
        document.getElementById("numOfH3").textContent = "Correct!";

        //for,  --
        for(let i = h3Collection.length-1; i >= 0; i--)
        {
            
            h3Collection[i].style.color = h3Colors[i];
        }
    }else{
        document.getElementById("numOfH3").textContent = "Incorrect.";
    }

}
document.getElementById("guess").addEventListener("click", totalHeadings);
//END GAME 7