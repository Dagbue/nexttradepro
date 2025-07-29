class ExpertResponse {
    readAllExpert = {
        responseCode: null,
        responseMessage: null,
        experts: []
    }

    readExpertById = {
        responseCode: null,
        responseMessage: null,
        expert: {
            expertId: null,
            userId: null,
            expertImage: null,
            expertName: null,
            expertWinRate: null,
            profitShare: null,
            Wins: null,
            Losses: null,
            expertStatus: null,
            createdAt: null,
            updatedAt: null
        }
    }


    readUserExpert = {
        responseCode: null,
        responseMessage: null,
        experts: []
    }


    experts =  {
        expertId: null,
        userId: null,
        expertImage: null,
        expertName: null,
        expertWinRate: null,
        profitShare: null,
        Wins: null,
        Losses: null,
        expertStatus: null,
        createdAt: null,
        updatedAt: null,
        firstName: null,
        lastName: null,
        email: null
    }

}

export default ExpertResponse