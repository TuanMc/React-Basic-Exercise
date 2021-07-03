# React-Basic-Exercise

## Component | Props/State

<br>

### 1. What is the diffference between the React's `function` components and `class` components ?
<br>

#### Function components

  
   [Function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) have `props`  parameter, and they don't have `render`  or lifecycle methods.		

   That’s the reason why they are called functional stateless components.		

   [Function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)  `return` a JSX string.


<br>

#### Class components
   

   Class components have `state` and `props`.

   Class components have `render()` method which renders the JSX.


<br>

### 2.  What is the component `state` ?

   

   The `state` is an  *object*  defined inside of the React `class` component. 

   React `class`  components have React's built-in method `setState()` we must use to update the `state`.
   
   React's built-in `setState()` method triggers *re-rendering of the DOM* when state is changed.

   
   Only the `class` component itself can define the `state` (object) or change it's existing `state` through [`this.setState()`](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly). 



<br>

## Exercise

##### Task 1.
Using the npm package [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) create new project named `react-state-example`. 
Inside off the `src` directory create a new directory `components` to store your new components.
Create file `src/components/User.js` and update the `src/App.js`, as per the code in this gist.

##### Task 2.
Add additional property `username: 'YOUR NAME'` to the `state` of the root component (`App.js`).
Pass this value as the prop and display it in an additional `<h2>` tag in the `<User />` component so that it says : 'Welcome to YOUR NAME'

##### Task 3.
Create a new class component `Navbar.js`, which has a `state` with one property `currentTab: 'home'` and a prop `username: 'YOUR NAME'`.
Display this value in the `<p>` tag which will be showing in the navbar.
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

## Exercise

##### Task 1.


##### Task 2.
Add additional property `bootcamp: 'Ironhack'` to the `state` of the root component (`App.js`).
Pass this value as the prop and display it in an additional `<h2>` tag in the `<User />` component so that it says : 'Welcome to Ironhack'

<br>

## Additional resources

<br>

[DOM Events in React -  reactjs.org](https://reactjs.org/docs/events.html)

[Function vs. class components](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

[Understanding the Fundamentals of State in React](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f)

[Binding event handlers in React components](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb)
