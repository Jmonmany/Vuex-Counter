const getRandomly = () => {
  return new Promise((resolve) => {
    const random = Math.floor(Math.random() * 100);
    setTimeout(() => {
      resolve(random);
    }, 1000);
  });
};
export default getRandomly;
