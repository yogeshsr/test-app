"use strict";

describe("android simple", function () {
	this.timeout(240000); //4minu
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
			"appiumVersion": "1.2.1",
			platformName: "Android",
			platformVersion: "4.4.2",
			deviceName: "",
			autoWebview: true,
			autoWebviewTimeout: '500',
			app: "../../test/DCSMain-debug.apk",
			"appPackage": "com.thoughtworks.dcs",
			"appActivity": "DCSMain",
			"appWaitActivity": "DCSMain",
			"newCommandTimeout": '186000'
		};
		
		return browser
		.init(desired)
		.setImplicitWaitTimeout(3000);
	})


	it("should find an element", function () {

		return browser
			.sleep(180000)
			.elementByXPath("//android.view.View[1]/android.widget.EditText[1]").click()
			.elementByXPath("//android.view.View[1]/android.widget.EditText[1]").sendKeys("tester150411@gmail.com")
			.elementByXPath("//android.view.View[1]/android.widget.EditText[2]").sendKeys("tester150411")
			.elementByXPath("//android.view.View[1]/android.widget.EditText[3]").sendKeys("https://dcsci.twhosted.com")
			.elementByName("Login").click()
			.fin(function() {
				browser.context('NATIVE_APP')
				return browser.quit();
			});
	});
});// end describe