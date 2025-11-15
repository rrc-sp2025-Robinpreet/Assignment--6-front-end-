# what i learnt in this assignment

In this assignment, i learned how to build trivia game using HTML,CSS and Javascript. I became more used to with:
-Fetching data from an API using fetch().

-Handling asynchronous operations with async and await.

-Working with JSON responses and injecting the data into the DOM.

-Showing and hiding loading states using CSS classes.

-Managing events such as form submission and button clicks.

# Challenges I Experienced
I faced several issues throughout the assignment:

-File structure issues: My CSS did not load at first because of incorrect folder paths and MIME-type errors.

-Rendering API data: At first, I struggled to properly display questions and answers dynamically.

-Styling conflicts: The heading appeared on the side instead of centered due to container styles not aligning properly.

-Understanding loading states: Getting the skeleton loader to hide and show correctly took some debugging.

# How I Solved These Challenges

To solve these issues:

-I corrected my project structure (index.html, script.js, and styles.css in the correct folders).

-I used console.log() to inspect the API response and confirm the structure.

-I updated my CSS selectors to properly target containers and center elements.

--I used classList and helper functions to toggle between the loading screen and question screen.

-I validated each part of the script step-by-step to ensure everything worked before moving on.

# What I Would Improve Next Time

If I were to improve this project later, I would:

-Add categories or difficulty filters to improve the gameplay.

-Include a timer for each question.

-Add animations or transitions when switching between questions.

-Improve UI responsiveness for mobile screens.