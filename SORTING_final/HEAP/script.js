var container = document.getElementById("array");

// Function to generate the array of blocks

let n;
// Function to generate the indexes
var count_container = document.getElementById("count");
function generate_idx() {
for (var i = 0; i < n; i++) {

	// Creating element div
	var array_ele2 = document.createElement("div");

	// Adding class 'block2' to div
	array_ele2.classList.add("block2");

	// Adding style to div
	array_ele2.style.height = `${20}px`;
	array_ele2.style.transform = `translate(${i * 30}px)`;

	// Giving indexes
	var array_ele_label2 = document.createElement("label");
	array_ele_label2.classList.add("block_id3");
	array_ele_label2.innerText = i;

	// Appending created elements to index.html
	array_ele2.appendChild(array_ele_label2);
	count_container.appendChild(array_ele2);
}
}

// Asynchronous Heapify function
async function Heapify(n1, i) {
var blocks = document.querySelectorAll(".block");
var largest = i; // Initialize largest as root
var l = 2 * i + 1; // left = 2*i + 1
var r = 2 * i + 2; // right = 2*i + 2

// If left child is larger than root
if (
	l < n1 &&
	Number(blocks[l].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
	largest = l;

// If right child is larger than largest so far
if (
	r < n1 &&
	Number(blocks[r].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
	largest = r;

// If largest is not root
if (largest != i) {
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[largest].style.height;
	blocks[largest].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[largest].childNodes[0].innerText;
	blocks[largest].childNodes[0].innerText = temp2;
	
	//blocks[i].style.backgroundColor="pink";
	blocks[largest].style.backgroundColor="green";
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 1000)
	);

	// Recursively Hapify the affected sub-tree
	await Heapify(n1, largest);
}
}

// Asynchronous HeapSort function
async function HeapSort() {
var blocks = document.querySelectorAll(".block");

// Build heap (rearrange array)
for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
	
	await Heapify(n, i);

}

// One by one extract an element from heap
for (var i = n - 1; i > 0; i--) {

	// Move current root to end
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[0].style.height;
	blocks[0].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[0].childNodes[0].innerText;
	blocks[0].childNodes[0].innerText = temp2;

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 1000)
	);
blocks[blocks.length-i].style.backgroundColor="red";
	// Call max Heapify on the reduced heap
	await Heapify(i, 0);
}

for(var i=0;i<blocks.length;i++)
{
	blocks[i].style.backgroundColor="blue";
}

document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#ecc1fe";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#ecc1fe";

/* document.getElementById("Button3")
.disabled = false;
document.getElementById("Button3")
.style.backgroundColor = "#ecc1fe"; */

document.getElementById("Button4")
.disabled = false;
document.getElementById("Button4")
.style.backgroundColor = "#ecc1fe";

document.getElementById("Button5")
.disabled = false;
document.getElementById("Button5")
.style.backgroundColor = "#ecc1fe";
}


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
n=pages.length;
generate_idx(n);
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

/* document.getElementById("Button3")
.disabled = true;
document.getElementById("Button3")
.style.backgroundColor = "#d8b6ff"; */


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

let b=n*Math.log(n);
let a=n*Math.log(n);
let w=n*Math.log(n);
output1.innerText = "BEST CASE :"+b;
output2.innerText = "AVERAGE CASE :"+a;
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
