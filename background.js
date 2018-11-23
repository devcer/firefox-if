let openWindowWithMetaData = (data) => {
  console.log('openWindowWithMetaData');
  browser.windows.create({
    url: ['popup/popup.html'],
    height: 500,
    width: 500,
    type: 'popup'
  });
  browser.storage.local.get("data").then ((data) => {
    console.log("Received Data: "+ data);
  });
};

browser.menus.create({
  id: "image-selection",
  title: "View image details",
  contexts: ["image"]
});

browser.menus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "image-selection") {
    openWindowWithMetaData();
  }
});

