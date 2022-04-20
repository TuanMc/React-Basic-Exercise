# React-Basic-Exercise

## Component | Props/State

<br>

### 1.  What is the diffference between the React's `function` components and `class` components ?

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

### 1.  What is the order lifecycles in ReactJS ?

### 2.  What is the difference between React's `handling events` vs HTML `handling events`?

### 3.  How to send data from `child` component to its parents?

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

## Routing | API Handlers

<br>

### 1.  What is `react-router-dom`? What is its components?

### 2.  What is the difference between `axios` and `fetch()`?

<br>

## Exercise

##### Task 1.
Install npm package [axios](https://www.npmjs.com/package/axios) and create new class component `Contact.js` in `src/components`. Use `axios.get()` to get data from the api `https://jsonplaceholder.typicode.com/users` and display those in the `<table>` tag. You can use the below snippet for your component elements.

```js
// Contact.js
   <table id="table">
     <thead>
       <th>Id</th>
       <th>Name</th>
       <th>Email</th>
     </thead>
     <tbody>
       <tr>
         <td>1</td>
         <td>ABC</td>
         <td>abc@nomail.com</td>
       </tr>
       <tr>
         <td>2</td>
         <td>XYZ</td>
         <td>xyz@nomail.com</td>
       </tr>
     </tbody>
   </table>
```

```css
   #table {
     border-collapse: separate;
     border-radius: 10px;
     border-spacing: 0;
     box-shadow: 0 0 25px #aaa;
     margin: 4rem 0;
     width: 100%;
   }

   th {
     background-color: #fff;
     font-weight: normal;
     border-bottom: 1px solid #d1d1d1;
   }

   th,
   td {
     line-height: 1.5;
     padding: 0.75em;
     text-align: center;
   }

   td {
     background-color: white;
   }

   td:first-child {
     font-weight: bold;
     text-align: left;
   }

   tbody tr:nth-child(odd) td {
     background-color: #f6f6f6;
   }

   thead th:first-child {
       border-top-left-radius: 10px;
       text-align: left;
   }

   thead th:last-child {
       border-top-right-radius: 10px;
   }

   tbody tr:last-child td:first-child {
     border-bottom-left-radius: 10px;
   }

   tbody tr:last-child td:last-child {
     border-bottom-right-radius: 10px;
   }

```



##### Task 2.
Install npm package [react-router-dom](https://www.npmjs.com/package/react-router-dom) and update the root component `App.js` as below code:

a/ Change the `<a>` tag to `Link` component of `react-router-dom` in component `Navbar.js` so that it can render the correct component for each route.

b/ Add [**No match route**](https://reactrouter.com/web/example/no-match)

```js
// App.js
   import React from "react";
   import Navbar from "./components/Navbar";
   import Home from "./components/Home";
   import Contact from "./components/Contact";
   import { BrowserRouter, Switch, Route } from "react-router-dom";

   class App extends React.Component {
      render() {
         return (
            <BrowserRouter>
              <div>
                <Navbar />

                <Switch>
                  <Route exact path="/home">
                    <Home></Home>
                  </Route>
                  <Route exact path="/contact">
                    <Contact></Contact>
                  </Route>
                </Switch>
              </div>
            </BrowserRouter>
         );
      }
   }

   export default App;
```

## Forms

<br>

## Exercises

##### Task 1.

Create a form to add new contact at the end of in component `Contact.js` (Feel free to play around with styling the form). Use `axios.post()` with the url `https://jsonplaceholder.typicode.com/users` and the body is your form's value to make a request. Alert a message '**Success!**' when the request is completed or '**Failed!**' when it is incompleted.

Finally, add new record to the `<table>` body.

```js
// JSX

   render() {
      return {
         ...
         <form onSubmit={e => this.addNewContact(e)}>
             <label for="name">Name: </label>
             <input type="text" id="name" />

             <label for="email">Email: </label>
             <input type="text" id="email" />

             <button type="submit">Submit</button>
         </form>
      }
   }
```

```js
// JS

   addNewContact(e) {
      e.preventDefault();
      console.log(e.target.name.value)
      console.log(e.target.email.value)
  }
```

##### Task 2.

Install `react-hook-form` to handle controls of add contact form. Then, using `yup` to add schema validation with following options:

```js
// JS

const schema = yup
  .object({
    name: yup.string().required("Please enter name"),
    email: yup.string().email().required("Please enter email"),
  })
  .required();
```

## State Management

<br>

### 1.  What is state management for?

### 2.  What is the difference between `Context-Provider` and `Redux`?

<br>

## Exercise

##### Task 1.
Create new component `src/components/Login.js` and assign it to a route `/login`. Use HTML form (or [**reactstrap form**](https://reactstrap.github.io/components/form/)) to create a login form with 2 fields `username` and `password` and a submit button.

When done, create `users.json` file in `src` with the content below:

```json
   [
       {
           "username": "YOUR_USERNAME",
           "password": "YOUR_PASSWORD" 
       }
   ]
```

##### Task 2.
Continue to implement the method `handleLogin()` in `Login.js` component after user submit the form. If user login successfully, redirect to `/home` route. 

[**Hint**] 

- You can use `fetch()` or `axios` to read the list of available users in `users.json` file, then compare that users list with the `username` and `password` from login form using [`.includes()`](https://www.w3schools.com/jsref/jsref_includes_array.asp)). 

