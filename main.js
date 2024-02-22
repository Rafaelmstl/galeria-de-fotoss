$(document).ready(function () {

    //Descer formulario

    $('header button').click(function () {
        $('form').slideDown()
    })

    //BOTAO CANCELAR

    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })

    //Adicionar imagem

    $('form').on('submit', function (e) {
        e.preventDefault()
        const inputImg = $('#url-imagem').val();
        const novoItem = $(`<li style='display:none'></li>`);
        $(`<img src ='${inputImg}'>`).appendTo(novoItem)
        $(`<div class='ovelay-link'>
       <a href='${inputImg}'>ver a imagem em full-scream</a>
       </div>'`).appendTo(novoItem)

        novoItem.appendTo('ul')
        $(novoItem).fadeIn(1000)
       $('#url-imagem').val('');



    })
})