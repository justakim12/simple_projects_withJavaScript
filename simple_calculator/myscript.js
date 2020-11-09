const showNumber = document.getElementById("result")
let resultNumber = Number(showNumber.innerText)

document.addEventListener("click", function(e) {
    
    if (e.target.className.includes("cal-button")) {
        console.log("cal-button clicked")
        resultNumber = resultNumber + Number(e.target.innerText)
        showNumber.innerText = resultNumber
        console.log(showNumber.innerText)
    }

    if (e.target.className.includes("reset")) {
        console.log("reset clicked")
        resultNumber = Number(0);
        }
})