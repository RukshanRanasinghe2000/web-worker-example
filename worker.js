onmessage = function(){
    let sum = 0
    for (let i = 0; i < 100000000000; i++) {
        sum += 1
    }

    postMessage(sum)
}