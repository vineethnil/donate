"use strict";function MainCtrl(a,b,c){a.myTotal=1e3,a.current=500,a.donatioLeft=a.myTotal-a.current,a.numberOfDonation=42,a.setDonation=function(){a.progressionPercentage()},a.progressionPercentage=function(){a.getPercentage=a.current/a.myTotal*100},a.addDonation=function(){a.current<1e3&&(a.numberOfDonation=a.numberOfDonation+1,a.current=a.current+a.newDonation,a.donatioLeft=a.myTotal-a.current,a.progressionPercentage())},a.saveClicked=function(){alert("Saved!")},a.share=function(){},a.myModel={Url:" You can also Donated",Name:"Ya I Donated",ImageUrl:""}}angular.module("donateApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angulike"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]).run(["$rootScope",function(a){a.facebookAppId="[FacebookAppId]"}]),angular.module("donateApp").controller("MainCtrl",MainCtrl),MainCtrl.$inject=["$scope","$location","$window"],angular.module("donateApp").run(["$templateCache",function(a){a.put("views/main.html",'<div ng-init="setDonation()" ng-controller="MainCtrl">\n   <div id="mainContainer">\n      <div id="innerContainer">\n        <div id="topContainer">\n             <div id="content">${{donatioLeft}} still needed for this project</div>\n        </div>\n\n        <div id="middleContainer">\n            <div id="progressiveBar">\n                <div id="bar" class="bar" style="width: {{getPercentage}}%"></div>\n            </div>\n            <div id="donateText">\n                <span style="color:red;">Only 3 Days left</span> to fund this project.\n            </div>\n            <div id="donateText"><p>Join the {{numberOfDonation}} other donor who have already supported this project. Every dollar helps</p></div>\n\n\n             <div id="donationAmount" >\n                 <div class="column">\n                            <div class="input-group input-group-lg" style="width:125px;">\n                              <span class="input-group-addon" id="sizing-addon1">$</span>\n                              <input ng-model="newDonation" type="number" class="form-control" aria-describedby="sizing-addon1">\n                            </div>\n                 </div>\n                 <div class="column">\n                   <button ng-click="addDonation()" ng-disabled="!newDonation" type="button" style="background-color:#00b33c;" class="btn btn-lg">Give Now</button>\n                 </div>\n             </div>\n\n             <div style="color:blue;font-size:1.2em;text-align:left;"><i><a href="">Why give $50?</a></i></div>\n        </div> \n\n         <div id="bottomContainer" >\n\n         <div id="donationShare" >\n                     <div class="column">\n                        <button ng-click="saveClicked()" type="button" style="background-color:#fff;border-style: solid ;  border-color: #e0e0d1;" class="btn btn-lg">Save for Later</button>\n                     </div>\n                   <div class="column" ">\n                    <button  tweet="myModel.Name" tweet-url="myModel.Url"  id="share_button" style="background-color:#fff;border-style: solid ;  border-color: #e0e0d1;" class="btn btn-lg">Tell your Frineds</button>\n                   </div>\n                 </div>\n         </div>   \n        \n\n   </div>\n\n\n\n\n   \n   </div>\n</div>')}]);