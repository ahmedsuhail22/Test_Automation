import { ElementFinder,element,by } from "protractor";
import {browser} from 'protractor';


export class hotelresults
{

    hotel_sleep_CSS: ElementFinder;
    details_text_CSS: ElementFinder;
    image_exist_CSS: ElementFinder;
    map_tab_CSS: ElementFinder;
    map_CSS: ElementFinder;
    reviews_tab_CSS: ElementFinder;
    reviews_text_CSS: ElementFinder;
    rates_tab_CSS: ElementFinder;
    rates_content_CSS: ElementFinder;
    gotomap_btn_CSS:ElementFinder;
    map_area_CSS: ElementFinder;
    hotel_marker_CSS: ElementFinder;
    close_btn_CSS: ElementFinder;
    summary_card_text: ElementFinder;
    viewdeal_btn_CSS: ElementFinder;
    close_modal_CSS: ElementFinder;
    dropdown_icon_CSS: ElementFinder;
    kayak_option_CSS: ElementFinder;
    //zoomin_btn_CSS: ElementFinder;
  

constructor()
{
    this.hotel_sleep_CSS= element(by.css("button[title='Sleep & Fly'] span"));
    this.details_text_CSS= element(by.cssContainingText(".Hotels-Results-InlineDetailTabs .active .label", 'Details'));
    this.image_exist_CSS= element.all(by.css("img[alt='Sleep & Fly Guestroom']")).get(0);
    this.map_tab_CSS= element.all(by.css(".Hotels-Results-InlineDetailTabs div div[aria-controls$='mapContainer']")).get(0);
    this.map_CSS= element(by.css('.Hotels-Results-InlineMap .map'));
    this.reviews_tab_CSS= element.all(by.css(".Hotels-Results-InlineDetailTabs div div[aria-controls$='reviewContainer']")).get(0);
    this.reviews_text_CSS= element(by.css(".trustYou .note")); 
    this.rates_tab_CSS= element.all(by.css(".Hotels-Results-InlineDetailTabs div div[aria-controls$='ratesContainer']")).get(0);
    this.rates_content_CSS= element(by.css("table thead"));
    this.gotomap_btn_CSS= element(by.css(".filterList .showMap .text"));
    this.map_area_CSS= element(by.css("div[class='Hotels-Results-HotelRightRailMap open']"));
    this.hotel_marker_CSS= element(by.css(".Hotels-Results-HotelRightRailMap div[data-after-content='$166']"));
    this.close_btn_CSS= element.all(by.css("div[aria-label='Close hotel details']")).get(0);
    this.summary_card_text= element(by.css(".summaryCard .summaryCardInfo p"));
    this.viewdeal_btn_CSS= element.all(by.css("div[aria-label='Hotel booking column'] .Button-Orange")).get(0);
    this.close_modal_CSS=  element.all(by.css("button[id$=afterclickdialog-close]")).get(1);
    this.dropdown_icon_CSS=  element.all(by.css(".providersGrid .Common-Widgets-Dropdown-DropdownDialog .icon")).get(0);
    this.kayak_option_CSS= element(by.css(".open li a[data-name='KAYAK']"));
   // this.zoomin_btn_CSS= element.all(by.css("button[title='Zoom in']")).get(0);
}

}