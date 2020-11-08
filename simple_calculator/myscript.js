const showNumber = document.getElementById("result");
let resultNumber = Number(showNumber.innerText);

showNumber.addEventListener("click", function() {
    console.log("clicked!");
    resultNumber += 1;
    showNumber.innerText = resultNumber;
})