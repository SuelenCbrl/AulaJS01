// var x = 10;

// for(var i=0; i<x;i++){
//     // alert("OI")
//     // console.log("Oi",i);
//     document.write("<br>Oi"+i)
// } INPUT => pYTON == PROMPT => JS
// 3 FROMAS DE PRINTAR RESULTADOS: console.log(); document.write(), alert()
// var n1 = prompt("Digite N1: ");
// var n2 = prompt("Digite N2: ");

// var res = n1 +n2;
// console.log("Resultado = "+res)


//JAVASCRIPT É UMA LINGUAGEM FUNCIONAL, OU SEJA UMA LINGUAGEM BASEADA EM FUNÇÃO

// function hello(){
    
//     var nome = document.getElementById("nome").value;
//     alert("HELLOO" +nome);
// }

const forms = document.getElementById("formulario")
console.log(forms)

// function func1(){
//     let minhadiv = document.getElementById("header");
//     console.log(minhadiv);
//     minhadiv.style.backgroundColor = 'blue';
// }  
    
    
    // var input_nome = document.getElementById("nome").value;
    
    // document.getElementById("texto").innerText(input_nome);
    // console.log(nome);
    // console.log(input_nome);


function func2(){
    let minhadiv = document.getElementById("header");
    console.log(minhadiv);
    minhadiv.style.backgroundColor = 'red';
}

// function funEmCima(){
//     alert("HELLOOOOOOOOOOOOOOOOOOOOOOOOO");
//     function funcDentroDaoutra(){
//         alert("HELLOOOOOOOOOOOOOOOOOOOOOOOOO");
//     }
// }

function func3(){
    let my_span= document.getElementById("texto");
    let input_nome = document.getElementById("nome").value;

    my_span.innerText= input_nome;
}

function valida(event){
    event.preventDefault()//segura o forms, nao submete 
    const form = document.getElementById("formulario");
    let login = form.email.value
    let senha = form.senha.value
    let conf = form.conf.value
    console.log(login)
    console.log(senha)
    console.log(conf)
    if (login.length <5){
        alert("Abençoado!! Digite o email válido")
        return false
    }
    if (senha.length <8){
        alert("Abençoado!! As senhas devem ter no MÍNIMO 8 CARACTERES")
        return false
    }
    if (senha!= conf){
        alert("As senhas não batem Animal!!!!!")
        return false
    }
    else{
        alert("Animal Logado com sucesso!!!!!!!!!!!!")
    }
}
function receba(x){
    alert(x)
}


