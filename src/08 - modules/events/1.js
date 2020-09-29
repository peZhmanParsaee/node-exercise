const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("MessageLogged", (log) => {
  console.log("Listener called", log);
});

emitter.emit("MessageLogged", { id: 1, url: "http://" });
