document.addEventListener("mousedown", function(event) {
  if (event.button == 2) {
    let img1 = event.target;
    EXIF.getData(img1, function() {
      let allMetaData = EXIF.getAllTags(this);
      browser.storage.local.set({"exif-data": allMetaData});
    });
  }
}, true);