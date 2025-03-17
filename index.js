//ESERCIZIO N 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
    this.compareAges = function (x, y) {
      if (x.age > y.age) {
        console.log(`${x.firstName} è più grande di ${y.firstName}`)
      } else if (x.age === y.age) {
        console.log(`${x.firstName} e ${y.firstName} hanno la stessa età`)
      } else {
        console.log(`${y.firstName} è più grande di ${x.firstName}`)
      }
    }
  }
}

console.log(User)

const Giuseppe = new User("Giuseppe", "Sanasi", "65", "Latiano")

const Angela = new User("Angela", "Madaghiele", "65", "Latiano")

const Francesco = new User("Francesco", "Sanasi", "30", "Roma")

const Mariarosaria = new User("Mariarosaria", "Sanasi", "29", "Latiano")

const Chiara = new User("Chiara", "Sanasi", "25", "Roma")

const Elisabetta = new User("Elisabetta", "Sanasi", "19", "Roma")

console.log(Giuseppe)
Giuseppe.compareAges(Giuseppe, Angela)
Giuseppe.compareAges(Giuseppe, Francesco)
Elisabetta.compareAges(Elisabetta, Chiara)
Mariarosaria.compareAges(Mariarosaria, Francesco)

//ESERCIZIO N 2

// raccolta dati del form
const petNameInput = document.getElementById("petName")
const yourNameInput = document.getElementById("yourName")
const speciesInput = document.getElementById("species")
const breedInput = document.getElementById("breed")

class Pet {
  constructor(_petName, _yourName, _species, _breed, _compare) {
    this.petName = _petName
    this.yourName = _yourName
    this.species = _species
    this.breed = _breed
    this.sameOwner = function (x, y) {
      if (x.yourName === y.yourName) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
}

const concorso = document.getElementById("concorso")

concorso.addEventListener("submit", function (e) {
  // logica sull'invio del form
  // per PRIMA COSA neutralizzare il comportamento di default
  e.preventDefault()
  // ora la pagina non si riavvierà automaticamente e possiamo raccogliere i dati
  console.log("INVIO DEI DATI PER PARTECIPARE AL CORCORSO")
  // raccolgo i dati dal form e li utilizzo per creare un oggetto di tipo PhoneUser
  // firstNameInput.value <- valore del primo campo
  // lastNameInput.value <- valore del secondo campo
  // phoneInput.value <- valore del terzo campo
  const partecipante = new Pet(
    petNameInput.value,
    yourNameInput.value,
    speciesInput.value,
    breedInput.value
  )
  console.log("ANIMALETTO SALVATO", partecipante)
  concorso.reset()
})
