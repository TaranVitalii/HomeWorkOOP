'use strict';
class Burger {
	_price = [];
	_calories = [];
	constructor(size){
		try{
			if(JSON.stringify(size) === JSON.stringify(Hamburger.SIZE_BIG) || JSON.stringify(size) === JSON.stringify(Hamburger.SIZE_SMALL)){
				this.size = size;
				this.size = size;
				this._price.push(size.price);
				this._calories.push(size.calories);
			}else {throw new Error("uncorrect size");}
		}catch(e){
			console.log(e.message)
		}
	}	
	
	addSauce(value){
		try{
			if(JSON.stringify(value) === JSON.stringify(Hamburger.SAUCE_MAYO) ||JSON.stringify(value) === JSON.stringify(Hamburger.SAUCE_MUSTARD)){
				this._price.push(value.price);
				this._calories.push(value.calories);
			}else{throw new Error("uncorrect sauce");}
		}catch(e){
			console.log(e.message)
		}
			
	}
	
	getPrice(){
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return this._price.reduce(reducer);
	}
	removeSauce(value){
		try{
			if(JSON.stringify(value) === JSON.stringify(Hamburger.SAUCE_MAYO) ||JSON.stringify(value) === JSON.stringify(Hamburger.SAUCE_MUSTARD)){
			this._price.push((-1)* value.price);
			this._calories.push((-1)*value.calories);
			}else{throw new Error("uncorrect sauce for remove");}
		}catch(e){
			console.log(e.message)
		}
	}
	getCalories(){
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return this._calories.reduce(reducer);
	}
}

// ======================================================гамбургер===============================
class Hamburger extends Burger{
	static get SIZE_SMALL(){
		const size = {
				price:30,
				calories:200,
			};
			return size;
	}
	static get SIZE_BIG(){
		const size = {
			price: 50,
			calories: 320
		};
		return size;
	}
	static get SAUCE_MAYO(){
		let sauce = {
			price: 5,
			calories:30,
		}
		return sauce;
	}
	static get SAUCE_MUSTARD(){
		let sauce = {
			price: 5,
			calories:35,
		}
		return sauce;
	}

}
// =======================================================чизбургер======================================

class Cheeseburger extends Hamburger {
	addSauce(value){
	super.addSauce(value)
		try{
			if(JSON.stringify(value) === JSON.stringify(Hamburger.SAUCE_MAYO) ||JSON.stringify(value) === JSON.stringify(Hamburger.SAUCE_MUSTARD)||JSON.stringify(value) === JSON.stringify(Cheeseburger.SAUCE_TARTAR)){
				this._price.push(value.price);
				this._calories.push(value.calories);
			}else{throw new Error("uncorrect sauce");}
		}catch(e){
			console.log(e.message)
		}
	}

	static get SIZE_SMALL(){
	const size ={
			price:40,
			calories:250,
		};
		return size;
	}
	static get SIZE_BIG(){	
	const size ={
			price: 70,
			calories: 400
		};
		return size; 
	}
	static get SAUCE_TARTAR(){
	const size = {
			price: 7,
			calories:37
		};
		return size;
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

burger2.getPrice() // -> 77
burger2.getCalories() // -> 437
console.log('burger1');
console.log(burger1.addSauce(Cheeseburger.SAUCE_TARTAR));
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
