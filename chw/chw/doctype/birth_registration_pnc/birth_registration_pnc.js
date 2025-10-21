// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Birth Registration PNC", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Birth Registration PNC', {
	refresh(frm) {
		if (frm.doc.familymember_id == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __(' 1. Register the pregnancy outcome (Birth registration). <br> 2. Creating awareness about the identification of postpartum complication. <br> 3. Creating awareness about the newborn care at home. <br> 4. Identification of pre-term new-born children (Less than 37 weeks of conception) and very low birth weight (less than 2000 gms). <iframe width="300" height="215" src="https://www.youtube.com/embed/hANzpHKqiss?&autoplay=0"frameborder="0" allowfullscreen>></iframe>')
                        });
	                    
	                }
	},
	validate(frm){
	    
	    frappe.msgprint(__('Document updated successfully'));
	    
	}
});
frappe.ui.form.on('Birth Registration PNC', {
	refresh(frm) {
        	
},
	after_save(frm) {
	    if(frm.doc.delivery_outcome == 'Live Birth'){
	    	frappe.call({
          method: "frappe.client.insert",
          args: {
            doc: {
              doctype: "Family member",
              first_name: frm.doc.name_of_child,
              date_of_birth: frm.doc.date_of_birth,
              hhid:frm.doc.hhid,
              gender:frm.doc.gender,
              status:'Active',
              village:frm.doc.village
            }
          },
        //   callback: function(r) {
        //     if (r.message) {
        //       // Success! The new record's name is in r.message
        //       frappe.show_alert("New record created:", r.message);
        //     }
        //   }
        });
        frappe.msgprint(__('New born is added successfully'));
	   }
	}
})