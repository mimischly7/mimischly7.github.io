## Further Questions and Notes (blog?)
1. Using queries as:
  - standalone *VS*
  - `screen.<query>` *VS*
  - `within(<DOMElement>).<query>`
2. `findBy` is a combination of `getBy` and `waitFor` and returns a `Promise`, which is why you have to use `await` (or other async functions with it).
3. ...
4. Using `reject` in `Promise`'s (and other async stuff)
5. **Design**: How to test that an element is not present on the screen after firing an event, where the change in the DOM could take some time (i.e. asynchronous). I couldnt find a recommended way to do this in the TL docs, but here is what I thought of doing:

  `findBy` returns a promise that gets resolved if there element is found or rejected if the element has not be found after a `timeout` (default is 1000ms). What we can do is **expect `findBy` to throw an error**, because the timeout has passed and the element is still not found. So it would like:

  ```js
  await expect(findByX(...)).rejects.toThrow()
  ```

  (not that we use `await` with `findBy...` because it returns a Promise)


6. `await expect(findByX(...)).rejects.toThrow()` VS ` expect(await findByX(...)).rejects.toThrow()` VS ` (await expect( findByX(...))).rejects.toThrow()`

  Should probably look into JEST `expect` and also `await`

7. Actual DOM element objects vs RTL-specific objects (in some cases, it appears that RTL functions return native DOM elements)

8. Promises, async, and await -- double promises for JSON parsing
