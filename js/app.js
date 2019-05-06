window.onload = () => {
    let outputContainer = document.getElementById(`output-container`);
    let output;
    let now = new Date();

    output = `<b>Today is</b> ${now}<br>`;
    output += `<b>The month is</b> ${now.getMonth()}<br>`;
    output += `<b>The day is</b> ${now.getDay()}<br>`;
    output += `<b>The year is</b> ${now.getFullYear()}<br>`;
    output += `<b>The hour is</b> ${now.getHours()}<br>`;
    output += `<b>The minute is</b> ${now.getMinutes()}<br>`;
    output += `<b>The seconds is</b> ${now.getSeconds()}`;

    outputContainer.innerHTML = output;
};