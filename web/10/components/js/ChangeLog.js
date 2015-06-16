var browser = new org.scn.community.basics.ModalBrowser({
        text:'Change Log 1.0',
	title:'Status & Change Log',
	url:'changelog.html',
	browserWidth:'1200px',
	browserHeight:'780px',
	openMethod:'Modal Browser Dialog',
    });
    browser.initDesignStudio();
    browser.setShowButton(true);
    browser.setShowCloseButton(true);
    browser.setType(sap.m.ButtonType.Default);
    browser.placeAt('changelog');