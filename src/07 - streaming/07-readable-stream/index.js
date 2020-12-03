const stream = require('stream');

function MyStream(options) {
  stream.Readable.call(this, options);
}

MyStream.prototype = Object.create(stream.Readable.prototype, {
  constructor: {
    value: MyStream
  }
});
