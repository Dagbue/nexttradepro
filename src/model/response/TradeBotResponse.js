class TradeBotResponse {
    readAllTradeBot = {
        responseCode: null,
        responseMessage: null,
        tradingBots: []
    }

    readTradeBotById = {
        responseCode: null,
        responseMessage: null,
        bot: {
            botId: null,
            userId: null,
            botImage: null,
            botName: null,
            botWinRate: null,
            botPrice: null,
            botStatus: null,
            createdAt: null,
            updatedAt: null
        }
    }


    readUserTradeBot = {
        responseCode: null,
        responseMessage: null,
        tradingBots: []
    }


    tradingBots =  {
        botId: null,
        userId: null,
        botImage: null,
        botName: null,
        botWinRate: null,
        botPrice: null,
        botStatus: null,
        createdAt: null,
        updatedAt: null,
        firstName: null,
        lastName: null,
        email: null
    }

}

export default TradeBotResponse