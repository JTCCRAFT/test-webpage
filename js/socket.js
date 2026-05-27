import { logger } from "./js/debug.js";
socket = fakeWebsocket(url);
socket.binaryType = "arraybuffer";
socket.open = 0;
		socket.controls = {
			commands: [0, 0, 0, 0, 0, 0, 0, 0],
			cache: { x: 0, y: 0, c: 0 },
			talk: function () {
				let o = 0;
				for (let i = 0; i < socket.controls.commands.length/*max 8*/; i++) if (socket.controls.commands[i]) o += Math.pow(2, i);
        talk: function () {
        let o = 0;
        // Calculate the bitmask
        for (let i = 0; i < socket.controls.commands.length; i++) {
          if (socket.controls.commands[i]) o += Math.pow(2, i);
        }
    
        // Send it if the socket is ready
        if (socket.readyState === WebSocket.OPEN) {
          // Convert to a single byte (Uint8)
          let buffer = new Uint8Array([o]);
          socket.send(buffer.buffer);
          logger.info('Sent bitmask: ' + o);
        } else {
          logger.error('Socket not ready');
        }
    }
}
export { socket }
