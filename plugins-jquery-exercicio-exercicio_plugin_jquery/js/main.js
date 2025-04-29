$(document).ready(function () {  
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('00000000000')

    $('#cep').mask('00000000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log("submitHandler funcionando!");
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        },
        invalidHandler: function(form, validador) {
            alert("Por favor, preencha os campos para prosseguir com a compra!")
        }
    })
})