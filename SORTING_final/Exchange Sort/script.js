const container =
document.querySelector(".data-container");

// Function to generate the array of blocks
function generatearray()
{
pages = [];
  let inputText = document.getElementById('fname1').value;
  if(inputText.trim()==''){
		alert("Textbox should not be empty!");
		return;
	}
  inputText = inputText.split(' ');
  for (let i = 0; i < inputText.length; i++) {
	  if(inputText[i]==''){
		  continue;
	  }
    inputText[i] = Number(inputText[i]);
    pages.push(Number(inputText[i]));
  }
for (var i = 0; i < pages.length; i++) {
	// Return a value from 1 to 100 (both inclusive)






	var value = pages[i];

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
// To enable the button
// "Generate New Array" after final(sorted)
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#6f459e";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#6f459e";



document.getElementById("Button4")
.disabled = false;
document.getElementById("Button4")
.style.backgroundColor = "#6f459e";

document.getElementById("Button5")
.disabled = false;
document.getElementById("Button5")
.style.backgroundColor = "#6f459e";
// Calling generatearray function
//generatearray();
}

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 1000);
		});
	});
}

// Asynchronous BubbleSort function
async function ExchangeSort(delay = 1000) {
	var blocks = document.querySelectorAll(".block");

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i++) {
		for (var j = i+1; j < blocks.length; j++) {


			// To change background-color of the
			// blocks to be compared
			blocks[i].style.backgroundColor = "#FF4949";
			
			blocks[j].style.backgroundColor = "#FF4949";
				
			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[i].childNodes[0].innerHTML);
			var value2 = Number(blocks[j]
						.childNodes[0].innerHTML);

			
			// To compare value of two blocks
			if (value1 > value2) {
					
	
				var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[j].style.height;
	blocks[j].style.height = temp1;
	blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
	blocks[j].childNodes[0].innerText = temp2;
				//await swap(blocks[i], blocks[j]);
				blocks = document.querySelectorAll(".block");
			}

			// Changing the color to the previous one
			blocks[i].style.backgroundColor = "#6b5b95";
			blocks[j].style.backgroundColor = "#6b5b95";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[i].style.backgroundColor = "#13CE66";
		//console.log(i);
	}
// To enable the button
// "Generate New Array" after final(sorted)
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#6f459e";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#6f459e";


document.getElementById("Button4")
.disabled = false;
document.getElementById("Button4")
.style.backgroundColor = "#6f459e";

document.getElementById("Button5")
.disabled = false;
document.getElementById("Button5")
.style.backgroundColor = "#6f459e";
}

function Reset()
{
window.location.reload();
}


// Function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1")
.disabled = true;
document.getElementById("Button1")
.style.backgroundColor = "#d8b6ff";

// To disable the button "Insertion Sort"
document.getElementById("Button2")
.disabled = true;
document.getElementById("Button2")
.style.backgroundColor = "#d8b6ff";




document.getElementById("Button4")
.disabled = true;
document.getElementById("Button4")
.style.backgroundColor = "#d8b6ff";


document.getElementById("Button5")
.disabled = true;
document.getElementById("Button5")
.style.backgroundColor = "#d8b6ff";


}

function TimeComplexity()
{
 let inputText = document.getElementById('fname1').value;
  var output1 = document.getElementById("text1");

var output2 = document.getElementById("text2");
var output3 = document.getElementById("text3");
  inputText = inputText.split(' ');
let n=inputText.length;

let b=n*n;
let a=n*n;
let w=n*n;
output1.innerText = "BEST CASE :"+b;
output2.innerText = "AWERAGE CASE :"+a;
output3.innerText = "WORST CASE :"+w;
}

function SpaceComplexity()
{
 let inputText = document.getElementById('fname1').value;
  var output = document.getElementById("text4");


  inputText = inputText.split(' ');
let n=inputText.length;

let sp=n*2+4;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}

