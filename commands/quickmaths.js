exports.run = async (client, message, args) => {
    switch (args[0]) {
      case 'add': {
        let addNum1 = args[1];
        let addNum2 = args[2];
        let sum = +addNum1 + +addNum2;
        message.channel.send(`The answer is: ${sum}!`);
        break;
      }
      case 'subtract': {
        let subNum1 = args[1];
        let subNum2 = args[2];
        let diff = subNum1 -= subNum2;
        message.channel.send(`The answer is: ${diff}!`);
        break;
      }
      case 'multiply': {
        let multNum1 = args[1];
        let multNum2 = args[2];
        let answer1 = multNum1 *= multNum2;
        message.channel.send(`The answer is: ${answer1}!`);
        break;
      }
      case 'divide': {
        let divideNum1 = args[1];
        let divideNum2 = args[2];
        let answer2 = divideNum1 /= divideNum2;
        message.channel.send(`The answer is: ${answer2}!`);
        break;
      }
    }
};
