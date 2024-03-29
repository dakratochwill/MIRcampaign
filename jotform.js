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
}, null, {
    "description": "",
    "name": "anticipatedHigh",
    "qid": "6",
    "subLabel": "",
    "text": "Anticipated High School Graduation Year",
    "type": "control_textbox"
}, {
    "description": "",
    "name": "tellUs",
    "qid": "7",
    "subLabel": "",
    "text": "Tell us what you're interested in.",
    "type": "control_textarea"
}, {
    "description": "",
    "labelText": "",
    "name": "image",
    "qid": "8",
    "text": "wordcloud.5d5ebf36de9655.72551873",
    "type": "control_image"
}, {
    "description": "",
    "name": "address",
    "qid": "9",
    "text": "Home City and State",
    "type": "control_address"
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
    }, null, {
        "description": "",
        "name": "anticipatedHigh",
        "qid": "6",
        "subLabel": "",
        "text": "Anticipated High School Graduation Year",
        "type": "control_textbox"
    }, {
        "description": "",
        "name": "tellUs",
        "qid": "7",
        "subLabel": "",
        "text": "Tell us what you're interested in.",
        "type": "control_textarea"
    }, {
        "description": "",
        "labelText": "",
        "name": "image",
        "qid": "8",
        "text": "wordcloud.5d5ebf36de9655.72551873",
        "type": "control_image"
    }, {
        "description": "",
        "name": "address",
        "qid": "9",
        "text": "Home City and State",
        "type": "control_address"
    }]);
}, 20);
