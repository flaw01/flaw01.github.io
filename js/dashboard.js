function updateECBar() {
    const gradeCells = document.querySelectorAll("td.number");
    let earned = 0;

    gradeCells.forEach(cell => {
        const value = parseFloat(cell.textContent);
        const row = cell.parentElement;

        // Only count EC if grade is above 5.5
        if (!isNaN(value) && value > 5.5) {
            earned += 5;

            // Mark row as complete
            row.classList.remove("failed", "unfinished");
            row.classList.add("complete");

        } else if (!isNaN(value)) {
            // Grade exists but is 5.5 or below → failed
            row.classList.remove("complete", "unfinished");
            row.classList.add("failed");

        } else {
            // No grade (value is NaN) → unfinished
            row.classList.remove("complete", "failed");
            row.classList.add("unfinished");
        }
    });

    const total = 60;
    const percentage = (earned / total) * 100;

    // Update EC text
    document.getElementById("ec-bar").textContent = `${earned}/${total} EC`;

    // Update bar width
    document.documentElement.style.setProperty("--bar-width", percentage + "%");

    // Restart animation
    const bar = document.getElementById("innerbar");
    bar.style.animation = "none";
    bar.offsetHeight;
    bar.style.animation = "progressbar 1s linear forwards";
}

updateECBar();
