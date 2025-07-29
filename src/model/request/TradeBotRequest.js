class TradeBotRequest {
    createTradeBot = {
        userId: null,
        botImage: null,
        botName: null,
        botWinRate: null,
        botPrice: null,
        botStatus: null
    };

    updateTradeBot = {
        botId: null,
        userId: null,
        botImage: null,
        botName: null,
        botWinRate: null,
        botPrice: null,
        botStatus: null
    };

    deleteTradeBot = {
        botId : null
    };

    readTradeBotById = {
        botId: null
    };

    readUserTradeBot = {
        userId: null
    };

    updateTradeBotStatus = {
        botId : null,
        botStatus: null
    };


}

export default TradeBotRequest;