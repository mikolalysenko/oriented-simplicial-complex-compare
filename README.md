oriented-simplicial-complex-compare
==========================
A total order on oriented simplicial complexes.  Can be used to test for equality.

# Example

```javascript
var sccmp = require('oriented-simplicial-complex-compare')

var a = [
    [1, 2, 3],
    [3, 2, 4]
  ]

var b = [
    [2, 4, 3],
    [3, 1, 2]
  ]

//Test if a is equivalent to b
console.log(sccmp(a,b) === 0)
```

# Install

```
npm i oriented-simplicial-complex-compare
```

# API

#### `require('oriented-simplicial-complex-compare')(a, b)`
Test if two oriented simplicial complexes are equal or orders them.

* `a,b` are lists of cells

**Returns** `0` if `a` and `b` are equal, otherwise a number which gives their order relative to one another

# License
(c) 2015 Mikola Lysenko. MIT License
