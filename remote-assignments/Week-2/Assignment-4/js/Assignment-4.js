const tagline_msg = document.querySelector('.tagline');
let tagline_html = "Have a Good Time!";
tagline_msg.addEventListener('click', ()=>{
    tagline_msg.textContent = tagline_html;
    tagline_msg.style.fontSize = '1.5em';
    tagline_msg.style.color = 'red';
})

const clickButton = document.querySelector('.button');
const actionBox = document.querySelector('.hide_and_show');
clickButton.addEventListener('click', ()=>{
    actionBox.style.display = 'flex';
    actionBox.style.flexWrap = 'wrap'; // 設定flex-wrap = 'wrap'
    clickButton.addEventListener('click', ()=>{
        actionBox.style.display = 'none';
    })
})


