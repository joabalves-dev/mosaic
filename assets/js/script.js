const buttons = document.querySelectorAll('.nav-item');

buttons.forEach(btn => {
    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    btn.addEventListener('click', e => {

        if (e.target.dataset.type == 'mosaic') {
            body.classList.add('mosaic');
            content.classList.add('mosaic');

        }else{
            body.classList.remove('mosaic');
            content.classList.remove('mosaic');
        };
    });
})