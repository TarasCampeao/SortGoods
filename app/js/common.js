//ingridients info
var pizzasList = {
	cap: {
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		sausage: 2,
		mashroom: 3,
		cheez: 1
	},
	onions: {
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		meat: 1,
		cheez: 1
	},
	king_one: {
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		mayo: 1,
		mashroom: 3,
		tomato: 2,
		cheeze: 3,
		dill: 2,
		parsley: 2
	},
	gavay: {
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		ananas: 1,
		cheez: 2
	},
	tonno: {
		dough: 1,
		tomato_sauce: 1,
		tuna: 2,
		kappers: 1,
		cheez: 1
	},
	vegeterian: {
		dough: 1,
		tomato_sauce: 1,
		tomato: 2,
		kappers: 1,
		cucumber: 2,
		onion: 2,
		cheez: 1
	}
};
var result = getPizzaInfo(['cap', 'cap', 'onions', 'gavay', 'cap', 'tonno', 'tonno', 'vegeterian', 'king_one']);
console.log(result);


function getPizzaInfo(lastPizzas) {
	var pizzaGroup = {};
	var ingridientsBox = {};
	lastPizzas.map(function (pizza) {
		var currentPizza = pizzasList[pizza];
		if (currentPizza) {
			if (pizzaGroup[pizza]) {
				pizzaGroup[pizza] += pizzaGroup[pizza];
			} else {
				pizzaGroup[pizza] = 1;
			}

			Object.keys(currentPizza).map(function (ingridientKey) {
				if (ingridientsBox[ingridientKey]) {
					ingridientsBox[ingridientKey] += currentPizza[ingridientKey];
				} else {
					ingridientsBox[ingridientKey] = currentPizza[ingridientKey];
				}
			});
		}
	});

	//sort for kind of pizza
	var popular = Object.keys(pizzaGroup).sort(function (a, b) {
		return pizzaGroup[a] > pizzaGroup[b] ? -1 : 1;
	}).slice(0, 5);

	//sort for popular ingridients of pizza
	var ingridients = Object.keys(ingridientsBox).sort(function (a, b) {
		return ingridientsBox[a] > ingridientsBox[b] ? -1 : 1;
	});

	return {
		popular: popular,
		ingridients: ingridients
	};
}