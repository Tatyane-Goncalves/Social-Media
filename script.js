var btn = document.querySelector('btn');
var container = document.querySelector('icon')

btn.addEventListener('click' , function() {

    if (container.style.display === 'block'){
        container.style.display = 'none';
    } else {
        container.style.display = 'block'
    }
});

