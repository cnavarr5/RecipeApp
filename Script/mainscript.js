function toggle() {
    var x = document.getElementById("graph");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}