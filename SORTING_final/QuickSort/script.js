var container = document.getElementById("array");



// Function to generate indexes
var count_container = document.getElementById("count");
var n;
function generate_idx() {
	for (var i = 0; i < n; i++) {
		// Creating element div
		var array_ele2 = document.createElement("div");

		// Adding class 'block2' to div
		array_ele2.classList.add("block2");

		// Adding style to div
		array_ele2.style.height =
		`${20}px`;
		array_ele2.style.transform =
		`translate(${i * 30}px)`;

		//adding indexes
		var array_ele_label2 =
		document.createElement("label");
		array_ele_label2.classList.add("block_id3");
		array_ele_label2.innerText = i;

		// Appending created elements to index.html
		array_ele2.appendChild(array_ele_label2);
		count_container.appendChild(array_ele2);
	}
}

async function hoare_partition(l, r) {
	var blocks =
	document.querySelectorAll(".block");
	var pivot =
	Number(blocks[l].childNodes[0].innerHTML);
let delay = 1000
	var i = l - 1;
	var j = r + 1;

	while (true) {
		// Find leftmost element greater than
		// or equal to pivot
		do {
			i++;
			if (i - 1 >= l) blocks[i - 1].style.backgroundColor = "red";
			blocks[i].style.backgroundColor = "yellow";
			//To wait for 700 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
		} while (Number(blocks[i].childNodes[0].innerHTML) < pivot);

		// Find rightmost element smaller than
		// or equal to pivot
		do {
			j--;
			if (j + 1 <= r) blocks[j + 1].style.backgroundColor = "green";
			blocks[j].style.backgroundColor = "yellow";
			//To wait for 700 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
		} while (Number(blocks[j].childNodes[0].innerHTML) > pivot);

		// If two pointers met.
		if (i >= j) {
			for (var k = 0; k < n; k++) blocks[k].style.backgroundColor = "#6b5b95";
			return j;
		}

		//swapping ith and jth element
		var temp1 = blocks[i].style.height;
		var temp2 = blocks[i].childNodes[0].innerText;
		blocks[i].style.height = blocks[j].style.height;
		blocks[j].style.height = temp1;
		blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
		blocks[j].childNodes[0].innerText = temp2;
		//To wait for 700 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
	}
}

// Asynchronous QuickSort function
async function QuickSort(l,r ) {

let delay = 1000
	// QuickSort Algorithm
	if (l < r) {
		//Storing the index of pivot element after partition
		var pivot_idx = await hoare_partition(l, r);
		//Recursively calling quicksort for left partition
		await QuickSort(l, pivot_idx);
		//Recursively calling quicksort for right partition
		await QuickSort(pivot_idx + 1, r);
	}
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#FCAE1E";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#FCAE1E";

/* document.getElementById("Button3")
.disabled = false;
document.getElementById("Button3")
.style.backgroundColor = "#FCAE1E"; */

document.getElementById("Button4")
.disabled = false;
document.getElementById("Button4")
.style.backgroundColor = "#FCAE1E";

document.getElementById("Button5")
.disabled = false;
document.getElementById("Button5")
.style.backgroundColor = "#FCAE1E";
}


function QuickSort1()
{
QuickSort(0,n-1);

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
		array_ele.style.height =
		`${value * 3}px`;
		array_ele.style.transform =
		`translate(${i * 30}px)`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label =
		document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
n=pages.length;
generate_idx();

// Calling generatearray function
//generatearray();
}
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

let sp=n;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}
function Reset()
{
window.location.reload();
}