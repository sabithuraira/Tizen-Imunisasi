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
        this.bindEvents();
    },
    
    bindEvents: function bindEvents() {
        'use strict';

        var child_date=document.getElementById('child_date');
        var self = this;

        child_date.addEventListener('input',function onInput(){
        	self.enteredValue = this.value;
        	self.generateResult();
        });
    },
    strDate: function strDate(data){
    	var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
    	
    	return data.getDate()+" "+monthNames[data.getMonth()]+" "+data.getFullYear();
    },
    generateResult: function generateResult(){
    	'use strict';
    	
        var date_parts = this.enteredValue.split('-');
        var birth_date=new Date(parseInt(date_parts[0]),parseInt(date_parts[1])-1, parseInt(date_parts[2]));
        var body_file=document.getElementById("item-id");
        
        var imun_date=["Saat Lahir"];
        var imun_item=["Hepatitis B1 dan Polio 0"];
        
        
//        var satu_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+1, birth_date.getDate());
        var dua_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+2, birth_date.getDate());
        var tiga_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+3, birth_date.getDate());
        var empat_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+4, birth_date.getDate());
        var lima_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+5, birth_date.getDate());
        var enam_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+6, birth_date.getDate());
        var tujuh_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+7, birth_date.getDate());

        var sembilan_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+9, birth_date.getDate());
        var sepuluh_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+10, birth_date.getDate());

        var duabelas_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+12, birth_date.getDate());
        var tigabelas_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+13, birth_date.getDate());

        var limabelas_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+15, birth_date.getDate());
        var enambelas_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+16, birth_date.getDate());

        var delapanbelas_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+18, birth_date.getDate());
        var sembilanbelas_bulan=new Date(birth_date.getFullYear(), birth_date.getMonth()+19, birth_date.getDate());

        var dua_tahun=new Date(birth_date.getFullYear()+2, birth_date.getMonth(), birth_date.getDate());
        var empat_tahun=new Date(birth_date.getFullYear()+4, birth_date.getMonth(), birth_date.getDate());
        var sembilan_tahun=new Date(birth_date.getFullYear()+9, birth_date.getMonth(), birth_date.getDate());
        var sepuluh_tahun=new Date(birth_date.getFullYear()+10, birth_date.getMonth(), birth_date.getDate());
        var tujuhbelas_tahun=new Date(birth_date.getFullYear()+17, birth_date.getMonth(), birth_date.getDate());
        var delapanbelas_tahun=new Date(birth_date.getFullYear()+19, birth_date.getMonth(), birth_date.getDate());
      
        //1 - 3 bulan
        imun_date.push("1 - 3 Bulan ("+this.strDate(birth_date)+" - "+this.strDate(tiga_bulan)+")");
        imun_item.push("BCG");

        //2 bulan
        imun_date.push("2 Bulan ("+this.strDate(dua_bulan)+" - "+this.strDate(tiga_bulan)+")");
        imun_item.push("Hepatitis B2, Polio 1, DPT 1, Hib 1, PCV 1 dan Rotavirus 1");

        //3 bulan
        imun_date.push("3 Bulan ("+this.strDate(tiga_bulan)+" - "+this.strDate(empat_bulan)+")");
        imun_item.push("Hepatitis B3, Polio 2, DPT 2 dan Hib 2");

        //4 bulan
        imun_date.push("4 Bulan ("+this.strDate(empat_bulan)+" - "+this.strDate(lima_bulan)+")");
        imun_item.push("Hepatitis B4, Polio 3, DPT 3, Hib 3, PCV 2 dan Rotavirus 2");

        //6 bulan
        imun_date.push("6 Bulan ("+this.strDate(enam_bulan)+" - "+this.strDate(tujuh_bulan)+")");
        imun_item.push("PCV 3 dan Rotavirus 3a");

        //6 bulan - 18 tahun
        imun_date.push("6 Bulan - 18 Tahun ("+this.strDate(enam_bulan)+" - "+this.strDate(delapanbelas_tahun)+")");
        imun_item.push("Influenza, ulangan 1 kali setiap tahun. Vaksin influenza diberikan pada usia lebih dari 6 bulan, diulang setiap tahun. Untuk imunisasi pertama kali (primary immunization) pada anak usia kurang dari 9 tahun diberi dua kali dengan interval minimal 4 minggu. Untuk anak 6-36 bulan, dosis 0,25 mL. Untuk anak usia 36 bulan atau lebih, dosis 0,5 mL");

        //9 bulan
        imun_date.push("9 Bulan ("+this.strDate(sembilan_bulan)+" - "+this.strDate(sepuluh_bulan)+")");
        imun_item.push("Campak 1");

        //12 bulan
        imun_date.push("12 Bulan ("+this.strDate(duabelas_bulan)+" - "+this.strDate(tigabelas_bulan)+")");
        imun_item.push("Japanese encephalitis 1");

        //12 - 15 bulan
        imun_date.push("12 - 15 Bulan ("+this.strDate(duabelas_bulan)+" - "+this.strDate(enambelas_bulan)+")");
        imun_item.push("PCV 4");

        //1 - 18 tahun
        imun_date.push("1 - 18 tahun ("+this.strDate(duabelas_bulan)+" - "+this.strDate(delapanbelas_tahun)+")");
        imun_item.push("Varisela. Vaksin varisela diberikan setelah usia 12 bulan, terbaik pada usia sebelum masuk sekolah dasar. Apabila diberikan pada usia lebih dari 13 tahun, perlu 2 dosis dengan interval minimal 4 minggu");
        
        //15 bulan
        imun_date.push("15 Bulan ("+this.strDate(limabelas_bulan)+" - "+this.strDate(enambelas_bulan)+")");
        imun_item.push("MMR 1");
        
        //15 - 18 bulan
        imun_date.push("15 - 18 Bulan ("+this.strDate(limabelas_bulan)+" - "+this.strDate(sembilanbelas_bulan)+")");
        imun_item.push("Hib 4");

        //18 bulan
        imun_date.push("18 Bulan ("+this.strDate(delapanbelas_bulan)+" - "+this.strDate(sembilanbelas_bulan)+")");
        imun_item.push("Polio 4, DPT 4 dan Campak 2");

        //2 - 3 tahun
        imun_date.push("2 - 3 tahun ("+this.strDate(dua_tahun)+" - "+this.strDate(empat_tahun)+")");
        imun_item.push("Japanese encephalitis 2");
        
        //2 - 18 tahun
        imun_date.push("2 - 18 tahun ("+this.strDate(dua_tahun)+" - "+this.strDate(delapanbelas_tahun)+")");
        imun_item.push("Tifoid (Ulangan setiap 3 tahun) dan Hepatitis A (2 kali interval 6 -12 bulan)");

        //9 - 18 tahun
        imun_date.push("9 - 16 tahun ("+this.strDate(sembilan_tahun)+" - "+this.strDate(tujuhbelas_tahun)+")");
        imun_item.push("Dengue, 3 kali interval 6 bulan");

        //10 - 18 tahun
        imun_date.push("10 - 18 tahun ("+this.strDate(sepuluh_tahun)+" - "+this.strDate(delapanbelas_tahun)+")");
        imun_item.push("HPV, 2 atau 3 kali");
        
        var str_list="";
        
    	for(var i=0;i<imun_date.length;++i){
    		str_list+="<tr><td>"+imun_date[i]+"</td><td>"+imun_item[i]+"</td><tr>";
    	}
    	
    	body_file.innerHTML=str_list;
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
