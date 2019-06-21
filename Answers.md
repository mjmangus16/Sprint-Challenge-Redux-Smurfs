1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .forEach(), .every(). Class.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is like the container that holds your variables and functions. The actions are your functions that connect your app to your reducer. The reducer is where the new data coming from your actions then changes or updates the data inside the variables in your store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is the state stored within a specific component. Application state is state that is stored above your components inside of the app. Giving every component access to this state.

1.  What is middleware?

middleware is basically a function that is passed into your other functions. The middleware takes in the original data passed into the top level function, does something with it, then returns that updated data back to the top level function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows to create actions that return a function instead of an action. It gives us more control over our actions. Allowing them to be asynchronous.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()
