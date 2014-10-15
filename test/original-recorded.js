"use strict";

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var desired = {
	"appium-version": "1.0",
	platformName: "Android",
	platformVersion: "4.4",
	deviceName: "",
	app: "/Users/yogeshsr/Documents/softwares/adt-bundle-mac-x86_64-20131030/sdk/build-tools/android-4.4/DCSMain-debug.apk",
	"app-package": "com.thoughtworks.dcs",
	"app-activity": "DCSMain"
};

var browser = wd.promiseChainRemote("0.0.0.0", 4723);

browser.init(desired).then(function() {
	return browser
		.elementByXPath("//android.view.View[1]/android.widget.EditText[1]").click()
		.elementByXPath("//android.view.View[1]/android.widget.EditText[1]").sendKeys("tester150411@gmail.com")
		.elementByXPath("//android.view.View[1]/android.widget.EditText[2]").sendKeys("tester150411")
		.elementByXPath("//android.view.View[1]/android.widget.EditText[3]").sendKeys("https://dcsci.twhosted.com")
		.elementByName("Login").click()
		.fin(function() {
			return browser.quit();
		});
}).done();