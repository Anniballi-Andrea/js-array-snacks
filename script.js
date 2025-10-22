const cars = [
    { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
    { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
    { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
    { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
    { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
    { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
    { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
    { brand: 'Audi', model: 'A4', fuel: 'gpl' },
    { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
    { brand: 'Peugeot', model: '208', fuel: 'metano' }
  ]

  /*Snack 1
Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione 
(benzina, diesel, gpl, elettrico, metano). Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array. */

/*const carsBenzina = []
const carsDiesel = []
const carsOther =[]

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    if(element.fuel == 'benzina'){
        carsBenzina.push(element)
    }else if(element.fuel == 'diesel'){
        carsDiesel.push(element)
    }else{
        carsOther.push(element)
    }
        

    
}
console.log(carsBenzina)
console.log(carsDiesel)
console.log(carsOther)


const carsBenzina = []
const carsDiesel = []
const carsOther =[]
cars.forEach(function(element){
    if(element.fuel == 'benzina'){
        carsBenzina.push(element)
    }else if(element.fuel == 'diesel'){
        carsDiesel.push(element)
    }else{
        carsOther.push(element)
    }
})
console.log(carsBenzina)
console.log(carsDiesel)
console.log(carsOther)


*/

const carsBenzina = cars.filter((el)=> (el.fuel == 'benzina') )
console.log(carsBenzina)
const carsDiesel = cars.filter((el)=> (el.fuel == 'diesel') )
console.log(carsDiesel)
const carsOther = cars.filter((el)=> (el.fuel !== 'benzina' && el.fuel !== 'diesel') )
console.log(carsOther)

