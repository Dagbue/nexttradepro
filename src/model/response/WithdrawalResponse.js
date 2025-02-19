class WithdrawalResponse {
    readAllWithdrawal = {
        responseCode: null,
        responseMessage: null,
        withdrawals: []
    }

    readWithdrawalById = {
        responseCode: null,
        responseMessage: null,
        data: {
            withdrawalId: null,
            userId: null,
            amount: null,
            transactionMethod: null,
            transactionType: null,
            transactionReference: null,
            withdrawalStatus: null,
            walletAddress: null,
            createdAt: null,
            updatedAt: null
        }
    }


    readUserWithdrawal = {
        responseCode: null,
        responseMessage: null,
        dataWithdrawals: []
    }


    withdrawals =  {
        withdrawalId: null,
        userId: null,
        amount: null,
        transactionMethod: null,
        transactionType: null,
        transactionReference: null,
        withdrawalStatus: null,
        walletAddress: null,
        createdAt: null,
        updatedAt: null
    }

    dataWithdrawals = {
        withdrawalId: null,
        userId: null,
        amount: null,
        transactionMethod: null,
        transactionType: null,
        transactionReference: null,
        withdrawalStatus: null,
        walletAddress: null,
        createdAt: null,
        updatedAt: null
    }
}

export default WithdrawalResponse