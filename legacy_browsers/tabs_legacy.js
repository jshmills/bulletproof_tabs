//for Internet Explorer 9 thru 11
"use strict"
var tabs = (function () {

    function define(tabs, content) {
        if (!tabs || !content) {
            console.log("Error: function define needs 2 parameters");
            return;
        }
        tabs = document.querySelectorAll(tabs);
        content = document.querySelectorAll(content);

        if (!tabs.length || !content.length) {
            console.log("Error: DOM elements not found");
            return;
        }
        addObservers(tabs, content);
    }

    function clearContent(content) {
        for (var x = 0; x < content.length; x++) {
            content[x].style.display = "none";
        }
        return;
    };

    function addObservers(tabs, content) {
        for (var x = 0; x < tabs.length; x++) {
            if (!content[x]) {
                console.log("Error: No tab content found for Tab #" + ++x);
                return;
            }
            tabs[x].setAttribute("key", x);
            tabs[x].addEventListener("click", function (e) {
                clearContent(content);
                content[e.target.getAttribute("key")].style.display = "block";
            });
        }
    };

    return {
        define: define,
    };
})();