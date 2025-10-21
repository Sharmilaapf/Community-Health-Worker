// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Checkbox Test", {
// 	refresh(frm) {

// 	},
// });
// frappe.ui.form.on('Checkbox Test', {
// 	refresh(frm) {
// Console.log("check 1 is :",frm.doc.is_earth_flat);
// Console.log("check 2 is :",frm.doc.is_the_sun_a_star);
// 	}
// })

frappe.ui.form.on('Checkbox Test', {
    refresh: function(frm) {
        var Countvalue = 0;  // Initialize the variable
        
        var fieldsToCheck = [
            'is_earth_flat',
            'is_the_sun_a_star',
        ];
        
        for (var i = 0; i < fieldsToCheck.length; i++) {
            var field = fieldsToCheck[i];
            if (frm.doc[field]) {
                Countvalue += 1;
            }
        }

        console.log("value count:", Countvalue);  // Corrected console.log
    }
});
