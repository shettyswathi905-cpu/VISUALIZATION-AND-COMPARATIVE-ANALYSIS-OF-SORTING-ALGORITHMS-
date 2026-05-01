const container = document.querySelector(".data-container");
pages = [];


// Asynchronous function to perform "Shell Sort"
async function ShellSort(delay = 2000) {
    let bars = document.querySelectorAll(".bar");
let inputText = document.getElementById('fname1').value;
  
  inputText = inputText.split(' ');
let n=pages.length;
    for (var i = Math.floor(n/2); i > 0; i = Math.floor(i / 2)) {

        // To pause the execution of code
        // for 1000 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 1000)
        );

        for (var j = i; j < n; j++) {
            var temp = parseInt(
                bars[j].childNodes[0].innerHTML);
            var k;

            var temp1 = bars[j].style.height;
            var temp2 = bars[j].childNodes[0].innerText;

            for (
                k = j;
                k >= i && parseInt(bars[k - i]
                    .childNodes[0].innerHTML) > temp;
                k -= i
            ) {
                bars[k].style.height 
                        = bars[k - i].style.height;

                bars[k].childNodes[0].innerText = 
                    bars[k - i].childNodes[0].innerText;

                // To pause the execution of code
                // for 1000 milliseconds
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 1000)
                );
            }

            // Provide darkblue color to the jth bar
            bars[j].style.backgroundColor = "darkblue";

            // Provide darkblue color to the kth bar
            bars[k].style.backgroundColor = "darkblue";
            bars[k].style.height = temp1;
            bars[k].childNodes[0].innerText = temp2;

            // To pause the execution of code for
            // 1000 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 2000)
            );

            // Provide skyblue color to the jth bar
            bars[j].style.backgroundColor = "rgb(0, 183, 255)";

            // Provide skyblue color to the kth bar
            bars[k].style.backgroundColor = "rgb(0, 183, 255)";

            // To pause the execution of code for
            // 1000 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000)
            );
        }
    }
    for (var x = 0; x < n; x++) {
        bars[x].style.backgroundColor 
            = "rgb(49, 226, 13)";
    }

    // To enable the button "Generate New Array"
    // after final(sorted)
    document.getElementById("Button1")
            .disabled = false;

    document.getElementById("Button1")
        .style.backgroundColor = "#6f459e";

    // To enable the button "Shell Sort"
    // after final(sorted)
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2")
        .style.backgroundColor = "#6f459e";

	/* document.getElementById("Button3").disabled = false;
    document.getElementById("Button3")
        .style.backgroundColor = "#6f459e"; */

document.getElementById("Button4").disabled = false;
    document.getElementById("Button4")
        .style.backgroundColor = "#6f459e";

document.getElementById("Button5").disabled = false;
    document.getElementById("Button5")
        .style.backgroundColor = "#6f459e";
}



function generate()
{
//
//pages = [];
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