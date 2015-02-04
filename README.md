# mkobjp
Like `mkdir -p`, but for objects!

Install:

````bash
npm install mkobjp
````

Example:

````javascript
var obj = {
    foo: true,
    bar: {
        baz: 'quux'
    }
};

mkobjp(obj, [ 'bar', 'hoge', 'hogehoge', 'piyo' ]);

assert.deepEqual({
    foo: true,
    bar: {
        baz: 'quux',
        hoge: {
            hogehoge: {
                piyo: {}
            }
        }
    }
});
````
