$(document).ready(function () {

    $(".reveal").click(function () {

        let buttonClicked = this.id;

        switch (buttonClicked) {
            case "A1-btn":
                $("#A1-answer").html(`
                    <p>let multiplyFunction = function(x,y) {</p>
                        <p>return (x * y);</p>
                    <p>}</p>
                    <p>example use:</p>
                    <p>multiplyFunction(3,4); // returns 12</p>
                    <p>multiplyFunction(10,10); // returns 100</p>
                `);
                break;

            case "A2-btn":
                $("#A2-answer").html("hello");
                break;

            case "A3-btn":
                $("#A3-answer").html("hello");
                break;

            case "A4-btn":
                $("#A4-answer").html("hello");
                break;

            case "A5-btn":
                $("#A5-answer").html("hello");
                break;
        }

    });

});
