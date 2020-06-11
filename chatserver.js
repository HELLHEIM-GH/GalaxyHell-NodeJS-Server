class ChatServer {
  constructor(){
    const flashio = require('flashio');

    const server = flashio.createServer(9338);

    const { Logger } = require('./Logger/Logger');
    const { PacketParser } = require('./Connection/Packets/PacketParser');

    let logger = new Logger("CHATSERVER");

    logger.log('Server started!');

    server.on('connect', (data) => {
    });

    server.on('data', (data) => {
    });

    server.on('end', (data) => {
    });
  }
}

module.exports = { ChatServer };
