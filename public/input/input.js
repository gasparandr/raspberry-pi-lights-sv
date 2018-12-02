

$("#range-input").roundSlider({
    radius: 150,
    width: 4,
    handleSize: "+25",
    circleShape: "half-top",
    sliderType: "min-range",
    showTooltip: false,
    value: 50
});


var container       = document.getElementById( "input-screen-container" );
var btnContainer    = document.getElementById( "button-container" );
var rangeContainer  = document.getElementById( "range-input-container" );
var switchButton    = document.getElementById( "switch-btn" );



switchButton.addEventListener( "click", function () {

    if ( switchButton.classList.contains( "button-off" ) ) {

        rangeContainer.classList.remove( "hide" );
        container.classList.remove( "background-off" );
        btnContainer.classList.remove( "off" );
        switchButton.classList.remove( "button-off" );
        switchButton.innerHTML = "ON";

    } else {

        rangeContainer.classList.add( "hide" );
        container.classList.add( "background-off" );
        btnContainer.classList.add( "off" );
        switchButton.classList.add( "button-off" );
        switchButton.innerHTML = "OFF";

    }
});