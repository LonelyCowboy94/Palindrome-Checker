const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener('click', function(input) {

    const userInput = textInput.value;

    if (userInput === "") {
        alert("Please input a value");
        result.style.display = "none";
    }   else {
    
let resultContent = document.createElement("p");
    result.textContent = "";

    result.style.display = "flex";

    result.appendChild(resultContent);

    result.textContent = isPalindrome(clearInput(userInput));
    textInput.value = "";
}

})

const clearInput = (str) => {
    const regex = /[\s\/\\.,()-_!]/g
    return str.toLowerCase().replace(/\d/g, "i").replace(regex, "");
}

const isPalindrome = (word) => {
    const reverse = word.split('').reverse().join('');
    if (word === reverse) {
        return `${word} is a palindrome`;
    }   else {
        return `${word} is not a palindrome`;
    }
    
}