(function () {
    var burger = document.querySelector('#containerBurger');
    var lista = document.querySelector('#itemlist');

    burger.addEventListener('click', function () {
        if (lista.style.display === 'flex') {
            lista.style.display = 'none';
        } else {
            lista.style.display = 'flex';
        }
    })
}());