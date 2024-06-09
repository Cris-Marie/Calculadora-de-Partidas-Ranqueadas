let vitorias = 30;
let derrotas = 10

let saldoDeVitorias
let seuRank

function rank(vitoria, derrota)
{
	saldoDeVitorias = vitoria - derrota

    if (saldoDeVitorias < 10) {
        seuRank = 'Ferro';
    } else if (saldoDeVitorias < 20) {
        seuRank = 'Bronze';
    } else if (saldoDeVitorias < 50) {
        seuRank = 'Prata';
    } else if (saldoDeVitorias < 80) {
        seuRank = 'Ouro';
    } else if (saldoDeVitorias < 90) {
        seuRank = 'Diamante';
    } else if (saldoDeVitorias < 100) {
        seuRank = 'Lendário';
    } else if (saldoDeVitorias > 100) {
        seuRank = 'Imortal';
    }
}

rank(vitorias, derrotas);
console.log("O Herói tem saldo de " + saldoDeVitorias + " está no nível de " + seuRank);