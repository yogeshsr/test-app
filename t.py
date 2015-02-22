'''
@author: Dominik Dary
'''
import unittest, time
from selenium import webdriver


class FindElementTest(unittest.TestCase):

    def setUp(self):
        desired_capabilities = {'aut': 'com.thoughtworks.dcs:0.0.1'}

        self.driver = webdriver.Remote(
            desired_capabilities=desired_capabilities
        )
        self.driver.implicitly_wait(30)

    def test_find_element_by_id(self):
        self.driver.get('and-activity://com.thoughtworks.dcs.Garner')
        self.assertTrue("and-activity://Garner" in self.driver.current_url)
        self.driver.switch_to.window('WEBVIEW');
        self.driver.find_element_by_id('ex1_value').click();

        my_text_field = self.driver.find_element_by_xpath('//input[@ng-model="searchStr"]')
        my_text_field.send_keys('tester150411@gmail.com')

        my_text_field = self.driver.find_element_by_xpath('//input[@ng-model="user.password"]')
        my_text_field.send_keys('tester150411')

        my_text_field = self.driver.find_element_by_xpath('//input[@ng-model="user.url"]')
        my_text_field.send_keys('https://garner.twhosted.com')

        self.driver.find_elements_by_class_name('btn')[0].click();

        print('setting wait for 30 sec')
        self.driver.implicitly_wait(300)
        menu = self.driver.find_element_by_xpath('//a[@ui-turn-on="myDropdown"]')
        menu.click()

    def tearDown(self):
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()
