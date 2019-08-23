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
const protractor_2 = require("protractor");
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
let EC = protractor_2.protractor.ExpectedConditions;
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
            yield mainpageobj.origin_BCN_CSS.click();
            yield mainpageobj.search_btn_CSS.click();
            yield protractor_1.browser.getCurrentUrl().then(function (text) {
                console.log(text);
                expect(text).contain("https://www.kayak.com/hotels");
            });
        });
    });
    it('Step 7 8 9- Click on Go to Map button tab and Verify Results', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.elementToBeClickable(hoteldetailsobj.gotomap_btn_CSS), 5000);
            yield hoteldetailsobj.gotomap_btn_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield expect(hoteldetailsobj.map_area_CSS).to.exist;
            yield protractor_1.browser.wait(EC.elementToBeClickable(hoteldetailsobj.hotel_marker_CSS), 10000);
            yield protractor_1.browser.actions().mouseMove(hoteldetailsobj.hotel_marker_CSS).perform();
            yield hoteldetailsobj.summary_card_text.getText().then(function (text) {
                console.log(text);
                expect(text).to.equal("Sleep & Fly");
            });
            yield protractor_1.browser.sleep(2000);
            yield hoteldetailsobj.hotel_marker_CSS.click();
            yield protractor_1.browser.sleep(3000);
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
            yield protractor_1.browser.wait(EC.elementToBeClickable(mainpageobj.origin_input2_CSS), 30000);
            yield mainpageobj.origin_input2_CSS.sendKeys('LON');
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.origin_LON_CSS.click();
            yield protractor_1.browser.sleep(1000);
            yield mainpageobj.search_btn2_CSS.click();
            yield protractor_1.browser.wait(EC.elementToBeClickable(hoteldetailsobj.dropdown_icon_CSS), 30000);
            yield protractor_1.browser.sleep(15000);
            yield hoteldetailsobj.dropdown_icon_CSS.click();
            yield protractor_1.browser.wait(EC.elementToBeClickable(hoteldetailsobj.kayak_option_CSS), 30000);
            yield hoteldetailsobj.kayak_option_CSS.click();
            yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
                expect(handles.length).to.equal(2);
                protractor_1.browser.switchTo().window(handles[1]);
                protractor_1.browser.wait(EC.elementToBeClickable(bookingpageobj.hotelname_text_CSS), 30000);
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
            yield protractor_1.browser.wait(EC.elementToBeClickable(hoteldetailsobj.close_btn_CSS), 30000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBRW5DLHNEQUFpRDtBQUNqRCw4REFBeUQ7QUFDekQsNERBQXVEO0FBQ3ZELDJDQUFzQztBQUV0QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFHdkMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDakMsSUFBSSxlQUFlLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFDekMsSUFBSSxjQUFjLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFFdkMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxFQUFFLENBQUMsMkJBQTJCLEVBQUU7O1lBRTdCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUU7O1lBRXRELE1BQU0sV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQU14QyxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFD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