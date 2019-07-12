
console.log('You have run javascript');

//scroll left-right arrow code

$('#right-button').click(function () {
    event.preventDefault();
    $('#content').animate({
        scrollLeft: "+=200px"
    }, "slow");
});

$('#left-button').click(function () {
    event.preventDefault();
    $('#content').animate({
        scrollLeft: "-=200px"
    }, "slow");
});

//end


//history back code

function goBack() {
    alert('Go back to home page.');
    window.history.go();
}

//end


function init() { }

init();