// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Deaths", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Deaths', {
    date_of_birth: function(frm) {
        if (frm.doc.date_of_birth && frm.doc.date_of_death) {
            var deathDate = new Date(frm.doc.date_of_death);
            var birthDate = new Date(frm.doc.date_of_birth);

            // Calculate age in years
            var age = deathDate.getFullYear() - birthDate.getFullYear();
            var m = deathDate.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && deathDate.getDate() < birthDate.getDate())) {
                age--;
            }
           // frm.set_value("age", age);
            var totalMonths = age * 12 + (deathDate.getMonth() - birthDate.getMonth());
            if (deathDate.getDate() < birthDate.getDate()) {
                totalMonths--;  
            }
            frm.set_value("age_in_months", totalMonths);
        }
    },
    date_of_death: function(frm) {
        frm.trigger('date_of_birth'); 
    }
});
