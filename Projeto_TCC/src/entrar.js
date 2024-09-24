let versenha = document.querySelector('#versenha')
let senha = document.querySelector('#senha')
let botao = document.querySelector('#enviar')
switcheye = 1
versenha.addEventListener('click', () =>{
    if(switcheye == 1){
        senha.type = 'text'
        versenha.innerHTML = '<i class="bi bi-eye" ></i>'
        switcheye = 0
    }else{
        senha.type = 'password'
        versenha.innerHTML = '<i class="bi bi-eye-slash"></i>'
        switcheye = 1
    }
})

botao.addEventListener('click', () =>{
    alert('ainda em construção...')
})