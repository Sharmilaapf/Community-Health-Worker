// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Family Member", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Family Member', {
	refresh(frm) {
		// your code here
	},
	date_of_birth: function(frm) {
	    var today = new Date();
        var birthDate = new Date(frm.doc.date_of_birth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        }
	    frm.set_value("age", age);
	    var days = frappe.datetime.get_day_diff( frappe.datetime.nowdate(), frm.doc.date_of_birth);
        frm.set_value("age_in_days", days);
        // Calculate age in months
        var ageInMonths = Math.floor(days / 30.4375); // Average days per month
        frm.set_value("age_in_months", ageInMonths);
	}
})
