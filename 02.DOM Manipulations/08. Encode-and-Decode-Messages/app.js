function encodeAndDecodeMessages() {
  let textAreaElements = document.getElementsByTagName('textarea');
  let sendedMessage = textAreaElements[0];
  let receivedMessage = textAreaElements[1];

  let buttonElements = document.getElementsByTagName('button');
  let encodeButton = buttonElements[0].addEventListener('click', encodeMessage);
  let decodeButton = buttonElements[1].addEventListener('click', decodeMessage);

  function encodeMessage(event) {
    let message = sendedMessage.value;
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
    }

    receivedMessage.value = encodedMessage;
    sendedMessage.value = '';
  }

  function decodeMessage(event) {
    let message = receivedMessage.value;
    let decodeMessage = '';
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      decodeMessage += String.fromCharCode(char.charCodeAt(0) - 1);
    }
    receivedMessage.disabled === false;
    receivedMessage.value = decodeMessage;
  }
}