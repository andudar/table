/**
 *@global
 */
// array of people
var footballers = [
{
	name: 'James',
	lastName: 'Rodrigues',
	yearOfBirth: 1991,
	country: 'Columbia',
	club: 'Real Madrid',
    position: 'midfielder'
},
{
	name: 'Wayne',
	lastName: 'Rooney',
	yearOfBirth: 1985,
	country: 'England',
    club: 'Manchester United',
    position: 'attacker'
},
{
	name: 'Luka',
	lastName: 'Modric',
	yearOfBirth: 1985,
	country: 'Croatia',
	club: 'Real Madrid',
	position: 'midfielder'
},
{
	name: 'Keylor',
	lastName: 'Navas',
	yearOfBirth: 1986,
	country: 'Costa Rica',
	club: 'Real Madrid',
	position: 'goalkeeper'
},
{
	name: 'Daniel',
	lastName: 'Carvajal',
	yearOfBirth: 1992,
	country: 'Spanish',
	club: 'Real Madrid',
	position: 'defender'
},
{
	name: 'Iker',
	lastName: 'Casillas',
	yearOfBirth: 1981,
	country: 'Spanish',
	club: 'Porto',
	position: 'goalkeeper'
},
{
	name: 'Thibaut',
	lastName: 'Courtois',
	yearOfBirth: 1992,
	country: 'Belgium',
	club: 'Chelsea',
	position: 'goalkeeper'
},
{
	name: 'Raphael',
	lastName: 'Varane',
	yearOfBirth: 1993,
	country: 'France',
	club: 'Real Madrid',
	position: 'defender'
},
{
	name: 'Gareth',
	lastName: 'Bale',
	yearOfBirth: 1989,
	country: 'Wales',
	club: 'Real Madrid',
	position: 'midfielder'
},
{
	name: 'Lucas',
	lastName: 'Vasques',
	yearOfBirth: 1991,
	country: 'Spanish',
	club: 'Real Madrid',
	position: 'attacker'
},
{
	name: 'Sergio',
	lastName: 'Aguero',
	yearOfBirth: 1988,
	country: 'Argentina',
	club: 'Manchester City',
	position: 'attacker'
},
{
	name: 'Joe',
	lastName: 'Hart',
	yearOfBirth: 1987,
	country: 'England',
	club: 'Manchester City',
	position: 'goalkeeper'
},
{
	name: 'David',
	lastName: 'Silva',
	yearOfBirth: 1986,
	country: 'Spanish',
	club: 'Manchester City',
	position: 'midfielder'
},
{
	name: 'Evgen',
	lastName: 'Konoplyanka',
	yearOfBirth: 1989,
	country: 'Ukraine',
	club: 'Sevilla',
	position: 'midfielder'
},
{
	name: 'Artem',
	lastName: 'Kravets',
	yearOfBirth: 1989,
	country: 'Ukraine',
	club: 'Stuttgart',
	position: 'attacker'
},
{
	name: 'Douglas',
	lastName: 'Costa',
	yearOfBirth: 1990,
	country: 'Brazil',
	club: 'Bavaria',
	position: 'midfielder'
},
{
	name: 'Robert',
	lastName: 'Levandovski',
	yearOfBirth: 1988,
	country: 'Poland',
	club: 'Bavaria',
	position: 'attacker'
},
{
	name: 'Toni',
	lastName: 'Kroos',
	yearOfBirth: 1990,
	country: 'Germany',
	club: 'Real Madrid',
	position: 'midfielder'
},
{
	name: 'Andriy',
	lastName: 'Yarmolenko',
	yearOfBirth: 1989,
	country: 'Ukraine',
	club: 'Dynamo Kyiv',
	position: 'attacker'
},
{
	name: 'Jamie',
	lastName: 'Vardy',
	yearOfBirth: 1987,
	country: 'England',
	club: 'Leicester City',
	position: 'attacker'
}
];
/**
 *@global
 * 
 */
 //getting container for table
var container = document.getElementById('container');


/**
 *@function
 *@param {array} arr - array with people
 *@param {node} container - container for the table
 */
function createTable(arr,container){
    var table = document.createElement('table'),
    	thead = document.createElement('thead');

    // collect titles for table
    var titles = [];
    for(var key in arr[0]){
    	titles.push(key); 
    }

    // create string with tags and title's names
    //with additional cell '№'
    var titleNames = '<tr><th>№</th>';
    for(var i = 0; i < titles.length; i++){
		titleNames += ('<th>' + titles[i] + '</th>')
    }
    titleNames += '</tr>';

    thead.innerHTML = titleNames;
    table.appendChild(thead);
    //fill the table
    fillTable(arr,table);
    //insert table into container
    container.appendChild(table);

};

/**
 *@global 
 */
 //remember the last choosen cell of thead
 var lastTarget;

/**
 *@event 
 *checking what cell was chosen 
 *from the container of the table
 */
container.onclick = function(e){
	var target = e.target;
	var table = document.getElementsByTagName('table')[0];

	//prevent clicking on cell '№'
	if(target.innerHTML == '№'){
    	return;
    }

    //if it is a second click on the same cell
    //reverse array with users
    //and create table
	if(lastTarget == target.innerHTML){
		footballers.reverse();
		clearTable();
		fillTable(footballers,table);
		return;
	} 
    

	if(target.closest('th')){
		//remember the last chosen cell
		//and create table
		lastTarget = target.innerHTML;
		clearTable();
		sortArray(footballers,target.innerHTML);
    	fillTable(footballers,table);
	}else return;

	
};

/**
 *@event 
 *add a class 'focus' for cell
 *when mouse is over it
 */
container.onmouseover = function(e){
	var target = e.target;
	while(target.nodeName != 'TR'){
		target = target.parentNode;
	}
	target.classList.add('focus');
	
}
/**
 *@event 
 *remove a class 'focus' for cell
 *when mouse is over it
 */
container.onmouseout = function(e){
	var target = e.target;
	while(target.nodeName != 'TR'){
		target = target.parentNode;
	}
	target.classList.remove('focus');
	
}

/**
*@param {array} arr - array with people
*@param {node} table - insert generated tbody into this table 
*/
function fillTable(arr,table){
    var rows = '';
    for(var i = 0; i < arr.length; i++){
    	var tr = '<tr><td>' + (i+1) + '</td>';
    	for(var key in arr[i]){
    		tr += ( '<td>' + arr[i][key] + '</td>');
    	}
    	tr += '</tr>';
    	rows += tr;
    }

    table.innerHTML += rows;

}

/**
 *@param {array} arr - array with people
 *@param {string} name - string for sorting array
 */
function sortArray(arr,name){


    function compareNumbers(a,b){
    	return a[name] - b[name];
    }
    if(typeof arr[0][name] == 'number'){
	    arr.sort(compareNumbers);
	}else{
		arr.sort(function(a, b){
			var a = a[name].toLowerCase(),
			b = b[name].toLowerCase();

			return a > b? 1: a < b? -1: 0;
		});
	}
}	

/**
 *remove tbody from table
 */
function clearTable(){
	var table = document.getElementsByTagName('table')[0],
		tbody = table.getElementsByTagName('tbody')[0];
	tbody.parentNode.removeChild(tbody);
}

/**
 *@event click for creating table for the first time
 */
button.onclick = function(){
	var container = document.getElementById('container');
	//prevent creating extra table
	if(container.getElementsByTagName('table').length != 0 ) return;

	createTable(footballers,container);
};