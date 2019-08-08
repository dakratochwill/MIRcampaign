JotForm.init(function () {
    JotForm.alterTexts(undefined);
    JotForm.clearFieldOnHide = "disable";
    JotForm.submitError = "jumpToFirstError";
    /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([null, null, {
    "name": "submit2",
    "qid": "2",
    "text": "Submit",
    "type": "control_button"
            }, {
    "description": "",
    "name": "name",
    "qid": "3",
    "text": "Name",
    "type": "control_fullname"
            }, {
    "description": "",
    "name": "email",
    "qid": "4",
    "subLabel": "example@example.com",
    "text": "Email",
    "type": "control_email"
            }, {
    "description": "",
    "name": "pleaseSelect",
    "qid": "5",
    "text": "Please select your areas of interest (check all that apply)",
    "type": "control_checkbox"
            }]);
setTimeout(function () {
    JotForm.paymentExtrasOnTheFly([null, null, {
        "name": "submit2",
        "qid": "2",
        "text": "Submit",
        "type": "control_button"
                }, {
        "description": "",
        "name": "name",
        "qid": "3",
        "text": "Name",
        "type": "control_fullname"
                }, {
        "description": "",
        "name": "email",
        "qid": "4",
        "subLabel": "example@example.com",
        "text": "Email",
        "type": "control_email"
                }, {
        "description": "",
        "name": "pleaseSelect",
        "qid": "5",
        "text": "Please select your areas of interest (check all that apply)",
        "type": "control_checkbox"
                }]);
}, 20);
