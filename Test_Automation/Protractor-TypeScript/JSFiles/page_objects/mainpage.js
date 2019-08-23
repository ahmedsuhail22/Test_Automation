"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class mainpage {
    constructor() {
        this.hotel_btn_CSS = protractor_1.element(protractor_1.by.css("nav[aria-label='main navigation'] ul li a[aria-label='Hotels']"));
        this.origin_CSS = protractor_1.element.all(protractor_1.by.css("div[aria-label='Destination input']")).get(0);
        this.origin_input_CSS = protractor_1.element.all(protractor_1.by.css("div[id$='location-smarty-wrapper']  input[aria-label='Destination input']")).get(0);
        this.origin_input2_CSS = protractor_1.element.all(protractor_1.by.css("div[id$='location-smarty-wrapper']  input[aria-label='Destination input']")).get(1);
        this.origin_BCN_CSS = protractor_1.element(protractor_1.by.css("div ul li[aria-label='Barcelona, Spain - Barcelona-El Prat']"));
        this.start_date_CSS = protractor_1.element(protractor_1.by.css("div[id$='formGrid'] .startDate"));
        this.end_date_CSS = protractor_1.element(protractor_1.by.css("div[id$='formGridd'] div[id$='dateRangeInput-display-end-inner']"));
        this.guests_text_CSS = protractor_1.element.all(protractor_1.by.css("button[id$='roomsGuestsDropdown-trigger'] span[aria-label='1 room, 2 guests']")).get(0);
        this.search_btn_CSS = protractor_1.element(protractor_1.by.css("button[aria-label='Search hotels']"));
        this.search_btn2_CSS = protractor_1.element(protractor_1.by.css("div[title='Search hotels']"));
        this.origin_LON_CSS = protractor_1.element(protractor_1.by.css("div ul li[aria-label='London, United Kingdom - All airports']"));
    }
}
exports.mainpage = mainpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlX29iamVjdHMvbWFpbnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFJdEQsTUFBYSxRQUFRO0lBaUJyQjtRQUVJLElBQUksQ0FBQyxhQUFhLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJFQUEyRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxjQUFjLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLGVBQWUsR0FBRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtFQUErRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEksSUFBSSxDQUFDLGNBQWMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxlQUFlLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQztDQUVBO0FBaENELDRCQWdDQyJ9