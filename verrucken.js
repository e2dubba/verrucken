// Vimperator Plugin: 'gtr'
// Usuage: use :gtr
// here is some things I need to implement https://gist.github.com/srsudar/e9a41228f06f32f272a2

document.addEventListener('DOMContentLoaded',  function() {
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
