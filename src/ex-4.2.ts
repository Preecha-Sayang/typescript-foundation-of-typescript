function processData(data: unknown): string {
  if(typeof data === "string")
    {return data.toUpperCase();
}else {
  return "Not a string"
}
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// data.toUpperCase(); น่าจากค่า data เรากำหนดมาเป็น unknow และ return เป็น string แต่ค่าที่เราใส่ เป็น number ทำให้เราต้องครอบด้วย if ซึ่งมีเงื่อนไขคือ data เท่ากับ "string"