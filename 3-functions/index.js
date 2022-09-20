const samochod = {
    body: {
        przod: {
            komoraSilnika: {
                akumulator: false,
            },
        },
        srodek: {
            kierownica: 'kierownica',
            fotele: ['lewyFotel', 'prawyFotel', 'kanapa']
        },
        tyl: {
            bagaznik: [],
        }
    },
    kola: ['koło', 'koło', 'koło', 'koło'],
    zderzaki: ['tyl', 'przod']
}

// Pisz tutaj
function podziel(A,B){
    return A/B
}
console.log(podziel(10,5))

const changeInline = () => samochod.kola
function changeWheels() {
    const test = 'test'
    console.log(test)
    return samochod.kola
}
console.log(changeInline())
console.log(changeWheels())


//lodash.com