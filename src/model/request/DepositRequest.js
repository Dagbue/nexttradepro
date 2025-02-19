class DepositRequest {
    createDeposit = {
        userId : null,
        amount : null,
        transactionMethod : null,
        transactionType : null,
        transactionReference : null,
        additionalComment : null
    };

    updateDeposit = {
        depositId : null,
        amount : null,
        transactionMethod : null,
        transactionType : null,
        transactionReference : null,
        additionalComment : null,
        depositStatus: null,
    };

    deleteDeposit = {
        depositId: null,
    };

    readDepositById = {
        depositId: null,
    };

    readUserDeposit = {
        userId: null,
    };

    updateDepositStatus = {
        depositId: null,
        depositStatus: null,
    };


}

export default DepositRequest;
