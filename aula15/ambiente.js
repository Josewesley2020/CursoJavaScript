let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let num1 = [4,5,6,7,8]
console.log(num1)

for (let i = 0; i < num1.length; i++) {
    console.log(`A posição ${i} tem valor ${num1[i]}`)
}

for(var i in num1) {
    console.log(`Posiçao ${i} valor ${num1[i]}`)
}

console.log(num1.indexOf(2))