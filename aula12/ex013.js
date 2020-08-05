var agora = new Date()

var diaSem = agora.getDay()
var horaAtual = agora.getHours()
var min = agora.getMinutes()


switch(diaSem) {
    case 0:
        diaSem = ('Domingo')
        console.log(diaSem)
        break
    case 1:
        diaSem = ('Segunda')
        console.log(diaSem)
        break
    case 2:
        diaSem = ('Terça')
        console.log(diaSem)
        break
    case 3:
        diaSem = ('Quarta')
        console.log(diaSem)
        break
    case 4:
        diaSem = ('Quinta')
        console.log(diaSem)
        break
    case 5:
        diaSem = ('Sexta')
        console.log(diaSem)
        break
    case 6: 
        diaSem = ('Sabado')
        console.log(diaSem)
        break
    default:
        console.log('[ERRO!] dia inválido')
}
console.log(`Hoje é ${diaSem}, 
são extamente ${horaAtual} Hrs e ${min} minutos`)