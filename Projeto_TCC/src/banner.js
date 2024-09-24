        // ___ Declarando as variaveis ___

let slides = document.querySelectorAll('.carousel-image')

let slideindex = 0

let timer = 0

let radioinput = [
    document.querySelectorAll('.check')[0],
    document.querySelectorAll('.check')[1],
    document.querySelectorAll('.check')[2],
    document.querySelectorAll('.check')[3]
]


        // ____ Estilo e dinamica dos botoes do banner _____

radioinput[0].addEventListener('click', () => {
    radioinput[0].style.backgroundColor = 'Black'
    radioinput[1].style.backgroundColor = 'aliceblue'
    radioinput[2].style.backgroundColor = 'aliceblue'
    radioinput[3].style.backgroundColor = 'aliceblue'
    changeimg(0)
})

radioinput[1].addEventListener('click', () => {
    radioinput[1].style.backgroundColor = 'Black'
    radioinput[2].style.backgroundColor = 'aliceblue'
    radioinput[3].style.backgroundColor = 'aliceblue'
    radioinput[0].style.backgroundColor = 'aliceblue'
    changeimg(1)
})

radioinput[2].addEventListener('click', () => {
    radioinput[2].style.backgroundColor = 'Black'
    radioinput[1].style.backgroundColor = 'aliceblue'
    radioinput[3].style.backgroundColor = 'aliceblue'
    radioinput[0].style.backgroundColor = 'aliceblue'
    changeimg(2)
})

radioinput[3].addEventListener('click', () => {
    radioinput[3].style.backgroundColor = 'Black'
    radioinput[1].style.backgroundColor = 'aliceblue'
    radioinput[2].style.backgroundColor = 'aliceblue'
    radioinput[0].style.backgroundColor = 'aliceblue'
    changeimg(3)
})


        // __ Funcao responsavel por mudar a imagem do banner __

function changeimg(param){

    // Limpa o banner (Para não haver repetição)
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }

    if(param == 'next'){
        if(slideindex < 3){
            slideindex++
        }else{
            slideindex = 0
        }
        slides[slideindex].style.display = 'block'
    }else if(param == 'prev'){
        if(slideindex > 0){
            slideindex = slideindex -1
        }else{
            slideindex = 3
        }
        slides[slideindex].style.display = 'block'
    }else if(typeof param == 'number'){
        slideindex = param
        slides[slideindex].style.display = 'block'
    }

    //Chama a função para atualizar automaticamente
    timeoutfunction()

}

// Ativando a funcao apos o codigo ser carregado

radioinput[0].click()

// Chama a funcao novamente para atualizar a imagem a cada tres (3) segundos.

function timeoutfunction(){
    if(timer >= 3000){
        setInterval(timeoutfunction, timer)
    }else{
        timer += 3010
        setInterval(changeimg, timer, 'next')
    }
}