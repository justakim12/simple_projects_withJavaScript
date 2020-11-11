const showNumber = document.getElementById("result")
let resultNumber = Number(showNumber.innerText)

document.addEventListener("click", function(e) {
    console.log(e.target);
    
    if (e.target.className.includes("cal-button")) {
        console.log("cal-button clicked")
        resultNumber = e.target.innerText
        showNumber.innerText = resultNumber
        console.log(showNumber.innerText)
    }

    if (e.target.id.includes("reset")) {
        console.log("reset clicked")
        reset();
    }

    if (e.target.id.includes("plus")) {
        
    }
})

function reset() {
    resultNumber = 0
    showNumber.innerText = resultNumber
}

function sum(a, b) {
    resultNumber = a+b
    showNumber.innerText = resultNumber
}
