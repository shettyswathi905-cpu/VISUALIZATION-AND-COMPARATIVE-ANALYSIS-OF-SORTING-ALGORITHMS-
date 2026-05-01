const container = document.querySelector(".data-container");


pages = [];

function generatearray()
{

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
  if(pages.length==0)
  {
	  alert("textbox cannot be empty");
  }
for (var i = 0; i < pages.length; i++) {
	// Return a value from 1 to 100 (both inclusive)






	var value = pages[i];

	

		// To create element "div"
		const bar = document.createElement("div");

		// To add class "bar" to "div"
		bar.classList.add("bar");

		// Provide height to the bar
		bar.style.height = `${value * 3}px`;

		// Translate the bar towards positive X axis
		bar.style.transform = `translateX(${i * 30}px)`;

		// To create element "label"
		const barLabel = document.createElement("label");

		// To add class "bar_id" to "label"
		barLabel.classList.add("bar__id");

		// Assign value to "label"
		barLabel.innerHTML = value;

		// Append "Label" to "div"
		bar.appendChild(barLabel);

		// Append "div" to "data-container div"
		container.appendChild(bar);
}
}
// Asynchronous function to perform "Brick Sort"
async function BrickSort(delay = 2500) {

	let bars = document.querySelectorAll(".bar");

	// Initialize isSorted with false
	let isSorted = false;
	n=pages.length;
	while (!isSorted) {
		// set isSorted true
		isSorted = true;

		for (let i = 1; i <= n-2; i = i + 2) {
			// Assigning value of ith bar into value1
			var value1 = parseInt(bars[i].childNodes[0].innerHTML);

			// Assigning value of i+1th bar into value2
			var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

			if (value1 > value2) {
				// Provide red color to the ith bar
				bars[i].style.backgroundColor = "red";

				// Provide red color to the i+1th bar
				bars[i + 1].style.backgroundColor = "red";

				// Swap ith bar with (i+1)th bar
				var temp1 = (bars[i].style.height);
				var temp2 = (bars[i].childNodes[0].innerText);

				// To pause the execution of code for 300 milliseconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 700)
				);

				// Swap pith bar with (i+1)th bar
				bars[i].style.height = (bars[i + 1].style.height);
				bars[i].childNodes[0].innerText =
						(bars[i + 1].childNodes[0].innerText);
				bars[i + 1].style.height = temp1;
				bars[i + 1].childNodes[0].innerText = temp2;
				isSorted = false;

				// To pause the execution of code for 300 milliseconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 700)
				);

				// Provide skyblue color to the ith bar
				bars[i].style.backgroundColor = "rgb(0, 183, 255)";

				// Provide skyblue color to the i+1th bar
				bars[i + 1].style.backgroundColor = "rgb(0, 183, 255)";
			}
		}

		for (let i = 0; i <= n-2; i = i + 2) {
			// Assigning value of ith bar into value3
			var value3 = parseInt(bars[i].childNodes[0].innerHTML);

			// Assigning value of i+1th bar into value4
			var value4 = parseInt(bars[i + 1].childNodes[0].innerHTML);

			if (value3 > value4) {
				// Provide red color to the ith bar
				bars[i].style.backgroundColor = "red";

				// Provide red color to the i+1th bar
				bars[i + 1].style.backgroundColor = "red";

				// Swap ith bar with (i+1)th bar
				var temp3 = (bars[i].style.height);
				var temp4 = (bars[i].childNodes[0].innerText);

				// To pause the execution of code for 300 milliseconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 700)
				);

				// Swap ith bar with (i+1)th bar
				bars[i].style.height = (bars[i + 1].style.height);
				bars[i].childNodes[0].innerText =
						(bars[i + 1].childNodes[0].innerText);
				bars[i + 1].style.height = temp3;
				bars[i + 1].childNodes[0].innerText = temp4;
				isSorted = false;

				// To pause the execution of code for 300 milliseconds
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 700)
				);

				// Provide skyblue color to the ith bar
				bars[i].style.backgroundColor = "rgb(0, 183, 255)";

				// Provide skyblue color to the i+1th bar
				bars[i + 1].style.backgroundColor = "rgb(0, 183, 255)";
			}

			// To pause the execution of code for 300 milliseconds
			new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 700)
			);
		}


		// To pause the execution of code for 300 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 700)
		);

		// Providing skyblue color
		for (var x = 0; x < n; x++) {
			bars[x].style.backgroundColor = "rgb(0, 183, 255)";
		}
	}

	// Providing lightgreen color
	for (var x = 0; x < n; x++) {
		bars[x].style.backgroundColor = "rgb(49, 226, 13)";
	}

	// To enable the button "Brick Sort" after final(sorted)
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#48AAAD";

document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#48AAAD";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#48AAAD";



document.getElementById("Button4")
.disabled = false;
document.getElementById("Button4")
.style.backgroundColor = "#48AAAD";

document.getElementById("Button5")
.disabled = false;
document.getElementById("Button5")
.style.backgroundColor = "#48AAAD";
}


// Function to generate new random array



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
