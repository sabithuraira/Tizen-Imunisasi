(function() {
	/**
	 * Back key event handler
	 */
	window.addEventListener('tizenhwkey', function(ev) {
		if (ev.keyName === "back") {
			var activePopup = document.querySelector('.ui-popup-active'),
				page = document.getElementsByClassName('ui-page-active')[0],
				pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());


var app = {
    init: function init() {
        'use strict';
        
        this.enteredValue="";
    	
        this.child_date=document.getElementById('child_date');
        this.body_file=document.getElementById("item-id");
        this.bindEvents();
    },
    
    bindEvents: function bindEvents() {
        'use strict';

        this.child_date=document.getElementById('child_date');
        this.body_file=document.getElementById("item-id");
        var self = this;

        child_date.addEventListener('change',function onChange(){
        	self.enteredValue = this.value;
        	self.generateResult();
        });
    },
    generateResult: function refreshResult(){
    	'use strict';
    	
    	console.log(this.enteredValue);
        var date_parts = this.enteredValue.split('-');
        
        var imun_date=new Date(date_parts[0],date_parts[1], date_parts[2]);
    	
//    	for(var i=0;i< this.datas.length;++i){
//    	   var row_unit=document.getElementById('result_file'+i);
//    	   row_unit.innerHTML = this.enteredValue * this.unit[this.selectedUnit]  /  this.unit[i] ;
//    	}
    },

//    exit: function exit() {
//        'use strict';
//
//        try {
//            tizen.application.getCurrentApplication().exit();
//        } catch (error) {
//            console.error(error);
//        }
//    },
//    onLowBattery: function onLowBattery() {
//        'use strict';
//
//        this.exit();
//    }
};
