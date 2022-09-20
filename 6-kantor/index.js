const button = document.getElementById('calculate')
const selectIn = document.getElementById('selectIn')
const selectOut = document.getElementById('selectOut')
const valueIn = document.getElementById('valueIn')
const result = document.getElementById('result')

const currencies = {
    pln: 1,
    eur: 4.72,
    gbp: 5.44,
    usd: 4.71
}

function calc (){
   const value = valueIn.value //wpisana liczba
   const currencyIn = selectIn.value //wybrana waluta
   const currencyOut = selectOut.value

   const valueInPLN = value * currencies[currencyIn]
   
   result.innerText = valueInPLN/currencies[currencyOut]
}

const getCurr = (curr) => fetch(`https://raw.githubusercontent.com/fawazahmed0/currency-api/1/2022-09-18/currencies/${curr}/pln.json`)
    .then(data => data.json().then((body) => {
        return body.pln
    })
)

Object.keys(currencies).forEach(async (element) => {
    currencies[element] = await getCurr(element)
    console.log(currencies)
})

button.addEventListener('click', calc)
