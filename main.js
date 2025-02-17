// Create a new Web Worker instance from 'worker.js'
const worker = new Worker('./worker.js');
const sunmButton = document.querySelector('#sunmButton');
const bgButton = document.querySelector('#bgButton');

/**
 * When clicked, it sends a message to the Web Worker to start the computation.
 */
sunmButton.addEventListener('click', () => {
  worker.postMessage("");
});


/**
 * Event listener for messages received from the Web Worker.
 * @param {MessageEvent} message - The message event from the Web Worker.
 */
worker.onmessage = function(message) {
  alert('Final sum: ' + message.data);
}

bgButton.addEventListener('click', event =>{
    if(document.body.style.backgroundColor !== 'blue')
    {
        document.body.style.backgroundColor = 'blue';
    }
    else
    {
        document.body.style.backgroundColor = 'green';
    }
});