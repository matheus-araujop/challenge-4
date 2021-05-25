function hello(){

    console.log("Olá Mundo!")
}

hello()

//Exercício 1

let n = "Matheus"

function name(n){
    console.log(n)
}

name(n)

let nome = "Matheus"
let age = 20
let style = "pop/rock"
//Exercício 2

function personal_information(nome, age, style){

    console.log(`Meu nome é ${nome}, tenho ${age} anos e meu estilo musical preferido é ${style}!`)
}
personal_information(nome,age,style)
//Exercício 3

let movie = "Interestelar"
let music = "Arabella"

function midia(movie, music){

    console.log(`Minha música favorita é ${music} e meu filme favorito é ${movie}!`)
}
midia(movie, music)
//Exercício 4

function triple(number){
    number = number * 3
    return number
}
triple(3)
//Exercício 5

