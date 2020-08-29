"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (robot) => {
    robot.hear(/ping/, (msg) => {
        msg.send('pong');
    });
};
