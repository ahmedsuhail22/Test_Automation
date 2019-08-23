import { ElementFinder,element,by } from "protractor";
import {browser} from 'protractor';


export class mainpage
{

    hotel_btn_CSS: ElementFinder;
    origin_CSS : ElementFinder;
    origin_input_CSS: ElementFinder;
    origin_input2_CSS: ElementFinder;
    origin_BCN_CSS: ElementFinder;
    start_date_CSS: ElementFinder;
    end_date_CSS: ElementFinder;
    guests_text_CSS: ElementFinder;
    search_btn_CSS: ElementFinder;
    search_btn2_CSS: ElementFinder;
    origin_LON_CSS: ElementFinder;



constructor()
{
    this.hotel_btn_CSS= element(by.css("nav[aria-label='main navigation'] ul li a[aria-label='Hotels']"));
    this.origin_CSS = element.all(by.css("div[aria-label='Destination input']")).get(0);
    this.origin_input_CSS = element.all(by.css("div[id$='location-smarty-wrapper']  input[aria-label='Destination input']")).get(0);
    this.origin_input2_CSS = element.all(by.css("div[id$='location-smarty-wrapper']  input[aria-label='Destination input']")).get(1);
    this.origin_BCN_CSS = element(by.css("div ul li[aria-label='Barcelona, Spain - Barcelona-El Prat']"));
    this.start_date_CSS= element(by.css("div[id$='formGrid'] .startDate"));
    this.end_date_CSS= element(by.css("div[id$='formGridd'] div[id$='dateRangeInput-display-end-inner']"));
    this.guests_text_CSS= element.all(by.css("button[id$='roomsGuestsDropdown-trigger'] span[aria-label='1 room, 2 guests']")).get(0);
    this.search_btn_CSS= element(by.css("button[aria-label='Search hotels']"));
    this.search_btn2_CSS= element(by.css("div[title='Search hotels']"));
    this.origin_LON_CSS= element(by.css("div ul li[aria-label='London, United Kingdom - All airports']"));
}

}