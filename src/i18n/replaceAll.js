const all = {};

const regex = / /gi;

const replaceAll = () => {
  const obj = {};
  for (const each in all) {
    obj[each] = all[each].replace(regex, '*');
  }
  console.log(obj);
};

replaceAll();

/** These file is used to replace all the "white space" with "*" in each property of object */
