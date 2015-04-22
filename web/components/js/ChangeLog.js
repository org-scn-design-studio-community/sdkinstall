var browser = new org.scn.community.basics.ModalBrowser({
        text:'Change Log',
	title:'Status & Change Log',
	url:'changelog.html',
	browserWidth:'1200px',
	browserHeight:'700px',
	openMethod:'Modal Browser Dialog',
    });
    browser.initDesignStudio();
    browser.setShowButton(true);
    browser.setShowCloseButton(true);
    browser.setType(sap.m.ButtonType.Default);
    browser.placeAt('changelog');