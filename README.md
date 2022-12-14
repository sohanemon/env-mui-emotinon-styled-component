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

# Emotion & Styled-Component

- create a component

```js
const MyButton = styled.button`
  background-color: red;
  }
`;
```

- set hover effect in the component

```js
const MyButton = styled.button`
  &:hover {
    background-color: #e34133;
  }
`;
```

> `&:hover` should be trimmed i.e no space between

- use of props

```js
const MyButton = styled.button`
  background-color: ${(args) => args.bg};
  padding: ${({ p }) => p};
`;
return (
  <>
    <MyButton bg='#4081ec' p='5px' variant='contained'>
      <GoogleIcon /> Continue With Google
    </MyButton>
  </>
);
```

> the passing args names should be same to the props

- modify existing components like `mui`

```js
const MyButton = styled(Button)`
  background-color: ${({ bg }) => bg};
  &:focus {
    background-color: #e34133;
  }
`;
```

> styling Mui Button
