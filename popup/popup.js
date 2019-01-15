window.onload = () => {
  let jsonData, noDataText = 'The selected image does not have any Exif meta-data or The data cannot be read.';
  browser.storage.local.get('exif-data').then((data) => {
    jsonData = data['exif-data'];
    if (Object.keys(jsonData).length === 0 && jsonData.constructor === Object) {
      document.getElementById('image-data').innerText = noDataText;
    } else {
      let d = JSON.stringify(jsonData, undefined, 2);
      document.getElementById('image-data').innerText = d;
    }
    fillTableData(jsonData);
    document.getElementById('show-table').click();
  });
  document.getElementById('copy-to-clipboard').addEventListener('click', () => {
    copyToClipboard();
  });
  document.getElementById('download-data').addEventListener('click', () => {
    downloadData();
  });
  document.getElementById('show-json').addEventListener('click', () => {
    hideContainers();
    document.getElementById('json-data').style.display = 'block';
  });
  document.getElementById('show-table').addEventListener('click', () => {
    hideContainers();
    document.getElementById('table-data').style.display = 'block';
  });
  // document.getElementById('fill-table-data').addEventListener('click', ()=>{
  //   fillTableData(jsonData);
  // });
  var hideContainers = () => {
    document.getElementById('table-data').style.display = 'none';
    document.getElementById('json-data').style.display = 'none';
  };
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
    var content = document.getElementById('image-data').innerText;
    window.open('data:application/txt,' + encodeURIComponent(content), '_self');
  }
  var fillTableData = (data) => {
    let tableContainer = document.getElementById('table-body');
    tableContainer.innerText = '';
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      let row = document.createElement('tr'),
        col1 = document.createElement('td');
      col1.colSpan = 2;
      col1.innerText = noDataText;
      row.appendChild(col1);
      tableContainer.appendChild(row);
    } else {
      for (let obj in data) {
        let row = document.createElement('tr'),
          col1 = document.createElement('td'),
          col2 = document.createElement('td');
        col1.innerText = JSON.stringify(obj);
        col2.innerText = JSON.stringify(data[obj]);
        row.appendChild(col1);
        row.appendChild(col2);
        tableContainer.appendChild(row);
      }
    }
  }
};