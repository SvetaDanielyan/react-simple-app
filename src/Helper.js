const helper = {
    generateRandomNumber: function () {
    const min = 2;
    const max = 10;
    return Math.floor(Math.random() * (max - min) + min);
  },
};

export default helper;
