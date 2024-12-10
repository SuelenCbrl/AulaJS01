// var a = 1

// var b = true

// if ((a && b) ==0) console.log("é falso")
// else console.log("oi")
// var x= 20
// var y = 10
// var res = x >50 ? "Verdade" : "<h1 class'danger'> Falso Erro</h1>"

// var n1 = parseFloat(prompt("Digite um número: "))
// var n2 = parseFloat(prompt("Digite um número: "))

// var z = n1 > n2 ? alert("n1 é maior que  N2"): console.log("Caiu no ELSE da consição ternaria")

// console.log(z)

// var lista = [33,44,78,45,46,48,21]

// console.log(lista.length)
// if(lista.length<10){
//     alert("Lista muito pequena não compensa!")
// }else{
//     alert("#PARTIU ATACADÃO")
// }
// for(var i = 0; i< lista.length; i++){
//     console.log(lista[i])
// }

// var pessoa = {
//     "nome" : "Suelen",
//     "sobrenome" :  "Cabral ",
//     "idade" : "26",
//     "email": "suelencabral@gmail.com",
//     "fone" : null,
//     "hobies" : function tomarUma(v){return "Aquela ",v}
// }

// console.log(pessoa.nome, pessoa.idade)

// console.log(pessoa.fone)

// pessoa.nome="67 99994251"
// console.log(pessoa.fone)

// var pes2 = {}

// pes2.nome = "Su"
// pes2.idade ="26"
// pes2.email="su@teste.com"

// console.log(pes2.nome,pes2.idade)



// var pessoa = {
//     "nome" : "Suelen",
//     "sobrenome" :  "Cabral ",
//     "idade" : "26",
//     "email": "suelencabral@gmail.com",
//     "fone" : null,
//     "addfone": function(v){
//         this.fone=v
//         console.log("Telefone adicionado com sucesso!!" +this.fone)
//     },
//     "getDados" : function(){
//         return this.nome + this.sobrenome + "tem" +this.idade + "contato" + this.email
//     }
// }

// var resultado = pessoa.getDados()

// console.log(resultado)

// pessoa.addfone("67 999994585")



var carro = {
    "marca" : "Ford",
    "modelo" : "Ranger",
    "placa" : "SCB1L19",
    "ano" :2020,
    "cor" : "AZUL", 
    "portas" :4,
    "tanque": 6,
    "ligar" : true,    
    "getDados" : function(){
        return this.marca + this.modelo + this.placa + this.ano
    },
    "addgasolina": function(valor){
        this.tanque += valor;
        console.log("Abastecido com sucesso! Nível do tanque: " + this.tanque + " litros");
    },
    "andar" :function (){
        alert("Andando")
    },
    "vernivel": function(){
        this.ligar= true
        console.log(alert("nivel da gasolina: " +this.tanque))
    },
    "desligar" : function(){
        alert("Carro desligado!")
    }
}
console.log(carro)
if(carro.tanque<=5){
    alert("Abasteça o carro")
}else{
    alert("Pode ligar o carro")
}

carro.andar()

console.log(carro)
if(carro.tanque <=1){
    alert("Esta na hora de abastecer!!")
}else{
    alert("tem gasolina ainda!")
}

var resultado = carro.getDados()

console.log(resultado)

carro.addgasolina(15)
carro.vernivel()
carro.desligar()







