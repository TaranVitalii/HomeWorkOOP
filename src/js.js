'use strict';
// ======================================================гамбургер===============================
class Hamburger {
	_price = 0;
	_calories = 0;
	constructor(size){
		this.allowedSauce = ['SAUCE_MAYO','SAUCE_MUSTARD'];
		this.checkSize(size);
	}	
	checkSize(size){
		try{
			if(size === Hamburger.SIZE_BIG || size === Hamburger.SIZE_SMALL){
				this.size = size;
				this._price += size.price;
				this._calories += size.calories;
			}else {throw new Error("uncorrect size Hamburger");}
		}catch(e){
			console.log(e.message)
		}
	}

		static #sizeSmall = {
			price:30,
			calories:200,
		}

	static get SIZE_SMALL(){
		return this.#sizeSmall;
	}
		static #sizeBig = {
			price: 50,
			calories: 320,
		}
	static get SIZE_BIG(){
		return this.#sizeBig;
	}
		static #sauceMayo = {
				name: 'SAUCE_MAYO',
				price: 5,
				calories:30,
			}
	static get SAUCE_MAYO(){
		return this.#sauceMayo;
	}
		static #sauceMustard = {
			name: 'SAUCE_MAYO',
			price: 5,
			calories:35,
		}
	static get SAUCE_MUSTARD(){
		return this.#sauceMustard;
	}

	addSauce(value){
		try{
			if(this.allowedSauce.includes(value.name)){
				this._price += value.price;
				this._calories += value.calories;
			}else{throw new Error("uncorrect sauce add to Hamburger");}
		}catch(e){
			console.log(e.message)
		}		
	}
	removeSauce(value){
		try{
			if(this.allowedSauce.includes(value.name)){
			this._price -= value.price;
			this._calories -= value.calories;
			}else{throw new Error("uncorrect sauce for remove from Hamburger");}
		}catch(e){
			console.log(e.message)
		}
	}
	getPrice(){
		return this._price;
	}
	

	getCalories(){
		return this._calories;
	}
}
// =======================================================чизбургер======================================

class Cheeseburger extends Hamburger {
	constructor(size){
		super(size);
		this.allowedSauce = ['SAUCE_MAYO','SAUCE_MUSTARD','SAUCE_TARTAR'];
	}

	checkSize(size){

		try{
			if(size === Cheeseburger.SIZE_BIG || size === Cheeseburger.SIZE_SMALL){
				this.size = size;
				this._price += size.price;
				this._calories += size.calories;
			}else {throw new Error("uncorrect size cheeseburger");}
		}catch(e){
			console.log(e.message)
		}
	}
		static #sizeSmall = {
			price:40,
			calories:250,
		}

	static get SIZE_SMALL(){
		return this.#sizeSmall
	}
		static #sizeBig = {
			price: 70,
			calories: 400
		}

	static get SIZE_BIG(){	
		return this.#sizeBig; 
	}
	static #sauceTartar = {
				name: 'SAUCE_TARTAR',
				price: 7,
				calories:37
			}

	static get SAUCE_TARTAR(){
		return this.#sauceTartar;
	}

	addSauce(value){
		try{
			if(this.allowedSauce.includes(value.name)){
				this._price += value.price;
				this._calories += value.calories;
			}else{throw new Error("uncorrect sauce for add to Cheeseburger");}
		}catch(e){
			console.log(e.message)
		}
	}
	removeSauce(value){
		try{
			if(this.allowedSauce.includes(value.name)){
			this._price -= value.price;
			this._calories -= value.calories;
			}else{throw new Error("uncorrect sauce for remove from Cheeseburger");}
		}catch(e){
			console.log(e.message)
		}
	}
}

// ===============================================задание=========================================================
const burger1 = new Hamburger(Hamburger.SIZE_SMALL);
burger1.addSauce(Hamburger.SAUCE_MAYO);
burger1.addSauce(Hamburger.SAUCE_MUSTARD);

console.log(burger1.getPrice()) // -> 40

burger1.removeSauce(Hamburger.SAUCE_MAYO);

burger1.getPrice() // -> 35
console.log(burger1.getCalories()) // -> 235

const burger2 = new Cheeseburger(Cheeseburger.SIZE_BIG);
burger2.addSauce(Cheeseburger.SAUCE_TARTAR);

console.log(burger2.getPrice()) // -> 77
console.log(burger2.getCalories()) // -> 437

// Реалізуйте 2 класа Hamburger/Сheeseburger для того щоб наступний код працював: 


// Реалізувати клас Hamburger
// В конструкторі приймати параметром розмір гамбургера (доступні значення: Hamburger.SIZE_SMALL, Hamburger.SIZE_BIG)
// методи addSauce/removeSauce за допомогою яких можна додавати/видаляти соуси (Hamburger.SAUCE_MAYO, Hamburger.SAUCE_MUSTARD)
// метод getPrice() повертає ціну враховуючи розмір і додані соуси
// метод getCalories() повертає калорійність враховуючи розмір і додані соуси

// Клас Сheeseburger який працє як Hamburger але у нього інша калорійність/ціна і доступний додатковий соус тартар (Сheeseburger.SAUCE_TARTAR)

// під час неприпустимої операції треба кидати помилку 
// створення без передавання розміру, або з невідомим розміром (щось інше а ніж SIZE_SMALL/SIZE_BIG)
// додавання/видалення невідомого соуса, або неприпустимого соуса (нагадую що SAUCE_TARTAR повинен бути доступним лише для Сheeseburger, а інші 2 для обох)
