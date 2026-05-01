var container = document.getElementById("array");

// Function to generate the array of blocks

// Function to generate the frequency array
var count_container = document.getElementById("count");
function generate_freq() {
var blocks = document.querySelectorAll(".block");
for (var i = 0; i < blocks.length; i++) {
	// Creating element div
	var array_ele2 = document.createElement("div");

	// Adding class 'block2' to div
	array_ele2.classList.add("block2");

	// Adding style to div
	array_ele2.style.height = `${20}px`;
	array_ele2.style.transform = `translate(${i * 30}px)`;

	// index of freq array
	var array_ele_idx = document.createElement("label");
	array_ele_idx.classList.add("block_id2");
	array_ele_idx.innerText = i + 1;

	//giving initial freq to all blocks as 0
	var array_ele_label2 = document.createElement("label");
	array_ele_label2.classList.add("block_id3");
	array_ele_label2.innerText = 0;

	// Appending created elements to index.html
	array_ele2.appendChild(array_ele_label2);
	array_ele2.appendChild(array_ele_idx);
	count_container.appendChild(array_ele2);
}
}

// Asynchronous CountingSort function
async function CountingSort(delay = 500) {
generate_freq()
var blocks = document.querySelectorAll(".block");

// To store frequency of every block
for (var i = 0; i < blocks.length; i += 1) {
	//To highlight the current traversed block
	blocks[i].style.backgroundColor = "#FF4949";

	//Extracting the value of current block
	var value = Number(blocks[i].childNodes[0].innerHTML);
	//document.writeln(value);

	var freq_array = document.getElementsByClassName("block_id3");

	freq_array[value - 1].innerText++;

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Changing to previous color
	blocks[i].style.backgroundColor = "#6b5b95";
}

//Sorting by using frequency array
var idx = 0;
for (var i = 0; i < blocks.length; i += 1) {
	var freq = document.getElementsByClassName("block_id3");

	var temp = Number(freq[i].innerText);

	var freq_block = document.getElementsByClassName("block2");

	//changing color of freq block
	freq_block[i].style.backgroundColor = "#FF4949";

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 2 * delay)
	);

	if (temp == 0) {
	//changing color of freq block to previous one
	freq_block[i].style.backgroundColor = "darkgray";
	continue;
	}

	var block_label = document.getElementsByClassName("block_id");

	//sorting the block array
	for (var j = 0; j < temp; j++) {
	blocks[idx].style.height = `${(i + 1) * 13}px`;
	block_label[idx].innerText = i + 1;
	idx++;
	}

	//changing color of freq block to previous one
	freq_block[i].style.backgroundColor = "darkgray";

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 2 * delay)
	);
}
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

// Calling generatearray function
//generatearray();

// Calling generate_freq function
//generate_freq();

// Calling CountingSort function
//CountingSort();
function generate()
{
//
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
  let l=pages[0];
  
  for(let i=1;i<pages.length;i++){
	  if(pages[i]>l){
		  l=pages[i];
	  }
  }
  if(l>10){
	  alert("maximum array element should be 10");
	  return;
  }
  
	  
for (var i = 0; i < pages.length; i++) {
	// Return a value from 1 to 100 (both inclusive)
var value = pages[i];
var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 30}px`;
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

let b=n+10;
let a=n+10;
let w=n+10;
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

let sp=10;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}