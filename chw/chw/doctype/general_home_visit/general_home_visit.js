// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("General Home Visit", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('General Home Visit', {
	refresh(frm) {
		if (frm.doc.hhid == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __(' 1. Add details of new members (if any) of the households and remove the members (if migrated out). <br> 2. Assess the health status of each family member since the last visit. <br> 3. Create awareness on the health care facility (both our centre and public health facility). <br> 4. General observation such as cleanliness and safe drinking water etc.')
                        });
	                    
	                }
	},
	validate(frm){
	    
	    frappe.msgprint(__('Document updated successfully'));
	    
	}
})