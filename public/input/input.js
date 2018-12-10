

$("#range-input").roundSlider({
    radius: 150,
    width: 5,
    handleSize: "+31",
    circleShape: "half-top",
    sliderType: "min-range",
    showTooltip: false,
    value: 50
});


var container       = document.getElementById( "input-screen-container" );
var btnContainer    = document.getElementById( "button-container" );
var rangeContainer  = document.getElementById( "range-input-container" );
var switchButton    = document.getElementById( "switch-btn" );
var background      = document.getElementById( "background" );
var onIcon          = document.getElementById( "on-icon" );
var offIcon         = document.getElementById( "off-icon" );

var animation;


switchButton.addEventListener( "click", function () {

    if ( switchButton.classList.contains( "button-off" ) ) {

        onIcon.classList.remove( "hide" );
        offIcon.classList.remove( "hide" );

        rangeContainer.classList.remove( "hide" );
        container.classList.remove( "background-off" );
        btnContainer.classList.remove( "off" );
        switchButton.classList.remove( "button-off" );
        switchButton.innerHTML = "ON";

        background.classList.add( "disable-css-transitions" );

        background.classList.remove( "light" );
        if ( animation ) {
            clearTimeout( animation );
        }



    } else {

        onIcon.classList.add( "hide" );
        offIcon.classList.add( "hide" );

        rangeContainer.classList.add( "hide" );
        container.classList.add( "background-off" );
        btnContainer.classList.add( "off" );
        switchButton.classList.add( "button-off" );
        switchButton.innerHTML = "OFF";


        background.classList.remove( "disable-css-transitions" );

        animation = setTimeout( function () {
            background.classList.add( "light" );
        }, 100 );

    }
});