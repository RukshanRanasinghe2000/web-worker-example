const worker = new Worker('./worker.js');
const sunmButton = document.querySelector('#sunmButton');
const bgButton = document.querySelector('#bgButton');

sunmButton.addEventListener('click', () => {
  worker.postMessage("");
});

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