let array = {
  name: "a",
  roll: "b",
};

array["id"] = array.roll;

delete array.roll;

console.log(array);
