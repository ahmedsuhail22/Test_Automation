"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class hotelresults {
    constructor() {
        this.hotel_sleep_CSS = protractor_1.element(protractor_1.by.css("button[title='Sleep & Fly'] span"));
        this.details_text_CSS = protractor_1.element(protractor_1.by.cssContainingText(".Hotels-Results-InlineDetailTabs .active .label", 'Details'));
        this.image_exist_CSS = protractor_1.element.all(protractor_1.by.css("img[alt='Sleep & Fly Guestroom']")).get(0);
        this.map_tab_CSS = protractor_1.element.all(protractor_1.by.css(".Hotels-Results-InlineDetailTabs div div[aria-controls$='mapContainer']")).get(0);
        this.map_CSS = protractor_1.element(protractor_1.by.css('.Hotels-Results-InlineMap .map'));
        this.reviews_tab_CSS = protractor_1.element.all(protractor_1.by.css(".Hotels-Results-InlineDetailTabs div div[aria-controls$='reviewContainer']")).get(0);
        this.reviews_text_CSS = protractor_1.element(protractor_1.by.css(".trustYou .note"));
        this.rates_tab_CSS = protractor_1.element.all(protractor_1.by.css(".Hotels-Results-InlineDetailTabs div div[aria-controls$='ratesContainer']")).get(0);
        this.rates_content_CSS = protractor_1.element(protractor_1.by.css("table thead"));
        this.gotomap_btn_CSS = protractor_1.element(protractor_1.by.css(".filterList .showMap .text"));
        this.map_area_CSS = protractor_1.element(protractor_1.by.css("div[class='Hotels-Results-HotelRightRailMap open']"));
        this.hotel_marker_CSS = protractor_1.element(protractor_1.by.css(".Hotels-Results-HotelRightRailMap div[data-after-content='$166']"));
        this.close_btn_CSS = protractor_1.element.all(protractor_1.by.css("div[aria-label='Close hotel details']")).get(0);
        this.summary_card_text = protractor_1.element(protractor_1.by.css(".summaryCard .summaryCardInfo p"));
        this.viewdeal_btn_CSS = protractor_1.element.all(protractor_1.by.css("div[aria-label='Hotel booking column'] .Button-Orange")).get(0);
        this.close_modal_CSS = protractor_1.element.all(protractor_1.by.css("button[id$=afterclickdialog-close]")).get(1);
        this.dropdown_icon_CSS = protractor_1.element.all(protractor_1.by.css(".providersGrid .Common-Widgets-Dropdown-DropdownDialog .icon")).get(0);
        this.kayak_option_CSS = protractor_1.element(protractor_1.by.css(".open li a[data-name='KAYAK']"));
    }
}
exports.hotelresults = hotelresults;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWxyZXN1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZV9vYmplY3RzL2hvdGVscmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUl0RCxNQUFhLFlBQVk7SUF3QnpCO1FBRUksSUFBSSxDQUFDLGVBQWUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxpREFBaUQsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25ILElBQUksQ0FBQyxlQUFlLEdBQUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hILElBQUksQ0FBQyxPQUFPLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEVBQTRFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkVBQTJFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1SCxJQUFJLENBQUMsaUJBQWlCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZ0JBQWdCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQztRQUMzRyxJQUFJLENBQUMsYUFBYSxHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsaUJBQWlCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLGdCQUFnQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFFNUUsQ0FBQztDQUVBO0FBL0NELG9DQStDQyJ9