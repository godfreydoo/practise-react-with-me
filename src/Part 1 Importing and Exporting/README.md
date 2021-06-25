# Importing and Exporting

Tasks
- [ ] Under `./__tests__/part-1.test.js`, remove the `x` from the test suite on ln 11
- [ ] In randomStuff.js, complete the export statement
- [ ] In ShowPictureAndDesc.jsx, finish the import statement for the variables you just finished exporting
- [ ] In ShowPictureAndDesc.jsx, finish the import statements to import the images from the assets folder
- [ ] In ShowPictureAndDesc.jsx, insert the variables to the component to render the text
- [ ] In ShowPictureAndDesc.jsx, insert the variables to the component to render the images


Goal
* Import and export varibles and assets for use
* Practise relative and absolute path definitions

Consider this component that renders text 'Hello' to the page.
```javascript
// SayHello.jsx
class SayHello extends React.Component {
  render() {
    return (
      <div>Hello World<div>
    )
  }
}
```

This component can be used elsewhere across your project with the below ways:

## Default Exports / Import
To export...
``` javascript
...
export default SayHello; // at the bottom of the file after declaration
```
another way...
``` javascript
export default class SayHello extends React.Component {
  ...
}
```

To import from its relative location.
```javascript
import SayHello from './SayHello.jsx';
```


## Named Export / Import
To export...
``` javascript
...
export { SayHello }; // at the bottom of the file after declaration
```
another way...
``` javascript
export class SayHello extends React.Component{
  ...
}
```

To import...
```javascript
import { SayHello } from './SayHello.jsx';
```

## Another Export Method
To export JavaScript functions, objects, or other assets.

``` javascript
// helper.js
var text = 'Hello';
var boolean = true;
var number = 1;
var obj = {}
var randomFn = function () {
  return ' world';
};

module.exports = {
  text,
  boolean,
  number,
  obj,
  randomFn
}
```

To access the above variables, you would import said variables inside curly braces at the top of the file.

To use the variable inside an element, you would use it inside JSX by wrapping it in curly braces.

```javascript
import { text, boolean, number, obj, randomFn } from './helper.js';

class SayHello extends React.Component {
  render() {
    return (
      <div>{text} {randomFn()}<div>
    )
  }
}
```


### Note
* Order of imports matter in a file.
* Keep a consistent import and export strategy.
* Descriptive naming of variables, components, and file names

### Relative and Absolute Paths
* absolute paths start with `/` and point to the root
* relative paths start with `./` to refer to the location at the same level in the directory, or `../` to a level outside of the directory


## Links
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
[Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
[Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)