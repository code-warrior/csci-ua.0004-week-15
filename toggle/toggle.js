$(document).ready(() => {
    const ONE_SECOND = 1000;
    const SPEED = (2 * ONE_SECOND);

    let body = $(`body`);
    let paragraphs = $(`p`);

    body.click(() => {
        // Read more about toggle at:
        //    https://api.jquery.com/toggle/#toggle-duration-complete

        paragraphs.toggle(SPEED);
        // paragraphs.toggle(`slow`);
        //paragraphs.toggle(`fast`);
    });
});
