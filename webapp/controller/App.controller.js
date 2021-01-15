sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("eu.reitmayer.openui5.walkthrough.controller.App", {
        onShowHello : function () {
           // show a native JavaScript alert
           alert("Hello World");
        }
     });
 });