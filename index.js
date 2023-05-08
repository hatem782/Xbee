const { SerialPort } = require("serialport");

// Replace /dev/ttyUSB0 with the name of your USB port. Also, make sure to set the correct baud rate for your XBee device.
// COM1 COM2 COM3 COM4 COM5
const comPort1 = new SerialPort({
  path: "COM1",
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: "none",
});

comPort1.on("data", (data) => {
  console.log(`Received data: ${data.toString()}`);
});
