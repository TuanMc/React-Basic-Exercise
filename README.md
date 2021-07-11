# React-Basic-Exercise

## Component | Props/State

<br>

### 1. What is the diffference between the React's `function` components and `class` components ?

### 2.  What is the component `state` ?

<br>

## Exercise

##### Task 1.
Using the npm package [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) create new project named `react-state-example`. 
Inside off the `src` directory create a new directory `components` to store your new components.
Create file `src/components/Home.js` and update the `src/App.js`, as per the code in this gist.

##### Task 2.
Add additional property `bootcamp: 'Rookies'` to the `state` of the root component (`App.js`).
Pass this value as the prop and display it in an additional `<h2>` tag in the `<Home />` component so that it says : 'Welcome to Rookies'

##### Task 3.
Create a new class component `Navbar.js`, which has a `state` with one property `username: 'YOUR NAME'`. Display this value in the `<p>` tag which will be showing in the navbar.
You can use the below snippet for your component elements.
When done, `import` the `Navbar` component in `App.js` component and place it as the first element so that it displays on the top of the page.

```js
// Navbar.js
   <nav id='navbar'>
     <ul>
       <a href="#"><li>Home</li></a>
       <a href="#"><li>Contact</li></a>
       <a href="#"><li>About</li></a>
     </ul>

     <div className="nav-details">
       <p className="nav-username"> Bob </p>
     </div>
   </nav>
```


```css
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:  #352275;
  padding: 0px 40px;
}

#navbar li {
  list-style: none;
  display: inline-block;
  margin: 0px 40px; 
  font-size: 22px;
  color:white;
}

div.nav-details > * {
  display: inline-block;
  color: royalblue;
  font-size: 22px;
}
```

## Lifecycle | Handling events

<br>

### 1. What is the order lifecycles in ReactJS ?

### 2.  What is the difference between React's `handling events` vs HTML `handling events`?

<br>

## Exercise

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

<br>

## Additional resources

<br>

[DOM Events in React -  reactjs.org](https://reactjs.org/docs/events.html)

[Function vs. class components](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

[Understanding the Fundamentals of State in React](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f)

[Binding event handlers in React components](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)
