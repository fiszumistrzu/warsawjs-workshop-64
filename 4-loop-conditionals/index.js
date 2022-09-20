const liczby = [5, 32, 86, 2, 1]
const owoce = ['pomarancza', 'jablko', 2, 'banan', false]

//1
function checkBoolean() {
    if(checkMe = true){
        return 'YEAH!'
    }
    else{
        return 'Nie :<'
    }
}
console.log(checkBoolean())

//2
for(i=0; i<=liczby.length; i++){
    console.log(`Mój index to ${i}`)
    console.log('Moja wartość: ' + liczby[i])
    console.log("Mój index to: ",i," ","Moja wartość to: ",liczby[i])
}
liczby.forEach((value,index,self)=>{
    console.log(`Mój index to ${index}`)
    console.log('Moja wartość: ' + value)
    console.error(self)
})

//3
owoce.forEach((value,index,self)=>{
if(typeof value === 'string'){
    console.log(value)
}
})