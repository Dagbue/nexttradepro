class ExpertRequest {
    createExpert = {
        userId: null,
        expertImage: null,
        expertName: null,
        expertWinRate: null,
        profitShare: null,
        wins: null,
        losses: null,
        expertStatus: null
    };

    updateExpert = {
        expertId: null,
        userId: null,
        expertImage: null,
        expertName: null,
        expertWinRate: null,
        profitShare: null,
        wins: null,
        losses: null,
        expertStatus: null
    };

    deleteExpert = {
        expertId: 1
    };

    readExpertById = {
        expertId: 1
    };

    readUserExpert = {
        userId: null,
    };

    updateExpertStatus = {
        expertId: null,
        expertStatus: null
    };


}

export default ExpertRequest;