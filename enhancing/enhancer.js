module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem = {...item};
  if(newItem.enhancement < 20){
    newItem.enhancement += 1;
  }
  return newItem;
}

function fail(item) {
  const newItem = {...item};
  if(newItem.enhancement < 15) {
    newItem.durability -= 5;
    // make sure we don't get durability below 0
    newItem.durability = newItem.durability < 0 ? 0 : newItem.durability;
  } else if(newItem.enhancement >= 15) {
    newItem.durability -= 10;
    // make sure we don't get durability below 0
    newItem.durability = newItem.durability < 0 ? 0 : newItem.durability;
    if(newItem.enhancement > 16){
      newItem.enhancement -= 1;
    }
  }
  return newItem;
}

function repair(item) {
  const newItem = {...item};
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  return { ...item };
}
