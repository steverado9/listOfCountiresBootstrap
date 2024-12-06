const myCountries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina',
    'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
    'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', ' Central African Republic',
    'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', ' Democratic Republic of the Congo',
    'Republic of the Costa Rica', 'Côte d’Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
    'Dominica', ' Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
    'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia',
    'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia',
    'Federated States of Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
    'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
    'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan',
    'South Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
    'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

//Displays the total number of countiries in the header "h5"
const totalCountry = document.querySelector("h5"); //target the h5 element
totalCountry.textContent = `The toal number of countries are: ${myCountries.length}`; //give h5 content

const parentDiv = document.getElementById('parentDiv'); //selected the parent element with class "row"
// Function to display country
function displayCountries(displayEachCountry) {//Take the countires as a parameter

    parentDiv.innerHTML = "";//clear the parent div
    //display new countries it receives
    displayEachCountry.forEach((country) => {
        const firstDiv = document.createElement('div'); // create the first div
        firstDiv.classList = "col-sm-3"; //first div class of col-sm-2
        const secondDiv = document.createElement('div'); //created the second div
        secondDiv.className = "card"; //second div class of card
        secondDiv.classList.add("mb-4") //second div with margin buttom 
        const mainDiv = document.createElement('div'); //created the main div to house the content of the array
        mainDiv.className = "card-body"; //class of card-body
        mainDiv.classList.add("p-5") //class of padding
        mainDiv.classList.add("text-center") //class of text center
        mainDiv.classList.add('text-light') //text color white
        mainDiv.textContent = country; //main div content

        parentDiv.appendChild(firstDiv); //append the first div to the parent div
        firstDiv.appendChild(secondDiv); //append the second div to the first div
        secondDiv.appendChild(mainDiv); //append the main div to the second div 
    })
}
displayCountries(myCountries); //called the function to display country

//The Form Element
const firstButton = document.forms['search'].querySelector('#starting-word'); //i selected the first button
const secondButton = document.forms['search'].querySelector('#any-word')// i selected the second button

const numberOfCountries = document.getElementById("display"); //i selected the p element with id display

firstButton.addEventListener('click', function (e) { //add an event to the first button
    e.preventDefault(); //prevents the page from refreshing

    const value = document.forms['search'].querySelector('.input').value.toLowerCase(); //get the value of input
    const listOfCountires = []; //initialise an empty array

    myCountries.filter((country) => { //filter the array of countries
        if (country.toLowerCase().startsWith(value)) { //if the country starts with the value inputed
            listOfCountires.push(country); //push the countries to the listOfCountry array
            displayCountries(listOfCountires); //hence display country with an argument of the listOfCountries array
        }
    })
    // p element with id display is given textcontent of 
    numberOfCountries.textContent = `${listOfCountries.length} Countries has the keyword "${value}"`;
})

secondButton.addEventListener('click', function (e) { //add an event to the second button
    e.preventDefault(); //prevents the page from refreshing

    const value = document.forms['search'].querySelector('.input').value.toLowerCase(); //get the value of input
    const listOfCountires = []; //initialise an empty array

    myCountries.filter((country) => { //filter the array of countries
        if (country.toLowerCase().indexOf(value) != -1) { //if what is inputed is found in any letters of any country
            listOfCountires.push(country); //push the country into the listOfCountries array
            displayCountries(listOfCountires); //hence display countries with an argument of the listOfCountries array
        }
    })
    //  p element with id display is given textcontent of 
    numberOfCountries.textContent = `${listOfCountries.length} Countries has the keyword "${value}"`;
})



