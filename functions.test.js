//testing to see example , we pulled in function from functions.js by using require("./functions ")
const functions = require('./functions');
//test uses test("string",  ()=>{epect().marcher()}) thats the format 
test('adds 2+2 to equal 4', () => {
  const functions = {
    add: (n1, n2) => n1 + n2
  };
  expect(functions.add(2, 2)).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('Musa is the admin', () => {
  username = ['musa', 'tobi', 'andrew'];
  admin = 'musa';
  expect(username).toContain(admin);
});
