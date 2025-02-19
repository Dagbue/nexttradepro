class PaymentWalletRequest {
    createPaymentWallet = {
        bitcoinAddress : null,
        ethereumAddress : null,
        bankName : null,
        accountNumber : null,
        routingNumber : null
    };

    updatePaymentWallet = {
        walletId : null,
        bitcoinAddress : null,
        ethereumAddress : null,
        bankName : null,
        accountNumber : null,
        routingNumber : null
    };

    deletePaymentWallet = {
        walletId : null
    };

    readPaymentWalletById = {
        walletId : null
    };




}

export default PaymentWalletRequest;