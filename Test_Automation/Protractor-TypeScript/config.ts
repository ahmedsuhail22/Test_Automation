import {Config} from 'protractor';
import {browser} from 'protractor';



export let config: Config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    //specs: ['C:/Users/Ahmad Sohail/ProtractorTests/apps/Core/Institution/institution.js'],
      specs: ['testspec.js'],
      framework: 'mocha' ,

  // jasmineNodeOpts: {
   // defaultTimeoutInterval: 150000,
//showColors: true,
  //print: function() {}
  //},
  mochaOpts: {
    reporter: "spec",
    slow: 3000,
    
  },
   //allScriptsTimeout:200000,
    onPrepare: function() {
        //var jasmineReporters = require('C:/Users/Ahmad Sohail/ProtractorTests/node_modules/jasmine-reporters');
       // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true));
        var width = 1500;
        var height = 900;
        browser.driver.manage().window().setSize(width, height);
   }
 };

 exports.timeouts ={
  max_timeout : 10000,
  mid_timeout : 5000,
  min_timeout : 2000,
  oneSec_timeout:1000
}