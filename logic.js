$(document).ready(function () {

    $(".reveal").click(function () {

        let buttonClicked = this.id;

        switch (buttonClicked) {
            case "A1-btn":
                $("#A1-answer").html(`
                    <p>multiplyFunction (x,y) {</p>
                        <p>return (x * y);</p>
                    <p>}</p>
                    <p>example use:</p>
                    <p>multiplyFunction(3,4); // returns 12</p>
                    <p>multiplyFunction(10,10); // returns 100</p>
                `);
                break;

            case "A2-btn":
                $("#A2-answer").html("<img src='./images/Answer2.JPG' class='answersIMG'>");
                break;

            case "A3-btn":
                $("#A3-answer").html("<img src='./images/Answer3.JPG' class='answersIMG'>");
                break;

            case "A4-btn":
                $("#A4-answer").html("<img src='./images/Answer4.JPG' class='answersIMG'>");
                break;

            case "A5-btn":
                $(".teaser-odd").addClass("teaser-odd-new");
                $(".teaser-even").addClass("teaser-even-new");
                $("#A5-answer").html("<img src='./images/Answer5.JPG' class='answersIMG'>");
                // This switch case is part of an on click function.
                // The colors are changed via the new classes in the CSS file

                break;

            case "A6-btn":
                $("#A6-answer").html("<img src='./images/Answer6.JPG' class='answersIMG'>");
                break;
        }

    });

});
