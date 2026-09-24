function updateECBar() {
    const gradeCells = document.querySelectorAll("td.number");
    let earned = 0;

    gradeCells.forEach(cell => {
        const value = parseFloat(cell.textContent);
        const row = cell.parentElement;

        if (!isNaN(value) && value >= 5.5) {
            earned += 5;

            row.classList.remove("failed", "unfinished");
            row.classList.add("complete");

        } else if (!isNaN(value)) {
            row.classList.remove("complete", "unfinished");
            row.classList.add("failed");

        } else {
            row.classList.remove("complete", "failed");
            row.classList.add("unfinished");
        }
    });

    const total = 60;
    const percentage = (earned / total) * 100;

    document.getElementById("ec-bar").textContent = `${earned}/${total} EC`;

    document.documentElement.style.setProperty("--bar-width", percentage + "%");

    // restart the animation
    const bar = document.getElementById("innerbar");
    bar.style.animation = "none";
    bar.offsetHeight;
    bar.style.animation = "progressbar 1s linear forwards";
}

updateECBar();
