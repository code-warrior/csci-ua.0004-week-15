$(document).ready(() => {
    let paragraphs = $(`main > p`);

    // paragraphs.click(() => {
    //     paragraphs.text(`content`);
    // });

    paragraphs.click( function () {
        $(this).text(`content`);
    });
});
