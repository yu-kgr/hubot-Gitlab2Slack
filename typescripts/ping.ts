import hubot from 'hubot'

module.exports = (robot: hubot.Robot): void => {
  robot.hear(/ping/, (msg: hubot.Response) => {
    msg.send('pong');
  });
}
