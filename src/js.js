'use strict';
class Burger {
	#price = 0;
	#calories = 0;
	constructor(size){
		try{
			this.size = size;
			this.#price += size.price;
			this.#calories += size.calories;
		} catch {console.error('valid size')}
	}
	static get SAUCE_MAYO(){
		return {
			price: 5,
			calories:30,
		}
	}
	static get SAUCE_MUSTARD(){
		let sauce = {
			price: 5,
			calories:35,
		}
		return sauce;
	}
	addSauce(value){
		try{
			this.#price += value.price;
			this.#calories += value.calories;
			return value;
		}catch{console.error('valid sauce')}
	}
	getPrice(){
		return console.log(this.#price);
	}
	removeSauce(value){
		try{
			this.#price -= value.price;
			this.#calories -= value.calories;
		} catch {console.error('valid sauce')}
	}
	getCalories(){
		return console.log(this.#calories);
	}
}

// ======================================================гамбургер===============================
class Hamburger extends Burger{
	static get SIZE_SMALL(){
		return {
			price:30,
			calories:200,
		}
	}
	static get SIZE_BIG(){
		return {
			price: 50,
			calories: 320
		}
	}
}
// =======================================================чизбургер======================================

class Cheeseburger extends Burger {
	static get SIZE_SMALL(){
		return {
			price:40,
			calories:250,
		}
	}
	static get SIZE_BIG(){
		return {
			price: 70,
			calories: 400
		}
	}
	static get SAUCE_TARTAR(){
		return {
			price: 7,
			calories:37
		}
	}
}

// ===============================================задание=========================================================
const burger1 = new Hamburger(Hamburger.SIZE_SMALL);
burger1.addSauce(Hamburger.SAUCE_MAYO);
console.log(burger1.addSauce(Hamburger.SAUCE_MUSTARD));   //Возвращало undefined. сделал что бы возвращало добавляемый соус;

burger1.getPrice() // -> 40

burger1.removeSauce(Hamburger.SAUCE_MAYO);

burger1.getPrice() // -> 35
burger1.getCalories() // -> 235

const burger2 = new Cheeseburger(Cheeseburger.SIZE_BIG);
burger2.addSauce(Cheeseburger.SAUCE_TARTAR);

burger2.getPrice() // -> 77
burger2.getCalories() // -> 437


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
