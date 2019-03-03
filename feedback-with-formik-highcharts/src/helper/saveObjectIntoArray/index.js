export default (DATA, index, Input) => {
  const _DATA = [...DATA];
  if (index >= 0) {
    _DATA[index] = Input;
  } else {
    _DATA.push(Input);
  }
  return _DATA;
};
