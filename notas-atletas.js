let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

//Criando as variáveis
let obterMedia = 0;
let obterSoma = 0;

//Retirando a maior e a menor nota
for (let i = 0; i < atletas.length; i++) {
    let ordem = atletas[i].notas.sort(function(a, b){return b-a});
    ordem = ordem.slice(1,4);

//Somando as notas restantes
    obterSoma = ordem.reduce(function(total, nota) {
        return total + nota
    })
//Obtendo a média de cada competidor
    obterMedia = obterSoma / ordem.length

//Obtendo nomes e notas
let nome = atletas[i].nome
let notas = atletas[i].notas.join(", ")

    console.log(`Atleta: ${nome}\nNotas Obtidas: ${notas}\nMédia Valida: ${obterMedia}\n`)
}
