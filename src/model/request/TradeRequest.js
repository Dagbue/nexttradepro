class TradeRequest {
    createTrade = {
        userId : null,
        tradeTime : null,
        symbolTraded : null,
        amountTrade : null,
        expectedPayout : null,
        leverage : null,
        endPrice : null,
        marketType : null,
        endTime : null,
        tradeStatus : null,
        tradeReference : null,
        tradeType : null
    };

    updateTrade = {
        userId : null,
        tradeId : null,
        tradeTime : null,
        symbolTraded : null,
        amountTrade : null,
        expectedPayout : null,
        leverage : null,
        endPrice : null,
        marketType : null,
        endTime : null,
        tradeStatus : null,
        tradeReference : null,
        tradeType : null
    };

    deleteTrade = {
        tradeId: null,
    };

    readTradeById = {
        tradeId: null,
    };

    readUserTrade = {
        userId: null,
    };

    updateTradeStatus = {
        tradeId : null,
        tradeStatus : null
    };

}

export default TradeRequest;