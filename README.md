# Pre-requsities:

- Install Node Version > V15
- Install npm

# Automation Tech Stacks: 
Cypress, Cucumber and Typescript

## Code checkout and Framework Setup

- Step 1: Checkout the code from: https://github.com/ravikanthkoneru/cypress-cucumber-automation
- Step 2: Open the project root folder in command propmpt/Terminal
- Step 3: Install node modules, npm install

# Feature file path (UI and API)

- cypress\e2e\features\

# How to run the tests

Step 1: Open the project root folder in Terminal
step 2: npm test

# How to Genereate multiple Cucumber html reporter

Step 1: Open the project root folder in Terminal
step 2: npm test
Stpe 3: npm run report

# Running tagged test tests

Step 1: Open the project root folder in Terminal
step 2: npx cypress run -e TAGS="@test"

# How to run the tests in parallel Feature level

Step 1: Open the project root folder in Terminal
step 2: npm run cy:parallel

# How to run the tests in chrome browser headed mode

Step 1: Open the project root folder in Terminal
step 2: npm run chrome:noexit

# HTML report path

report\index.html