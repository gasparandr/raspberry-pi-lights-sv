

var username = document.getElementById( "username-input" );
var password = document.getElementById( "password-input" );

var loginBtn = document.getElementById( "login-btn" );

var address = "szilveszter.go.ro:3000";


loginBtn.addEventListener( "click", function () {

    console.log( "login btn clicked" );


    var method          = "POST";
    var endpoint        = address + "/input/data";
    var data            = { username: username.value, password: password.value  };

    httpRequest(
        method,
        endpoint,
        data,
        function (response) {
            console.log( response );
        },
        function (message) {
            console.log( message );
        }
    );

});



function httpRequest(method, endpoint, data, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open( method, endpoint, true );

    xhr.setRequestHeader( 'Content-type', 'application/json' );

    xhr.setRequestHeader( 'Accept', 'application/json' );


    xhr.onload = function () {

        var response = JSON.parse( xhr.responseText );

        if ( response.success ) {

            if ( success ) success( response );

        } else {

            if ( failure ) failure( response.message );
        }
    };

    if ( data ) {
        xhr.send( JSON.stringify( data ) );
    } else {
        xhr.send();
    }

    return xhr;
}