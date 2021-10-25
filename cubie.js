function init() {
    let bgColor = "#F6F8FA"
    /**
     * 1 - CHANGE MAIN LOGO
     */
    // get all the elements that have 'ode-Logo' class 
    let logo = document.getElementsByClassName("ode-Logo");
    // change src attribute and change the logo to Cubie logo
    logo[0].src = "https://kidocode.io/statics/img/logo/cubie-black.svg"

    /**
     * 2 - body background color and image
     */
    document.getElementsByTagName("body")[0].style.backgroundColor = bgColor
    document.getElementsByTagName("body")[0].style.backgroundImage = "none"

    /**
     * 3 - change main toolbar background color
     */
    let toolbarTbl = document.getElementsByClassName("ya-Toolbar")
    Array.from(toolbarTbl).forEach(t => {
        t.style.backgroundColor = bgColor
        t.style.color = "#2196f3"
    })

    /**
     * 4 - change main toolbar background color
     */
    let boxHeaders = document.getElementsByClassName("ode-Box-header")
    Array.from(boxHeaders).forEach(t => t.style.backgroundColor = "#deeaf6")

    /**
     * 
     */
    let StackPanelItem = document.getElementsByClassName("gwt-StackPanelItem")
    Array.from(StackPanelItem).forEach(t => {
        t.children[0].style.backgroundColor = "#2196f3"
        t.children[0].style.color = "#ffffff"
    })

    /**
     * 
     */
    let TreeItemSelected = document.getElementsByClassName("gwt-TreeItem-selected")
    Array.from(TreeItemSelected).forEach(t => t.children[0].children[0].style.backgroundColor = "#ffd33d")

    /**
     * 
     */
    let PropertiesComponentName = document.getElementsByClassName("ode-PropertiesComponentName")
    Array.from(PropertiesComponentName).forEach(t => t.style.backgroundColor = "#2196f3")
    
    let BoxContents = document.getElementsByClassName("ode-Box-content")
    Array.from(BoxContents).forEach(t => t.style.backgroundColor = "#ffffff")
    
    let PropertiesPanel = document.getElementsByClassName("ode-PropertiesPanel")
    Array.from(PropertiesPanel).forEach(t => t.style.backgroundColor = "#ffffff")
    
    let TopPanel = document.getElementsByClassName("ode-TopPanel")
    Array.from(TopPanel).forEach(t => {
        t.style.backgroundColor = "#222222"
        t.style.backgroundImage = "none"
        t.style.color = "#ffd33d"
    })
    
    let StatusPanel = document.getElementsByClassName("ode-StatusPanel")
    Array.from(StatusPanel).forEach(t => {
        t.style.backgroundColor = "#222222"
        t.style.backgroundImage = "none"
        t.style.color = "#ffffff"
    })

    document.getElementsByClassName("gwt-HTML")[4].children[0].href = "https://kidocode.com";
    
}

(function () {
    setTimeout(() => {
        init();
    }, 10000)
})();
