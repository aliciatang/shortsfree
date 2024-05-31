var elements = document.querySelectorAll('ytd-rich-section-renderer,ytd-reel-shelf-renderer,div[id^="adslot_"],div.google-auto-placed ap_container,ins.adsbygoogle');
elements.forEach(function(element) {
    element.style.display = 'none';
});