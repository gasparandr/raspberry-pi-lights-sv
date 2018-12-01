//
//
// var username = document.getElementById( "username-input" );
// var password = document.getElementById( "password-input" );
//
// var loginBtn = document.getElementById( "login-btn" );
//
// var address = "http://localhost:3000";
//
//
// loginBtn.addEventListener( "click", function () {
//
//     console.log( "login btn clicked" );
//
//
//     var method          = "POST";
//     var endpoint        = address + "/auth/login";
//     var data            = { username: username.value, password: password.value  };
//
//     httpRequest(
//         method,
//         endpoint,
//         data,
//         function (response) {
//             console.log( response );
//         },
//         function (failure) {
//             console.log( failure );
//         }
//     );
//
// });
//
//
//
// function httpRequest(method, endpoint, data, success, failure) {
//
//     var xhr = new XMLHttpRequest();
//
//     xhr.open( method, endpoint, true );
//
//     xhr.setRequestHeader( 'Content-type', 'application/json' );
//
//     xhr.setRequestHeader( 'Accept', 'application/json' );
//
//
//     xhr.onload = function () {
//
//         console.log( xhr.responseText );
//
//         // var response = JSON.parse( xhr.responseText );
//         //
//         // if ( response.success ) {
//         //
//         //     if ( success ) success( response );
//         //
//         // } else {
//         //
//         //     if ( failure ) failure( response );
//         // }
//     };
//
//     if ( data ) {
//         xhr.send( JSON.stringify( data ) );
//     } else {
//         xhr.send();
//     }
//
//     return xhr;
// }