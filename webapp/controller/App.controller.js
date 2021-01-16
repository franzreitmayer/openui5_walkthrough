sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("eu.reitmayer.openui5.walkthrough.controller.App", {
        onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
    });
});