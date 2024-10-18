const input = document.getElementById("input");

function reverseString(str){
    return str.split("").reverse().join("");
}
function check() {
    const value = input.value;
    const reverse = reverseString(value);
    if (reverse === value){
        alert('P A L I N D R O M E');
    }else{
        alert('This is not a palindrome');
    }
    input.value = "";
}

