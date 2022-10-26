# Routing | API Handlers

## Questions

### 1.  What is `react-router-dom`? What is its components?

### 2.  What is the difference between `axios` and `fetch()`?

<br>

## Exercises

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
