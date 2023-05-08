var SerialPort = require("serialport").SerialPort;
var xbee_api = require("xbee-api");
const { createTemp } = require("./firebase/SendDataToFirebase");
var C = xbee_api.constants;

//SendTemp({ data: "hello" });

var xbeeAPI = new xbee_api.XBeeAPI({
  api_mode: 1,
});

var serialport = new SerialPort({
  path: "COM4",
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: "none",
});

serialport.pipe(xbeeAPI.parser);
xbeeAPI.builder.pipe(serialport);

serialport.on("open", function () {
  var frame_obj = {
    // AT Request to be sent
    type: C.FRAME_TYPE.AT_COMMAND,
    command: "NI",
    commandParameter: [],
  };

  xbeeAPI.builder.write(frame_obj);
});

// All frames parsed by the XBee will be emitted here
xbeeAPI.parser.on("data", function (frame) {
  // console.log(">>", frame);
  if (frame.analogSamples) {
    let ad1 = frame.analogSamples.AD1;
    let value = ((((ad1 * 5) / 1024) * 10) / 4) * 3;
    //SendTemp(value);

    console.log(value);
    createTemp(value);
  }
  //((value/1023)*1200)*3/10-50
});
