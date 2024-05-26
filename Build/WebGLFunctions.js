mergeInto(LibraryManager.library, {
    OpenURLInWebGL: function(url) {
        var urlString = UTF8ToString(url);
        window.open(urlString, '_blank');
    }
});
