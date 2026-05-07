(function () {
  try {
    // Prevent duplicate injection
    if (window.__adchoicesInjected) return;
    window.__adchoicesInjected = true;

    var doc = document;
    var root = doc.body || doc.documentElement;
    if (!root) return;

    // If already exists, don't add again
    if (doc.getElementById('adchoices-overlay')) return;

    // Inject styles
    var style = doc.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
      '#adchoices-overlay {' +
      'position:absolute !important;' +
      'top:6px !important;' +
      'right:6px !important;' +
      'z-index:2147483647 !important;' +
      'pointer-events:auto !important;' +
      'font-family:Arial, sans-serif !important;' +
      '}' +
      '#adchoices-overlay a {' +
'display:block !important;' +
'text-decoration:none !important;' +
'line-height:1 !important;' +
'background:transparent !important;' +
'padding:0 !important;' +
'border-radius:0 !important;' +
'}' +
'#adchoices-overlay img {' +
'width:16px !important;' +
'height:16px !important;' +
'border:0 !important;' +
'display:block !important;' +
'}';

    (doc.head || root).appendChild(style);

    // Create wrapper
    var wrapper = doc.createElement('div');
    wrapper.id = 'adchoices-overlay';

    // Create link
    var link = doc.createElement('a');
    link.href = 'https://optout.aboutads.info/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'AdChoices');

    // Icon
    var img = doc.createElement('img');
    img.src = 'https://ejeong12.github.io/adchoices-assets/AdChoices%20icon.png';
    img.alt = 'AdChoices';

    // Assemble
    link.appendChild(img);
    wrapper.appendChild(link);

    // Ensure positioning works
    if (doc.documentElement && getComputedStyle(doc.documentElement).position === 'static') {
      doc.documentElement.style.position = 'relative';
    }
    if (root && getComputedStyle(root).position === 'static') {
      root.style.position = 'relative';
    }

    // Append to DOM
    root.appendChild(wrapper);

  } catch (e) {
    // Fail silently (important for ad serving)
  }
})();
