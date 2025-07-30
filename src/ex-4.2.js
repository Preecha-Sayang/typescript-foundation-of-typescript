function processData(data) {
    if (typeof data == "string") {
        return data.toUpperCase();
    }
    return "Not a string";
}
console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"
// Error ที่เจอคือ
// 'data' is of type 'unknown'.
