# Fundamentos JavaScript 😎
Fundamentos de JavaScript con ejemplos de funciones, arrow function, callbacks, promise.

## Promesas
Algo que va suceder, cuando ahora, en el futuro o nunca. Las promesas reciben dos parametros resolve y reject, resolve se va a ejecutar cuando la promesas haya sido resuelta y reject o rechazada cuando la promesa no haya sido bien ejecutada.

```javascript
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));
```
