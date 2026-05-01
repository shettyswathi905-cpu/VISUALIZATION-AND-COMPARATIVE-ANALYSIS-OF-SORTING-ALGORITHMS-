// Canvas variables
var canvas, canvaswidth, canvasheight, ctrl;

// Call canvasElements() to store height width
// in above canvas variables

// 3 array are declared

//1) arr is for storing array element
//2) itmd for storing intermediate values
//3) visited is for element which has been sorted
var arr = [], itmd = [], visited = []


// Length of unsorted array
var len_of_arr;

// Store random value in arr[]

// Merging of two sub array
// https://www.geeksforgeeks.org/merge-two-sorted-arrays/
function mergeArray(start, end) {
	let mid = parseInt((start + end) >> 1);
	let start1 = start, start2 = mid + 1
	let end1 = mid, end2 = end
	
	// Initial index of merged subarray
	let index = start

	while (start1 <= end1 && start2 <= end2) {
		if (arr[start1] <= arr[start2]) {
			itmd[index] = arr[start1]
			index = index + 1
			start1 = start1 + 1;
		}
		else if(arr[start1] > arr[start2]) {
			itmd[index] = arr[start2]
			index = index + 1
			start2 = start2 + 1;
		}
	}

	// Copy the remaining elements of
	// arr[], if there are any
	while (start1 <= end1) {
		itmd[index] = arr[start1]
		index = index + 1
		start1 = start1 + 1;
	}

	while (start2 <= end2) {
		itmd[index] = arr[start2]
		index = index + 1
		start2 = start2 + 1;
	}

	index = start
	while (index <= end) {
		arr[index] = itmd[index];
		index++;
	}
}

// Function for showing visualization
// effect
function drawBars(start, end) {

	// Clear previous unsorted bars
	ctrl.clearRect(0, 0, 1000, 1500)

	// Styling of bars
	for (let i = 0; i < len_of_arr; i++) {

		// Changing styles of bars
		ctrl.fillStyle = "black"
		ctrl.shadowOffsetX = 2
		ctrl.shadowColor = "chocolate";
		ctrl.shadowBlur = 3;
		ctrl.shadowOffsetY =5;
		
		
		// Size of rectangle of bars
		ctrl.fillRect(25 * i, 300 - arr[i], 20, arr[i])
		
		if (visited[i]) {
			ctrl.fillStyle = "#006d13"
			ctrl.fillRect(25 * i, 300 - arr[i], 20, arr[i])
			ctrl.shadowOffsetX = 2
		}
	}

	for (let i = start; i <= end; i++) {
		ctrl.fillStyle = "orange"
		ctrl.fillRect(25 * i, 300 - arr[i], 18, arr[i])
		ctrl.fillStyle = "#cdff6c"
		ctrl.fillRect(25 * i,300, 18, arr[i])
		visited[i] = 1
	}
}

// Waiting interval between two bars
function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


// Merge Sorting
const mergeSort = async (start, end) => {
	if (start < end) {
		let mid = parseInt((start + end) >> 1)
		await mergeSort(start, mid)
		await mergeSort(mid + 1, end)
		await mergeArray(start, end)
		await drawBars(start, end)

		// Waiting time is 800ms
		await timeout(1500)
	}
}

// canvasElements function for storing
// width and height in canvas variable
function canvasElements() {
	canvas = document.getElementById("Canvas")
	canvas.width = canvas.height = 500
	canvaswidth = canvas.width
	canvasheight = canvas.height
	ctrl = canvas.getContext("2d")
}

// Asynchronous MergeSort function
const performer = async () => {
	await mergeSort(0, len_of_arr - 1)
	await drawBars()

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

/* document.getElementById("Button3")
.disabled = false;
document.getElementById("Button3")
.style.backgroundColor = "#6f459e"; */

document.getElementById("Button4")
.disabled = false;
document.getElementById("Button4")
.style.backgroundColor = "#6f459e";

document.getElementById("Button5")
.disabled = false;
document.getElementById("Button5")
.style.backgroundColor = "#6f459e";
}





function generatearray()
{
canvasElements();

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
 len_of_arr=pages.length;

for (var i = 0; i < pages.length; i++) {
	
	//arr.push(Math.round(Math.random() * 250) )
	arr.push(Number(pages[i]));
	
}

// Initialize itmd and visited array with 0
for (var i = 0; i < len_of_arr; i++) {
	
	itmd.push(0)
	visited.push(0)
}

//performer()
drawBars()

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

let b=n;
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