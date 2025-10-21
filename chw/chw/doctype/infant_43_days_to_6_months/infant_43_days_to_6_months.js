// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Infant 43 days to 6 months", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Infant 43 days to 6 months', {
    refresh(frm) {
        if (!frm.doc.child_last_weighed) {
            frm.set_value('child_last_weighed', frappe.datetime.now_datetime());
        }
        if (!frm.doc.child_last_immunised) {
            frm.set_value('child_last_immunised', frappe.datetime.now_datetime());
        }
        if (!frm.doc.previous_length_measured) {
            frm.set_value('previous_length_measured', frappe.datetime.now_datetime());
        }
    }
});
frappe.ui.form.on('Infant 43 days to 6 months', {
	refresh(frm) {
		if (frm.doc.first_name == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __('1. Aware about the benefits of breast feeding, and its position, frequency of feeding and problems face by mother during breast feeding and solutions for that. <br> 2. Importance of spacing and adapting different family planning methods based upon their choice. <br> 3.	Identification of any health issues in mother. <br>4. Consumption of IFA and Calcium till 6 months after delivery (180 days). <br> 5. Register mother and child appropriately, if not done before. <br> 6.	Awareness to the mother and family about the child immunization (schedule and session sites). <br> 7. Support for registration in AWC for take home ration if not done before. <br> 8.	Mobilize the children for weighing once in a month and once in three months for the height. <br>9.	Measure the height and weight of the child during the home visit if not done regularly.<br> 10.	Plotting of WHO growth monitoring chart or recording in Unnati. <br><iframe width="300" height="215" src="https://www.youtube.com/embed/hANzpHKqiss?&autoplay=0"frameborder="0" allowfullscreen>></iframe>')
                        });
	                    
	                }
	},
	validate(frm){
	    
	    frappe.msgprint(__('Document updated successfully'));
	    
	}
});

