class AuthenticationResponse {
    login = {
        responseCode: null,
        responseMessage: null,
        user: {
            userId: null,
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            referralCode: null,
            frontId: null,
            backId: null,
            totalDepositedAmount: null,
            phoneNumber: null,
            totalWithdrawals: null,
            btcBalance: null,
            displayPicture:null,
            walletAddress: null,
            walletName: null,
            twoFactorAuthenticationCode: null,
            userStatus: null,
            role: null,
            createdAt: null,
            updatedAt: null,
            country: null,
            address: null
        }
    }

    allUsers = {
        responseCode: null,
        responseMessage: null,
        user: []
    }

    readUserById = {
        responseCode: null,
        responseMessage: null,
        user: {
            userId: null,
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            referralCode: null,
            frontId: null,
            backId: null,
            totalDepositedAmount: null,
            phoneNumber: null,
            totalWithdrawals: null,
            btcBalance: null,
            displayPicture: null,
            walletAddress: null,
            walletName: null,
            twoFactorAuthenticationCode: null,
            userStatus: null,
            role: null,
            createdAt: null,
            updatedAt: null,
            country: null,
            address: null
        }
    }


    user = {
        userId: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        referralCode: null,
        frontId: null,
        backId: null,
        totalDepositedAmount: null,
        phoneNumber: null,
        totalWithdrawals: null,
        btcBalance: null,
        displayPicture:null,
        walletAddress: null,
        walletName: null,
        twoFactorAuthenticationCode: null,
        userStatus: null,
        role: null,
        createdAt: null,
        updatedAt: null,
        country: null,
        address: null
    }

}

export default AuthenticationResponse