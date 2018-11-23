window.onload = () => {
  console.log('May or may not work');
  // let handleMessage = (request, sender, sendResponse) => {
  //   console.log('Received Image Data: ' + request.data);
  //   sendResponse({response: 'Data received successfully'});
  //   document.body.innerText(JSON.stringify(request.data));
  // };

  // browser.runtime.onMessage.addListener(handleMessage);
  // let handleSuccess = (message) => {
  //   console.log("Message from the background script: " + message.data);
  //   document.body.innerText(JSON.stringify(message.data));
  // }

  // let handleError = (error) => {
  //   console.log("Error: " + error);
  // }

  // let message = browser.runtime.sendMessage('send-me-image-data');

  // message.then(handleSuccess, handleError);
  browser.storage.local.get("data").then ((data) => {
    let d = JSON.stringify(data.data, undefined, 2);
    console.log("Received Data: " + d );
    document.getElementById('image-data').innerText = d;
  });
};