// console.log("Content Script loaded");
// let allMetaData = '';

document.addEventListener("mousedown", function(event) {
  if (event.button == 2) {
    let img1 = event.target;
    EXIF.getData(img1, function() {
      let allMetaData = EXIF.getAllTags(this);
      browser.storage.local.set({"data": allMetaData}).then(setItem, onError);
      // console.log("allMetaData");
      // console.log(allMetaData);
      // openWindowWithMetaData();
    });
  }
}, true);

let setItem = () => {
  console.log("OK");
}
let onError = (error) => {
  console.log(error);
}
// let handleSuccess = (message) => {
//   console.log("Message from the background script: " + message.response);
// }

// let handleError = (error) => {
//   console.log("Error: " + error);
// }

// let openWindowWithMetaData = () => {
//   let message = browser.runtime.sendMessage('open-empty-window');
//   message.then(handleSuccess, handleError);
//   //   browser.windows.create({
//   //   url: ["https://developer.mozilla.org"]
//   // });
// };

// let handleMessage = (request, sender, sendResponse) => {
//   console.log('Asking for image data: ' + request);
//   if (request === 'send-me-image-data')
//     sendResponse({ "data": allMetaData });
// };

// browser.runtime.onMessage.addListener(handleMessage);