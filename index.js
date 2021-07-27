function receivesAFunction(callbackFunction) {
    callbackFunction()
}


function returnsANamedFunction() {
    return Spy()
}

function returnsAnAnonymousFunction() {
    return x
}

const x = function() {

}