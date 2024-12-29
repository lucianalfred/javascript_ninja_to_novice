ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event)=> console.log('clciked on ul'),false);
liElement.addEventListener('click', (event)=>{
    console.log('Clicked on li');
},false);