checkPalindrome();

function checkPalindrome() {
    document.querySelector("#submitBtn").addEventListener("click", () => {
        const input = document.querySelector(".input").value;

        document.querySelector(".input").style.backgroundColor =
            input === input.split("").reverse().join("") ? "green" : "red";
    });
};