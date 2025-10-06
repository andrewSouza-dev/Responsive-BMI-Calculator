// chamando o form
const form = document.getElementById('form')

// adicionando o evento de preventDefault ao botao
form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    // variaveis  globais do projeto
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value
    const value = document.getElementById('value')
    let description = ''
    

    
    // Cálculo do imc
    const bmi = (weight / (height * 2)).toFixed(2)

    // Remove a classe hidden dos resultados
    document.getElementById('infos').classList.remove('hidden')

    // Adiciona a classe attention a todas as condições
    value.classList.add('attention')

    // condiçoes para o calculo do imc
    if(bmi < 18.5) {
        description = `Seu peso atualmente é: ${weight}, você está abaixo do peso!`
    } else if ( bmi >= 18.5 && bmi <= 25){
        description = `Seu peso atualmente é: ${weight}, você está no peso ideal!`
        value.classList.remove('attention') // Remove a classe 'attention'
        value.classList.add('normal') // Adiciona a classe 'normal'
    } else if ( bmi > 25 && bmi <= 30) {
        description = `Seu peso atualmente é: ${weight}, você está com sobrepeso!`
    } else if ( bmi > 30 && bmi <= 35) {
        description = `Seu peso atualmente é: ${weight}, você está com obesidade moderada!`
    } else if ( bmi > 35 && bmi <= 40) {
        description = `Seu peso atualmente é: ${weight}, você está com obesidade severa!`
    } else  {
        description = `Seu peso atualmente é: ${weight}, você está com obesidade mórbida!`
    }
    
    value.textContent = bmi.replace(".", ",")
    document.getElementById('description').textContent = description
    
})



