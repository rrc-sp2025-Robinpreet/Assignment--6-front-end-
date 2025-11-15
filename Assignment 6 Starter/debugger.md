# Breakpoint -1(screenshot-1)
This breakpoint pauses at the line where usernameInput is assigned using document.getElementById("username"). It allows inspection of whether the username input field exists in the DOM and can be accessed correctly.

# Observations:

-usernameInput references the input element correctly.

-usernameInput.value is initially empty.

-Call Stack shows the DOM has loaded and the script is running.

-If this were null, subsequent attempts to read .value would fail.

# Breakpoint -2 (screenshot-2)

What the Screenshot Shows When Paused

-The displayScores() function begins executing.

-The program stops before reading localStorage.

-You can inspect:

-localStorage

-scores (after stepping over)

-Call stack showing how this function was triggered.

# Observations:

-If scores exist:

-scores becomes an array of score objects, e.g.:

eg:[{ "name": "Robinpreet", "score": 7 }]

-If no scores exist:

-scores becomes an empty array [] because of the fallback.

-Confirms that JSON.parse is reading data without errors.

# Breakpoint -3 (screenshot -3)

What the Screenshot Shows When Paused

-Execution is paused right after the user clicks Submit.

-In the Scope panel, you can see:

-name → the username the player typed

score value after calling calculateScore()

# Observations:

-name should contain the user's input.

-answers should list all selected radio buttons.

-Each selected radio input should have:

If input is empty:

The breakpoint confirms the alert path is correct.
