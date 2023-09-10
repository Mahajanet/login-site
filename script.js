const login = document.getElementById("login");
const hiddenDiv = document.getElementById("info");

        login.addEventListener("click", function () {
            login.style.weight="bold"
            login.style.background="#FF6400"
            hiddenDiv.style.display = "block"; // Show the hidden div
        });
