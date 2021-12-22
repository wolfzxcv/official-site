export const formatTimestamp = (time) => {
  const a = new Date(time * 1000);

  const year = a.getFullYear();
  const month = a.getMonth() + 1;
  const date = a.getDate();

  const hour = a.getHours();
  const min = a.getMinutes();
  const output = `${year}年${month}月${date > 9 ? date : '0' + date}日 ${
    hour > 9 ? hour : '0' + hour
  }:${min > 9 ? min : '0' + min}`;
  return output;
};
