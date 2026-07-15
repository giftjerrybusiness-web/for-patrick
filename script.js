// When the button is clicked, go to the envelope page

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");

    if(startBtn){

        startBtn.addEventListener("click", () => {

            window.location.href = "envelope.html";

        });

    }

});
