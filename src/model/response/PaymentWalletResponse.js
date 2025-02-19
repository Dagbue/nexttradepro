class PaymentWalletResponse {
    readAllWallets = {
        responseCode: null,
        responseMessage: null,
        paymentWallets: []
    }

    readPaymentWalletById = {
        responseCode: null,
        responseMessage: null,
        paymentWallets: {
            walletId: null,
            userId: null,
            bitcoinAddress: null,
            ethereumAddress: null,
            bankName: null,
            accountNumber: null,
            routingNumber: null,
            createdAt: null,
            updatedAt: null
        }
    }




    paymentWallets = {
            walletId: null,
            userId: null,
            bitcoinAddress: null,
            ethereumAddress: null,
            bankName: null,
            accountNumber: null,
            routingNumber: null,
            createdAt: null,
            updatedAt: null
        }

}

export default PaymentWalletResponse