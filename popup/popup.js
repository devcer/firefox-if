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
  let jsonData;
  browser.storage.local.get("data").then ((data) => {
    jsonData = data.data;
    let d = JSON.stringify(jsonData, undefined, 2);
    console.log("Received Data: " + d );
    document.getElementById('image-data').innerText = d;
  });
};
document.getElementById('copyToClipboard').addEventListener('click', ()=>{
  copyToClipboard();
});
document.getElementById('downloadData').addEventListener('click', ()=>{
  downloadData();
});
var copyToClipboard = () => {
  let str = document.getElementById('image-data').innerText;
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
var downloadData = () => {
  // when clicked the button
  var content = document.getElementById('image-data').innerText;
  // a [save as] dialog will be shown
  window.open("data:application/txt," + encodeURIComponent(content), "_self");
}

// for(let obj of data) {
//   let row = document.createElement('tr');
// }