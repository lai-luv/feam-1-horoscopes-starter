# Horoscopes — steps to build this project

## Setup

1. Create a blank new React project with Vite
1. Copy the assets folder, the README.md file and the .gitignore file from this github repo into your new blank project
1. Remove all the extra code rendered from the Vite template. That includes removing all the JSX from the App component's return statement, the import statements in the App component, the CSS code in the App.css and index.css files

## Coding the About Today section

1. Let's set up the initial JSX in our App component. Make an <h1> titled "Horoscopes" and a <section> with an <h2> titled "About Today". Give the <section> a class of "today-info".
1. Add a <p> tag that displays today's date
1. Format the date so it reads nicely as text, i.e. "Today is Friday, May 3, 2024"

## Coding the Sign buttons

1. Get the astrology sign data
1. Implement findZodiacSign() function
1. Display current Zodiac sign in JSX
1. Map over all the signs and display their signNames as buttons in the JSX.
1. Turn the sign buttons into a separate SignButton component. Pass the signName as a prop.
1. Style the buttons so that they look like the first picture
1. Now we want to be able to click on all of these SignButtons to display more information below about that sign. First, let's make those buttons work.
1. We need to create a function that gets triggered when the user clicks the button.
1. Let's create a SignInfo component. It should take in a signData object as a prop. In its JSX, it should display the signName as an h2 and a div. Inside that div, it should show the startDate and endDate, its luckyNumbers, and the daily horoscope for that sign.
1. Use conditional rendering with a ternary statement to make the sign picker and sign info sections occupy the same place. If selectedSign has a value, show the sign info, but if it's null, show the sign picker.
1. Use NASA API to display the astronomy picture of the day
