const example = () => {
    const fromInput = document.getElementById("example").value;
    document.getElementById("text").innerHTML = fromInput;
}

document.getElementById("action").addEventListener("click", example)