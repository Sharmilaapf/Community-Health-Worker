// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("ANC Vist", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('ANC Visit', {
	refresh(frm) {
		if (frm.doc.familymember_id == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __(' 1. Educate the pregnant woman regarding the documents for registering pregnancy in the PHC or AWC <br> 2. Register the pregnancy with PHC (ASHA/ANM) and AWC. <br> 3. Confirm the Last Menstrual Period (LMP) and calculate estimated date of delivery (EDD). <br> 4. History taking based upon identify high risk <br> 5. Obtain the Thayi Card from ASHA or ANM and keep it safe. <iframe width="300" height="215" src="https://www.youtube.com/embed/hANzpHKqiss?&autoplay=0"frameborder="0" allowfullscreen>></iframe>')
                        });
	                    
	                }
	},
	validate(frm){
	    
	    frappe.msgprint(__('Document updated successfully'));
	    
	}
});
