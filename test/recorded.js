"use strict";

describe("android simple", function () {
	this.timeout(120000);
	var wd = require("wd");
	var chai = require("chai");
	var chaiAsPromised = require("chai-as-promised");

	chai.use(chaiAsPromised);
	chai.should();
	chaiAsPromised.transferPromiseness = wd.transferPromiseness;

	var desired;

	var browser = wd.promiseChainRemote("0.0.0.0", 4723);

	before(function() {
		desired = {
			"appium-version": "1.2.0",
			platformName: "Android",
			platformVersion: "4.4",
			deviceName: "",
			app: "../test/DCSMain-debug.apk",
			"app-package": "com.thoughtworks.dcs",
			"app-activity": "DCSMain"
		};
		
		return browser
		.init(desired)
		.setImplicitWaitTimeout(3000);
	})


	it("should find an element", function () {
		browser
			.sleep(10000);
	    browser.contexts().then(function (contexts) { // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
	        for (var i=0;i<contexts.length; i++) {
	        	console.log('avail context: ' + contexts[i]);
	        }
	    })

		return browser
			.sleep(10000)
			//.context("WEBVIEW_com.thoughtworks.dcs")
			.elementByXPath("//android.view.View[1]/android.widget.EditText[1]").click()
			.elementByXPath("//android.view.View[1]/android.widget.EditText[1]").sendKeys("tester150411@gmail.com")
			.elementByXPath("//android.view.View[1]/android.widget.EditText[2]").sendKeys("tester150411")
			.elementByXPath("//android.view.View[1]/android.widget.EditText[3]").sendKeys("https://dcsci.twhosted.com")
			.elementByName("Login").click()
			.fin(function() {
				return browser.quit();
			});
	});
});// end describe