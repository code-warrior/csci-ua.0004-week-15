$(document).ready( () => {
    // Append a new <img> element (sans a value to the “src” attribute) to the
    // <main> element.
    $(`main`).append(`<img src="" alt="">`);

    // Listen for clicks on the only <button> element in the page.
    $(`#the-only-button`).click( () => {

        // When a user clicks the <button>, update the <img> “src” attribute’s value.
        $(`img`).attr(`src`, `https://live.staticflickr.com/1644/24848952846_01cf2e3b83_n.jpg`);
    });
});
