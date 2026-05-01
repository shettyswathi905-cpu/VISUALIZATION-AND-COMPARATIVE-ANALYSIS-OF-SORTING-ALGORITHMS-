var container = document.getElementById("array");

// Function to randomly shuffle the array
function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {

		// Generate random number
		var j = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}



async function InsertionSort(clsnam, delay = 600) {
	let blocks = document.getElementsByClassName(clsnam);
	blocks[0].style.backgroundColor = "rgb(49, 226, 13)";

	for (var i = 1; i < blocks.length; i += 1) {
		var j = i - 1;

		// To store the integer value of ith block to key
		var key = parseInt(blocks[i].childNodes[0].innerHTML);

		// To store the ith block height to height
		var height = blocks[i].style.height;

		// Provide darkblue color to the ith block
		blocks[i].style.backgroundColor = "darkblue";

		// To pause the execution of code for 600 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 600)
		);

		// For placing selected element at its correct position
		while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {

			// Provide darkblue color to the jth block
			blocks[j].style.backgroundColor = "darkblue";

			// For placing jth element over (j+1)th element
			blocks[j + 1].style.height = blocks[j].style.height;
			blocks[j + 1].childNodes[0].innerText =
				blocks[j].childNodes[0].innerText;
			j = j - 1;

			// To pause the execution of code for 600 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			// Provide lightgreen color to the sorted part
			for (var k = i; k >= 0; k--) {
				blocks[k].style.backgroundColor = " rgb(49, 226, 13)";
			}
		}

		// Placing the selected element to its correct position
		blocks[j + 1].style.height = height;
		blocks[j + 1].childNodes[0].innerHTML = key;

		// To pause the execution of code for 600 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);

		// Provide light green color to the ith block
		blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
}

// Asynchronous CountingSort function
async function CountingSort(delay = 250) {
	var blocks = document.querySelectorAll(".block");

	var block1 = 0,
		block2 = 0,
		block3 = 0,
		block4 = 0;

	// CountingSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#FF4949";
		var value =
			Number(blocks[i].childNodes[0].innerHTML);

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding style to div
		array_ele.style.height = `${value * 13}px`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		array_ele.appendChild(array_ele_label);

		// Adding block to first bucket
		if (value >= 1 && value <= 5) {
			array_ele.classList.add("firstbucket");
			var container = document.getElementById("one");
			array_ele.style.transform =
				`translate(${block1 * 30}px)`;
			container.appendChild(array_ele);
			block1++;
		}

		// Adding block to second bucket
		if (value >= 6 && value <= 10) {
			array_ele.classList.add("secondbucket");
			var container = document.getElementById("two");
			array_ele.style.transform =
				`translate(${block2 * 30}px)`;
			container.appendChild(array_ele);
			block2++;
		}

		// Adding block to third bucket
		if (value >= 11 && value <= 15) {
			array_ele.classList.add("thirdbucket");
			var container = document.getElementById("three");
			array_ele.style.transform = `translate(${block3 * 30}px)`;
			container.appendChild(array_ele);
			block3++;
		}

		// Adding block to fourth bucket
		if (value >= 16 && value <= 20) {
			array_ele.classList.add("fourthbucket");
			var container = document.getElementById("four");
			array_ele.style.transform =
				`translate(${block4 * 30}px)`;
			container.appendChild(array_ele);
			block4++;
		}

		// To wait for 250 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);

		blocks[i].style.backgroundColor = "#6b5b95";
	}

	// Performing insertion sort on every bucket
	await InsertionSort("firstbucket");
	await InsertionSort("secondbucket");
	await InsertionSort("thirdbucket");
	await InsertionSort("fourthbucket");

	// Copying elements from buckets to main array
	for (var i = 0; i < 4; i++) {
		var bucket_idx = 0;
		var block_idx;
		if (i == 0) block_idx =
			document.getElementsByClassName("firstbucket");
		if (i == 1) block_idx =
			document.getElementsByClassName("secondbucket");
		if (i == 2) block_idx =
			document.getElementsByClassName("thirdbucket");
		if (i == 3) block_idx =
			document.getElementsByClassName("fourthbucket");
		for (var j = i * 5; j < 5 * (i + 1); j++, bucket_idx++) {
				block_idx[bucket_idx].style.backgroundColor = "red";

			// To wait for 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

			blocks[j].style.height =
				block_idx[bucket_idx].style.height;
			blocks[j].childNodes[0].innerText =
				block_idx[bucket_idx].childNodes[0].innerText;
			blocks[j].style.backgroundColor = "green";

			// To wait for 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

			block_idx[bucket_idx]
				.style.backgroundColor = "#6b5b95";
		}
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

function generatearray()
{
pages = [];
var arr = [];
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
  /* for(let i=0;i<pages.length;i++){
  document.writeln(pages[i]);
  } */
  for (let i = 0; i < pages.length; i++) {
	  
    //inputText[i] = Number(inputText[i]);
    //pages.push(Number(inputText[i]));
	arr[i]=Number(pages[i]);
	pages.sort(function(a, b) {
		return a - b;
	});
  }
  
	
	 if(pages.length>20||pages.length<20)
	{
		alert("number of elements should be 20");
		return;
	}
	for(let i=0;i<20;i++){
		if(pages[i]!=i+1){
			alert("array elements should be from 1 to 20");
			return;
		}
	}
 




	//var value = pages[i];

	

	// Filling array with values from 1 to 20
	//for (var i = 0; i < inputText.length; i++) {
		//arr.push(i);
//}

	// Shuffling the array
	shuffle(arr);
	for (var i = 0; i < pages.length; i++) {
		var value = arr[i];

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block");

		// Adding style to div
		array_ele.style.height = `${value * 13}px`;
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

let b=9;
let a=9;
let w=16;
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

let sp=4;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}