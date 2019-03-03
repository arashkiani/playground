export default (arrayOfObjects, name, toBeEqualTo) =>
  arrayOfObjects.findIndex(Obj => Obj[name] === toBeEqualTo);
