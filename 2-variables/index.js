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
console.log(samochod.body.srodek.fotele[1]);
samochod.body.przod.komoraSilnika.akumulator = true;
console.log(samochod.body.przod.komoraSilnika.akumulator);
// Pisz tutaj
// mdn web docs
// 1
const number = 1;
const string = 'string';
const array = [1,2,3,4];
const object = {
    obiekty: ['obiekt1', 'obiekt2']
}
console.log(typeof number, number);
console.log(typeof string, string);
console.log(typeof array, array, array.length);
console.log(typeof object, object, object.length);

//2
const dodawanie = 1+1;
const odejmowanie = 2-1;
const mnożenie = 2*2;
const dzielenie = 4/2;
const zmienna1 = 4/'4';
const zmienna2 = 4/'potato';

console.log(typeof dodawanie, dodawanie);
console.log(typeof odejmowanie, odejmowanie);
console.log(typeof mnożenie, mnożenie);
console.log(typeof dzielenie, dzielenie);
console.log(typeof zmienna1, "4/'4' = ", zmienna1);
console.log(typeof zmienna2, "4/'potato' = ", zmienna2);

//3
const array2 = [1,'orange',2,'2',3];
console.log(array2);
array2.push('cos');
console.log(array2);
array2.pop('cos2');
console.log(array2);
array2.splice(0,3);
console.log(array2);