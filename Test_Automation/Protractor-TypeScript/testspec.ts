import {browser} from "protractor";
import {element,by} from "protractor";
import {mainpage} from "./page_objects/mainpage";
import {hotelresults} from "./page_objects/hotelresults";
import {bookingpage} from "./page_objects/bookingpage";
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Assignment - 2', function() {
  this.timeout(70000);

  let mainpageobj = new mainpage();
  let hoteldetailsobj = new hotelresults();
  let bookingpageobj = new bookingpage();

  browser.waitForAngularEnabled(false);

	it('should open Kayak website', async function() {
    
    await	browser.get("https://www.kayak.com");
    await browser.sleep(5000);

  });
      
  it('Step1 - Should click Hotel and perform assertions', async function() {
    
    await mainpageobj.hotel_btn_CSS.click();
    await browser.sleep(3000);
    //return Promise.resolve((mainpageobj.origin_CSS).length).should.eventually.equal(1);
     //await console.log(mainpageobj.origin_CSS.length);
     //return expect(Promise.resolve(mainpageobj.origin_CSS.length)).to.eventually.equal(1);
    
    await expect(mainpageobj.origin_CSS).to.exist;
    await expect(mainpageobj.start_date_CSS).to.exist;
    await expect(mainpageobj.end_date_CSS).to.exist;
    await expect(mainpageobj.guests_text_CSS).to.exist;

    //await browser.sleep(5000);
  });
                  
            
  it('Step2 - Set Origin BCN and perform assertions', async function() {
    
    await mainpageobj.origin_CSS.click();
    await browser.sleep(1000);
    await mainpageobj.origin_input_CSS.sendKeys('BCN');
    await browser.sleep(1000);
    await mainpageobj.origin_BCN_CSS.click();
    await browser.sleep(1000);
    await mainpageobj.search_btn_CSS.click();
    await browser.sleep(1500);
    await browser.getCurrentUrl().then(function(text){     //Verify user is on Hotel Results page
          console.log(text);
          expect(text).contain("https://www.kayak.com/hotels/Barcelona,Spain,Barcelona");
    });
        
    await browser.sleep(2000);
  });  
      /*
  it('Step3 - Select Sleep & Fly and Verify Results', async function() {
    await browser.sleep(13000);
    await hoteldetailsobj.hotel_sleep_CSS.click();
    await expect(hoteldetailsobj.details_text_CSS).to.exist;
    await expect(hoteldetailsobj.image_exist_CSS).to.exist;
    await browser.sleep(2000);
  });

  it('Step 4 5 6 - Click on Maps tab and Verify Results', async function() {

    await hoteldetailsobj.map_tab_CSS.click();
    await browser.sleep(3000);
    //await expect(hoteldetailsobj.map_CSS).to.exist;
    await browser.sleep(2000);
    await hoteldetailsobj.reviews_tab_CSS.click();
    await browser.sleep(1000);
    await hoteldetailsobj.reviews_text_CSS.getText().then(function(text){
      console.log(text); 
      expect(text).to.equal("Based on 438 reviews");
    });
    await hoteldetailsobj.rates_tab_CSS.click(); 
    await expect(hoteldetailsobj.rates_content_CSS).to.exist;
    await hoteldetailsobj.close_btn_CSS.click();

    await browser.sleep(3000);
  });    
               */
              
  it('Step 7 8 9- Click on Go to Map button tab and Verify Results', async function() {

    await hoteldetailsobj.gotomap_btn_CSS.click();
    await browser.sleep(1000);
    await expect(hoteldetailsobj.map_area_CSS).to.exist;
    await browser.sleep(10000);
   
    //await browser.sleep(3000);
    
   // browser.wait(EC.elementToBeClickable(button),5000);
    //button.click();
  //  await hoteldetailsobj.hotel_marker_CSS.click();
    await browser.actions().mouseMove(hoteldetailsobj.hotel_marker_CSS).perform();
    await hoteldetailsobj.summary_card_text.getText().then(function(text){
      console.log(text); 
      expect(text).to.equal("Sleep & Fly");  // Verify Summary Card Text
    });
    await browser.sleep(2000);
    await hoteldetailsobj.hotel_marker_CSS.click();
   
    await browser.sleep(1000);
  });
  it('Step 10- Click View Deal button tab and Verify Results', async function() {
   
   await hoteldetailsobj.viewdeal_btn_CSS.click();
   await browser.sleep(3000);

   await browser.getAllWindowHandles().then(function (handles) {   // Verify new tab opened and its Title
      expect(handles.length).to.equal(2);
      browser.switchTo().window(handles[1]).then(function () {
        
        browser.sleep(3000); 
        browser.getCurrentUrl().then(function(text){     //Verify user is on Hotel Results page
        console.log(text);
        //expect(text).contain("https://www.agoda.com/");
    });
      browser.driver.close();
      browser.driver.switchTo().window(handles[0]);
      browser.sleep(3000);
      hoteldetailsobj.close_modal_CSS.click();
      browser.sleep(5000); 
    });
    
    });
   
    
  });
              
  it('Step 11 12- Set London & Find Kayak and Verify Results', async function() {
     
    await mainpageobj.origin_CSS.click();
    await browser.sleep(5000);
    await mainpageobj.origin_input2_CSS.sendKeys('LON');
    await browser.sleep(3000);
    await mainpageobj.origin_LON_CSS.click();
    await browser.sleep(2000);
    await mainpageobj.search_btn2_CSS.click();
    await browser.sleep(25000);
    await hoteldetailsobj.dropdown_icon_CSS.click(); 
    await browser.sleep(1500);
    await hoteldetailsobj.kayak_option_CSS.click(); // CLick Kayak from dropdown list of hotels
    //switch to new Tab
    await browser.getAllWindowHandles().then(function (handles) {   // Verify new tab opened and its Title
      expect(handles.length).to.equal(2);
      browser.switchTo().window(handles[1]);

      browser.sleep(15000);
      // Verify Hotel Name
      bookingpageobj.hotelname_text_CSS.getText().then(function(text){
        console.log(text); 
        expect(text).to.contain("Club Quarters Hotel, Trafalgar Square");
      });
      browser.driver.close();
      browser.switchTo().window(handles[0]);
    });
   
    // Verify 1 room, 2 guest, 1 night
 /*   await bookingpageobj.room_text_CSS.getText().then(function(text){
      console.log(text); 
      expect(text).to.contain("1 room");
      expect(text).to.contain("2 adults");
      expect(text).to.contain("1 night");
    });  */

    
    await browser.sleep(1000);
  });
     
  it('Navigate to Hotel Screen', async function() {
    
    //await	browser.get("https://www.kayak.com/hotels");
    await mainpageobj.hotel_btn_CSS.click();
    await browser.sleep(5000);
    await mainpageobj.origin_CSS.click();
    await browser.sleep(1000);
    await mainpageobj.origin_input_CSS.sendKeys('BCN');
    await browser.sleep(1000);
    await mainpageobj.origin_BCN_CSS.click();
    await browser.sleep(1000);
    await mainpageobj.search_btn_CSS.click();
        
    await browser.sleep(1000);
  });  

  it('Step3 - Select Sleep & Fly and Verify Results', async function() {
    await browser.sleep(13000);
    await hoteldetailsobj.close_btn_CSS.click();
    await hoteldetailsobj.hotel_sleep_CSS.click();
    await expect(hoteldetailsobj.details_text_CSS).to.exist;
    await expect(hoteldetailsobj.image_exist_CSS).to.exist;
    await browser.sleep(2000);
  });

  it('Step 4 5 6 - Click on Maps tab and Verify Results', async function() {

    await hoteldetailsobj.map_tab_CSS.click();
    await browser.sleep(3000);
    //await expect(hoteldetailsobj.map_CSS).to.exist;
    await browser.sleep(2000);
    await hoteldetailsobj.reviews_tab_CSS.click();
    await browser.sleep(1000);
    await hoteldetailsobj.reviews_text_CSS.getText().then(function(text){
      console.log(text); 
      expect(text).to.contain("Based on");
    });
    await hoteldetailsobj.rates_tab_CSS.click(); 
    await expect(hoteldetailsobj.rates_content_CSS).to.exist;
    await hoteldetailsobj.close_btn_CSS.click();

    await browser.sleep(10000);
  });    
               


});