// array di oggetti
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
];


// collegamenti al DOM
const contentDom = document.getElementById("content");
const typeFilterDom = document.getElementById("type-filter");



generateElements(icons);

typeFilterDom.addEventListener("change", function () {
	let chosenType = typeFilterDom.value;
	contentDom.innerHTML = "";

	chosenType = typeFilterDom.value;
	console.log(chosenType);

	if (chosenType == "all") {

		generateElements(icons);

	} else {
		const icons2 = icons.filter(icon => icon.type == chosenType ? true : false);
		generateElements(icons2);
	}

})

const typesFilter = [];
generateTypesFilter(typesFilter);

// function per generare le option nella select dinamicamente
function generateTypesFilter(array) {
	icons.forEach(element => {
		if (!array.includes(element.type)) {
			array.push(element.type);

		}

	});

	for (let i = 0; i < array.length; i++) {
		const typeOption = `<option value="${array[i]}">${array[i]}</option>`;

		typeFilterDom.innerHTML += typeOption;
	}
	console.log(array);
}

// function per generare i tag nel DOM
function generateElements(arrayName) {

	const hexColorValues = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let hexColor = "";

	arrayName.forEach((element) => {

		for (let i = 0; i < 6; i++) {
			hexColor += hexColorValues[generateRandomNumber(0, 15)];
		}

		const boxIcon = `<div class="box">
                            <i class="fa-solid ${element.prefix}${element.name}" style="color: #${hexColor}"></i>
                            <h4>${element.name}</h4>
                         </div>`;

		contentDom.innerHTML += boxIcon;
		hexColor = "";
	})
}


// function per generare un numero casuale
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

