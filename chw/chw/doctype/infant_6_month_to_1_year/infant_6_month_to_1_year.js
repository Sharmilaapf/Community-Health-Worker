// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Infant 6 month to 1 year", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Infant 6 month to 1 year', {
	refresh(frm) {
		if (frm.doc.first_name == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __(' 1. Importance of spacing and adapting different family planning methods based upon their choice. <br> 2. Identification of any health issues in child. <br> 3. Awareness to the mother and family about the child immunization (schedule and session sites). <br> 4. Proper nutrition and complementary food (energy rich and local available) for young child. <br> 5. Mobilize the children for weighing once in a month and once in three months for the height. <br> 6. Measure the height and weight of the child during the home visit if not done regularly. <br> 7. Plotting of WHO growth monitoring chart or recording in Unnati. <iframe width="300" height="215" src="https://www.youtube.com/embed/hANzpHKqiss?&autoplay=0"frameborder="0" allowfullscreen>></iframe>')
                        });
	                    
	                }
	},
	validate(frm){
	    
	    frappe.msgprint(__('Document updated successfully'));
	    
	}
});