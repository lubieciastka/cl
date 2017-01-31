https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop
HASLA: eventloop / call stack

// funkcje zaawansowane - zadanie 2

function findMax () {
    var tempMax = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (tempMax < arguments[i]){
            tempMax = arguments[i];   
        }
    }

    console.log(tempMax)
}

findMax(5, 9, 6, 4, 34, 56, 2, 3, 12312, 123323,2993293,1, 1235,465475,775);

