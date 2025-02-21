document.addEventListener('keydown', function(event) {
  if (event.key === '`') {
    // Open the unblocked games site in a new about:blank tab/window
    let newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
      newWindow.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Home - Google Drive</title><link rel="icon" href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"><style>body { margin: 0; }</style></head><body><iframe src="https://behindingtherealone.github.io/testing123/" style="width: 100%; height: 100vh; border: none;"></iframe></body></html>');
      newWindow.document.close();
    } else {
      alert('Please allow pop-ups for this site to open the unblocked games.');
    }
  }
});
