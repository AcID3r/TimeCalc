function calculateTime() {
    const startDate = new Date(document.getElementById('startDateTime').value);
    const endDate = new Date(document.getElementById('endDateTime').value);

    if (!startDate || !endDate || startDate > endDate) {
        document.getElementById('result').innerHTML = `<p style="color: red;">Please enter valid dates.</p>`;
        return;
    }

    const timeDiff = Math.abs(endDate - startDate);
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('result').innerHTML = `
        <p>${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining 🕒</p>
    `;
}
