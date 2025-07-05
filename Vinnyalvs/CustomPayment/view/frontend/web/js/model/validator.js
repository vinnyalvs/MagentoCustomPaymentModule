define(
    [
        'mage/translate',
        'Magento_Ui/js/model/messageList',
        'Magento_Checkout/js/model/quote'
    ],
    function ($t, messageList, quote) {
        'use strict';
        return {
            /**
             * A função de validação que será chamada pelo Magento.
             * @returns {boolean} - Retorna 'true' se a validação passar, 'false' se falhar.
             */
            validate: function () {
                let isValid = true;

                const grandTotal = quote.totals()['grand_total'];
                console.log('grandTotal', grandTotal)

                if (parseInt(grandTotal, 10) % 2 !== 0) {
                    isValid = false;
                    messageList.addErrorMessage({ message: $t('O pagamento não pode ser processado para valores ímpares.') });
                }

                return isValid;
            }
        }
    }
);
