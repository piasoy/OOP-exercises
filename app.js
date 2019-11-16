class Person {
  constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
  }
  greet(otherPerson) {
    console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
  }
}

//Person
//1
let sonny = new Person('Sonny','sonny@hotmail.com','483-485-4948')
//2
let jordan = new Person('Jordan','jordan@aol.com','495-586-3456')
//3
sonny.greet(jordan)
//4
jordan.greet(sonny)
//5
console.log(`email:  ${sonny.email}, phone: ${sonny.phone}`)
//6
console.log(`email:  ${jordan.email}, phone: ${jordan.phone}`)

//Card
class Card {
    constructor(number, suit) {
        this.number = number
        this.suit = suit
    }

    getImageUrl(){
        return(`image/${this.number}_of_${this.suit}.png`)
    }
}

let myCard = new Card(5, 'diamonds')
//console.log(myCard.getImageUrl())

//Hand constructor
class Hand {  
    constructor() {
        this.arrayOfCards = []
    }

    //passing an object with 2 properties (number & suit)
    addCard(card){
        this.arrayOfCards.push(card)
        return this.arrayOfCards
    }

    getPoints(){
        let points = 0
        this.arrayOfCards.forEach(Card => {   
            if (Card.number > 10) {Card.number = 10}
            points = points + Card.number   
        })
        return points
    }
}

var myHand = new Hand()
console.log(myHand)
console.log(myHand.addCard(new Card(5, 'diamonds')))
console.log(myHand.addCard(new Card(13, 'spades')))
console.log(myHand.getPoints())

//Deck Constructor
class Deck {
    constructor() {
      
    
        let deckArray =[]
        let card = {}
        this.deckArray = (function() {
            ['clubs', 'diamonds', 'hearts', 'spades'].forEach(suit => {
                [1,2,3,4,5,6,7,8,9,10,11,12,13].forEach(number => {
                    card = {number, suit}
                    deckArray.push(card)
                })
            })
           
            for (let i = 0; i < deckArray.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [deckArray[i], deckArray[j]] = [deckArray[j], deckArray[i]];
            }

            return deckArray;
             
        })()
       
        
     
    }

    draw(){
        const randomIndex = Math.floor(Math.random() * 1);
        let cardDrawn = this.deckArray.splice(randomIndex,1)[0];
        return cardDrawn
    }

    shuffle(){
        for (let i = 0; i < this.deckArray.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deckArray[i], this.deckArray[j]] = [this.deckArray[j], this.deckArray[i]];
        }
        return this.deckArray;
     
    }

    numCardsLeft() {
       return this.deckArray.length
    }


}
var myDeck = new Deck()
console.log(myDeck)
console.log(myDeck.draw())
console.log(myDeck.shuffle())
console.log(myDeck.numCardsLeft())
