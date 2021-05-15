# Dynamic programming with Fibonacci Sequence step by step tutorial

## What's Fibonacci Sequence?
### 1, 1, 2, 3, 5, 8, 13, 21...
Basically Fibonacci Sequence is a Sequence that starts with two 1, and all the following numbers are the sum of previous two numbers.

### 1, **1, 2**, 3
For example the **fourth** number 3, is the sum of the previous two numbers 1 and 2.

### 1, 1, **2, 3**, 5
The **fifth** number 5, on the sequence is the sum of previous two numbers 2 and 3.

So now let's start with our question.

## Please find the n-th number on Fibonacci Sequence.
Let's define a function `fib(n)` which will accept one parameter `n`. 
Please complete the function to display the Fibonacci sequence up to n-th term.

```javascript 
    function fib(n) {

    }
``` 

#### Example input:
```
6
7
```
#### Expected output:
```
8
13
```


#### Since the n-th term in sequence is always the sum of previous two numbers. So we can do it with a straightforward **Recursive Solution**:
<details>
<summary>Maybe you would like to think of your own solution first, click here when you done</summary>

```javascript
const fib = (n) => {
    if(n === 1 || n === 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}
```

</details>

You may find this solution woks but actually it's very very inefficient. Let's sea why.

![Image of analysis of Naive recursive approach](https://user-images.githubusercontent.com/10513970/118227426-1b030980-b4bb-11eb-9e25-15f06a700148.jpeg)

Here is an example we try to find the 6th fibonacci number. To do that, we need to find out the 5th and 4th fibonacci number and add them together. And to find the 5th fibonacci number, we need to find out the 4th and 3rd fibonacci number and add them together. 
And as you can see, the problem with this approach is that there are a lot of duplications. 
For instance, in order to get the 3rd fibonacci number, we repeat the competition three times.

![Image of analysis of Naive recursive approach](https://user-images.githubusercontent.com/10513970/118227474-2fdf9d00-b4bb-11eb-863d-fa34eef384b8.jpeg)

And we repeated twice in order to get the 4th fibonacci number.
![Image of analysis of Naive recursive approach](https://user-images.githubusercontent.com/10513970/118227580-5b628780-b4bb-11eb-9c2f-b9dbcc6b486a.jpeg)

This is very slow and inefficient. And the time to find the n-th fibonacci number will be **O(2^n)**.

## Dynamic Programming with memoization Solution

#### In order to solve the problem, we can cache all the intermediate results.
#### You could either do it with using the `bottom-up` solution or `map()`. Here are the examples for both of them.

### Bottom-Up
<details>
<summary>Maybe you would like to think of your own solution first, click here when you done</summary>

```javascript
const fib = n => {
    const memo = [];
    for (let i = 0; i <= n; i++) {
        if (i < 2)   memo[i] = i;
        else memo[i] = memo[i-2] + memo[i-1];
    }
    return memo[n];
}
```

So for this solution, we created an empty array, and iterate from 0 to n.
For instance we still want to find the 6th fibonacci number. As we run the code above.

When `i < 2`, we just put 'i' into the array. [0, 1]
When `i >= 2`, We will try to find the 6th number, and it will search all the way from 6th number to 2nd number. Just like the image below indicated.
![Image of analysis of dynamic programming bottom up approach](https://user-images.githubusercontent.com/10513970/118227596-62899580-b4bb-11eb-976f-f595d7b89108.jpeg)

As we done the search, we are going to collect the results. when it comes to 2nd fibonacci number, it's 1. And then the 3rd number should be 2, and the 5th number will go 3 and so on.

![Image of analysis of dynamic programming bottom up approach](https://user-images.githubusercontent.com/10513970/118227615-6b7a6700-b4bb-11eb-8132-d5f1c0d046ea.jpeg)

In this solution, we just created one array, and stores all the results in between. And the time complexity will go down to O(n) since we don't do any duplicated competition anymore.

</details>

### `Map()`
<details>
<summary>Maybe you would like to think of your own solution first, click here when you done</summary>

```javascript
const fib = (n, memo) => {
    memo = memo || new Map();

    if (memo.has(n)) return memo.get(n);
    if (n < 2) return n;

    memo.set(n, fib(n - 1, memo) + fib(n - 2, memo));
    return memo.get(n)
}
```

</details>

#### As a matter of fact, we only need the previous two values instead of store all the values in one array or one Map.
#### Please leave your comment below to only use the previous two values to get the n-th term fibonacci number.
