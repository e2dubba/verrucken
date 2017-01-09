// Vimperator Plugin: 'gtr'
// Usuage: use :gtr

document.addEvenListener('DOMContentLoaded',  function() {
    var checkPageButton = document.getElementById('getTranslation');
    checkPageButton.addEventListener('click', function(){

        var otext = document.execCommand('paste');
        otext = otext.replace(/\-\r?\n/g, '');
        otext = otext.replace(/\r?\n/g, ' ');
		var url = "https://translate.google.com/#auto/en/" ;
	    url += encodeURIComponent(otext);
        chrome.tabs.create(url);
    });
    }, false);
