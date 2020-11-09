const showNumber = document.getElementById("result")
let resultNumber = Number(showNumber.innerText)

document.addEventListener("click", function(e) {
    console.log("clicked")
    if (e.target.className.includes("cal-button")) {
        resultNumber = resultNumber + Number(e.target.innerText)
        showNumber.innerText = resultNumber
        console.log(showNumber.innerText)
    }
})