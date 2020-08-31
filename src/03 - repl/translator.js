const repl = require("repl");
const { Translator } = require("translator");

const myTranslator = new Translator("en", "fr");

function myEval(cmd, context, filename, callback) {
  callback(null, myTranslator.translate(cmd));
}

repl.start({ prompt: "> ", eval: myEval });
