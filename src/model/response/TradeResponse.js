class TradeResponse {
    readAllTrade = {
        responseCode: null,
        responseMessage: null,
        trades: []
    }

    readTradeById = {
        responseCode: null,
        responseMessage: null,
        trade: {
            tradeId: null,
            userId: null,
            tradeTime: null,
            symbolTraded: null,
            amountTrade: null,
            expectedPayout: null,
            leverage: null,
            endPrice: null,
            marketType: null,
            tradeReference : null,
            endTime: null,
            tradeStatus: null,
            createdAt: null,
            updatedAt: null,
            tradeType : null
        }
    }


    readUserTrade = {
        responseCode: null,
        responseMessage: null,
        trades: []
    }


    trades =  {
        tradeId: null,
        userId: null,
        tradeTime: null,
        symbolTraded: null,
        amountTrade: null,
        expectedPayout: null,
        leverage: null,
        endPrice: null,
        marketType: null,
        tradeReference : null,
        endTime: null,
        tradeStatus: null,
        createdAt: null,
        updatedAt: null,
        tradeType : null
    }


}

export default TradeResponse