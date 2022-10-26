# Forms

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
