# Difference between Static and Non-Static methods

Non-Static methods are methods by which we change
any data of the object calling the method, as so:

```js
let w = v.add(u);
```

Note that this add method, changes u to v first,
changes it's data, then gives it to w, where some-times
you just want to give w the modified v data without
changing the content of v.

Here enters Static methods, in order to accomplish
the goal stated in the previous paragraph,
we require a Static method, which is a method
by which we don't change any data while processing the
operation. In order to accomplish this we call the
method of the class itself, as so:

```js
let w = p5.Vector.add(v, u);
```

This then gets a copy of v, adds to it u, then
returns and gives it to w, without changing the
data of v nor u.

## Exercise 1.7

Translate the following pseudocode to code, using
static or non-static functions where appropriate:

- The vector v equals (1, 5).
- The vector u equals v multiplied by 2.
- The vector w equals v minus u.
- Divide the vector w by 3.

```js
let v = createVector(1, 5);
let u = p5.Vector.mult(v, 2);
let w = p5.Vector.sub(v, u);
w.div(3);
```
