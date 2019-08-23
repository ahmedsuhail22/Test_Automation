"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    specs: ['testspec.js'],
    framework: 'mocha',
    mochaOpts: {
        reporter: "spec",
        slow: 3000,
    },
    onPrepare: function () {
        var width = 1500;
        var height = 900;
        protractor_1.browser.driver.manage().window().setSize(width, height);
    }
};
exports.timeouts = {
    max_timeout: 10000,
    mid_timeout: 5000,
    min_timeout: 2000,
    oneSec_timeout: 1000
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQW1DO0FBSXhCLFFBQUEsTUFBTSxHQUFXO0lBR3hCLGFBQWEsRUFBRSxJQUFJO0lBRWpCLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN0QixTQUFTLEVBQUUsT0FBTztJQU90QixTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixJQUFJLEVBQUUsSUFBSTtLQUVYO0lBRUMsU0FBUyxFQUFFO1FBR1AsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLFFBQVEsR0FBRTtJQUNqQixXQUFXLEVBQUcsS0FBSztJQUNuQixXQUFXLEVBQUcsSUFBSTtJQUNsQixXQUFXLEVBQUcsSUFBSTtJQUNsQixjQUFjLEVBQUMsSUFBSTtDQUNwQixDQUFBIn0=