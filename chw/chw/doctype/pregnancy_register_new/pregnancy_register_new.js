// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("pregnancy Register new", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Pregnancy Registration', {
	refresh(frm) {
	                if (frm.doc.familymember_id == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __(' 1. Educate the pregnant woman regarding the documents for registering pregnancy in the PHC or AWC <br> 2. Register the pregnancy with PHC (ASHA/ANM) and AWC. <br> 3. Confirm the Last Menstrual Period (LMP) and calculate estimated date of delivery (EDD). <br> 4. History taking based upon identify high risk <br> 5. Obtain the Thayi Card from ASHA or ANM and keep it safe. <iframe width="300" height="215" src="https://www.youtube.com/embed/hANzpHKqiss?&autoplay=0"frameborder="0" allowfullscreen>></iframe>')
                        });
	                    
	                }
                        	   

	},
	after_save(frm) {
        let nextDate = frappe.datetime.add_days(frm.doc.date_of_last_menstrual_period, frm.doc.routine);
        let edd = frm.doc.estimated_date_of_delivery;
        let i = 8156;

        while (nextDate <= edd) {
            frappe.call({
                method: "frappe.client.insert",
                args: {
                    doc: {
                        doctype: "ANC visit",
                        date: frappe.datetime.convert_to_user_tz(nextDate),
                        status: "Scheduled",
                        familymember_id: frm.doc.familymember_id
                    }
                },
                // callback: function(r) {
                //     if (r.message) {
                //       // Success! The new record's name is in r.message
                //       frappe.show_alert("New record created:", r.message);
                //     }
                //   }
                });
                frappe.call({
                method: "frappe.client.insert",
                args: {
                    doc: {
                        doctype: "ToDo",
                        date: frappe.datetime.convert_to_user_tz(nextDate),
                        status: "Open",
                        reference_name: i,
                        reference_type: "ANC visit",
                        priority: "High",
                        description: frm.doc.first_name
                    }
                },
                // callback: function(r) {
                //     if (r.message) {
                //       // Success! The new record's name is in r.message
                //       frappe.show_alert("New record created:", r.message);
                //     }
                //   }
                });
            nextDate = frappe.datetime.add_days(nextDate, frm.doc.routine);
            i++;
        }
    },

	date_of_last_menstrual_period: function (frm) {
					frm.set_value("estimated_date_of_delivery", frappe.datetime.add_days(frm.doc.date_of_last_menstrual_period, 290));
	},
	high_risk: function (frm) {
	    
	    if (frm.doc.high_risk == 'Yes') {
            frm.set_value('routine', '30');
        }
        if (frm.doc.high_risk == 'No') {
            frm.set_value('routine', '60');
        }
	},
	any_stillbirth: function (frm) {
	    let total=frm.doc.number_of_living_children+frm.doc.number_of_children_died+frm.doc.number_of_abortionmiscarriages+frm.doc.any_stillbirth
	    frm.set_value("gravida", total);
	}
})
