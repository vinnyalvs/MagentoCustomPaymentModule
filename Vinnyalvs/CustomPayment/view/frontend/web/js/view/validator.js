define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/additional-validators',
        'Vinnyalvs_CustomPayment/js/model/validator'
    ],
    function (Component, additionalValidators, validator) {
        'use strict';
        console.log('view/validator');

        additionalValidators.registerValidator(validator);
        return Component.extend({});
    }
);
