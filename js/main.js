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

icons.forEach((element) => {
    const boxIcon = `<div class="box">
                        <i class="fa-solid ${element.prefix}${element.name}" style="color: ${element.color}"></i>
                        <h4>${element.name}</h4>
                     </div>`;
    // console.log(boxIcon);

    contentDom.innerHTML += boxIcon;
})

typeFilterDom.addEventListener("change", function(){
    chosenType = typeFilterDom.value;
    console.log(chosenType);

    if (chosenType == "animal") {
        const animals = icons.filter((icon) => {
            if (icon.type == "animal") {
                return true;
            } else {
                return false;
            }
        })
        console.log(animals);
    } 

    if (chosenType == "vegetable") {
        const vegetables = icons.filter((icon) => {
            if (icon.type == "vegetable") {
                return true;
            } else {
                return false;
            }
        })
        console.log(vegetables);
    } 

    if (chosenType == "user") {
        const users = icons.filter((icon) => {
            if (icon.type == "user") {
                return true;
            } else {
                return false;
            }
        })
        console.log(users);
    } 


})