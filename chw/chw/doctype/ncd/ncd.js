// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("NCD", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('NCD', {
    refresh(frm) {
    },
})

// frappe.ui.form.on('Hypertension', {
// 	refresh(frm) {
// 		// your code here
// },
//     bp_systolic: function (frm) {
//         let systolic = frm.doc.bp_systolic;
//         let diastolic = frm.doc.bp_diastolic;
//         console.log("Systolic Value:", frm.doc.bp_systolic);
//         console.log("Diastolic Value:", frm.doc.bp_diastolic);
//         // frm.set_value("blood_pressure", `${systolic}/${diastolic}`); 
//         if (systolic < 120 && diastolic < 80) {
//             console.log("working1");
//             frm.set_value("risk_level", "Normal");
//         } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
//             console.log("working2");
//             frm.set_value("risk_level", "Elevated"); 
//         } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
//             console.log("working3");
//             frm.set_value("risk_level", "pre-hypertensive (Low risk)"); 
//         } else if (systolic >= 140 || diastolic >= 90) {
//             console.log("working4");
//             frm.set_value("risk_level", "stage 1(High risk)"); 
//         } else if (systolic > 180 || diastolic > 120) {
//             console.log("working5");
//             frm.set_value("risk_level", "stage II (High risk)");
//         } else {
//         }

//         //frm.refresh_field("blood_pressure"); 
//         frm.refresh_field("risk_level"); 
//     }

// })

// frappe.ui.form.on('Hypertension', {
//     refresh(frm) {
//     },
// // bp_systolic: function (frm) {
// //         // frm.fields_dict.bp_systolic.$input.off("input").on("input", () => {
// //         //     console.log("bp_systolic changed"); // Just log a message
// //         //     frm.set_value("blood_pressure", frm.doc.bp_systolic); // Set directly
// //         //     frm.refresh_field("blood_pressure");
// //         // });
// //     },
//     bp_systolic: function (frm) {
   
//     const systolic = frm.doc.bp_systolic;   
//     const diastolic = frm.doc.bp_diastolic;
//     let riskLevel = ""; 

// if (systolic < 120 && diastolic < 80) {
// console.log("working1");
//             // riskLevel = "Normal";
//                     frm.set_value("risk_level", "Normal"); 

//         } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
// riskLevel = "Elevated";console.log("working2");
//         frm.set_value("risk_level", "Elevated"); 

//         } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
//             riskLevel = "pre-hypertensive (Low risk)";
//             console.log("working3");
//         frm.set_value("risk_level", "pre-hypertensive (Low risk)"); 

//         } else if (systolic >= 140 || diastolic >= 90) {
//             riskLevel = "stage 1(High risk)";
//             console.log("working4");
//         frm.set_value("risk_level", riskLevel); 

//         } else if (systolic > 180 || diastolic > 120) {
//             riskLevel = "stage II (High risk)";
//             console.log("working5");
//       // frm.set_value("risk_level", riskLevel); 

//         } else {
//         }

//         //frm.set_value("risk_level", riskLevel); 

//         frm.refresh_field("blood_pressure");
//         frm.refresh_field("risk_level");
//     },
// // calculate_and_set_bp_risk: function(frm) { 
// //         const systolic = frm.doc.bp_systolic;
// //         const diastolic = frm.doc.bp_diastolic;
// //         frm.set_value("blood_pressure", `${systolic}/${diastolic}`);
// // console.log(`${systolic}/${diastolic}`)

// //         let riskLevel = ""; 

// //         if (systolic < 120 && diastolic < 80) {
// //             riskLevel = "Normal";
// //         } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
// //             riskLevel = "Elevated";
// //         } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
// //             riskLevel = "pre-hypertensive (Low risk)";
// //         } else if (systolic >= 140 || diastolic >= 90) {
// //             riskLevel = "stage 1(High risk)";
// //         } else if (systolic > 180 || diastolic > 120) {
// //             riskLevel = "stage II (High risk)";
// //         } else {
// //             riskLevel = "Unable to determine risk level";
// //         }

// //         frm.set_value("risk_level", riskLevel); 

// //         frm.refresh_field("blood_pressure");
// //         frm.refresh_field("risk_level");
// //     }
// });
// frappe.ui.form.on('Hypertension', {
//     refresh(frm) {
//         // You can add refresh logic here if needed
//     },
//     bp_systolic: function (frm) {
//         frm.fields_dict.bp_systolic.$input.off("input").on("input", () => { // Corrected: Remove previous handlers
//             this.calculate_and_set_bp_risk(frm);
//         });
//     },
//     bp_diastolic: function (frm) {
//         frm.fields_dict.bp_diastolic.$input.off("input").on("input", () => { // Corrected: Remove previous handlers
//             this.calculate_and_set_bp_risk(frm);
//         });
//     },

//     calculate_and_set_bp_risk: function (frm) {
//         const systolic = frm.doc.bp_systolic;
//         const diastolic = frm.doc.bp_diastolic;
// console.log(diastolic)
//         if (systolic === undefined || diastolic === undefined ) {
//             frm.set_value("blood_pressure", "");
//             frm.set_value("risk_level", "");
//             return;
//         }

//         frm.set_value("blood_pressure", `${systolic}/${diastolic}`);

//         let riskLevel = "";

//         if (systolic < 120 && diastolic < 80) {
//             riskLevel = "Normal";
//         } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
//             riskLevel = "Elevated";
//         } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
//             riskLevel = "pre-hypertensive (Low risk)";
//         } else if (systolic >= 140 || diastolic >= 90) {
//             riskLevel = "stage 1(High risk)";
//         } else if (systolic > 180 || diastolic > 120) {
//             riskLevel = "stage II (High risk)";
//         } else {
//             riskLevel = "Unable to determine risk level";
//         }

//         frm.set_value("risk_level", riskLevel);

//         frm.refresh_field("blood_pressure");
//         frm.refresh_field("risk_level");
//     }
// });
// frappe.ui.form.on('Hypertension', {
//     refresh(frm) {
//     },
//  bp_systolic: function (frm) {
//         let systolic = frm.doc.bp_systolic || 0;  // Default to 0 if undefined
//         let diastolic = frm.doc.bp_diastolic || 0; //
//         // if (systolic === undefined || diastolic === undefined || isNaN(systolic) || isNaN(diastolic)) {
//         //     frm.set_value("blood_pressure", "");
//         //     frm.set_value("risk_level", "");
//         //     return;
// // }
//         console.log("Systolic Value:", frm.doc.bp_systolic);
//         console.log("Diastolic Value:", frm.doc.bp_diastolic);

//                       console.log("working1",frm.doc.bp_systolic);

//       // frm.set_value("blood_pressure", `${systolic}/${diastolic}`); // Template literals are cleaner

//         if (systolic < 120 && diastolic < 80) {
//                       console.log("working1");

//           // frm.set_value("risk_level", "Normal");
//         } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
//                                   console.log("working2");

//             //frm.set_value("risk_level", "Elevated");
//         } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
//                                   console.log("working3");

//             //frm.set_value("risk_level", "pre-hypertensive (Low risk)");
//         } else if (systolic >= 140 || diastolic >= 90) {
//                                   console.log("working4");

//             //frm.set_value("risk_level", "stage 1(High risk)");
//         } else if (systolic > 180 || diastolic > 120) { 
//                                   console.log("working5");

//           // frm.set_value("risk_level", "stage II (High risk)");
//         } else {
//           // frm.set_value("risk_level", "Unable to determine risk level"); 
//         }

//       //  frm.refresh_field("blood_pressure"); 
//         frm.refresh_field("risk_level");
//     }
// })




frappe.ui.form.on('Hypertension',{
	refresh(frm) {
		// your code here
},
// bp_systolic: function (frm,cdt, cdn) {
//     let item = locals[cdt][cdn];
//         let systolic = item.bp_systolic;
//         let diastolic = item.bp_diastolic;
//         console.log("Systolic Value:", systolic);
//         console.log("Diastolic Value:", systolic);
//         // frm.set_value("blood_pressure", `${systolic}/${diastolic}`); 
//         if (systolic < 120 && diastolic < 80) {
//             console.log("working1");
//         frm.set_value("risk_level", "Normal"); // Correct: "risk_level" (string)
//         } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
//             console.log("working2");
//             frm.set_value(item.risk_level, "Elevated"); 
//         } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
//             console.log("working3");
//             frm.set_value("risk_level", "pre-hypertensive (Low risk)"); 
//         } else if (systolic >= 140 || diastolic >= 90) {
//             console.log("working4");
//             frm.set_value("risk_level", "stage 1(High risk)"); 
//         } else if (systolic > 180 || diastolic > 120) {
//             console.log("working5");
//             //frm.set_value("risk_level", "stage II (High risk)");
//         } else {
//         }
//             risk_level=item.risk_level; // Set the risk_level on the item object
//             frm.set_value("risk_level", risk_level, cdt, cdn); // Use set_value with cdt and cdn
//             frm.refresh_field("risk_level"); 
//         //frm.refresh_field("blood_pressure"); 
//       // frm.refresh_field("item.risk_level"); 
//     }
 bp_systolic: function(frm, cdt, cdn) {
        const grid = frm.get_docfield("Hypertension").grid; // Replace with your child table field name
        const row = grid.get_row_by_name(cdn); // Get row by name (cdn) - More reliable

        if (row) {
            console.log("bp_systolic:", row.bp_systolic);
            console.log("bp_diastolic:", row.bp_diastolic);

            let risk_level = "";

            if (row.bp_systolic < 120 && row.bp_diastolic < 80) {
                risk_level = "Normal";
            } else if (row.bp_systolic >= 120 && row.bp_systolic <= 129 && row.bp_diastolic < 80) {
                risk_level = "Elevated";
            } else if ((row.bp_systolic >= 130 && row.bp_systolic <= 139) || (row.bp_diastolic >= 80 && row.bp_diastolic <= 89)) {
                risk_level = "pre-hypertensive (Low risk)";
            } else if (row.bp_systolic >= 140 || row.bp_diastolic >= 90) {
                risk_level = "stage 1(High risk)";
            } else if (row.bp_systolic > 180 || row.bp_diastolic > 120) {
                risk_level = "stage II (High risk)";
            } else {
                risk_level = "Unable to determine risk level";
            }

            row.risk_level = risk_level;
            grid.refresh(); // Refresh the grid
        } else {
            console.log("Row not found!");
        }
    },
//   bp_systolic: function (frm, cdt, cdn) {
//         let item = locals[cdt][cdn];

//         if (item && item.bp_systolic !== undefined && item.bp_diastolic !== undefined) {
//             let systolic = item.bp_systolic;
//             let diastolic = item.bp_diastolic;

//             console.log("Systolic Value:", systolic);
//             console.log("Diastolic Value:", diastolic);

//             let risk_level = ""; // Initialize risk_level variable

//             if (systolic < 120 && diastolic < 80) {
//                 console.log("working1");
//                 risk_level = "Normal";
//             } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
//                 console.log("working2");
//                 risk_level = "Elevated";
//             } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
//                 console.log("working3");
//                 risk_level = "pre-hypertensive (Low risk)";
//             } else if (systolic >= 140 || diastolic >= 90) {
//                 console.log("working4");
//                 risk_level = "stage 1(High risk)";
//             } else if (systolic > 180 || diastolic > 120) {
//                 console.log("working5");
//                 risk_level = "stage II (High risk)";
//             } else {
//                 risk_level = "Unable to determine risk level"; // Add a default message
//             }

//             item.risk_level = risk_level; // Set the risk_level on the item object
//             frm.set_value("risk_level", risk_level, cdt, cdn); // Use set_value with cdt and cdn
//             frm.refresh_field("risk_level"); // Refresh the correct field

//         } else {
//             console.warn("Item or bp_systolic/bp_diastolic not found for cdt:", cdt, "cdn:", cdn);
//             // Handle undefined case
//             item.risk_level = ""; // Or a suitable default value
//             frm.set_value("risk_level", "", cdt, cdn);
//             frm.refresh_field("risk_level");
//         }
//     },
//     bp_diastolic: function (frm, cdt, cdn) {
//         let item = locals[cdt][cdn];

//         if (item && item.bp_systolic !== undefined && item.bp_diastolic !== undefined) {
//             let systolic = item.bp_systolic;
//             let diastolic = item.bp_diastolic;

//             console.log("Systolic Value:", systolic);
//             console.log("Diastolic Value:", diastolic);

//             let risk_level = ""; // Initialize risk_level variable

//             if (systolic < 120 && diastolic < 80) {
//                 console.log("working1");
//                 risk_level = "Normal";
//             } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
//                 console.log("working2");
//                 risk_level = "Elevated";
//             } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
//                 console.log("working3");
//                 risk_level = "pre-hypertensive (Low risk)";
//             } else if (systolic >= 140 || diastolic >= 90) {
//                 console.log("working4");
//                 risk_level = "stage 1(High risk)";
//             } else if (systolic > 180 || diastolic > 120) {
//                 console.log("working5");
//                 risk_level = "stage II (High risk)";
//             } else {
//                 risk_level = "Unable to determine risk level"; // Add a default message
//             }

//             item.risk_level = risk_level; // Set the risk_level on the item object
//             frm.set_value("risk_level", risk_level, cdt, cdn); // Use set_value with cdt and cdn
//             frm.refresh_field("risk_level"); // Refresh the correct field

//         } else {
//             console.warn("Item or bp_systolic/bp_diastolic not found for cdt:", cdt, "cdn:", cdn);
//             // Handle undefined case
//             item.risk_level = ""; // Or a suitable default value
//             frm.set_value("risk_level", "", cdt, cdn);
//             frm.refresh_field("risk_level");
//         }
//     }
})
frappe.ui.form.on('NCD', {
	refresh(frm) {
 frm.add_custom_button(__('🌐 Change Language'), () => {
            frappe.prompt([
                {
                    label: 'Select Language',
                    fieldname: 'language',
                    fieldtype: 'Select',
                    options: ['en', 'ta', 'hi'], // add your language codes here
                    reqd: 1
                }
            ], (values) => {
                frappe.call({
                    method: "frappe.client.set_value",
                    args: {
                        doctype: "User",
                        name: frappe.session.user,
                        fieldname: "language",
                        value: values.language
                    },
                    callback: () => {
                        frappe.msgprint('Language set. Reloading...');
                        setTimeout(() => location.reload(), 1000);
                    }
                });
            });
        });		if (frm.doc.first_name == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __(' 1. Identify the person aged above 30 years in the family. <br> 2.	Aware about the ranges or cut off value for blood pressure and random blood sugar. <br> 3. Method of measuring the blood pressure and random blood sugar level. <br> 4.	Take verbal consent for screening. <br> 5. Counsel individual on lifestyle modification for people identified with pre-diabetic and pre-hypertensive stages. <br> 6. Refer to those who are suspected to the nearest facility for further diagnosis and treatment. <br> 7. Maintain the confidentiality of the screening findings. </iframe>')
                        });
	                    
	                }
	},
	validate(frm){
	    
	    frappe.msgprint(__('Document updated successfully'));
	    
	}
});
frappe.ui.form.on('NCD', {
	refresh(frm) {
		 if (!frm.doc.date_of_registration) {
            frm.set_value('date_of_registration', frappe.datetime.now_datetime());
        }// your code here
	}
})