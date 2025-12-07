<template>
  <div class="alpha">

    <div class="trade-type-button">
      <button
          @click="scrollToTradeForm('Forex')"
          class="trade-btn trade-btn-1"
          :class="{ 'active-trade-btn': placeTradeStatus === 'Forex' }"
      >
        Trade Forex
      </button>
      <button
          @click="scrollToTradeForm('Crypto')"
          class="trade-btn trade-btn-2"
          :class="{ 'active-trade-btn': placeTradeStatus === 'Crypto' }"
      >
        Trade Crypto
      </button>
      <button
          @click="scrollToTradeForm('CFD')"
          class="trade-btn trade-btn-3"
          :class="{ 'active-trade-btn': placeTradeStatus === 'CFD' }"
      >
        Trade CFD
      </button>
      <button
          @click="scrollToTradeForm('Stocks')"
          class="trade-btn trade-btn-4"
          :class="{ 'active-trade-btn': placeTradeStatus === 'Stocks' }"
      >
        Trade Stocks
      </button>
      <button
          @click="scrollToTradeForm('RealEstate')"
          class="trade-btn trade-btn-5"
          :class="{ 'active-trade-btn': placeTradeStatus === 'RealEstate' }"
      >
        Trade Real Estate
      </button>
    </div>

    <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/#%7B%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 65px; width: 99%; margin-bottom: 0.5%;"></iframe>


    <p v-show="this.UserDetails.user.userStatus === 'unVerified'" class="text-2">Your account is not verified. Kindly
      upload a valid government Id to verify your account.
      <a><router-link to="/update-account">Click here</router-link></a></p>

    <!-- Main Content -->
    <div class="main-content">

      <!-- Balance Section -->
      <div class="balance-section-2">
        <div class="balance">
          <div class="balance-amount">
            <span class="amount">
              ${{UserDetails.user.totalDepositedAmount + UserDetails.user.profit - UserDetails.user.loss - UserDetails.user.totalWithdrawals | formatAmount2}}
            </span>
          </div>
          <p>Main Account Balance</p>
        </div>

        <!-- Chart -->
        <div class="chart">
          <svg viewBox="0 0 400 100" preserveAspectRatio="none">
            <path
                d="M 0 80 Q 50 70 100 65 T 200 45 T 300 55 T 400 70"
                stroke="rgb(34, 197, 94)"
                stroke-width="2"
                fill="none"
            />
          </svg>
        </div>


      </div>

      <!-- Metrics Grid -->

        <!-- Account Currency -->
        <div class="metric-card">
<!--          <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCUlEQVR4nO2XT0hUQRzHnyZhUTtvrYOUhkER3do3q9mh3s5IduhQBz1EFgmxUZf0JDnzmpmV/lxLgjp0cUFpwQiiSyDqzmxlCBEVHYM8KlGHrOzPiy3XXPcP7+0/Kt8XfoeBme/7ft78e0/TPHny5MlTJbVnIrLTkOIZVCJmKD4A4/wYnGQGnGbri/UGBEV1im5qZZXNqqEUY1AJO60k/wGleGNIfqEgX2bW6BSP6QQ99JP2xmRbK5cCim2BSsxmQChhG1K8cOPV0Nu6DhA0CAj6oFNs/yk0BywULhtEUIoeqHgGAFRi1LEJY9WA4In04MuK4NslD94Zi62BkvdByReyzQCU/JJTL5+FD6bCAoqv+Ji5o64fbwVWqA1QfN1H8JmShg9ODjRCKSazBl+sYJyfcOoHKO5LAWjMrNXKKRhnRw3J51YGDkgxa0g+v9RWLOgYwELhpeVihc6VJbg5zmqh5Neyb1h+r3nq8iaoIqdTJ1HLE+Zz6l3HzAZA8fyyNT+qE3SgZOEDjyO7oRLPM4Ir8cmQ/Lxm21WpvoYSw4bib90+A1DckQbxCwQ99VmhQ0WFhzJyEkrxMXOTitfNiu3J6D99FUAljhTyrI0U7QIUD+kEf10G8R1Q1OvarPURq4OK382+SfmtUty4ueQn7Y3J00gn6MsiyEISzpWJIcWDLMHfwQTrcDK+KRpObI+G7WzVFA1LJx66FTJTM+En6Kw7ACUurgCQULJtTsfnCp+qtM6scy2gbYGVHhuYubng08kcZzVQ8rih+DcouUi23Yx3A6BbeP/vSwy9AgTfSL5t0I97dIqmli44C0FXAIsQtclLy/VAlwB+q21fzs+IZHiCBrVKy9US0rSq5DGqUxwDBL/UKfoMKHoPKB7294cOVzx8AQBpAgTd1wm+o5VTgOJEvmkvCoDiobL/0OQLXyxARbTqAWCeT3GohN09M5KzTs2MyH8aoHtmxP7/AeqPtyTqu/bauervB+jKHd4DiHoAtgegewDCA8grDyDqAdirG8CTJ0+etErqJ6uic2r6XkvuAAAAAElFTkSuQmCC" alt="stocks-growth&#45;&#45;v1">-->
          <div class="metric-value">$ {{UserDetails.user.totalDepositedAmount | formatAmount2}}</div>
          <p>Invested Amount</p>
        </div>

        <!-- USD Balance -->
        <div class="metric-card">
<!--          <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvElEQVR4nO2VOw7CMAyGM8C5WEGICZsj9AL2DiOvU/G4SHksPcSPAIEKidqmSYQq8Ute4tifo9iyMX/5CqwIMfNzQJXAsgDp0qQQ7slflcaGoJw8NgSu5Kle0g1hJhOwXmtbkuQClvE7rvEcPAIb9/3ZH/D5ibntl5NrsPwBpDlYh5Z/KqMypDXg6+wIkkPVvVDAHiy7ZACXogCQZX2wbkFaPE02GMx78QCsa7s1ZdUKELoHULcXkgNMV3UDRwn4IAvpPZ0AAAAASUVORK5CYII=" alt="withdrawal-limit">-->
          <div class="metric-value-2">$ {{UserDetails.user.totalWithdrawals | formatAmount2}}</div>
          <p>Withdrawals</p>
        </div>

        <!-- profit and loss -->
        <div class="metric-card">
<!--          <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGcklEQVR4nO2aX2xTdRTHv/5JxPgn6oNieMJEX4yYwNQNhlPDWsbG2oVNBRHI2j3gmy9oxAgYo4kJxjgEtpG222TACLDRDqMkIChrAR+Uim5kW7tu/Te63i4bbHds+5mz9q5d13vbbqNdu57kpDe3t7f3+7nnd875/e4FMpaxjGUsxc2hWHvCUZJ7HIvR3KW5uzrlK5lduWbiXkXxOiwmc29aK+uUZ03YirLZiErBeJXSO6JWvoTFYNzWtcutG17nLQVZbHjHRjaqVvpdpWhnOwufRjqbZXveku7CnP5O+So2uK0gKD7gvEp5nu3JexjpavbiNeYO2UrGbc6fIT4IQXEA6ZrxO2Qr2e2yt0TFT3mF4iOkZcZXrGGjakVUALxKeS9tKoM7NOOXF0e/+0EIqV8ZOLGMH6uncmWwRMn4cURCalYGu2L135MZf4t4xo8Dwo9JE+LRYZmrFpV2DdqsNRiyVGHMocW4pwFjd86gnzfg2qgB1bwe77MmPBHtfASla32WqFgsFHPXQ9ajQXvHIbCOg2DWajDPMbCRs2CjhsjOG3BnVI8jI3q8mLIAfDV4xq7F9c6AcPq8fRSM14sLnwFCj1Fej2/ZRSxJKQCuOuR3V2OYhJNbqsCGTscuPAIII/sZz6cEAFc9NndVYVwQb60BG26evfgp16OHb8YK4X+oKnTJV1FiWzgAXHXIDxVvqQYblhjrs4HADFhK/+VU5rb4W+J3FgYA7gyeslbjriCexvzgqekCRvRgDh2YeT+Y8UuwS7v9Ttu0z6H1HxMFxJ+sEY9STbcVZvsoEoa2bUg+ALsW1wXx5Lcbpl+4UwfWuhfswqfS3roPzFkbNSfso/90l+WWUhT0FOckF4C7HjIh2wtJT8j29NleOVPo5c+Dgmg7/PtblZPlUKxMDgpDwVaU3UcQBj8sSB6AHqrzIXe//1jwYiOJjwWAAEGiVzhI/923Ke9jAuCfISYBgEeHZUKTI4x94e5T2M8I8b1g7nqwvp+CYmib9kUaIq460WEwRB0jAx7sXJ81TtNkWhdMOABXLSpD775dG0x4NJ7DBV37Svyu0nfhx1/ZI54Y+bN4j67BtjHHQlEw8IE88QDsGrRFCn/K9pHCWgBArTC1xaH+xxeRf0PnEoFWNXkTSt48QgDcpXmJB2CtwVAogMFAx3djvzSAu83RK4LgVCLFOkQ/gDy1Pw+sTjyArsPBxof8bpP/4iKFfzgAOibUf/ss8m+oTxAB4KZr6FOuyyMAtqI3Eg+gM0Q8uTDLuyQiJt4cQE7nEgEwQtfgLMl5lgBYCl67fwBkjTcYeXmrl6lNPrb1L+djiQJwebc0gISYLAyA2sQtlxoCRpEhQGEeHvo0HKQA0LmkhkCSAAxkR0yCgf6fElesSS4aAPN30kkwKQBUV73baX+vBv9NK4PHA2VQG1kMlbrw8icMGzEAYnMDXo/DSQOgNnJ1tN9Rhx+mNUKaqSYlYmcXbw6gc4g2QgaUJROAE4w94G7EUtFWuHYeWmHxuz/EGvF48gCYfKzcxL0dbTJEE5pZT4YOiEcLrSAnTLwYAJWJOyesBIWWw2nTYYJwYN6nw/ywAS8g2QDURm5CZfROrtPZtbgqtSBCs7qYFkT2iod9SPh/k1DxogD8EFrLGtlDtCTWXYNBqSUxSoxTS2L7/M0SOW3TPsoZdIykeANa2Tk8ggUDwEQQfJ/QMd46vNpVhbHQoTAvK8JBt9/RY1nCxUcDoDJxUy2pW4fSUAhU54cD3eEc3ca34BUky2RSEWDyTZt89DfgZVsNBubtwQiFfWANMCUAkHnq8WSvFpdCH41RvY/r0ZgBPG/A10kZ83MFIJhXhxW9GvwjgKCHJZ4G6Qcm1OTQak/CS939ACCYqwHPOWvxfa8GN6laWA5jzK7DuOfo5ONxD6+HiTfgEG/Auwnt8MKt+OwtMwl991dbRKFxuZGrRKrZ9ouWJYVNbf0EYcsFx6zFq0y+83sustR7JYVsa7N1+YbT//LrT5rZtst98Ys3cu07f/el5ktJgm36pVsmP2meKDh1k+240h/Pnfeqrw6k9mtpgpW2dO2SN5pZUVMbKzdyMYjn7lW0+tLjxUTBFC2dJygfKA0dUQFUGH3p9WpqPJVBZeTS8+XkWCpDSmf8uVaGtMj4s60MaZXx460MG5vaJ1RGXz4Wo5UYOo6TJ/s6MpaxjGUMc7T/Aa/fYYRBYqdnAAAAAElFTkSuQmCC" alt="external-cash-flow-finance-flaticons-flat-flat-icons">-->
          <div class="profit-part">
            <p class="metric-value-profit">Profit</p>
            <p
                style="color: #10d876;"
                class="metric-value-profit-color">$ {{UserDetails.user.profit | formatAmount2}}</p>
          </div>


          <div class="profit-part">
            <p class="metric-value-profit">Loss</p>
            <p
                style="color: rgb(255 85 116);"
                class="metric-value-loss-color">- $ {{UserDetails.user.loss | formatAmount2}}</p>
          </div>

        </div>

        <!-- Account Type -->
        <div class="metric-card">
          <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADHUlEQVR4nO1Zy25TMRC9Cgos2mJfnhseG+ATQPAfBUTENjs2DXYKLCJgQcsHoLaIItYIlgUJPiE8WpJ6knQDSYREm6gSoDyqyGhu0hJQHva99g1COZIV6b58jmc8npk4zhhjjBEccnqfK/glKvgdCuwFETxLgVUp8GZ7sCoBlsF7VLDb7vrNi/iOM2q4meQpCvwhAV6mwKXOIIKXqGDzbmHmZOjEJzYSx6jgjzsrLIMN1qDAFyfzt46GQp4Cu95xD2l4VFyRvGaPeSa1nwJ/YoG4/GMItuSk41Gj3I9/TExQYK+tk4e9/fEK5zTDPh2PEsFWwiJP9yzB3zr5GwcC8w/FbWCAOwXfsOoTXik9le9qRfmz1fB+LxeXTYiI+SI/tT57mALb0iHfC7HSs6AiKr5CbCfOK0/0vlbsKSBd+2LAndiCFnk8HTsHjPIk31v1ngLwuoH90KTZxGmN1WfzupOs1csWLcAxKs2psZepCBGsqPPxM4W78nOz2lPAtImNDO3cSSkB9LJKTfLZ+lePbGlnW67Wy/JHq+GtvCnytDOmcokLCu6DKbE++Xzjmzy3cb/vs2cL9+SHWkmqgPb5hgvJWRUBL/t9oB+Gke8WGkQABfZ8qIB2MaIuAMMnrq4JK9Fh+wD4p+EWAF4x5bMmyVMcgm8qCNCL/6GRB09APRQBVsiDsoBgLmSNPCi6ULt7YJ/8oLBK+7xDgK1ZCaOmwyoNEkYHHWQqsBlWXZWDDJtOxnz2ryIH04zdnMnP/jiY4+etJHODyPdCeWdbmzxRTeb8ptM6RQ5awl467fgraCwXOU1sYyoL8KwAfNGWBXSLHCLYI8dXUS/4ZhAB2JXoBc06oTIJM0e0BXhWECwW1AooAlfcb5Hj5vhVX+S7RCwFFRFaN+Ifay2+wYayYwLYaMWGa1jkiWAr5pq7u0jHo+G4E1sw3l7vBv4JYbJqo7+JbwXesKrAsIYrZaZ6Yw2M8xi2nbDhndiCz/nJnfAdItiDQ3l+whk5ZCqCTSdMdzFnx8Kj7WZoIc9KFSL4Kt7DZ7ysUqYio6Y9xhjOf4Bf9bMKSCjTGzIAAAAASUVORK5CYII=" alt="cryptocurrency">
          <div class="metric-value">{{bitcoin}}</div>
          <p>Bitcoin Balance</p>
        </div>

    </div>


    <div class="separator">
      <div class="part-1">
        <div v-show="this.placeTradeStatus === 'Forex'">
          <div  class="tradingview_7a2ab-wrapper"
               style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
          >
            <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_7a2ab" frameborder="0"
                    allowtransparency="true" scrolling="no" allowfullscreen="true"
                    src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22OANDA%3AUSDCAD%22%2C%22frameElementId%22%3A%22tradingview_7a2ab%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22OANDA%3AUSDCAD%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2F%22%7D"
                    style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
          </div>
        </div>

        <div v-show="this.placeTradeStatus === 'Crypto'">
        <div  class="tradingview_1a10b-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_1a10b" frameborder="0"
                  allowtransparency="true" scrolling="no" allowfullscreen="true"
                  src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22frameElementId%22%3A%22tradingview_1a10b%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22details%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>

        <div v-show="this.placeTradeStatus === 'CFD'">
        <div  class="tradingview_512a5-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_512a5" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22FX%3AUSDOLLAR%22%2C%22frameElementId%22%3A%22tradingview_512a5%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22FX%3AUSDOLLAR%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCFD%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>

        <div v-show="this.placeTradeStatus === 'Stocks'">
        <div  class="tradingview_a28b8-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_a28b8" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22NYSE%3ASPXC%22%2C%22frameElementId%22%3A%22tradingview_a28b8%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22NYSE%3ASPXC%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeStocks%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>

        <div v-show="this.placeTradeStatus === 'RealEstate'">
        <div  class="tradingview_a28b8-wrapper"
             style="position: relative;
               box-sizing: content-box;
               width: 100%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 480px;"
        >
          <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_a28b8" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22NYSE%3ASPXC%22%2C%22frameElementId%22%3A%22tradingview_a28b8%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22NYSE%3ASPXC%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeStocks%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
        </div>
        </div>


<!--        Trade History table -->
        <div>
          <div class="body">
            <h2>My Trade History</h2>
            <div class="row trans-mgt">
              <div class="form-group fg--search">
                <button type="submit" @click.prevent="filterTrades"><i class="fa fa-search"></i></button>
                <input style="color: #FFFFFF;" type="text" class="input" placeholder="Search trades..." v-model="searchQuery" @input="filterTrades"/>
              </div>
              <div class="filter_group">

                  <select class="action-content">
                    <option>Filter</option>
                    <option>Call</option>
                    <option>Put</option>
                  </select>

              </div>
            </div>
          </div>
          <div class="section-5">

            <div class="empty-state-container" v-if="this.readUserTrade.trades.length === 0">
              <img src="@/assets/empty.svg" alt="empty" class="empty-state">
              <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-1">You have nothing to see, This is where your Trade history will appear</p>
<!--              <p style="text-align: center;color: #FFFFFF; font-size: 13px;padding-bottom: 3px;" class="empty-state-text-2"></p>-->

            </div>


            <div class="table" v-if="this.readUserTrade.trades.length > 0" >
              <div class="table-wrapper">
                <div class="table-scroll">
              <table>
                <tr style="background-color: #FFFFFF;">
                  <th>Trade ID</th>
                  <th>Trade Type</th>
                  <th>Trade Time</th>
                  <th>Symbol Traded</th>
                  <th>Expected Payout</th>
                  <th>Leverage</th>
                  <th>End Price</th>
                  <th>End Time</th>
                  <th>Stop Loss</th>
                  <th>Take Profit</th>
                  <th>Entry Price</th>
                  <th>Trade Status</th>
                </tr>
                <div v-if="loading">
                  <div class="table-content">
                    <div class="name-wrapper-body">
                      <p
                          class="table-body-text"
                          style="position: absolute;
                    margin-left: 45%"
                      >
                        <base-loader/>
                      </p>
                    </div>
                  </div>
                </div>
                <tbody v-else v-for="child in paginatedItems" :key="child.key">
                <tr>
                  <td data-label="Trade ID">{{child.tradeReference}}</td>
                  <td data-label="Trade Type">{{child.tradeType}}</td>
                  <td data-label="Trade Time">{{child.tradeTime | formatDate2}}</td>
                  <td data-label="Symbol Traded">{{child.symbolTraded}}</td>
                  <td data-label="Expected Payout">
                    <div v-if="child.tradeStatus === 'won'" class="table-sep">
                      <i v-if="child.tradeType === 'Buy'" style="color: #10d876 !important" class="fa fa-arrow-up text-success"></i>
                      <i v-if="child.tradeType === 'Sell'" style="color: #E50202 !important" class="fa fa-arrow-down text-danger"></i>
                      <p>$ {{child.expectedPayout | formatAmount}}</p>
                    </div>
                    <div v-if="child.tradeStatus === 'lost'" class="table-sep">
                      <i v-if="child.tradeType === 'Buy'" style="color: #10d876 !important" class="fa fa-arrow-up text-success"></i>
                      <i v-if="child.tradeType === 'Sell'" style="color: #E50202 !important" class="fa fa-arrow-down text-danger"></i>
                      <p>$ {{child.expectedPayout | formatAmount}}</p>
                    </div>
                    <div v-if="child.tradeStatus === 'pending'" class="table-sep">
                      <i v-if="child.tradeType === 'Buy'" style="color: #10d876 !important" class="fa fa-arrow-up text-success"></i>
                      <i v-if="child.tradeType === 'Sell'" style="color: #E50202 !important" class="fa fa-arrow-down text-danger"></i>
                      <p style="font-size: 12px;">$ PendingTrade</p>
                    </div>
                  </td>
                  <td data-label="Leverage">{{child.leverage}}</td>
                  <td data-label="End Price">$ {{child.endPrice | formatAmount}}</td>
                  <td data-label="End Time">{{child.endTime | formatDate}}</td>

                  <td data-label="Stop Loss">$ {{child.stopLoss | formatAmount}}</td>
                  <td data-label="Take Profit">$ {{child.takeProfit | formatAmount}}</td>
                  <td data-label="End Price">$ {{child.entryPrice | formatAmount}}</td>

                  <td data-label="Trade Status">
                    <div>
                      <p class="status-won" v-show="child.tradeStatus === 'won'">{{child.tradeStatus}}</p>
                      <p class="status-lost" v-show="child.tradeStatus === 'lost'">{{child.tradeStatus}}</p>
                      <p class="status-pending" v-show="child.tradeStatus === 'pending'">{{child.tradeStatus}}</p>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
                </div>
              </div>

              <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
                <div class="page-indicator">
                  Page {{ currentPage }} of {{ totalPages }}
                </div>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="part-2">
        <div class="navigation-bar">
          <p
              class="navigation-bar-text-1"
              :class="{ active: screen5 === 'pnl' }"
              @click="changeScreen('pnl')"
          >
            Symbol
          </p>
          <p
              class="navigation-bar-text-1"
              :class="{ active: screen5 === 'placeTrade' }"
              @click="changeScreen('placeTrade')"
          >
            Analysis
          </p>
          <p
              class="navigation-bar-text-1"
              :class="{ active: screen5 === 'TradeHistory' }"
              @click="changeScreen('TradeHistory')"
          >
            News
          </p>
        </div>

        <div class="symbol" v-show="this.screen5 === 'pnl'">
          <form ref="myForm" v-show="this.placeTradeStatus === 'Forex'"  class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE FOREX - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="text" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded">
                <option value="" disabled selected>Select Market Pair</option>
                <option :value="null" disabled>Select Market Pair</option>

                <option value="AUD/CAD">AUD/CAD</option>
                <option value="AUD/CHF">AUD/CHF</option>
                <option value="AUD/CNH">AUD/CNH</option>
                <option value="AUD/CZK">AUD/CZK</option>
                <option value="AUD/DKK">AUD/DKK</option>
                <option value="AUD/HKD">AUD/HKD</option>
                <option value="AUD/HUF">AUD/HUF</option>
                <option value="AUD/ILS">AUD/ILS</option>
                <option value="AUD/JPY">AUD/JPY</option>
                <option value="AUD/MXN">AUD/MXN</option>
                <option value="AUD/NOK">AUD/NOK</option>
                <option value="AUD/NZD">AUD/NZD</option>
                <option value="AUD/PLN">AUD/PLN</option>
                <option value="AUD/SEK">AUD/SEK</option>
                <option value="AUD/SGD">AUD/SGD</option>
                <option value="AUD/THB">AUD/THB</option>
                <option value="AUD/TRY">AUD/TRY</option>
                <option value="AUD/USD">AUD/USD</option>
                <option value="AUD/ZAR">AUD/ZAR</option>
                <option value="CAD/CHF">CAD/CHF</option>
                <option value="CAD/CNH">CAD/CNH</option>
                <option value="CAD/HUF">CAD/HUF</option>
                <option value="CAD/JPY">CAD/JPY</option>
                <option value="CAD/MXN">CAD/MXN</option>
                <option value="CAD/NOK">CAD/NOK</option>
                <option value="CAD/PLN">CAD/PLN</option>
                <option value="CAD/SEK">CAD/SEK</option>
                <option value="CAD/SGD">CAD/SGD</option>
                <option value="CAD/TRY">CAD/TRY</option>
                <option value="CAD/ZAR">CAD/ZAR</option>
                <option value="CHF/CNH">CHF/CNH</option>
                <option value="CHF/CZK">CHF/CZK</option>
                <option value="CHF/DKK">CHF/DKK</option>
                <option value="CHF/HUF">CHF/HUF</option>
                <option value="CHF/JPY">CHF/JPY</option>
                <option value="CHF/MXN">CHF/MXN</option>
                <option value="CHF/NOK">CHF/NOK</option>
                <option value="CHF/PLN">CHF/PLN</option>
                <option value="CHF/RON">CHF/RON</option>
                <option value="CHF/SEK">CHF/SEK</option>
                <option value="CHF/SGD">CHF/SGD</option>
                <option value="CHF/TRY">CHF/TRY</option>
                <option value="CHF/ZAR">CHF/ZAR</option>
                <option value="CNH/JPY">CNH/JPY</option>
                <option value="CZK/JPY">CZK/JPY</option>
                <option value="CZK/PLN">CZK/PLN</option>
                <option value="DKK/JPY">DKK/JPY</option>
                <option value="DKK/NOK">DKK/NOK</option>
                <option value="DKK/SEK">DKK/SEK</option>
                <option value="EUR/AED">EUR/AED</option>
                <option value="EUR/ARS">EUR/ARS</option>
                <!-- Latin America -->
                <option value="EUR/AUD">EUR/AUD</option>
                <option value="EUR/BGN">EUR/BGN</option>
                <option value="EUR/BRL">EUR/BRL</option>
                <option value="EUR/CAD">EUR/CAD</option>
                <option value="EUR/CHF">EUR/CHF</option>
                <option value="EUR/CLP">EUR/CLP</option>
                <option value="EUR/CNH">EUR/CNH</option>
                <option value="EUR/COP">EUR/COP</option>
                <option value="EUR/CZK">EUR/CZK</option>
                <option value="EUR/DKK">EUR/DKK</option>
                <option value="EUR/EGP">EUR/EGP</option>
                <option value="EUR/GBP">EUR/GBP</option>
                <option value="EUR/HKD">EUR/HKD</option>
                <option value="EUR/HUF">EUR/HUF</option>
                <option value="EUR/IDR">EUR/IDR</option>
                <option value="EUR/ILS">EUR/ILS</option>
                <option value="EUR/INR">EUR/INR</option>
                <option value="EUR/JPY">EUR/JPY</option>
                <option value="EUR/KRW">EUR/KRW</option>
                <option value="EUR/MXN">EUR/MXN</option>
                <option value="EUR/MYR">EUR/MYR</option>
                <option value="EUR/NOK">EUR/NOK</option>
                <option value="EUR/NZD">EUR/NZD</option>
                <option value="EUR/PHP">EUR/PHP</option>
                <option value="EUR/PLN">EUR/PLN</option>
                <option value="EUR/RON">EUR/RON</option>
                <option value="EUR/RUB">EUR/RUB</option>
                <option value="EUR/SEK">EUR/SEK</option>
                <option value="EUR/SGD">EUR/SGD</option>
                <option value="EUR/THB">EUR/THB</option>
                <option value="EUR/TRY">EUR/TRY</option>
                <option value="EUR/USD">EUR/USD</option>
                <option value="EUR/ZAR">EUR/ZAR</option>
                <option value="GBP/AED">GBP/AED</option>
                <option value="GBP/ARS">GBP/ARS</option>
                <option value="GBP/AUD">GBP/AUD</option>
                <option value="GBP/BRL">GBP/BRL</option>
                <option value="GBP/CAD">GBP/CAD</option>
                <option value="GBP/CHF">GBP/CHF</option>
                <option value="GBP/CNH">GBP/CNH</option>
                <option value="GBP/CZK">GBP/CZK</option>
                <option value="GBP/DKK">GBP/DKK</option>
                <option value="GBP/HKD">GBP/HKD</option>
                <option value="GBP/HUF">GBP/HUF</option>
                <option value="GBP/IDR">GBP/IDR</option>
                <option value="GBP/ILS">GBP/ILS</option>
                <option value="GBP/JPY">GBP/JPY</option>
                <option value="GBP/MXN">GBP/MXN</option>
                <option value="GBP/NOK">GBP/NOK</option>
                <option value="GBP/NZD">GBP/NZD</option>
                <option value="GBP/PLN">GBP/PLN</option>
                <option value="GBP/SEK">GBP/SEK</option>
                <option value="GBP/SGD">GBP/SGD</option>
                <option value="GBP/THB">GBP/THB</option>
                <option value="GBP/TRY">GBP/TRY</option>
                <option value="GBP/USD">GBP/USD</option>
                <option value="GBP/ZAR">GBP/ZAR</option>
                <option value="HKD/JPY">HKD/JPY</option>
                <option value="HUF/JPY">HUF/JPY</option>
                <option value="ILS/JPY">ILS/JPY</option>
                <option value="MXN/JPY">MXN/JPY</option>
                <option value="NOK/DKK">NOK/DKK</option>
                <option value="NOK/JPY">NOK/JPY</option>
                <option value="NOK/SEK">NOK/SEK</option>
                <option value="NZD/CAD">NZD/CAD</option>
                <option value="NZD/CHF">NZD/CHF</option>
                <option value="NZD/CNH">NZD/CNH</option>
                <option value="NZD/JPY">NZD/JPY</option>
                <option value="NZD/SGD">NZD/SGD</option>
                <option value="NZD/USD">NZD/USD</option>
                <option value="PLN/JPY">PLN/JPY</option>
                <option value="SEK/JPY">SEK/JPY</option>
                <option value="SGD/HKD">SGD/HKD</option>
                <option value="SGD/JPY">SGD/JPY</option>
                <option value="THB/JPY">THB/JPY</option>
                <option value="TRY/JPY">TRY/JPY</option>
                <option value="USD/AED">USD/AED</option>
                <option value="USD/ARS">USD/ARS</option>
                <option value="USD/BRL">USD/BRL</option>
                <option value="USD/CAD">USD/CAD</option>
                <option value="USD/CHF">USD/CHF</option>
                <option value="USD/CLP">USD/CLP</option>
                <option value="USD/CNH">USD/CNH</option>
                <option value="USD/COP">USD/COP</option>
                <option value="USD/CZK">USD/CZK</option>
                <option value="USD/DKK">USD/DKK</option>
                <option value="USD/EGP">USD/EGP</option>
                <option value="USD/GBP">USD/GBP</option>
                <option value="USD/HKD">USD/HKD</option>
                <option value="USD/HUF">USD/HUF</option>
                <option value="USD/IDR">USD/IDR</option>
                <option value="USD/ILS">USD/ILS</option>
                <option value="USD/INR">USD/INR</option>
                <option value="USD/JPY">USD/JPY</option>
                <option value="USD/KES">USD/KES</option>
                <option value="USD/KRW">USD/KRW</option>
                <option value="USD/MXN">USD/MXN</option>
                <option value="USD/MYR">USD/MYR</option>
                <option value="USD/NOK">USD/NOK</option>
                <option value="USD/PEN">USD/PEN</option>
                <option value="USD/PHP">USD/PHP</option>
                <option value="USD/PLN">USD/PLN</option>
                <option value="USD/RON">USD/RON</option>
                <option value="USD/RUB">USD/RUB</option>
                <option value="USD/SAR">USD/SAR</option>
                <option value="USD/SEK">USD/SEK</option>
                <option value="USD/SGD">USD/SGD</option>
                <option value="USD/THB">USD/THB</option>
                <option value="USD/TRY">USD/TRY</option>
                <option value="USD/TWD">USD/TWD</option>
                <option value="USD/ZAR">USD/ZAR</option>
                <option value="ZAR/JPY">ZAR/JPY</option>

                <!-- Scandinavian & Exotic Crosses -->
                <option value="EUR/NOK">EUR/NOK</option>
                <option value="EUR/SEK">EUR/SEK</option>
                <option value="USD/NOK">USD/NOK</option>
                <option value="USD/SEK">USD/SEK</option>
                <option value="NOK/SEK">NOK/SEK</option>

                <!-- Middle Eastern & Gulf -->
                <option value="USD/SAR">USD/SAR</option>
                <option value="USD/AED">USD/AED</option>
                <option value="USD/QAR">USD/QAR</option>
                <option value="USD/KWD">USD/KWD</option>
                <option value="USD/BHD">USD/BHD</option>
                <option value="USD/OMR">USD/OMR</option>
                <option value="USD/JOD">USD/JOD</option>

                <!-- African Exotics -->
                <option value="USD/NGN">USD/NGN</option>
                <option value="USD/KES">USD/KES</option>
                <option value="USD/GHS">USD/GHS</option>
                <option value="USD/EGP">USD/EGP</option>
                <option value="USD/MAD">USD/MAD</option>
                <option value="USD/TND">USD/TND</option>

                <!-- Asian Exotics -->
                <option value="USD/CNH">USD/CNH</option>
                <option value="USD/TWD">USD/TWD</option>
                <option value="USD/VND">USD/VND</option>
                <option value="USD/LKR">USD/LKR</option>
                <option value="USD/PKR">USD/PKR</option>
                <option value="USD/BDT">USD/BDT</option>
                <option value="USD/NPR">USD/NPR</option>

                <!-- Latin America -->
                <option value="USD/ARS">USD/ARS</option>
                <option value="USD/BRL">USD/BRL</option>
                <option value="USD/CLP">USD/CLP</option>
                <option value="USD/COP">USD/COP</option>
                <option value="USD/PEN">USD/PEN</option>
                <option value="USD/BOB">USD/BOB</option>
                <option value="USD/PYG">USD/PYG</option>

                <!-- Emerging Europe -->
                <option value="USD/PLN">USD/PLN</option>
                <option value="EUR/PLN">EUR/PLN</option>
                <option value="USD/HUF">USD/HUF</option>
                <option value="EUR/HUF">EUR/HUF</option>
                <option value="USD/CZK">USD/CZK</option>
                <option value="USD/RON">USD/RON</option>
                <option value="USD/UAH">USD/UAH</option>

                <!-- Rare but real pairs -->
                <option value="EUR/HRK">EUR/HRK</option>
                <option value="EUR/RSD">EUR/RSD</option>
                <option value="EUR/ISK">EUR/ISK</option>
                <option value="EUR/TRY">EUR/TRY</option>
                <option value="GBP/TRY">GBP/TRY</option>
                <option value="USD/TRY">USD/TRY</option>

              </select>
            </div>

            <div class="form-group">
              <label class="label">Stop Loss</label>
              <input type="text" placeholder="Enter Stop Loss" v-model="stopLoss"  name="Stop Loss"  required/>
            </div>

            <div class="form-group">
              <label class="label">Take Profit</label>
              <input type="text" placeholder="Enter Take Profit" v-model="takeProfit" name="Take Profit"  required/>
            </div>

            <div class="form-group">
              <label class="label">Entry Price</label>
              <input type="text" placeholder="Enter Entry Price" v-model="entryPrice"  name="Entry Price"  required/>
            </div>

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType">
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Call">Call</option>
                <option value="Put">Put</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button  style="  background-color: #007aff;border: 1px solid #007aff;" :loading="loading" >Place Trade </base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'Crypto'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE CRYPTO - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="text" placeholder="Enter Amount"  name="Amount" v-model="amountTrade"  required/>
            </div>



            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded">
                <option value="" disabled selected>Select Crypto Pair</option>
                <option :value="null" disabled>Select Crypto Pair</option>

                <option value="1INCH/BTC">1INCH/BTC</option>
                <option value="1INCH/ETH">1INCH/ETH</option>
                <option value="1INCH/USDT">1INCH/USDT</option>
                <option value="AAVE/BTC">AAVE/BTC</option>
                <option value="AAVE/ETH">AAVE/ETH</option>
                <option value="AAVE/USDT">AAVE/USDT</option>
                <option value="ACH/BTC">ACH/BTC</option>
                <option value="ACH/USDT">ACH/USDT</option>
                <option value="ADA/BTC">ADA/BTC</option>
                <option value="ADA/ETH">ADA/ETH</option>
                <option value="ADA/EUR">ADA/EUR</option>
                <option value="ADA/GBP">ADA/GBP</option>
                <option value="ADA/USDT">ADA/USDT</option>
                <option value="AGIX/USDT">AGIX/USDT</option>
                <option value="AGLD/USDT">AGLD/USDT</option>
                <option value="AKT/BTC">AKT/BTC</option>
                <option value="AKT/USDT">AKT/USDT</option>
                <option value="ALGO/BTC">ALGO/BTC</option>
                <option value="ALGO/ETH">ALGO/ETH</option>
                <option value="ALGO/EUR">ALGO/EUR</option>
                <option value="ALGO/USDT">ALGO/USDT</option>
                <option value="ALICE/BTC">ALICE/BTC</option>
                <option value="ALICE/USDT">ALICE/USDT</option>
                <option value="ALPACA/USDT">ALPACA/USDT</option>
                <option value="ALT/USDT">ALT/USDT</option>
                <option value="AMB/USDT">AMB/USDT</option>
                <option value="ANKR/BTC">ANKR/BTC</option>
                <option value="ANKR/USDT">ANKR/USDT</option>
                <option value="ANT/BTC">ANT/BTC</option>
                <option value="ANT/USDT">ANT/USDT</option>
                <option value="APE/BTC">APE/BTC</option>
                <option value="APE/ETH">APE/ETH</option>
                <option value="APE/USDT">APE/USDT</option>
                <option value="API3/BTC">API3/BTC</option>
                <option value="API3/USDT">API3/USDT</option>
                <option value="APT/BTC">APT/BTC</option>
                <option value="APT/ETH">APT/ETH</option>
                <option value="APT/USDT">APT/USDT</option>
                <option value="AR/BTC">AR/BTC</option>
                <option value="AR/USDT">AR/USDT</option>
                <option value="ARB/BTC">ARB/BTC</option>
                <option value="ARB/ETH">ARB/ETH</option>
                <option value="ARB/USDT">ARB/USDT</option>
                <option value="ARK/USDT">ARK/USDT</option>
                <option value="ARKM/USDT">ARKM/USDT</option>
                <option value="ASTR/BTC">ASTR/BTC</option>
                <option value="ASTR/USDT">ASTR/USDT</option>
                <option value="ATOM/BTC">ATOM/BTC</option>
                <option value="ATOM/ETH">ATOM/ETH</option>
                <option value="ATOM/EUR">ATOM/EUR</option>
                <option value="ATOM/USDT">ATOM/USDT</option>
                <option value="AUDIO/BTC">AUDIO/BTC</option>
                <option value="AUDIO/USDT">AUDIO/USDT</option>
                <option value="AVAX/BTC">AVAX/BTC</option>
                <option value="AVAX/ETH">AVAX/ETH</option>
                <option value="AVAX/EUR">AVAX/EUR</option>
                <option value="AVAX/USDT">AVAX/USDT</option>
                <option value="AXS/BTC">AXS/BTC</option>
                <option value="AXS/ETH">AXS/ETH</option>
                <option value="AXS/USDT">AXS/USDT</option>
                <option value="BABYDOGE/USDT">BABYDOGE/USDT</option>
                <option value="BAKE/USDT">BAKE/USDT</option>
                <option value="BAL/USDT">BAL/USDT</option>
                <option value="BAND/BTC">BAND/BTC</option>
                <option value="BAND/USDT">BAND/USDT</option>
                <option value="BAT/BTC">BAT/BTC</option>
                <option value="BAT/USDT">BAT/USDT</option>
                <option value="BCH/BTC">BCH/BTC</option>
                <option value="BCH/ETH">BCH/ETH</option>
                <option value="BCH/EUR">BCH/EUR</option>
                <option value="BCH/GBP">BCH/GBP</option>
                <option value="BCH/USDT">BCH/USDT</option>
                <option value="BEAM/USDT">BEAM/USDT</option>
                <option value="BEL/USDT">BEL/USDT</option>
                <option value="BIGTIME/USDT">BIGTIME/USDT</option>
                <option value="BLUR/BTC">BLUR/BTC</option>
                <option value="BLUR/USDT">BLUR/USDT</option>
                <option value="BLZ/USDT">BLZ/USDT</option>
                <option value="BNB/BTC">BNB/BTC</option>
                <option value="BNB/ETH">BNB/ETH</option>
                <option value="BNB/EUR">BNB/EUR</option>
                <option value="BNB/GBP">BNB/GBP</option>
                <option value="BNB/USDT">BNB/USDT</option>
                <option value="BNT/USDT">BNT/USDT</option>
                <option value="BNX/USDT">BNX/USDT</option>
                <option value="BOME/USDT">BOME/USDT</option>
                <option value="BSW/USDT">BSW/USDT</option>
                <option value="BTC/DAI">BTC/DAI</option>
                <option value="BTC/EUR">BTC/EUR</option>
                <option value="BTC/GBP">BTC/GBP</option>
                <option value="BTC/USDC">BTC/USDC</option>
                <option value="BTC/USDT">BTC/USDT</option>
                <option value="C98/USDT">C98/USDT</option>
                <option value="CAKE/BTC">CAKE/BTC</option>
                <option value="CAKE/USDT">CAKE/USDT</option>
                <option value="CELO/BTC">CELO/BTC</option>
                <option value="CELO/USDT">CELO/USDT</option>
                <option value="CELR/USDT">CELR/USDT</option>
                <option value="CFX/USDT">CFX/USDT</option>
                <option value="CHZ/BTC">CHZ/BTC</option>
                <option value="CHZ/USDT">CHZ/USDT</option>
                <option value="COMP/BTC">COMP/BTC</option>
                <option value="COMP/ETH">COMP/ETH</option>
                <option value="COMP/EUR">COMP/EUR</option>
                <option value="COMP/USDT">COMP/USDT</option>
                <option value="COTI/USDT">COTI/USDT</option>
                <option value="CRV/BTC">CRV/BTC</option>
                <option value="CRV/ETH">CRV/ETH</option>
                <option value="CRV/USDT">CRV/USDT</option>
                <option value="CTK/USDT">CTK/USDT</option>
                <option value="CVX/USDT">CVX/USDT</option>
                <option value="CYBER/USDT">CYBER/USDT</option>
                <option value="DENT/USDT">DENT/USDT</option>
                <option value="DGB/USDT">DGB/USDT</option>
                <option value="DOGE/BTC">DOGE/BTC</option>
                <option value="DOGE/ETH">DOGE/ETH</option>
                <option value="DOGE/EUR">DOGE/EUR</option>
                <option value="DOGE/GBP">DOGE/GBP</option>
                <option value="DOGE/USDT">DOGE/USDT</option>
                <option value="DOT/BTC">DOT/BTC</option>
                <option value="DOT/ETH">DOT/ETH</option>
                <option value="DOT/EUR">DOT/EUR</option>
                <option value="DOT/GBP">DOT/GBP</option>
                <option value="DOT/USDT">DOT/USDT</option>
                <option value="DUSK/USDT">DUSK/USDT</option>
                <option value="DYDX/BTC">DYDX/BTC</option>
                <option value="DYDX/USDT">DYDX/USDT</option>
                <option value="EGLD/BTC">EGLD/BTC</option>
                <option value="EGLD/USDT">EGLD/USDT</option>
                <option value="ENJ/BTC">ENJ/BTC</option>
                <option value="ENJ/USDT">ENJ/USDT</option>
                <option value="ENS/BTC">ENS/BTC</option>
                <option value="ENS/USDT">ENS/USDT</option>
                <option value="EOS/BTC">EOS/BTC</option>
                <option value="EOS/ETH">EOS/ETH</option>
                <option value="EOS/EUR">EOS/EUR</option>
                <option value="EOS/USD">EOS/USD</option>
                <option value="EOS/USDT">EOS/USDT</option>
                <option value="ETC/BTC">ETC/BTC</option>
                <option value="ETC/ETH">ETC/ETH</option>
                <option value="ETC/EUR">ETC/EUR</option>
                <option value="ETC/GBP">ETC/GBP</option>
                <option value="ETC/USDT">ETC/USDT</option>
                <option value="ETH/BTC">ETH/BTC</option>
                <option value="ETH/DAI">ETH/DAI</option>
                <option value="ETH/EUR">ETH/EUR</option>
                <option value="ETH/GBP">ETH/GBP</option>
                <option value="ETH/USDC">ETH/USDC</option>
                <option value="ETH/USDT">ETH/USDT</option>
                <option value="FET/BTC">FET/BTC</option>
                <option value="FET/USDT">FET/USDT</option>
                <option value="FIL/BTC">FIL/BTC</option>
                <option value="FIL/ETH">FIL/ETH</option>
                <option value="FIL/EUR">FIL/EUR</option>
                <option value="FIL/USDT">FIL/USDT</option>
                <option value="FLM/USDT">FLM/USDT</option>
                <option value="FLOW/BTC">FLOW/BTC</option>
                <option value="FLOW/USDT">FLOW/USDT</option>
                <option value="FTM/BTC">FTM/BTC</option>
                <option value="FTM/ETH">FTM/ETH</option>
                <option value="FTM/USDT">FTM/USDT</option>
                <option value="FXS/USDT">FXS/USDT</option>
                <option value="GALA/BTC">GALA/BTC</option>
                <option value="GALA/ETH">GALA/ETH</option>
                <option value="GALA/USDT">GALA/USDT</option>
                <option value="GAL/USDT">GAL/USDT</option>
                <option value="GMT/BTC">GMT/BTC</option>
                <option value="GMT/USDT">GMT/USDT</option>
                <option value="GMX/USDT">GMX/USDT</option>
                <option value="GRT/BTC">GRT/BTC</option>
                <option value="GRT/USDT">GRT/USDT</option>
                <option value="HBAR/BTC">HBAR/BTC</option>
                <option value="HBAR/USDT">HBAR/USDT</option>
                <option value="HFT/USDT">HFT/USDT</option>
                <option value="HIGH/USDT">HIGH/USDT</option>
                <option value="HNT/BTC">HNT/BTC</option>
                <option value="HNT/USDT">HNT/USDT</option>
                <option value="HOOK/USDT">HOOK/USDT</option>
                <option value="HOT/USDT">HOT/USDT</option>
                <option value="ICP/BTC">ICP/BTC</option>
                <option value="ICP/ETH">ICP/ETH</option>
                <option value="ICP/EUR">ICP/EUR</option>
                <option value="ICP/USDT">ICP/USDT</option>
                <option value="ICX/BTC">ICX/BTC</option>
                <option value="ICX/USDT">ICX/USDT</option>
                <option value="ID/USDT">ID/USDT</option>
                <option value="ILV/USDT">ILV/USDT</option>
                <option value="IMX/BTC">IMX/BTC</option>
                <option value="IMX/USDT">IMX/USDT</option>
                <option value="INJ/BTC">INJ/BTC</option>
                <option value="INJ/USDT">INJ/USDT</option>
                <option value="IO/USDT">IO/USDT</option>
                <option value="IOTA/BTC">IOTA/BTC</option>
                <option value="IOTA/USDT">IOTA/USDT</option>
                <option value="IOTX/USDT">IOTX/USDT</option>
                <option value="JASMY/USDT">JASMY/USDT</option>
                <option value="JTO/USDT">JTO/USDT</option>
                <option value="KAVA/BTC">KAVA/BTC</option>
                <option value="KAVA/USDT">KAVA/USDT</option>
                <option value="KDA/USDT">KDA/USDT</option>
                <option value="KLAY/USDT">KLAY/USDT</option>
                <option value="KNC/BTC">KNC/BTC</option>
                <option value="KNC/USDT">KNC/USDT</option>
                <option value="KSM/BTC">KSM/BTC</option>
                <option value="KSM/ETH">KSM/ETH</option>
                <option value="KSM/USDT">KSM/USDT</option>
                <option value="LDO/BTC">LDO/BTC</option>
                <option value="LDO/USDT">LDO/USDT</option>
                <option value="LEVER/USDT">LEVER/USDT</option>
                <option value="LINA/USDT">LINA/USDT</option>
                <option value="LINK/BTC">LINK/BTC</option>
                <option value="LINK/ETH">LINK/ETH</option>
                <option value="LINK/EUR">LINK/EUR</option>
                <option value="LINK/GBP">LINK/GBP</option>
                <option value="LINK/USDT">LINK/USDT</option>
                <option value="LIT/USDT">LIT/USDT</option>
                <option value="LOOM/USDT">LOOM/USDT</option>
                <option value="LRC/BTC">LRC/BTC</option>
                <option value="LRC/USDT">LRC/USDT</option>
                <option value="LTC/BTC">LTC/BTC</option>
                <option value="LTC/ETH">LTC/ETH</option>
                <option value="LTC/EUR">LTC/EUR</option>
                <option value="LTC/GBP">LTC/GBP</option>
                <option value="LTC/USDT">LTC/USDT</option>
                <option value="LUNA/USDT">LUNA/USDT</option>
                <option value="MAGIC/USDT">MAGIC/USDT</option>
                <option value="MANA/BTC">MANA/BTC</option>
                <option value="MANA/ETH">MANA/ETH</option>
                <option value="MANA/USDT">MANA/USDT</option>
                <option value="MASK/USDT">MASK/USDT</option>
                <option value="MATIC/BTC">MATIC/BTC</option>
                <option value="MATIC/ETH">MATIC/ETH</option>
                <option value="MATIC/EUR">MATIC/EUR</option>
                <option value="MATIC/USDT">MATIC/USDT</option>
                <option value="MAV/USDT">MAV/USDT</option>
                <option value="MINA/BTC">MINA/BTC</option>
                <option value="MINA/USDT">MINA/USDT</option>
                <option value="MKR/BTC">MKR/BTC</option>
                <option value="MKR/ETH">MKR/ETH</option>
                <option value="MKR/USDT">MKR/USDT</option>
                <option value="MOVR/USDT">MOVR/USDT</option>
                <option value="MTL/USDT">MTL/USDT</option>
                <option value="NEAR/BTC">NEAR/BTC</option>
                <option value="NEAR/ETH">NEAR/ETH</option>
                <option value="NEAR/USDT">NEAR/USDT</option>
                <option value="NEO/BTC">NEO/BTC</option>
                <option value="NEO/ETH">NEO/ETH</option>
                <option value="NEO/EUR">NEO/EUR</option>
                <option value="NEO/USDT">NEO/USDT</option>
                <option value="NKN/USDT">NKN/USDT</option>
                <option value="NOT/USDT">NOT/USDT</option>
                <option value="OCEAN/BTC">OCEAN/BTC</option>
                <option value="OCEAN/USDT">OCEAN/USDT</option>
                <option value="OGN/USDT">OGN/USDT</option>
                <option value="OMG/BTC">OMG/BTC</option>
                <option value="OMG/USDT">OMG/USDT</option>
                <option value="ONE/USDT">ONE/USDT</option>
                <option value="ONDO/USDT">ONDO/USDT</option>
                <option value="OP/BTC">OP/BTC</option>
                <option value="OP/ETH">OP/ETH</option>
                <option value="OP/USDT">OP/USDT</option>
                <option value="ORDI/BTC">ORDI/BTC</option>
                <option value="ORDI/USDT">ORDI/USDT</option>
                <option value="PENDLE/USDT">PENDLE/USDT</option>
                <option value="PEOPLE/USDT">PEOPLE/USDT</option>
                <option value="PERP/USDT">PERP/USDT</option>
                <option value="PHB/USDT">PHB/USDT</option>
                <option value="QNT/BTC">QNT/BTC</option>
                <option value="QNT/USDT">QNT/USDT</option>
                <option value="QTUM/BTC">QTUM/BTC</option>
                <option value="QTUM/USDT">QTUM/USDT</option>
                <option value="RAD/USDT">RAD/USDT</option>
                <option value="REEF/USDT">REEF/USDT</option>
                <option value="REN/BTC">REN/BTC</option>
                <option value="REN/USDT">REN/USDT</option>
                <option value="RLC/USDT">RLC/USDT</option>
                <option value="RNDR/BTC">RNDR/BTC</option>
                <option value="RNDR/USDT">RNDR/USDT</option>
                <option value="ROSE/USDT">ROSE/USDT</option>
                <option value="RSR/USDT">RSR/USDT</option>
                <option value="RUNE/BTC">RUNE/BTC</option>
                <option value="RUNE/USDT">RUNE/USDT</option>
                <option value="RVN/USDT">RVN/USDT</option>
                <option value="SAND/BTC">SAND/BTC</option>
                <option value="SAND/ETH">SAND/ETH</option>
                <option value="SAND/USDT">SAND/USDT</option>
                <option value="SEI/BTC">SEI/BTC</option>
                <option value="SEI/USDT">SEI/USDT</option>
                <option value="SHIB/BTC">SHIB/BTC</option>
                <option value="SHIB/ETH">SHIB/ETH</option>
                <option value="SHIB/EUR">SHIB/EUR</option>
                <option value="SHIB/USDT">SHIB/USDT</option>
                <option value="SKL/USDT">SKL/USDT</option>
                <option value="SLP/USDT">SLP/USDT</option>
                <option value="SNX/BTC">SNX/BTC</option>
                <option value="SNX/USDT">SNX/USDT</option>
                <option value="SOL/BTC">SOL/BTC</option>
                <option value="SOL/ETH">SOL/ETH</option>
                <option value="SOL/EUR">SOL/EUR</option>
                <option value="SOL/GBP">SOL/GBP</option>
                <option value="SOL/USDT">SOL/USDT</option>
                <option value="SSV/USDT">SSV/USDT</option>
                <option value="STG/USDT">STG/USDT</option>
                <option value="STMX/USDT">STMX/USDT</option>
                <option value="STORJ/BTC">STORJ/BTC</option>
                <option value="STORJ/USDT">STORJ/USDT</option>
                <option value="STX/BTC">STX/BTC</option>
                <option value="STX/USDT">STX/USDT</option>
                <option value="SUI/BTC">SUI/BTC</option>
                <option value="SUI/USDT">SUI/USDT</option>
                <option value="SUSHI/BTC">SUSHI/BTC</option>
                <option value="SUSHI/USDT">SUSHI/USDT</option>
                <option value="SXP/USDT">SXP/USDT</option>
                <option value="THETA/BTC">THETA/BTC</option>
                <option value="THETA/USDT">THETA/USDT</option>
                <option value="TIA/BTC">TIA/BTC</option>
                <option value="TIA/USDT">TIA/USDT</option>
                <option value="TLM/USDT">TLM/USDT</option>
                <option value="TRX/BTC">TRX/BTC</option>
                <option value="TRX/ETH">TRX/ETH</option>
                <option value="TRX/EUR">TRX/EUR</option>
                <option value="TRX/USDT">TRX/USDT</option>
                <option value="TWT/USDT">TWT/USDT</option>
                <option value="UMA/USDT">UMA/USDT</option>
                <option value="UNFI/USDT">UNFI/USDT</option>
                <option value="UNI/BTC">UNI/BTC</option>
                <option value="UNI/ETH">UNI/ETH</option>
                <option value="UNI/EUR">UNI/EUR</option>
                <option value="UNI/USDT">UNI/USDT</option>
                <option value="VET/BTC">VET/BTC</option>
                <option value="VET/ETH">VET/ETH</option>
                <option value="VET/USDT">VET/USDT</option>
                <option value="WAVES/BTC">WAVES/BTC</option>
                <option value="WAVES/USDT">WAVES/USDT</option>
                <option value="WLD/USDT">WLD/USDT</option>
                <option value="WOO/USDT">WOO/USDT</option>
                <option value="XAI/USDT">XAI/USDT</option>
                <option value="XLM/BTC">XLM/BTC</option>
                <option value="XLM/ETH">XLM/ETH</option>
                <option value="XLM/EUR">XLM/EUR</option>
                <option value="XLM/USDT">XLM/USDT</option>
                <option value="XMR/BTC">XMR/BTC</option>
                <option value="XMR/USDT">XMR/USDT</option>
                <option value="XRP/BTC">XRP/BTC</option>
                <option value="XRP/ETH">XRP/ETH</option>
                <option value="XRP/EUR">XRP/EUR</option>
                <option value="XRP/GBP">XRP/GBP</option>
                <option value="XRP/USDT">XRP/USDT</option>
                <option value="XTZ/BTC">XTZ/BTC</option>
                <option value="XTZ/ETH">XTZ/ETH</option>
                <option value="XTZ/EUR">XTZ/EUR</option>
                <option value="XTZ/USDT">XTZ/USDT</option>
                <option value="YFI/BTC">YFI/BTC</option>
                <option value="YFI/ETH">YFI/ETH</option>
                <option value="YFI/USDT">YFI/USDT</option>
                <option value="ZEC/BTC">ZEC/BTC</option>
                <option value="ZEC/USDT">ZEC/USDT</option>
                <option value="ZEN/USDT">ZEN/USDT</option>
                <option value="ZIL/BTC">ZIL/BTC</option>
                <option value="ZIL/USDT">ZIL/USDT</option>
                <option value="ZRX/BTC">ZRX/BTC</option>
                <option value="ZRX/ETH">ZRX/ETH</option>
                <option value="ZRX/EUR">ZRX/EUR</option>
                <option value="ZRX/USDT">ZRX/USDT</option>

              </select>
            </div>

            <div class="form-group">
              <label class="label">Stop Loss</label>
              <input type="text" placeholder="Enter Stop Loss" v-model="stopLoss" name="Stop Loss"  required/>
            </div>

            <div class="form-group">
              <label class="label">Take Profit</label>
              <input type="text" placeholder="Enter Take Profit" v-model="takeProfit"  name="Take Profit"  required/>
            </div>

            <div class="form-group">
              <label class="label">Entry Price</label>
              <input type="text" placeholder="Enter Entry Price" v-model="entryPrice"  name="Entry Price"  required/>
            </div>

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType" >
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'CFD'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE CFD - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="text" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>


            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded">
                <option value="" disabled selected>Select CFD / Index / Commodity</option>
                <option :value="null" disabled>Select CFD / Index / Commodity</option>

                <!-- Major Global Indices -->
                <option value="ASX 200">ASX 200 (Australia 200)</option>
                <option value="AUS200">AUS200</option>
                <option value="Australia 200">Australia 200</option>
                <option value="CAC 40">CAC 40 (France 40)</option>
                <option value="FR40">FR40</option>
                <option value="China A50">China A50</option>
                <option value="CHN50">CHN50</option>
                <option value="DAX 40">DAX 40 (Germany 40)</option>
                <option value="GER40">GER40</option>
                <option value="Dow Jones">Dow Jones (US 30)</option>
                <option value="US30">US30</option>
                <option value="Wall Street 30">Wall Street 30</option>
                <option value="Euro Stoxx 50">Euro Stoxx 50</option>
                <option value="EU50">EU50</option>
                <option value="FTSE 100">FTSE 100 (UK 100)</option>
                <option value="UK100">UK100</option>
                <option value="Hang Seng">Hang Seng (HK50)</option>
                <option value="HK50">HK50</option>
                <option value="IBEX 35">IBEX 35 (Spain 35)</option>
                <option value="ES35">ES35</option>
                <option value="Japan 225">Japan 225 (Nikkei)</option>
                <option value="JP225">JP225</option>
                <option value="NASDAQ 100">NASDAQ 100 (US Tech 100)</option>
                <option value="USTECH100">USTECH100</option>
                <option value="S&P 500">S&P 500 (USA 500)</option>
                <option value="US500">US500</option>
                <option value="Switzerland 20">Switzerland 20 (SMI)</option>
                <option value="SWI20">SWI20</option>

                <!-- US Indices -->
                <option value="Russell 2000">Russell 2000 (US Small Cap)</option>
                <option value="US2000">US2000</option>
                <option value="S&P MidCap 400">S&P MidCap 400</option>
                <option value="US MidCap 400">US MidCap 400</option>
                <option value="Dow Transports">Dow Transports</option>
                <option value="Dow Utilities">Dow Utilities</option>

                <!-- European Indices -->
                <option value="AEX 25">AEX 25 (Netherlands)</option>
                <option value="NL25">NL25</option>
                <option value="ATX">ATX (Austria 20)</option>
                <option value="BEL 20">BEL 20 (Belgium)</option>
                <option value="PSI 20">PSI 20 (Portugal)</option>
                <option value="OMX Stockholm 30">OMX Stockholm 30 (Sweden)</option>
                <option value="OMX Copenhagen 25">OMX Copenhagen 25</option>
                <option value="OMX Helsinki 25">OMX Helsinki 25</option>
                <option value="Oslo OBX">Oslo OBX (Norway)</option>

                <!-- Asia & Emerging -->
                <option value="India 50">India 50 (NIFTY)</option>
                <option value="IND50">IND50</option>
                <option value="Singapore 30">Singapore 30 (STI)</option>
                <option value="Taiwan Index">Taiwan Index (TWSE)</option>
                <option value="KOSPI 200">KOSPI 200 (South Korea)</option>
                <option value="KOSPI">KOSPI</option>
                <option value="Malaysia 30">Malaysia 30 (KLCI)</option>
                <option value="Thailand 50">Thailand 50 (SET)</option>
                <option value="Vietnam 30">Vietnam 30 (VN30)</option>
                <option value="Indonesia 45">Indonesia 45 (JCI)</option>

                <!-- Middle East & Africa -->
                <option value="Saudi 30">Saudi 30 (TASI)</option>
                <option value="Tadawul All Share">Tadawul All Share</option>
                <option value="Qatar 20">Qatar 20</option>
                <option value="Dubai Index">Dubai Index</option>
                <option value="Abu Dhabi Index">Abu Dhabi Index</option>
                <option value="Kuwait 20">Kuwait 20</option>
                <option value="Egypt 30">Egypt 30</option>
                <option value="South Africa 40">South Africa 40 (Top40)</option>
                <option value="ZA40">ZA40</option>
                <option value="Kenya 20">Kenya 20</option>
                <option value="Nigeria 30">Nigeria 30</option>

                <!-- Latin America -->
                <option value="Brazil 50">Brazil 50 (Bovespa)</option>
                <option value="IBOV">IBOV</option>
                <option value="Mexico 35">Mexico 35 (IPC)</option>
                <option value="Chile 40">Chile 40 (IPSA)</option>
                <option value="Argentina 30">Argentina 30 (MERVAL)</option>
                <option value="Colombia 20">Colombia 20</option>
                <option value="Peru 25">Peru 25</option>

                <!-- Commodities - Energies -->
                <option value="Brent Crude Oil">Brent Crude Oil</option>
                <option value="UKOIL">UKOIL</option>
                <option value="WTI Crude Oil">WTI Crude Oil (West Texas)</option>
                <option value="USOIL">USOIL</option>
                <option value="Natural Gas">Natural Gas</option>
                <option value="NGAS">NGAS</option>
                <option value="Heating Oil">Heating Oil</option>
                <option value="Gasoline">Gasoline (RBOB)</option>

                <!-- Commodities - Metals -->
                <option value="Gold">Gold (XAU/USD)</option>
                <option value="XAUUSD">XAUUSD</option>
                <option value="Silver">Silver (XAG/USD)</option>
                <option value="XAGUSD">XAGUSD</option>
                <option value="Platinum">Platinum (XPT/USD)</option>
                <option value="XPTUSD">XPTUSD</option>
                <option value="Palladium">Palladium (XPD/USD)</option>
                <option value="XPDUSD">XPDUSD</option>
                <option value="Copper">Copper</option>
                <option value="COPPER">COPPER</option>

                <!-- Commodities - Softs & Ags -->
                <option value="Coffee">Coffee</option>
                <option value="COCOA">Cocoa</option>
                <option value="Cotton">Cotton</option>
                <option value="Sugar">Sugar</option>
                <option value="Wheat">Wheat</option>
                <option value="Corn">Corn</option>
                <option value="Soybeans">Soybeans</option>
                <option value="Orange Juice">Orange Juice</option>

                <!-- Bonds & Rates -->
                <option value="US 10Y Treasury">US 10Y Treasury Note</option>
                <option value="US10Y">US10Y</option>
                <option value="German 10Y Bund">German 10Y Bund</option>
                <option value="DE10Y">DE10Y</option>
                <option value="UK 10Y Gilt">UK 10Y Gilt</option>
                <option value="JP 10Y JGB">Japan 10Y JGB</option>
                <option value="Euro Bund">Euro Bund</option>
                <option value="Euro Bobl">Euro Bobl</option>
                <option value="Euro Schatz">Euro Schatz</option>

                <!-- Volatility & Special -->
                <option value="VIX">VIX Volatility Index</option>
                <option value="VIX">VIX</option>
                <option value="Dollar Index">Dollar Index (DXY)</option>
                <option value="DXY">DXY</option>
                <option value="FAANG Index">FAANG Index</option>
                <option value="Crypto Index">Crypto Index</option>

                <!-- Crypto CFDs (Top 50) -->
                <option value="BTCUSD">BTCUSD (Bitcoin)</option>
                <option value="ETHUSD">ETHUSD (Ethereum)</option>
                <option value="SOLUSD">SOLUSD (Solana)</option>
                <option value="XRPUSD">XRPUSD (Ripple)</option>
                <option value="ADAUSD">ADAUSD (Cardano)</option>
                <option value="DOGEUSD">DOGEUSD (Dogecoin)</option>
                <option value="BNBUSD">BNBUSD (Binance Coin)</option>
                <option value="AVAXUSD">AVAXUSD</option>
                <option value="LINKUSD">LINKUSD</option>
                <option value="DOTUSD">DOTUSD</option>
                <option value="MATICUSD">MATICUSD</option>
                <option value="LTCUSD">LTCUSD</option>
                <option value="BCHUSD">BCHUSD</option>
                <option value="SHIBUSD">SHIBUSD</option>
                <option value="TRXUSD">TRXUSD</option>
                <option value="UNIUSD">UNIUSD</option>
                <option value="APTUSD">APTUSD</option>
                <option value="HBARUSD">HBARUSD</option>
                <option value="VETUSD">VETUSD</option>
                <option value="FILUSD">FILUSD</option>

                <!-- More Exotic Indices -->
                <option value="Russia 50">Russia 50 (MOEX)</option>
                <option value="Turkey 100">Turkey 100 (BIST)</option>
                <option value="Poland 20">Poland 20 (WIG20)</option>
                <option value="Hungary 12">Hungary 12 (BUX)</option>
                <option value="Czech 20">Czech 20 (PX)</option>
                <option value="Greece 25">Greece 25 (ATG)</option>
                <option value="Israel 35">Israel 35 (TA35)</option>
                <option value="Pakistan 100">Pakistan 100 (KSE100)</option>
                <option value="Thailand 50">Thailand 50</option>
                <option value="Philippines 30">Philippines 30 (PSEi)</option>
                <option value="Indonesia 45">Indonesia 45</option>
                <option value="Vietnam 30">Vietnam 30</option>
                <option value="Morocco All Share">Morocco All Share</option>
                <option value="Kenya NSE 20">Kenya NSE 20</option>
                <option value="Nigeria All Share">Nigeria All Share</option>

                <!-- Rare & Exotic -->
                <option value="Iceland Index">Iceland Index</option>
                <option value="Baltic Index">Baltic Index</option>
                <option value="Cyprus Index">Cyprus Index</option>
                <option value="Malta Index">Malta Index</option>
                <option value="Jordan Index">Jordan Index</option>
                <option value="Lebanon Index">Lebanon Index</option>
                <option value="Kazakhstan Index">Kazakhstan Index</option>
                <option value="Uzbekistan Index">Uzbekistan Index</option>

              </select>
            </div>

            <div class="form-group">
              <label class="label">Stop Loss</label>
              <input type="text" placeholder="Enter Stop Loss" v-model="stopLoss" name="Stop Loss"  required/>
            </div>

            <div class="form-group">
              <label class="label">Take Profit</label>
              <input type="text" placeholder="Enter Take Profit" v-model="takeProfit"  name="Take Profit"  required/>
            </div>

            <div class="form-group">
              <label class="label">Entry Price</label>
              <input type="text" placeholder="Enter Entry Price" v-model="entryPrice"  name="Entry Price"  required/>
            </div>

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime">
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType" >
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade</base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'Stocks'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE STOCKS - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="text" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded">
                <option value="" disabled selected>Select Stock / Share</option>
                <option :value="null" disabled>Select Stock / Share</option>

                <!-- A -->
                <option value="ABBVIE INC (ABBV)">ABBVIE INC (ABBV)</option>
                <option value="ADIDAS AG (ADS.DE)">ADIDAS AG (ADS.DE)</option>
                <option value="ADOBE INC (ADBE)">ADOBE INC (ADBE)</option>
                <option value="ADVANCED MICRO DEVICES (AMD)">ADVANCED MICRO DEVICES (AMD)</option>
                <option value="AERCAP HOLDINGS (AER)">AERCAP HOLDINGS (AER)</option>
                <option value="AIR FRANCE-KLM (AF.PA)">AIR FRANCE-KLM (AF.PA)</option>
                <option value="AIRBNB INC (ABNB)">AIRBNB INC (ABNB)</option>
                <option value="AIRBUS SE (AIR.PA)">AIRBUS SE (AIR.PA)</option>
                <option value="AKBANK (AKBNK.IS)">AKBANK (AKBNK.IS)</option>
                <option value="ALIBABA GROUP (BABA)">ALIBABA GROUP (BABA)</option>
                <option value="ALLIANZ SE (ALV.DE)">ALLIANZ SE (ALV.DE)</option>
                <option value="ALPHABET INC (GOOGL)">ALPHABET INC (GOOGL)</option>
                <option value="ALPHABET INC CLASS C (GOOG)">ALPHABET INC CLASS C (GOOG)</option>
                <option value="ALSTOM SA (ALO.PA)">ALSTOM SA (ALO.PA)</option>
                <option value="AMAZON.COM INC (AMZN)">AMAZON.COM INC (AMZN)</option>
                <option value="AMERICAN EXPRESS (AXP)">AMERICAN EXPRESS (AXP)</option>
                <option value="ANHEUSER-BUSCH INBEV (ABI.BR)">ANHEUSER-BUSCH INBEV (ABI.BR)</option>
                <option value="APPLE INC (AAPL)">APPLE INC (AAPL)</option>
                <option value="ASML HOLDING (ASML)">ASML HOLDING (ASML)</option>
                <option value="ASTRAZENECA PLC (AZN)">ASTRAZENECA PLC (AZN)</option>
                <option value="AT&T INC (T)">AT&T INC (T)</option>

                <!-- B -->
                <option value="BAE SYSTEMS (BA.L)">BAE SYSTEMS (BA.L)</option>
                <option value="BANK OF AMERICA (BAC)">BANK OF AMERICA (BAC)</option>
                <option value="BARCLAYS PLC (BARC.L)">BARCLAYS PLC (BARC.L)</option>
                <option value="BAYER AG (BAYN.DE)">BAYER AG (BAYN.DE)</option>
                <option value="BAYERISCHE MOTOREN WERKE (BMW.DE)">BAYERISCHE MOTOREN WERKE (BMW.DE)</option>
                <option value="BHP GROUP (BHP)">BHP GROUP (BHP)</option>
                <option value="BLACKROCK INC (BLK)">BLACKROCK INC (BLK)</option>
                <option value="BNP PARIBAS (BNP.PA)">BNP PARIBAS (BNP.PA)</option>
                <option value="BOEING CO (BA)">BOEING CO (BA)</option>
                <option value="BOOKING HOLDINGS (BKNG)">BOOKING HOLDINGS (BKNG)</option>
                <option value="BP PLC (BP.L)">BP PLC (BP.L)</option>
                <option value="BRITISH AMERICAN TOBACCO (BATS.L)">BRITISH AMERICAN TOBACCO (BATS.L)</option>

                <!-- C -->
                <option value="CANON INC (7751.T)">CANON INC (7751.T)</option>
                <option value="CARNIVAL CORP (CCL)">CARNIVAL CORP (CCL)</option>
                <option value="CATERPILLAR INC (CAT)">CATERPILLAR INC (CAT)</option>
                <option value="CHEVRON CORP (CVX)">CHEVRON CORP (CVX)</option>
                <option value="CISCO SYSTEMS INC (CSCO)">CISCO SYSTEMS INC (CSCO)</option>
                <option value="CITIGROUP INC (C)">CITIGROUP INC (C)</option>
                <option value="COCA-COLA CO (KO)">COCA-COLA CO (KO)</option>
                <option value="COINBASE GLOBAL (COIN)">COINBASE GLOBAL (COIN)</option>
                <option value="COMCAST CORP (CMCSA)">COMCAST CORP (CMCSA)</option>
                <option value="CONOCOPHILLIPS (COP)">CONOCOPHILLIPS (COP)</option>
                <option value="CREDIT AGRICOLE (ACA.PA)">CREDIT AGRICOLE (ACA.PA)</option>

                <!-- D -->
                <option value="DANSKE BANK (DANSKE.CO)">DANSKE BANK (DANSKE.CO)</option>
                <option value="DEUTSCHE BANK AG (DBK.DE)">DEUTSCHE BANK AG (DBK.DE)</option>
                <option value="DEUTSCHE POST AG (DPW.DE)">DEUTSCHE POST AG (DPW.DE)</option>
                <option value="DEUTSCHE TELEKOM AG (DTE.DE)">DEUTSCHE TELEKOM AG (DTE.DE)</option>
                <option value="DIAGEO PLC (DGE.L)">DIAGEO PLC (DGE.L)</option>
                <option value="DISNEY WALT CO (DIS)">DISNEY WALT CO (DIS)</option>
                <option value="DOW INC (DOW)">DOW INC (DOW)</option>

                <!-- E -->
                <option value="EBAY INC (EBAY)">EBAY INC (EBAY)</option>
                <option value="ENEL SPA (ENEL.MI)">ENEL SPA (ENEL.MI)</option>
                <option value="ENI SPA (ENI.MI)">ENI SPA (ENI.MI)</option>
                <option value="EQUINOR ASA (EQNR.OL)">EQUINOR ASA (EQNR.OL)</option>
                <option value="ERICSSON (ERIC)">ERICSSON (ERIC)</option>
                <option value="ESSILORLUXOTTICA (EL.PA)">ESSILORLUXOTTICA (EL.PA)</option>
                <option value="EXXON MOBIL CORP (XOM)">EXXON MOBIL CORP (XOM)</option>

                <!-- F -->
                <option value="FACEBOOK INC (META)">FACEBOOK INC (META)</option>
                <option value="FEDEX CORP (FDX)">FEDEX CORP (FDX)</option>
                <option value="FERRARI NV (RACE)">FERRARI NV (RACE)</option>
                <option value="FORD MOTOR CO (F)">FORD MOTOR CO (F)</option>

                <!-- G -->
                <option value="GAZPROM (GAZP.ME)">GAZPROM (GAZP.ME)</option>
                <option value="GENERAL ELECTRIC (GE)">GENERAL ELECTRIC (GE)</option>
                <option value="GENERAL MOTORS (GM)">GENERAL MOTORS (GM)</option>
                <option value="GILEAD SCIENCES (GILD)">GILEAD SCIENCES (GILD)</option>
                <option value="GLAXOSMITHKLINE (GSK)">GLAXOSMITHKLINE (GSK)</option>
                <option value="GOLDMAN SACHS (GS)">GOLDMAN SACHS (GS)</option>

                <!-- H -->
                <option value="HERMES INTERNATIONAL (RMS.PA)">HERMES INTERNATIONAL (RMS.PA)</option>
                <option value="HOME DEPOT INC (HD)">HOME DEPOT INC (HD)</option>
                <option value="HONDA MOTOR CO (7267.T)">HONDA MOTOR CO (7267.T)</option>
                <option value="HSBC HOLDINGS PLC (HSBA.L)">HSBC HOLDINGS PLC (HSBA.L)</option>

                <!-- I -->
                <option value="IBM CORP (IBM)">IBM CORP (IBM)</option>
                <option value="INTEL CORP (INTC)">INTEL CORP (INTC)</option>
                <option value="ITAU UNIBANCO (ITUB4.SA)">ITAU UNIBANCO (ITUB4.SA)</option>

                <!-- J -->
                <option value="JOHNSON & JOHNSON (JNJ)">JOHNSON & JOHNSON (JNJ)</option>
                <option value="JPMORGAN CHASE & CO (JPM)">JPMORGAN CHASE & CO (JPM)</option>

                <!-- K -->
                <option value="KERING SA (KER.PA)">KERING SA (KER.PA)</option>
                <option value="KONINKLIJKE PHILIPS (PHG)">KONINKLIJKE PHILIPS (PHG)</option>

                <!-- L -->
                <option value="L'OREAL (OR.PA)">L'OREAL (OR.PA)</option>
                <option value="LVMH MOET HENNESSY (MC.PA)">LVMH MOET HENNESSY (MC.PA)</option>
                <option value="LOCKHEED MARTIN (LMT)">LOCKHEED MARTIN (LMT)</option>

                <!-- M -->
                <option value="MASTERCARD INC (MA)">MASTERCARD INC (MA)</option>
                <option value="MCDONALD'S CORP (MCD)">MCDONALD'S CORP (MCD)</option>
                <option value="MEDTRONIC PLC (MDT)">MEDTRONIC PLC (MDT)</option>
                <option value="META PLATFORMS (META)">META PLATFORMS (META)</option>
                <option value="MICROSOFT CORP (MSFT)">MICROSOFT CORP (MSFT)</option>
                <option value="MITSUBISHI UFJ (8306.T)">MITSUBISHI UFJ (8306.T)</option>
                <option value="MODERNA INC (MRNA)">MODERNA INC (MRNA)</option>
                <option value="MORGAN STANLEY (MS)">MORGAN STANLEY (MS)</option>

                <!-- N -->
                <option value="NESTLE SA (NESN.SW)">NESTLE SA (NESN.SW)</option>
                <option value="NETFLIX INC (NFLX)">NETFLIX INC (NFLX)</option>
                <option value="NIKE INC (NKE)">NIKE INC (NKE)</option>
                <option value="NIO INC (NIO)">NIO INC (NIO)</option>
                <option value="NOKIA CORP (NOK)">NOKIA CORP (NOK)</option>
                <option value="NOVARTIS AG (NOVN.SW)">NOVARTIS AG (NOVN.SW)</option>
                <option value="NOVO NORDISK (NOVO-B.CO)">NOVO NORDISK (NOVO-B.CO)</option>
                <option value="NVIDIA CORP (NVDA)">NVIDIA CORP (NVDA)</option>

                <!-- O -->
                <option value="ORACLE CORP (ORCL)">ORACLE CORP (ORCL)</option>

                <!-- P -->
                <option value="PAYPAL HOLDINGS (PYPL)">PAYPAL HOLDINGS (PYPL)</option>
                <option value="PEPSICO INC (PEP)">PEPSICO INC (PEP)</option>
                <option value="PFIZER INC (PFE)">PFIZER INC (PFE)</option>
                <option value="PROCTER & GAMBLE (PG)">PROCTER & GAMBLE (PG)</option>

                <!-- Q -->
                <option value="QUALCOMM INC (QCOM)">QUALCOMM INC (QCOM)</option>

                <!-- R -->
                <option value="RENAULT SA (RNO.PA)">RENAULT SA (RNO.PA)</option>
                <option value="RIO TINTO PLC (RIO.L)">RIO TINTO PLC (RIO.L)</option>
                <option value="ROBLOX CORP (RBLX)">ROBLOX CORP (RBLX)</option>
                <option value="ROCHE HOLDING (ROG.SW)">ROCHE HOLDING (ROG.SW)</option>
                <option value="ROYAL DUTCH SHELL (SHEL)">ROYAL DUTCH SHELL (SHEL)</option>

                <!-- S -->
                <option value="SALESFORCE INC (CRM)">SALESFORCE INC (CRM)</option>
                <option value="SAMSUNG ELECTRONICS (005930.KS)">SAMSUNG ELECTRONICS (005930.KS)</option>
                <option value="SANOFI SA (SAN.PA)">SANOFI SA (SAN.PA)</option>
                <option value="SAP SE (SAP.DE)">SAP SE (SAP.DE)</option>
                <option value="SHELL PLC (SHEL.L)">SHELL PLC (SHEL.L)</option>
                <option value="SIEMENS AG (SIE.DE)">SIEMENS AG (SIE.DE)</option>
                <option value="SNAP INC (SNAP)">SNAP INC (SNAP)</option>
                <option value="SONY CORP (6758.T)">SONY CORP (6758.T)</option>
                <option value="SPOTIFY TECHNOLOGY (SPOT)">SPOTIFY TECHNOLOGY (SPOT)</option>
                <option value="STARBUCKS CORP (SBUX)">STARBUCKS CORP (SBUX)</option>
                <option value="STELLANTIS NV (STLA)">STELLANTIS NV (STLA)</option>

                <!-- T -->
                <option value="TAIWAN SEMICONDUCTOR (TSM)">TAIWAN SEMICONDUCTOR (TSM)</option>
                <option value="TATA MOTORS (TATAMOTORS.NS)">TATA MOTORS (TATAMOTORS.NS)</option>
                <option value="TESLA INC (TSLA)">TESLA INC (TSLA)</option>
                <option value="TOYOTA MOTOR CORP (7203.T)">TOYOTA MOTOR CORP (7203.T)</option>
                <option value="TWITTER INC (TWTR)">TWITTER INC (TWTR)</option>

                <!-- U -->
                <option value="UBER TECHNOLOGIES (UBER)">UBER TECHNOLOGIES (UBER)</option>
                <option value="UBS GROUP AG (UBSG.SW)">UBS GROUP AG (UBSG.SW)</option>
                <option value="UNILEVER PLC (ULVR.L)">UNILEVER PLC (ULVR.L)</option>
                <option value="UNITEDHEALTH GROUP (UNH)">UNITEDHEALTH GROUP (UNH)</option>

                <!-- V -->
                <option value="VISA INC (V)">VISA INC (V)</option>
                <option value="VOLKSWAGEN AG (VOW3.DE)">VOLKSWAGEN AG (VOW3.DE)</option>

                <!-- W -->
                <option value="WALMART INC (WMT)">WALMART INC (WMT)</option>
                <option value="WELLS FARGO & CO (WFC)">WELLS FARGO & CO (WFC)</option>

                <!-- X Y Z -->
                <option value="XIAOMI CORP (1810.HK)">XIAOMI CORP (1810.HK)</option>
                <option value="ZOOM VIDEO COMMUNICATIONS (ZM)">ZOOM VIDEO COMMUNICATIONS (ZM)</option>
                <option value="ZOMATO LTD (ZOMATO.NS)">ZOMATO LTD (ZOMATO.NS)</option>

              </select>
            </div>

            <div class="form-group">
              <label class="label">Stop Loss</label>
              <input type="text" placeholder="Enter Stop Loss" v-model="stopLoss"  name="Stop Loss"  required/>
            </div>

            <div class="form-group">
              <label class="label">Take Profit</label>
              <input type="text" placeholder="Enter Take Profit" v-model="takeProfit" name="Take Profit"  required/>
            </div>

            <div class="form-group">
              <label class="label">Entry Price</label>
              <input type="text" placeholder="Enter Entry Price" v-model="entryPrice"  name="Entry Price"  required/>
            </div>

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType">
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade </base-button>
          </form>

          <form ref="myForm" v-show="this.placeTradeStatus === 'RealEstate'" class="form-part" @submit.prevent="placeTrade">

            <div class="form-header">
              <p style="font-weight: bold;color: #FFFFFF;">TRADE REALESTATE - PLACE TRADE</p>
            </div>

            <div class="form-group">
              <label class="label">Amount</label>
              <input type="text" placeholder="Enter Amount"  name="Amount" v-model="amountTrade" required/>
            </div>

            <div class="form-group">
              <label class="label">Markets</label>
              <select name="tradingPair" id="tradingPair" required v-model="symbolTraded">
                <option value="" disabled selected>Select Real Estate / REIT</option>
                <option :value="null" disabled>Select Real Estate / REIT</option>

                <!-- UNITED STATES -->
                <option value="Agree Realty Corporation (ADC)">Agree Realty Corporation (ADC)</option>
                <option value="American Assets Trust (AAT)">American Assets Trust (AAT)</option>
                <option value="American Homes 4 Rent (AMH)">American Homes 4 Rent (AMH)</option>
                <option value="American Tower Corporation (AMT)">American Tower Corporation (AMT)</option>
                <option value="Americold Realty Trust (COLD)">Americold Realty Trust (COLD)</option>
                <option value="Annaly Capital Management (NLY)">Annaly Capital Management (NLY)</option>
                <option value="AGNC Investment Corp (AGNC)">AGNC Investment Corp (AGNC)</option>
                <option value="Apartment Income REIT (AIRC)">Apartment Income REIT (AIRC)</option>
                <option value="Alexandria Real Estate Equities (ARE)">Alexandria Real Estate Equities (ARE)</option>
                <option value="AvalonBay Communities (AVB)">AvalonBay Communities (AVB)</option>
                <option value="Boston Properties (BXP)">Boston Properties (BXP)</option>
                <option value="Brandywine Realty Trust (BDN)">Brandywine Realty Trust (BDN)</option>
                <option value="Broadstone Net Lease (BNL)">Broadstone Net Lease (BNL)</option>
                <option value="Camden Property Trust (CPT)">Camden Property Trust (CPT)</option>
                <option value="CBL & Associates Properties (CBL)">CBL & Associates Properties (CBL)</option>
                <option value="Crown Castle Inc (CCI)">Crown Castle Inc (CCI)</option>
                <option value="Cubesmart (CUBE)">Cubesmart (CUBE)</option>
                <option value="Digital Realty Trust (DLR)">Digital Realty Trust (DLR)</option>
                <option value="Duke Realty Corporation (DRE)">Duke Realty Corporation (DRE)</option>
                <option value="EastGroup Properties (EGP)">EastGroup Properties (EGP)</option>
                <option value="Equity Residential (EQR)">Equity Residential (EQR)</option>
                <option value="Essex Property Trust (ESS)">Essex Property Trust (ESS)</option>
                <option value="Extra Space Storage (EXR)">Extra Space Storage (EXR)</option>
                <option value="Federal Realty Investment Trust (FRT)">Federal Realty Investment Trust (FRT)</option>
                <option value="First Industrial Realty Trust (FR)">First Industrial Realty Trust (FR)</option>
                <option value="Gaming and Leisure Properties (GLPI)">Gaming and Leisure Properties (GLPI)</option>
                <option value="Healthpeak Properties (PEAK)">Healthpeak Properties (PEAK)</option>
                <option value="Healthcare Realty Trust (HR)">Healthcare Realty Trust (HR)</option>
                <option value="Host Hotels & Resorts (HST)">Host Hotels & Resorts (HST)</option>
                <option value="Iron Mountain Inc (IRM)">Iron Mountain Inc (IRM)</option>
                <option value="Invitation Homes (INVH)">Invitation Homes (INVH)</option>
                <option value="Kilroy Realty Corporation (KRC)">Kilroy Realty Corporation (KRC)</option>
                <option value="Kimco Realty Corporation (KIM)">Kimco Realty Corporation (KIM)</option>
                <option value="Lamar Advertising Company (LAMR)">Lamar Advertising Company (LAMR)</option>
                <option value="Life Storage (LSI)">Life Storage (LSI)</option>
                <option value="Macerich Company (MAC)">Macerich Company (MAC)</option>
                <option value="Medical Properties Trust (MPW)">Medical Properties Trust (MPW)</option>
                <option value="Mid-America Apartment Communities (MAA)">Mid-America Apartment Communities (MAA)</option>
                <option value="National Retail Properties (NNN)">National Retail Properties (NNN)</option>
                <option value="Omega Healthcare Investors (OHI)">Omega Healthcare Investors (OHI)</option>
                <option value="Park Hotels & Resorts (PK)">Park Hotels & Resorts (PK)</option>
                <option value="Prologis Inc (PLD)">Prologis Inc (PLD)</option>
                <option value="Public Storage (PSA)">Public Storage (PSA)</option>
                <option value="Realty Income Corporation (O)">Realty Income Corporation (O)</option>
                <option value="Regency Centers Corporation (REG)">Regency Centers Corporation (REG)</option>
                <option value="Rexford Industrial Realty (REXR)">Rexford Industrial Realty (REXR)</option>
                <option value="SBA Communications (SBAC)">SBA Communications (SBAC)</option>
                <option value="Simon Property Group (SPG)">Simon Property Group (SPG)</option>
                <option value="STAG Industrial (STAG)">STAG Industrial (STAG)</option>
                <option value="Starwood Property Trust (STWD)">Starwood Property Trust (STWD)</option>
                <option value="Sun Communities (SUI)">Sun Communities (SUI)</option>
                <option value="Terreno Realty Corporation (TRNO)">Terreno Realty Corporation (TRNO)</option>
                <option value="UDR Inc (UDR)">UDR Inc (UDR)</option>
                <option value="Ventas Inc (VTR)">Ventas Inc (VTR)</option>
                <option value="VICI Properties (VICI)">VICI Properties (VICI)</option>
                <option value="Welltower Inc (WELL)">Welltower Inc (WELL)</option>
                <option value="W. P. Carey Inc (WPC)">W. P. Carey Inc (WPC)</option>

                <!-- CANADA -->
                <option value="Allied Properties REIT (AP.UN.TO)">Allied Properties REIT (AP.UN.TO)</option>
                <option value="Canadian Apartment Properties REIT (CAR.UN.TO)">Canadian Apartment Properties REIT (CAR.UN.TO)</option>
                <option value="Choice Properties REIT (CHP.UN.TO)">Choice Properties REIT (CHP.UN.TO)</option>
                <option value="CT REIT (CRT.UN.TO)">CT REIT (CRT.UN.TO)</option>
                <option value="Dream Industrial REIT (DIR.UN.TO)">Dream Industrial REIT (DIR.UN.TO)</option>
                <option value="Dream Office REIT (D.UN.TO)">Dream Office REIT (D.UN.TO)</option>
                <option value="First Capital REIT (FCR.UN.TO)">First Capital REIT (FCR.UN.TO)</option>
                <option value="Granite REIT (GRT.UN.TO)">Granite REIT (GRT.UN.TO)</option>
                <option value="H&R REIT (HR.UN.TO)">H&R REIT (HR.UN.TO)</option>
                <option value="Killam Apartment REIT (KMP.UN.TO)">Killam Apartment REIT (KMP.UN.TO)</option>
                <option value="NorthWest Healthcare Properties REIT (NWH.UN.TO)">NorthWest Healthcare Properties REIT (NWH.UN.TO)</option>
                <option value="RioCan Real Estate Investment Trust (REI.UN.TO)">RioCan Real Estate Investment Trust (REI.UN.TO)</option>
                <option value="SmartCentres REIT (SRU.UN.TO)">SmartCentres REIT (SRU.UN.TO)</option>
                <option value="StorageVault Canada (SVI.V)">StorageVault Canada (SVI.V)</option>

                <!-- AUSTRALIA -->
                <option value="Arena REIT (ARF.AX)">Arena REIT (ARF.AX)</option>
                <option value="Charter Hall Group (CHC.AX)">Charter Hall Group (CHC.AX)</option>
                <option value="Charter Hall Retail REIT (CQR.AX)">Charter Hall Retail REIT (CQR.AX)</option>
                <option value="DEXUS (DXS.AX)">DEXUS (DXS.AX)</option>
                <option value="Goodman Group (GMG.AX)">Goodman Group (GMG.AX)</option>
                <option value="GPT Group (GPT.AX)">GPT Group (GPT.AX)</option>
                <option value="Mirvac Group (MGR.AX)">Mirvac Group (MGR.AX)</option>
                <option value="Scentre Group (SCG.AX)">Scentre Group (SCG.AX)</option>
                <option value="Stockland (SGP.AX)">Stockland (SGP.AX)</option>
                <option value="Vicinity Centres (VCX.AX)">Vicinity Centres (VCX.AX)</option>

                <!-- UNITED KINGDOM -->
                <option value="British Land Company (BLND.L)">British Land Company (BLND.L)</option>
                <option value="Derwent London (DLN.L)">Derwent London (DLN.L)</option>
                <option value="Hammerson (HMSO.L)">Hammerson (HMSO.L)</option>
                <option value="Land Securities Group (LAND.L)">Land Securities Group (LAND.L)</option>
                <option value="Segro PLC (SGRO.L)">Segro PLC (SGRO.L)</option>
                <option value="Unite Group (UTG.L)">Unite Group (UTG.L)</option>

                <!-- EUROPE -->
                <option value="Aroundtown SA (AT1.DE)">Aroundtown SA (AT1.DE)</option>
                <option value="Inmobiliaria Colonial (COL.MC)">Inmobiliaria Colonial (COL.MC)</option>
                <option value="Kleppiere (LI.PA)">Kleppiere (LI.PA)</option>
                <option value="Merlin Properties (MRL.MC)">Merlin Properties (MRL.MC)</option>
                <option value="Unibail-Rodamco-Westfield (URW.AS)">Unibail-Rodamco-Westfield (URW.AS)</option>
                <option value="Vonovia SE (VNA.DE)">Vonovia SE (VNA.DE)</option>

                <!-- ASIA & SINGAPORE -->
                <option value="Ascendas REIT (A17U.SI)">Ascendas REIT (A17U.SI)</option>
                <option value="CapitaLand Integrated Commercial Trust (C38U.SI)">CapitaLand Integrated Commercial Trust (C38U.SI)</option>
                <option value="CapitaLand Investment (9CI.SI)">CapitaLand Investment (9CI.SI)</option>
                <option value="Frasers Logistics & Commercial Trust (BUOU.SI)">Frasers Logistics & Commercial Trust (BUOU.SI)</option>
                <option value="Keppel REIT (K71U.SI)">Keppel REIT (K71U.SI)</option>
                <option value="Mapletree Logistics Trust (M44U.SI)">Mapletree Logistics Trust (M44U.SI)</option>
                <option value="Mapletree Industrial Trust (ME8U.SI)">Mapletree Industrial Trust (ME8U.SI)</option>
                <option value="Sunway REIT (5176.KL)">Sunway REIT (5176.KL)</option>

                <!-- JAPAN -->
                <option value="Japan Real Estate Investment (8952.T)">Japan Real Estate Investment (8952.T)</option>
                <option value="Nippon Building Fund (8951.T)">Nippon Building Fund (8951.T)</option>

                <!-- SOUTH AFRICA -->
                <option value="Growthpoint Properties (GRT.JO)">Growthpoint Properties (GRT.JO)</option>
                <option value="Redefine Properties (RDF.JO)">Redefine Properties (RDF.JO)</option>

                <!-- GLOBAL & SPECIALTY -->
                <option value="Link REIT (0823.HK)">Link REIT (0823.HK)</option>
                <option value="Embassy Office Parks REIT (EMBASSY.NS)">Embassy Office Parks REIT (EMBASSY.NS)</option>
                <option value="Mindspace Business Parks REIT (MINDSPACE.NS)">Mindspace Business Parks REIT (MINDSPACE.NS)</option>

              </select>
            </div>

            <div class="form-group">
              <label class="label">Stop Loss</label>
              <input type="text" placeholder="Enter Stop Loss" v-model="stopLoss"  name="Stop Loss"  required/>
            </div>

            <div class="form-group">
              <label class="label">Take Profit</label>
              <input type="text" placeholder="Enter Take Profit" v-model="takeProfit"  name="Take Profit"  required/>
            </div>

            <div class="form-group">
              <label class="label">Entry Price</label>
              <input type="text" placeholder="Enter Entry Price" v-model="entryPrice" name="Entry Price"  required/>
            </div>

            <div class="form-group">
              <label class="label">Trade Interval (Time)</label>
              <select name="tradeInterval" id="tradeInterval" required v-model="tradeTime" >
                <option selected disabled value="">Trade Interval (Time)</option>
                <option :value="null" disabled>Trade Interval (Time)</option>
                <option value="1 min">1 min</option>
                <option value="3 min">3 min</option>
                <option value="5 min">5 min</option>
                <option value="15 mins">15 mins</option>
                <option value="30 mins">30 mins</option>
                <option value="1 hr">1 hr</option>
                <option value="2 hr">2 hr</option>
                <option value="1 day">1 day</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Type</label>
              <select name="tradeType" id="tradeType" required v-model="tradeType">
                <option selected disabled value="">Trade Type</option>
                <option :value="null" disabled>Trade Type</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </div>

            <div class="form-group">
              <label class="label">Trade Leverage</label>
              <select name="tradeLeverage" id="tradeLeverage" required v-model="leverage" >
                <option selected disabled value="">Trade Leverage</option>
                <option :value="null" disabled>Trade Leverage</option>
                <option value="0.5X">0.5X</option>
                <option value="1.0X">1.0X</option>
                <option value="1.5X">1.5X</option>
                <option value="2.0X">2.0X</option>
                <option value="5X">5X</option>
                <option value="10X">10X</option>
              </select>
            </div>

            <base-button :loading="loading" style="  background-color: #007aff;border: 1px solid #007aff;">Place Trade </base-button>
          </form>

          <trading-view-widget/>
        </div>

        <div class="blog" v-show="this.screen5 === 'placeTrade'">
          <financial-juice-widget/>
        </div>

        <div class="blog" v-show="this.screen5 === 'TradeHistory'">
          <blog-table/>
        </div>

      </div>
    </div>


    </div>

</template>

<script>
import StoreUtils from "@/utility/StoreUtils";
import TradeRequest from "@/model/request/TradeRequest";
import {mapState} from "vuex";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import Swal from "sweetalert2";
import BlogTable from "@/components/BaseComponents/tables/BlogTable.vue";
import FinancialJuiceWidget from "@/components/BaseComponents/widgets/FinancialJuiceWidget.vue";
import TradingViewWidget from "@/components/BaseComponents/widgets/TradingViewWidget.vue";


export default {
  name: "DashBoardOverView",
  components: {
    TradingViewWidget,
    FinancialJuiceWidget,
    BlogTable,
    //WatchListTable2,
    BaseButton,
    //WatchListTable,
    // IntroMessageModal
  },

  data () {
    return {
      model: new TradeRequest().createTrade,
      history: [],
      currentPage: 1,
      itemsPerPage: 5,
      screen1: "Forex",
      screen2: "Crypto",
      screen3: "CFD",
      screen4: "Stocks",
      screen5: "pnl",
      screen6: "RealEstate",
      userId: "",
      userInfo: "",
      currentDate: "",
      currentDate2: "",
      randomString: "",
      randomString2: "",
      amountTrade: "",
      symbolTraded: "",
      tradeTime: "",
      tradeType: "",
      leverage: "",
      dollars: 0,
      // bitcoin: null,
      bitcoinRate: null,
      dialogIsVisible: false,
      searchQuery: "", // Data property to hold the search input
      stopLoss: "",
      takeProfit: "",
      entryPrice: "",
    }
  },
  computed:{
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      // Filter trades based on searchQuery before slicing for pagination
      const filteredTrades = this.searchQuery.trim() ?
          this.readUserTrade.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.readUserTrade.trades;
      return filteredTrades.slice(startIndex, endIndex);
    },
    totalPages() {
      // Recalculate total pages based on filtered trades
      const filteredTrades = this.searchQuery.trim() ?
          this.readUserTrade.trades.filter(trade =>
              trade.tradeReference.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.symbolTraded.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              trade.tradeStatus.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) : this.readUserTrade.trades;
      return Math.ceil(filteredTrades.length / this.itemsPerPage);
    },
    UserInfo() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
    },
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    readUserTrade() {
      return StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)
    },
    isModalOpened() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)
    },
    placeTradeStatus() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
    },
    ...mapState({
      loading: state => state.trade.loading,
      auth: state => state.auth,
      // readUserTrade: state => state.trade.readUserTrade,
      // bitcoinRate: state => state.auth.bitcoinRate,
    }),
    bitcoin() {
      if (this.UserDetails.user && this.bitcoinRate) {
        return (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
      }
      return 'Loading...'; // or any default value when data isn't available yet
    }
  },

  watch: {
    // Automatically calculate the bitcoin value when userDetails or bitcoinRate changes
    UserDetails: {
      deep: true, // Ensure that nested changes in UserDetails are also tracked
      handler() {
        this.convertToBitcoin();
      }
    },
    bitcoinRate() {
      this.convertToBitcoin();
    }
  },

  methods: {

    scrollToTradeForm(tradeType) {
      // Update the trade type in Vuex (already done in toggleScreenX)
      this[`toggleScreen${tradeType === 'Forex' ? '' : tradeType === 'Crypto' ? '2' : tradeType === 'CFD' ? '3' : tradeType === 'Stocks' ? '4' : '5'}`]();

      // Only run smooth scroll on mobile (screen width <= 800px)
      if (window.innerWidth <= 800) {
        this.$nextTick(() => {
          const formSection = document.querySelector('.part-2');
          if (formSection) {
            formSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });

            // Optional: Add a small delay + highlight effect
            setTimeout(() => {
              formSection.style.transition = 'background 0.4s ease';
              formSection.style.background = 'rgba(16, 197, 94, 0.15)';
              setTimeout(() => {
                formSection.style.background = '';
              }, 800);
            }, 600);
          }
        });
      }
    },

    changeScreen(screen) {
      this.screen5 = screen;
    },

    // This method prepares all the necessary data before the API call
    async beforeAction() {
      // Load the userId from localStorage
      this.userId = localStorage.getItem('userId');
      if (!this.userId) {
        console.error("User ID is missing. Please log in.");
        return;
      }

      // Generate the necessary data before making the API call
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
    },


    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },


    checkId(){
      this.dialogIsVisible = this.UserDetails.user.frontId === "";
    },


    loadBitcoinRate() {
      this.bitcoinRate = localStorage.getItem('bitcoinRate') || null;
      if (!this.bitcoinRate) {
        console.log('Bitcoin rate not found, please reload or check the storage.');
      }
    },
    getUserDetails() {
      // Call your Store dispatch or API to get the user details
      StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId: localStorage.getItem('userId')
      });
    },


    convertToBitcoin() {
      if (!this.bitcoinRate) {
        console.log('Bitcoin rate not loaded. Please wait or try reloading the page.');
        return;
      }
      if (this.UserDetails.user && this.UserDetails.user.totalDepositedAmount) {
        this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
      } else {
        console.log('User details are not available.');
      }
    },

    onPostClick() {
      this.$router.push("/fund-wallet");
    },
    onPostClick2() {
      this.$router.push("/withdrawal");
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    filterTrades() {
      // Reset to the first page when filtering
      this.currentPage = 1;
    },


    toggleScreen() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, "Forex");
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = "Forex"
      // this.screen5 = "placeTrade"
    },
    toggleScreen2() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus,  this.screen2);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen2
      // this.screen5 = "placeTrade"
    },
    toggleScreen3() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen3);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen3
      // this.screen5 = "placeTrade"
    },
    toggleScreen4() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen4);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen4
      // this.screen5 = "placeTrade"
    },
    toggleScreen5() {
      StoreUtils.commit(StoreUtils.mutations.auth.updatePlaceTradeStatus, this.screen6);
      StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
      // this.screen1 = this.screen6
      // this.screen5 = "placeTrade"
    },


    // Call this method before the API call
    async placeTrade() {
      // Ensure all required functions are called and userId is loaded
      await this.beforeAction();

      // Check if userId is available before proceeding
      if (!this.userId) {
        console.error("User ID not available. Cannot place trade.");
        return;
      }

      if (this.UserDetails.user.totalDepositedAmount === 0) {
        await Swal.fire({
          icon: 'error',
          title: 'Cannot Perform Action',
          text: 'You cannot place a trade because your Account Balance is zero.',
        });
        return;
      }

      //
      // if (this.UserDetails.user.btcBalance === 0) {
      //   await Swal.fire({
      //     icon: 'error',
      //     title: 'Cannot Perform Action',
      //     text: 'You cannot place a trade because your Wallet Balance is zero.',
      //   });
      //   return;
      // }

      // Now make the API call using the prepared data
      await StoreUtils.dispatch(StoreUtils.actions.trade.tradeCreate, {
        userId: localStorage.getItem('userId'),
        tradeTime: this.currentDate,
        symbolTraded: this.symbolTraded,
        amountTrade: this.amountTrade,
        expectedPayout: 0,
        leverage: this.leverage,
        endPrice: this.randomString2,
        marketType: this.screen1,
        endTime: this.currentDate2,
        tradeStatus: "pending",
        tradeReference: this.randomString,
        tradeType: this.tradeType,
        stopLoss: this.stopLoss,
        takeProfit: this.takeProfit,
        entryPrice: this.entryPrice,
      });

      // Refresh trade history after the trade is placed
      await StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
        userId: localStorage.getItem('userId'),
      });

      // Clear form and regenerate new data for future trades
      this.clearForm();
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
    },

    clearForm(){
      this.tradeTime = "";
      this.symbolTraded = "";
      this.amountTrade = "";
      this.expectedPayout = "";
      this.leverage = "";
      this.endPrice = "";
      this.marketType = "";
      this.endTime = "";
      this.tradeStatus = "";
      this.tradeReference = "";
      this.tradeType = "";
      this.randomString = "";
      this.randomString2 = "";
      this.currentDate2 = "";
      this.currentDate = "";
      this.stopLoss = "";
      this.takeProfit = "";
      this.entryPrice = "";
    },

    // Function to get current date (YYYY-MM-DD format)
    getCurrentDate() {
      const today = new Date();
      this.currentDate2 = today.toISOString().split('T')[0];
    },

    // Function to get current date and time (YYYY-MM-DD HH:mm:ss format)
    getCurrentDateTime() {
      const today = new Date();
      this.currentDate = today.toISOString().slice(0, 19).replace("T", " ");
    },
    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    generateRandomString2() {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    },
  },

  beforeMount() {
    this.beforeAction();
    // Make sure to trigger the same logic before the component is mounted
    const userId = localStorage.getItem('userId');
    if (userId) {
      // Dispatch the API call if the userId exists
      StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
        userId: userId,
      });
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)

    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();
    this.loadBitcoinRate(); // Ensure bitcoinRate is loaded when the component is created
    this.getUserDetails();


    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  created() {
    this.beforeAction();
    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();
    this.loadBitcoinRate(); // Ensure bitcoinRate is loaded when the component is created
    this.getUserDetails();


    StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)

    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  mounted() {
    this.beforeAction();
    this.bitcoinRate = localStorage.getItem('bitcoinRate')
    this.bitcoin = (this.UserDetails.user.totalDepositedAmount / this.bitcoinRate).toFixed(8);
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();
    this.convertToBitcoin();
    this.checkId();

    this.loadBitcoinRate();
    if (this.UserDetails.user && this.bitcoinRate) {
      this.convertToBitcoin(); // Ensure bitcoin is calculated when mounted
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getPlaceTradeStatus)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getBitcoinRate)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getIsModalOpened)
    StoreUtils.rootGetters(StoreUtils.getters.trade.getReadUserTrade)

    StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
      userId : localStorage.getItem('userId'),
    });

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  }
}
</script>

<style scoped>


.icon{
  object-fit: contain;
  width: 30px;
  height: 30px;
  margin-bottom: 6px;
}

.trade-type-button {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  gap: 8px;
  margin: 8px 5px;
  padding: 0 10px;
}

.trade-btn {
  padding: 8px 16px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  height: 32px;
  min-width: 100px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.trade-btn:hover {
  box-shadow: 0px 2px 8px rgba(16, 24, 40, 0.3);
  transform: translateY(-1px);
}

.trade-btn-1 {
  background: #E50202;
}

.trade-btn-2 {
  background: #10d876;
}

.trade-btn-3 {
  background: #FE9431;
}

.trade-btn-4 {
  background: #5d78ff;
}

.trade-btn-5 {
  background: indianred;
}

/* Tablet screens (up to 800px) */
@media (max-width: 800px) {
  .trade-type-button {
    gap: 10px;
    justify-content: center;
    padding: 0 15px;
  }

  .trade-btn {
    flex: 1 1 45%; /* Two buttons per row */
    max-width: 160px;
    font-size: 11px;
    height: 34px;
    padding: 8px 12px;
  }
}

/* Mobile screens (up to 500px) */
@media (max-width: 500px) {
  .trade-type-button {
    flex-direction: column;
    gap: 8px;
    padding: 0 10px;
  }

  .trade-btn {
    width: 100%;
    max-width: 100%;
    font-size: 10px;
    height: 36px;
    padding: 8px 10px;
  }

  .trade-btn-5 {
    font-size: 10px; /* Slightly smaller for Real Estate to prevent overflow */
  }
}

/* Extra small screens (up to 360px) */
@media (max-width: 360px) {
  .trade-btn {
    font-size: 9px;
    height: 32px;
    padding: 6px 8px;
  }
}

.separator{
  display: flex;
}
.part-1{
  width: 60%;
  margin-right: 5px;
}

.part-2{
  width: 40%;
  background-color: rgb(7 12 20);
  padding-bottom: 15px;
}

.navigation-bar{
  background-color: rgb(7 12 20);
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding-bottom: 15px;
  padding-top: 15px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 1%;
  border-radius: 5px;
}

.navigation-bar-text-1{
  color: #FFFFFF;
  font-size: 12px;
}


.active {
  background-color: rgba(23, 35, 43, 0.5);
  color: #ffffff;
  padding: 13px 20px 12px 20px;
  border-radius: 5px;
}


.text-2{
  color: #770101;
  background-color: #facccc;
  border-color: #f8b8b8;
  position: relative;
  padding: 10px;
  margin-bottom: 0.5rem;
  font-size: 14px;
}
.status-pending{
  background-color: #FE9431;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.status-won{
  background-color: #10d876;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.status-lost{
  background-color: #E50202;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  padding: 2px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
i{
  font-size: 13px;
}
.table-sep{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 5px;
}
.empty-state-container{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.empty-state{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  margin-top: 5px;
  margin-bottom: 5px;
}



.form-header{
  padding-top: 5px;
  padding-bottom: 15px;
}




.form-group {
  margin-bottom: 15px;
}

.form-group input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 42px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 100%;
  background: #070C14FF;
  margin-top: 1.5%;
  color: #ffffff;
  border-radius: 4px;
}

.form-group input:focus {
  outline: none;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 42px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 100%;
  background: #070C14FF;
  margin-top: 1.5%;
  color: #ffffff;
  border-radius: 4px;
}

option{
  color: #667085;
}

.form-group select:focus {
  outline: none;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-part{
  width: 90%;
  margin: auto;
  border: 0.5px solid #3C4A57FF;
  padding: 22px 25px;
  border-radius: 5px;
  background: #0f171c;
}

.label{
  margin-left: 3%;
  font-size: 14px;
  color: #FFFFFF;
}

.body{
  margin-top: 10px;
}

h2{
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #ffffff;
  margin-left: 1.5%;
}
.row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.fg--search {
  background: none;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  color: #FFFFFF;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
  /*margin-top: 10px;*/
}
.table{
  margin-left: 3%;
  margin-right: 4%;
  margin-bottom: 1%;
}

tr{
  border: 0.5px solid #3C4A57FF;
}

th {
  background-color: #0f171c;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
}

td {
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 12px 8px;
  color: #ffffff;
  font-weight: 200;
  font-size: 12px;
}

.action-content{
  padding: 8px 10px;
  height: 36px;
  background: #0f171c;
  border: 0.5px solid #3C4A57FF;
  color: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  text-align: center;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #ffffff;
  font-size: 13px;
}


.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #ffffff;
  border: 0.5px solid #3C4A57FF;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #ffffff;
  font-weight: 200;
  font-size: 13px;
}

.name-wrapper-body {
  width: 12%;
  height: 100%;
  align-items: center;
  padding-left: 16px;
  display: flex;
}
.table-content {
  height: 35px;
  /*border-bottom: 1px solid rgba(0, 0, 0, .13);*/
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  display: flex;
  align-content: center;
}

.fa-search{
  color: #FFFFFF;
}






.main-content {
  display: flex;
  margin-left: 2.5px;
  margin-right: 10px;
  margin-bottom: 10px;
  gap: 10px;
}

@media (max-width: 800px) {
  .main-content {
    display: block;
    margin-left: unset;
    margin-right: unset;
    margin-bottom: 10px;
  }
}

.balance-section-2 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  align-content: center;


  background-color: #0f171c;
  padding: 1.2rem;
  width: 32%;
  height: 170px;
  border-radius: 7px;
  border: 0.5px solid #3C4A57FF;
}

@media (max-width: 800px) {
  .balance-section-2 {
    width: 97%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 5px;
  }
}

.balance {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 10px;
}

.balance-amount {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.amount {
  font-size: 1.4rem;
  font-weight: 500;
  color: #10d876;
}


.balance p {
  color: #ffffff;
  margin-top: 0.5rem;
}

.chart {
  height: 2rem;
}

.chart svg {
  width: 100%;
  height: 100%;
}

.profit-part {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 3rem;
  margin-bottom: 11px;
}

@media (max-width: 800px) {
  .profit-part {
    display: flex;
    gap: unset;
    justify-content: space-between;
  }
}

.metric-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #0f171c;
  padding: 1.2rem;
  width: 32%;
  height: 170px;
  border-radius: 7px;
  border: 0.5px solid #3C4A57FF;
}

@media (max-width: 800px) {
  .metric-card {
    width: 97%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
}
.metric-value {
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #10d876;
}

.metric-value-profit {
  font-size: 1.1rem;
  font-weight: 500;
  color: #10d876;
}

.metric-value-2 {
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgb(255 85 116);
}

.metric-value-profit-color {
  font-size: 0.7rem;
  font-weight: 500;

}

.metric-value-loss-color {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgb(255 85 116);
}

.metric-card p {
  color: #ffffff;
  margin-top: 0.5rem;
}





.table-wrapper {
  width: 100%;
  overflow: hidden; /* fallback */
  border-radius: 8px; /* optional: matches your design */
  margin-top: 15px;
}

.table-scroll {
  width: 100%;
  overflow-x: auto;           /* This enables horizontal scrolling */
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
  scrollbar-width: thin;      /* Firefox: thin scrollbar */
}

.table-scroll::-webkit-scrollbar {
  height: 8px;
}

.table-scroll::-webkit-scrollbar-track {
  background: #1e1e1e;
  border-radius: 4px;
}

.table-scroll::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 4px;
}

.table-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Make table take full width inside scroll container */
.table-scroll table {
  min-width: 1200px;     /* Force table to be wide enough so it scrolls */
  width: 100%;
  table-layout: auto;    /* or fixed if you want equal columns */
}

/* Optional: Sticky header (very nice UX) */
.table-scroll th {
  position: sticky;
  top: 0;
  z-index: 10;
}



@media (max-width: 800px) {

  .trade-type-button{
    display: flex;
    justify-content: center;
    gap: 20px;
  }


  .separator{
    display: block;
  }

  .part-1{
    width: 100%;
  }

  .part-2{
    width: 100%;
    margin-top: 5%;
  }


  .form-part {
    width: 95%;
    padding: 22px 25px;
    margin-top: 1%;
  }

  .form-group input {
    width: 100%;
  }


  .form-group select {
    width: 100%;
  }

  .tradingview_7a2ab-wrapper{
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }


  h2{
    font-size: 15px;
  }



  th {
    display: none;
  }

  table, thead, tbody, td, tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 0.5px solid #ccc;
  }

  td {
    /* Each cell is now a full-width row */
    border: none;
    position: relative;
    padding-left: 60%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 15px;
  }

  td:before {
    /* Use the data-label for the pseudo-element content */
    content: attr(data-label);
    position: absolute;
    left: 10px;
    padding-left: 5%;
    font-weight: bold;
  }

}

@media (max-width: 500px) {

  .form-part{
    max-width: unset;
    width: 97%;
    margin-top: 5%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .filter_group{
    display: none;
  }


  .empty-state-container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .empty-state{
    width: 30%;
  }

}

@media (max-width: 768px) {
  .table-scroll {
    overflow-x: hidden !important;
  }
  .table-scroll table {
    min-width: auto !important;
    width: 100% !important;
    table-layout: fixed;
    font-size: 13px;
  }
  .table-scroll td,
  .table-scroll th {
    padding: 6px 3px;
    white-space: normal;
  }
}

</style>