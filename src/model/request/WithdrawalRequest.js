class WithdrawalRequest {
    createWithdrawal = {
        userId : null,
        amount : null,
        transactionMethod : null,
        transactionType : null,
        transactionReference : null,
        additionalComment : null,
        walletAddress : null
    };

    updateWithdrawal = {
        withdrawalId : null,
        userId : null,
        amount : null,
        transactionMethod : null,
        transactionType : null,
        transactionReference : null,
        additionalComment : null,
        withdrawalStatus : null
    };

    deleteWithdrawal = {
        withdrawalId: null,
    };

    readWithdrawalById = {
        withdrawalId: null,
    };

    readUserWithdrawal = {
        userId: null,
    };

    updateWithdrawalStatus = {
        withdrawalId: null,
        withdrawalStatus : null
    };


}

export default WithdrawalRequest;