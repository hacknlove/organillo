
import readline from 'readline';
import easymidi from 'easymidi';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  switch (key.name) {
    case 'l':
      console.log('Listando los dispositivos MIDI');
      var inputs = easymidi.getInputs();
      var outputs = easymidi.getOutputs();
      console.log('Inputs: ' + inputs);
      console.log('Outputs: ' + outputs);
      break;
      default:
      break;
  }
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
});

console.log(`
Pressione:
 - l para listar los dispositivos midi
`);