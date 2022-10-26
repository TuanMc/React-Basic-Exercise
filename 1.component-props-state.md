# Component | Props/State

## Questions

<br>

### 1.  What is the diffference between the React's `function` components and `class` components ?

### 2.  What is the component `state` ?

<br>

## Exercises

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
