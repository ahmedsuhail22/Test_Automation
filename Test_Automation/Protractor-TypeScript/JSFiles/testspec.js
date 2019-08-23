"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const mainpage_1 = require("./page_objects/mainpage");
const hotelresults_1 = require("./page_objects/hotelresults");
const bookingpage_1 = require("./page_objects/bookingpage");
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
describe('Assignment - 2', function () {
    this.timeout(70000);
    let mainpageobj = new mainpage_1.mainpage();
    let hoteldetailsobj = new hotelresults_1.hotelresults();
    let bookingpageobj = new bookingpage_1.bookingpage();
    protractor_1.browser.waitForAngularEnabled(false);
    it('should open Kayak website', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get("https://www.kayak.com");
            yield protractor_1.browser.sleep(5000);
        });
    });
    it('Step1 - Should click Hotel and perform assertions', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield mainpageobj.hotel_btn_CSS.click();
            yield protractor_1.browser.sleep(3000);
            yield expect(mainpageobj.origin_CSS).to.exist;
            yield expect(mainpageobj.start_date_CSS).to.exist;
            yield expect(mainpageobj.end_date_CSS).to.exist;
            yield expect(mainpageobj.guests_text_CSS).to.exist;
        });
    });
    it('Step2 - Set Origin BCN and perform assertions', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield mainpageobj.origin_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.origin_input_CSS.sendKeys('BCN');
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.origin_BCN_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.search_btn_CSS.click();
            yield protractor_1.browser.sleep(1500);
            yield protractor_1.browser.getCurrentUrl().then(function (text) {
                console.log(text);
                expect(text).contain("https://www.kayak.com/hotels/Barcelona,Spain,Barcelona");
            });
            yield protractor_1.browser.sleep(2000);
        });
    });
    it('Step 7 8 9- Click on Go to Map button tab and Verify Results', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield hoteldetailsobj.gotomap_btn_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield expect(hoteldetailsobj.map_area_CSS).to.exist;
            yield protractor_1.browser.sleep(10000);
            yield protractor_1.browser.actions().mouseMove(hoteldetailsobj.hotel_marker_CSS).perform();
            yield hoteldetailsobj.summary_card_text.getText().then(function (text) {
                console.log(text);
                expect(text).to.equal("Sleep & Fly");
            });
            yield protractor_1.browser.sleep(2000);
            yield hoteldetailsobj.hotel_marker_CSS.click();
            yield protractor_1.browser.sleep(1000);
        });
    });
    it('Step 10- Click View Deal button tab and Verify Results', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield hoteldetailsobj.viewdeal_btn_CSS.click();
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
                expect(handles.length).to.equal(2);
                protractor_1.browser.switchTo().window(handles[1]).then(function () {
                    protractor_1.browser.sleep(3000);
                    protractor_1.browser.getCurrentUrl().then(function (text) {
                        console.log(text);
                    });
                    protractor_1.browser.driver.close();
                    protractor_1.browser.driver.switchTo().window(handles[0]);
                    protractor_1.browser.sleep(3000);
                    hoteldetailsobj.close_modal_CSS.click();
                    protractor_1.browser.sleep(5000);
                });
            });
        });
    });
    it('Step 11 12- Set London & Find Kayak and Verify Results', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield mainpageobj.origin_CSS.click();
            yield protractor_1.browser.sleep(5000);
            yield mainpageobj.origin_input2_CSS.sendKeys('LON');
            yield protractor_1.browser.sleep(3000);
            yield mainpageobj.origin_LON_CSS.click();
            yield protractor_1.browser.sleep(2000);
            yield mainpageobj.search_btn2_CSS.click();
            yield protractor_1.browser.sleep(25000);
            yield hoteldetailsobj.dropdown_icon_CSS.click();
            yield protractor_1.browser.sleep(1500);
            yield hoteldetailsobj.kayak_option_CSS.click();
            yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
                expect(handles.length).to.equal(2);
                protractor_1.browser.switchTo().window(handles[1]);
                protractor_1.browser.sleep(15000);
                bookingpageobj.hotelname_text_CSS.getText().then(function (text) {
                    console.log(text);
                    expect(text).to.contain("Club Quarters Hotel, Trafalgar Square");
                });
                protractor_1.browser.driver.close();
                protractor_1.browser.switchTo().window(handles[0]);
            });
            yield protractor_1.browser.sleep(1000);
        });
    });
    it('Navigate to Hotel Screen', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield mainpageobj.hotel_btn_CSS.click();
            yield protractor_1.browser.sleep(5000);
            yield mainpageobj.origin_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.origin_input_CSS.sendKeys('BCN');
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.origin_BCN_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.search_btn_CSS.click();
            yield protractor_1.browser.sleep(1000);
        });
    });
    it('Step3 - Select Sleep & Fly and Verify Results', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(13000);
            yield hoteldetailsobj.close_btn_CSS.click();
            yield hoteldetailsobj.hotel_sleep_CSS.click();
            yield expect(hoteldetailsobj.details_text_CSS).to.exist;
            yield expect(hoteldetailsobj.image_exist_CSS).to.exist;
            yield protractor_1.browser.sleep(2000);
        });
    });
    it('Step 4 5 6 - Click on Maps tab and Verify Results', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield hoteldetailsobj.map_tab_CSS.click();
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.sleep(2000);
            yield hoteldetailsobj.reviews_tab_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield hoteldetailsobj.reviews_text_CSS.getText().then(function (text) {
                console.log(text);
                expect(text).to.contain("Based on");
            });
            yield hoteldetailsobj.rates_tab_CSS.click();
            yield expect(hoteldetailsobj.rates_content_CSS).to.exist;
            yield hoteldetailsobj.close_btn_CSS.click();
            yield protractor_1.browser.sleep(10000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBRW5DLHNEQUFpRDtBQUNqRCw4REFBeUQ7QUFDekQsNERBQXVEO0FBQ3ZELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDakMsSUFBSSxlQUFlLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFDekMsSUFBSSxjQUFjLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFFdkMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxFQUFFLENBQUMsMkJBQTJCLEVBQUU7O1lBRTdCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUU7O1lBRXRELE1BQU0sV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBSzFCLE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFF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