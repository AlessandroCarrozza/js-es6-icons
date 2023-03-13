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
	}
];

// collegamenti al DOM
const contentDom = document.getElementById("content");
const typeFilterDom = document.getElementById("type-filter");
let chosenType = typeFilterDom.value;
console.log(chosenType);


generateElements(icons);


typeFilterDom.addEventListener("change", function(){
    contentDom.innerHTML = "";
    
    chosenType = typeFilterDom.value;
    console.log(chosenType);

    if (chosenType == "all") {       

        generateElements(icons);

    } 

    if (chosenType == "animal") {
        const icons2 = icons.filter(icon => icon.type == "animal" ? true : false);
        console.log(icons2);
        generateElements(icons2);
    } 

    if (chosenType == "vegetable") {
        const icons2 = icons.filter(icon => icon.type == "vegetable" ? true : false);
        console.log(icons2);
        generateElements(icons2);
    } 

    if (chosenType == "user") {
        const icons2 = icons.filter(icon => icon.type == "user" ? true : false);
        console.log(icons2);
        generateElements(icons2);
    } 

})


// function per generare i tag nel DOM
function generateElements (arrayName) {
    arrayName.forEach((element) => {
        const boxIcon = `<div class="box">
                            <i class="fa-solid ${element.prefix}${element.name}" style="color: ${element.color}"></i>
                            <h4>${element.name}</h4>
                         </div>`;
    
        contentDom.innerHTML += boxIcon;
    })
}