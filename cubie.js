function init() {
    let bgColor = "#F6F8FA"
    /**
     * 1 - CHANGE MAIN LOGO
     */
    // get all the elements that have 'ode-Logo' class 
    let logo = document.getElementsByClassName("ode-Logo");
    // change src attribute and change the logo to Cubie logo
    logo[0].src = "https://kidocode.io/statics/img/logo/cubie-black.svg"

    document.getElementsByClassName("gwt-HTML")[4].children[0].href = "https://kidocode.com";
    document.getElementsByTagName("title")[0].text = "Cubie Mobile App";
    let favicon = document.createElement('link');
    favicon.rel="shortcut icon";
    favicon.href='https://kidocode.io/statics/img/logo/cubie-white.svg';
    favicon.sizes="32x32";
    favicon.type='image/png';
    document.getElementsByTagName("head")[0].append(favicon);

    
}

(function () {
    setTimeout(() => {
        init();
    }, 10000)
})();
