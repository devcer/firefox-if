let openWindowWithMetaData = () => {
  browser.windows.create({
    url: ['popup/popup.html'],
    height: 500,
    width: 500,
    type: 'popup'
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

