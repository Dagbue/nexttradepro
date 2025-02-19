class DepositResponse {
    readAllDeposit = {
        responseCode: null,
        responseMessage: null,
        deposits: []
    }

    readDepositById = {
        responseCode: null,
        responseMessage: null,
        deposit: {
            depositId: null,
            userId: null,
            planId: null,
            amount: null,
            startDate: null,
            endDate: null,
            depositStatus: null,
            transactionMethod: null,
            transactionType: null,
            transactionReference: null,
            additionalComment: null,
            createdAt: null,
            updatedAt: null
        }
    }


    readUserDeposit = {
        responseCode: null,
        responseMessage: null,
        deposits: []
    }


    deposits =  {
        depositId: null,
        userId: null,
        planId: null,
        amount: null,
        startDate: null,
        endDate: null,
        depositStatus: null,
        transactionMethod: null,
        transactionType: null,
        transactionReference: null,
        additionalComment: null,
        createdAt: null,
        updatedAt: null
    }

}

export default DepositResponse