sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	return Controller.extend("nfa.general.controller.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
		/*	var sPath = oEvent.getParameter("arguments").invoicePath;
			var sContext = "/" + sPath.split('=').join("/");
			this.getView().bindElement({
				path: sContext,
				model: "invoice"
			});
			*/
			/*var requestHeaders = {"accept": "application/json;odata=verbose" };
		$.ajax({
			url: "https://zing/hzlmetals.com/sites/apps/Bank%20NFA%20QA/_api/web/lists/getbytitle('Bank%20NFA')/items", 
			// url:"/proxy/http/zing/hzlmetals.com/sites/apps/Bank NFA QA/_api/web/lists/getbytitle('Bank NFA')/items",
			//url:"https://zing/hzlmetals.com/sites/apps/Bank%20NFA%20QA/_api/web/lists/getbytitle('Bank%20NFA')/items",
			//url:"proxy/http/zing/hzlmetals.com/sites/apps/Bank%20NFA%20QA/_api/web/lists/getbytitle('Bank%20NFA')/items"
			async:false,
			contentType:"application/json;odata=verbose",
			headers:requestHeaders,
			success:onSuccess,
			error:onError
			
		});
		*/
			
		function onSuccess(data){
			console.log(data)
		}
		
		function onError(error){
			console.log(error)
		}
			
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Master", true);
			}
		}
	});
});