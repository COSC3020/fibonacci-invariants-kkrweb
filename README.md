# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

//

1/30/2025

// RESPONSE: Minor Edits made Feb 10 2025 prior to feedback request 1.

A good invariant for my recursive implementation of fib() is: 
At the start of each recursive call, fibArr contains the Fibonacci sequence from index 0 up to currentIteration - 1, and currentIteration is less than or equal to n + 1.

The reasoning for this would be that explicitly, the recursion helper function is made to properly handle the first two fibbonaci entries manually.

From then on, the recursion properly handles and computes later indices pushed onto the array. 

Lastly, the handling of currentIteration and its comparisons to n during each call of the helper recursive function is ensured to stop at the correct moment.

//

Name: Kane Kriz

Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Citations: 

“JavaScript Array Push() Method.” W3schools.com, 2019, www.w3schools.com/jsref/jsref_push.asp.
[https://www.w3schools.com/jsref/jsref_push.asp](url)

“Equality Comparisons and Sameness - JavaScript | MDN.” Developer.mozilla.org, 25 Aug. 2023, developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness](url)
trying to get better at == and === situations in JS, at least understand why the difference exists
