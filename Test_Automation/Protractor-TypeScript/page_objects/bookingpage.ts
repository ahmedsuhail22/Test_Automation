import { ElementFinder,element,by } from "protractor";
import {browser} from 'protractor';


export class bookingpage
{

    hotelname_text_CSS: ElementFinder;
    room_text_CSS: ElementFinder;



constructor()
{
    this.hotelname_text_CSS= element.all(by.css("div h2")).get(0);
    this.room_text_CSS= element.all(by.css("#hotelsummary__nameanddates p")).get(0);
}

}