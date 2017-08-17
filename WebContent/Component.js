sap.ui.define([
               "sap/ui/core/UIComponent",    
               "sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel",
               ], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("nfa.general.Component", {
		metadata : {
                 manifest: "json"  
		},
		init : function () {
			
			UIComponent.prototype.init.apply(this, arguments);
		
			   
			  
			   var oConfig = this.getMetadata().getConfig();  
			   var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;  
			   
			  
			   var i18nModel = new ResourceModel({
				   bundleName: "nfa.general.i18n.messageBundle"
			   });
			   this.setModel(i18nModel, "i18n"); 
			
				this.getRouter().initialize();	
		}
	});
});