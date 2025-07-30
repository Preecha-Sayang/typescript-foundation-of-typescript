function isAdult(user) {
    var _a;
    return ((_a = user.age) !== null && _a !== void 0 ? _a : 0) >= 18 ? true : false;
}
var result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false
// Error ที่เจอคือ
//'user.age' is possibly 'undefined'
