const enviar = document.getElementById('cadastrar')
const versenha = document.querySelector('#versenha')
const versenhaconfirmada = document.querySelector('#versenhaconfirmada')
let emailcadastrado = []


let senhainput = document.getElementById('senha')
let confirmesenhainput = document.getElementById('senha2')

let switcheye = 1
enviar.addEventListener('click', () =>{
let nome = document.getElementById('nome').value
let email = document.getElementById('email').value
let senha = document.getElementById('senha').value
let confirmesenha = document.getElementById('senha2').value
let telefone = document.getElementById('numero').value    

    if(nome == ''){
        alert('Por favor, nos informe seu nome')
    }else{
        if(email == ''){
            alert('Por favor, preencha seu email')
            
        }else{
            if(telefone == ''){
                alert('Por favor, insira seu telefone')

            }else{
                if(senha == ''){
                    alert('Por favor, insira sua senha')

                }else{
                    if(confirmesenha == ''){
                        alert('Por favor, confirme sua senha')

                    }else{
                        if(senha != confirmesenha){
                            alert('As senhas não coincidem')

                        }else{
                            if(senha.length < 7){
                                alert('Sua senha deve ter no mínimo 7 caracteres')

                            }else{
                            nome = document.getElementById('nome')
                            email = document.getElementById('email')
                            telefone = document.getElementById('numero')
                            nome.value = ''
                            email.value = ''
                            telefone.value = ''
                            confirmesenha.value = ''
                            confirmesenhainput.value = ''
                            senhainput.value = ''
                            senhainput.type = 'password'
                            confirmesenhainput.type = 'password'
                            versenha.innerHTML = `<i class="bi bi-eye-slash" id="olhofechado"></i>`
                            versenhaconfirmada.innerHTML = `<i class="bi bi-eye-slash" id="olhofechado"></i>`
                            setTimeout(()=>{
                                alert('Você completou o cadastro')

                            }, 10)
                        }
                        }
                    }
                }
            }
        }
}})

versenha.addEventListener('click', () =>{
    if(switcheye == 1){
    versenha.innerHTML = `<i class="bi bi-eye" id="olhofechado"></i>`
    senhainput.type = 'text'
    switcheye = 0
    }else{
    versenha.innerHTML = `<i class="bi bi-eye-slash" id="olhofechado"></i>`
    senhainput.type = 'password'
    switcheye = 1
    }
})
versenhaconfirmada.addEventListener('click', () =>{
    if(switcheye == 1){
        versenhaconfirmada.innerHTML = `<i class="bi bi-eye" id="olhofechado"></i>`
        confirmesenhainput.type = 'text'
        switcheye = 0
        }else{
        versenhaconfirmada.innerHTML = `<i class="bi bi-eye-slash" id="olhofechado"></i>`
        confirmesenhainput.type = 'password'
        switcheye = 1
        }

})
