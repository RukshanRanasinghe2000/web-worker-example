/**
 * Web Worker script for performing a heavy computation task in the background.
 * The worker listens for messages from the main thread and executes the task.
 * Once completed, it sends the result back using `postMessage()`.
 */

onmessage = function(){
    let sum = 0
    for (let i = 0; i < 100000000000; i++) {
        sum += 1
    }

    postMessage(sum)
}