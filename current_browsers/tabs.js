class Tabs {
    constructor(tabs, content) {
        if (!tabs || !content) {
            console.log("Error: constructor takes 2 parameters");
        }
        this.tabs = [...document.querySelectorAll(tabs)];
        this.content = [...document.querySelectorAll(content)];
        if (!this.tabs.length || !this.content.length) {
            console.log("Error: DOM elements not found");
            return;
        }
        this.addObservers();
    }

    clearContent() {
        this.content.map(item => item.style.display = "none")
    }

    addObservers() {
        this.tabs.map((item, key) => {
            if (!this.content[key]) {
                console.log("Error: No tab content found for Tab #" + ++key);
                return;
            }
            item.addEventListener('click', () => {
                this.clearContent();
                this.content[key].style.display = "block";
            });

        })
    };
}
