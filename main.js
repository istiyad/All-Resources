// elementor popup close after clicking menu
jQuery( document ).ready(function($){
	$(document).on('click','.elementor-location-popup a', function(event){
		elementorProFrontend.modules.popup.closePopup( {}, event);
	})
});
