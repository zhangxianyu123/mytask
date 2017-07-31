/**
 * Created by dllo on 17/7/31.
 */
const assert = require('assert');
//如果前面不正确就显示后面的:
console.assert(10 !== 100, '10不等于100');
var a = 20;
var b = 30;
// assert.deepEqual:
// 测试第一个参数是否==第二个参数,如果相等什么都不会抛出,
// 如果不相等抛出AssertionError: 2 deepEqual 3
//
// assert.deepEqual(a,b);
// assert.deepStrictEqual:
// 他和上面的一样,但是他判断用的是===
// assert.deepStrictEqual(a,b);


// assert.deepStrictEqual:
// 他和上面的一样,但是他判断用的是===
// assert.deepStrictEqual(a,b);

// assert.doesNotThrow
// 第一个参数是function,第三个参数和第二个参数比较类型
// 如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者。
// assert.doesNotThrow(function () {
//     console.log(a);
// },TypeError,'aaaa');

// 判断参数1和参数2是否相等 判断用的是==,不相等抛出AssertionError: 2 == 3
// assert.equal(a,b);
