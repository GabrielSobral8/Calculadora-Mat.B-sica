function ResultadoSoma(){
    const input1 = document.getElementById("item1")
        const item1 = input1.value
    const input2 = document.getElementById("item2")
        const item2 = input2.value
    
     const soma = Number(item1) + Number(item2)
    
        const span = document.getElementById('resSoma')
        span.innerText = soma
    }
function ResultadoMultiplicacao(){
        const input3 = document.getElementById("item3")
            const item3 = input3.value
        const input4 = document.getElementById("item4")
            const item4 = input4.value
        
         const multiplicacao = Number(item3) * Number(item4)
        
            const span = document.getElementById('resMultiplicacao')
            span.innerText = multiplicacao
        }
 function ResultadoSubtracao(){
        const input5 = document.getElementById("item5")
            const item5 = input5.value
        const input6 = document.getElementById("item6")
            const item6 = input6.value
            
         const subtracao = Number(item5) - Number(item6)
            
            const span = document.getElementById('resSubtracao')
            span.innerText = subtracao
            }
function ResultadoDivisao(){
        const input7 = document.getElementById("item7")
            const item7 = input7.value
        const input8 = document.getElementById("item8")
            const item8 = input8.value
                    
         const divisao = Number(item7) / Number(item8)
                    
        const span = document.getElementById('resDivisao')
        span.innerText = divisao
                    }            
