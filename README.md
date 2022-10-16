# Store sensitive data in env

- create .env in the root folder
- start variable name with REACT*APP*
- to assign with variable use `=`

```js
REACT_APP_API_KEY = RzsfaSyCcersTVXesA_HMprI6fyweQewrlvhqQjT44;
```

- no `" ' ` should be used
- variables are stored in `process.env` object
- access them as follow

```js
console.log(process.env.REACT_APP_API_KEY);
```

> must restart the app to see the changes.

# Initialize Firebase
