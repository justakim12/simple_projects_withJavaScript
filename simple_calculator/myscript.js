const showNumber = document.getElementById("result")
let resultNumber = Number(showNumber.innerText)

document.addEventListener("click", function(e) {
    console.log(e.target);
    
    if (e.target.className.includes("cal-button")) {
        console.log("cal-button clicked")
        resultNumber = resultNumber + Number(e.target.innerText)
        showNumber.innerText = resultNumber
        console.log(showNumber.innerText)
    }

    if (e.target.id.includes("reset")) {
        console.log("reset clicked")
        resultNumber = 0;
        showNumber.innerText = resultNumber;
    }
})