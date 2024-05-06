# Horoscopes
Below are the steps on how to build this Horoscopes app. 

## Setup

1. Create a blank new React project with Vite
1. Copy the assets folder, the README.md file and the .gitignore file from this github repo into your new blank project
1. Remove all the extra code rendered from the Vite template. That includes removing all the JSX from the App component's return statement, the import statements in the App component, the CSS code in the App.css and index.css files

## Starting to code the About Today section

1. Let's set up the initial JSX in our App component. Make an h1 titled "Horoscopes" and a section with an h2 titled "About Today". Give the section a class of "today-info".
1. Add a p tag that displays today's date
1. Format the date so it reads nicely as text, i.e. "Today is Friday, May 3, 2024"
1. Import the astrology sign data from the data.js file. Let's name it horoscopeData in our import statement.
2. Create a variable called astroSigns in your app component that holds the astroSigns object from the imported astrology signs data 
1. Write a findSign() function that takes in a date as input. It should return the corresponding zodiac sign by checking which zodiac sign's date range aligns with the inputted date. 
1. Create another p tag to display the current Zodiac sign in JSX

## Coding the Sign Picker section and the zodiac sign buttons

1. Create a section tag in the JSX that has a class of "sign-picker". This will hold all of our sign buttons so the user can learn more about the zodiac signs. If the user clicks on one of these buttons, this sign picker section will also hold information about a selected zodiac sign.
2. Map over all the signs and display their signNames as button tags in the JSX. Don't forget to add a key when you are mapping. 
1. Now we want to be able to click on all of these SignButtons to display more information about that sign. First, let's make those buttons work.
1. Create a function that gets triggered when the user clicks any of the buttons.
1. Now let's create another section tag with the class "sign-info". In its JSX, it should display the signName as an h2 and a div. Inside that div, it should show the startDate and endDate, its luckyNumbers, and the daily horoscope for that sign.
1. Use conditional rendering with a ternary statement to make the sign picker and sign info sections occupy the same place. If selectedSign has a value, show the sign info, but if it's null, show the sign picker.
