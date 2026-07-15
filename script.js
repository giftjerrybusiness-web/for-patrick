document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            startBtn.innerHTML = "Opening... 🤍";

            startBtn.disabled = true;

            document.body.style.opacity = "0";

            setTimeout(() => {

                window.location.href = "envelope.html";

            },1000);

        });

    }

});
