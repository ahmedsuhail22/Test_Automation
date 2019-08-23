"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class bookingpage {
    constructor() {
        this.hotelname_text_CSS = protractor_1.element.all(protractor_1.by.css("div h2")).get(0);
        this.room_text_CSS = protractor_1.element.all(protractor_1.by.css("#hotelsummary__nameanddates p")).get(0);
    }
}
exports.bookingpage = bookingpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZ3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlX29iamVjdHMvYm9va2luZ3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFJdEQsTUFBYSxXQUFXO0lBUXhCO1FBRUksSUFBSSxDQUFDLGtCQUFrQixHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztDQUVBO0FBZEQsa0NBY0MifQ==