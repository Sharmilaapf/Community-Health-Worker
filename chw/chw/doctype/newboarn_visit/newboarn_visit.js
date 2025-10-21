// Copyright (c) 2025, Sharmila and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Newboarn Visit", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Newborn Visit', {
	refresh(frm) {
		if (frm.doc.first_name == null) {
	                    frappe.msgprint({
                            title: __('Important key messages '),
                            indicator: 'green',
                            message: __(' <h4><strong>Mother</strong></h4>1. Identify any postpartum complications in mothers after delivery. <br> 2. Ensure availability and regular consumption of Iron folic acid and Calcium (till 6 months ). <br> 3. Follow-up of the post-partum family planning (PPIUCD/PPTL). <br><br> <h4><strong>Newborn</strong></h4>4.Promote essential new-born care (keeping the child warm, clean cord care, cleanliness in handling the new-born, exclusive breastfeeding, delayed bathing). <br> 5. If newborns are pre-term/very low birth weight, promote Kangaroo mother care for extra warm and other extra care services. <br> 6. Identify any complications or sickness in new-born children. <br> 7. Promote and observe breastfeeding and if required support the mother in breastfeeding. <br> 8. Age-appropriate immunisation for the child (at birth dose). <br><iframe width="300" height="215" src="https://www.youtube.com/embed/hANzpHKqiss?&autoplay=0"frameborder="0" allowfullscreen>></iframe>')
                        });
	                    
	                }
	},
	validate(frm){
	    
	    frappe.msgprint(__('Document updated successfully'));
	    
	}
});
