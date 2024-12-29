const dbclickParagraph = document.getElementById('dbclick');
const mouseParagraph = document.getElementById('mouse');

dbclickParagraph.addEventListener('dblclick', highlight);
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout',highlight);

addEventListener('keyup', (event)=> console.log('You stopped press '+event.key));

function highlight(event){
    event.target.classList.toggle('hightlight');
}