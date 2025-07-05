<?php
namespace Vinnyalvs\CustomPayment\Model\Ui;

use Vinnyalvs\CustomPayment\Model\PaymentMethod;
use Magento\Checkout\Model\ConfigProviderInterface;
use Magento\Payment\Helper\Data as PaymentHelper;

class ConfigProvider implements ConfigProviderInterface
{
    const CODE = PaymentMethod::CODE;

    /**
     * @var \Magento\Payment\Model\MethodInterface
     */
    protected $method;

    public function __construct(PaymentHelper $paymentHelper)
    {
        $this->method = $paymentHelper->getMethodInstance(self::CODE);
    }

    /**
     * Retrieve assoc array of checkout configuration
     *
     * @return array
     */
    public function getConfig(): array
    {
        return [
            'payment' => [
                self::CODE => [
                    'title' => $this->method->getTitle(),
                    'instructions' => $this->method->getConfigData('instructions'),
                ]
            ]
        ];
    }
}
