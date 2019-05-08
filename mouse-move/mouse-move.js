$(document).ready( () => {

    // The following three variables don’t change; thus, “const” is more appropriate
    const MAX_COLOR_CHANNEL_VALUE = 255;
    const body = $(`body`);
    const BLUE = 0;

    $(document).on(`mousemove`, (event) => {

        // Page dimensions need to be re-calculated on mousemove; thus, they must
        // appear here and not outside the listener.
        let pageWidth = $(document).width();
        let pageHeight = $(document).height();

        /*
            Map the position of the mouse to a percentage of a color channel range:

            1. Retrieve the co-ordinates of the mouse.
            2. Divide the location of the mouse by page width and height in order to
               determine what percentage to the edge of the viewport on the right
               and left the mouse is.
            3. Multiple by the maximum range any color channel can be.
         */
        let red = (event.pageX / pageWidth) * MAX_COLOR_CHANNEL_VALUE;
        let green = (event.pageY / pageHeight) * MAX_COLOR_CHANNEL_VALUE;

        // Remove the floating-point component of the number. For example, 10.3
        // becomes just 10.
        red = Math.trunc(red);
        green = Math.trunc(green);

        body.css(`backgroundColor`, `rgb(${red}, ${green}, ${BLUE})`);
    });
});
