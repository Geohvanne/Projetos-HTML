
const calculator = document.querySelector('#calculadora')
let calcindex = 0

function closeCalculator(){
    calcindex = 1
    showcalculator()
}

function showcalculator(){

    if(calcindex == 0){

        calculator.style.display = 'block'
        calculator.style.position = 'fixed'
        calculator.style.top = '50%'
        calculator.style.left = '50%'   
        calculator.style.transform = 'translate(-50%, -50%)'
        
        document.addEventListener('keydown', (event) => {
            if(event.key == '1'){
                type(1)
            }else if(event.key == '2'){
                type(2)
            }else if(event.key == '3'){
                type(3)
            }else if(event.key == '4'){
                type(4)
            }else if(event.key == '5'){
                type(5)
            }else if(event.key == '6'){
                type(6)
            }else if(event.key == '7'){
                type(7)
            }else if(event.key == '8'){
                type(8)
            }else if(event.key == '9'){
                type(9)
            }else if(event.key == '0'){
                type(0)
            }else if(event.key == '+'){-
                type('+')
            }else if(event.key == '-'){
                type('-')
            }else if(event.key == '*'){
                type('*')
            }else if(event.key == '/'){
                type('/')
            }else if(event.key == '.'){
                type('.')
            }else if(event.key == '%'){
                type('%')
            }else if(event.key == '^'){
                type('')
            }else if(event.key == 'Enter'){
                calculate()
            }else if(event.key == 'Backspace'){
                limpa()
            }
        })
        
        
        calcindex = 1
        
    }else{
        
        calculator.style.display = 'none'
        calcindex = 0
        

    }


}


    document.addEventListener('keydown', (event) => {
        if(event.key == 'Escape'){
            closeCalculator()
        }
    })

    let display = document.querySelector('.display')
    let valoratual = ''
    let valorpassado = ''
    let operacao = ''
    let resultado = ''


    // Função responsável por registrar os valores e atualizar o número no console
    function type(param){
        if(typeof param == 'string'){
            // Verifica se operador digitado foi um ponto ('.')
         if(param == '.'){
            
            if(valoratual.includes('.')){
                alert('O valor digitado já é decimal.')
            }else{
                valoratual += param
                if(valorpassado != ''){  
                    display.innerHTML = `<p>${valorpassado}</p>`
                    display.innerHTML += operacao + ' ' + valoratual
                }else{
                    display.innerHTML = valoratual
                }
                
            }
            // Verifica se operador digitado foi ('+/-')
        }else if(param == 'maismenos'){
            let mult = -1
            valoratual = String(eval(valoratual * mult))
            if(valorpassado != ''){
                display.innerHTML = `<p>${valorpassado}</p>`
                display.innerHTML += operacao + ' ' + valoratual
            }else{
                display.innerHTML = valoratual
            }
            // verifica se opeador digitado foi porcentagem ('%')
        }else if(param == '%'){
            if(valorpassado == ''){
                valoratual = valoratual/100
                display.innerHTML = valoratual
            }else{
                valoratual = valoratual*valorpassado/100
                display.innerHTML = valoratual
            }
    
        }else if(param == '^'){
            if(valoratual != 0){
                if(valoratual.includes('^')){
                    alert('Número já contém exponenciação.')
                }else{
                    operacao = '**'
                    valorpassado = valoratual
                    valoratual = ''
                    display.innerHTML = `<p>${valorpassado}</p>`
                    display.innerHTML += '^' + ' '
                }
            }else{
                alert('Valor inválido.')
            }
            
        }else{

            if(valorpassado == ''){
                valorpassado = valoratual
                valoratual = ''
                operacao = param
                display.innerHTML = `<p>${valorpassado}</p>`
                display.innerHTML += operacao + ' '
            }else{
                resultado = valorpassado + operacao + valoratual
                valorpassado = String(eval(resultado))
                valoratual = ''
                operacao = param
                display.innerHTML = `<p>${valorpassado}</p>`
                display.innerHTML += operacao + ' '
            }
            
    
        }
    
        }
    
        else{

        if(valoratual.length >= 15){
            alert('Usuário passou do limite de caraceteres')
        }else{
            if(valorpassado != ''){
                valoratual += param
                display.innerHTML = `<p>${valorpassado}</p>`
                if(operacao == '**'){
                    display.innerHTML += '^' + ' ' + valoratual
                }else{
                    display.innerHTML += operacao + ' ' + valoratual
                }
                
            }else{
                valoratual += param
                display.innerHTML = valoratual
            }
        }
       
      
    }

    }

    function calculate(){

        resultado = valorpassado + operacao + valoratual
        valorpassado = ''
        valoratual = String(eval(resultado))
        display.innerHTML = valoratual
    }

    function limpa(){
        valoratual = ''
        valorpassado = ''
        operacao = ''
        resultado = ''
        display.innerHTML = ''
    }

    

// Método 'eval()' transforma uma string em uma expressão operável
// método eval **transforma string em number**


// Declarando as variaveis que vamos usar

