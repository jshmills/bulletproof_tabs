# bulletproof_tabs
 This is a simple vanilla JS plugin that will get you up and running in no time. Included are scripts for current browsers as well as legacy browsers.

Step 1: Create your event targets. Use whatever elements you like.

    <div id="tabs">
        <a href="javascript:void(0)">tab 1</a>
        <a href="javascript:void(0)">tab 2</a>
        <a href="javascript:void(0)">tab 3</a>
    </div>

Step 2: Create the corresponding content nodes. Use whatever elements you like.

    <div id="tab_content">
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
    </div>

**Make sure the number of tab elements matches the number of content elements

Step 3: Add your scripts and call the Tabs class

    <script type="text/javascript" src="./current_browsers/tabs.js"></script>
    <script type="text/javascript">
        const tabs = new Tabs("#tabs a", "#tab_content p"); //use the selectors you chose from steps 1 and 2.
    </script>

    <!--Legacy Browsers / supports IE 9 and up
    <script type="text/javascript" src="./legacy_browsers/tabs_legacy.js"></script>
    <script type="text/javascript">
        tabs.define("#tabs a", "#tab_content p");
    </script>-->

Step 4 (optional): Add style to content elements. Otherwise just use inline styles.

    #tab_content p {
        display: none;
    }
