# Lifecycle | Handling events

## Questions

<br>

### 1.  What is the order lifecycles in ReactJS ?

### 2.  What is the difference between React's `handling events` vs HTML `handling events`?

### 3.  How to send data from `child` component to its parents?

<br>

## Exercises

##### Task 1.
Add another state `time: new Date().toLocaleTimeString()` to component `Home.js`. Create a lifecycle `componentDidMount()` and update the value of new state using `this.setState({ time: new Date().toLocaleTimeString() })` for **an interval of 1 second**. Display the value of new state next to the welcome header as: 'Welcome to Rookies. It is 12:26:48 PM'

##### Task 2.
Add an additional `<button onClick={() => clickGame()}> Clicky Game</button>` in `src/components/Home.js`. Edit the `clickGame()` method in component `Home.js`, with every **3 clicks**, alert the message `Fizz`, with every **5 clicks**, alert the message `Buzz`, with every **15 clicks**, alert the message `FizzBuzz`.

[**Hint**] 

- Add new state `clickedTime: 0` in component `Home.js`. Every time the `<button>` is clicked, update the value of `clickedTime` to `+1`.

- To show the alert. Add `alert("Hello! I am an alert box!!");` to `clickGame()` like the below snippet.

```
  ...
  
  clickGame() {
    ...
    alert("Hello! I am an alert box!!");
  }
  
```
