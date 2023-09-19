
    "use strict";

    // create a circle object
    const circle = {
        radius: 5,

        getArea: function () {
            let area = Math.PI * this.radius ** 2;
            // TODO: complete this method
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = this.getArea();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                area  = Math.round(area);
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.floor(area));
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
//})();
