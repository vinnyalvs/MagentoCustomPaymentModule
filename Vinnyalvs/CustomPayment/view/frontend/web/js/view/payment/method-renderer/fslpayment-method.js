define([
    'ko',
    'Magento_Checkout/js/view/payment/default'
], function (ko, Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Vinnyalvs_CustomPayment/payment/custompayment'
        },

        getInstructions: function () {
            // Reading from the ConfigProvider is the correct way
            if (window.checkoutConfig.payment[this.getCode()]) {
                return window.checkoutConfig.payment[this.getCode()].instructions;
            }
            return '';
        }
    });
});
