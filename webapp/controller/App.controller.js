sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
 ], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("eu.reitmayer.openui5.walkthrough.controller.App", {
        onShowHello : function () {
           MessageToast.show("Hello World!");
        }
     });
 });