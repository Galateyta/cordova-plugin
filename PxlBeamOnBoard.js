var exec = require('cordova/exec');


function alertDismissed() {
    // do something
}

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'PxlBeamOnBoard', 'coolMethod', [arg0]);
    navigator.notification.alert(
    'You are the winner!', // message
    alertDismissed, // callback
    'Game Over', // title
    'Done' // buttonName
    );
};

window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};
