$(document).ready(function() {
  GetData_ALL();
  setTimeout(function() {GetData_ALL();}, 5000);
  setTimeout(function() {GetData_ALL();}, 10000);
  setInterval(function() {GetData_ALL();}, 60000);
});

function GetData_ALL() {
  GetMoney();
  GetUSDT();
  GetBTC();
  GetETH();
  GetETC();
  GetXRP();
  GetSTRAT();
  GetDOGE();
  GetDASH();
  GetLTC();
  setTimeout(function() {GetHome();}, 1000);
}

function GetBTC() {
  GetData_CoinMarket("bitcoin", "USD", "CoinMarketUSD_BTC", 2);
  GetData_CoinMarket("bitcoin", "KRW", "CoinMarketKRW_BTC", 0);
  GetData_CoinMarket("bitcoin", "JPY", "CoinMarketJPY_BTC", 2);
  GetData_CoinMarket("bitcoin", "CNY", "CoinMarketCNY_BTC", 2);
  GetData_CoinMarket("bitcoin", "EUR", "CoinMarketEUR_BTC", 2);
  GetData_CoinMarket("bitcoin", "USDT", "CoinMarketUSDT_BTC", 2);
  GetData_Poloniex("USDT_BTC", "PoloniexUSDT_BTC");
  GetData_Multiply(["CoinMarketUSDT_KRW", "PoloniexUSDT_BTC"], "PoloniexKRW_BTC");
  GetData_Coinone("btc", "Coinone_BTC", 0);
  GetData_Korbit("btc", "Korbit_BTC", 0);
  GetData_Bithumb("btc", "Bithumb_BTC", 0);
  GetData_KorDiffPer(["Coinone_BTC", "Korbit_BTC", "Bithumb_BTC"], ["CoinMarketKRW_BTC", "PoloniexKRW_BTC"], "Diff_BTC", "Pre_BTC");
}

function GetETH() {
  GetData_CoinMarket("ethereum", "USD", "CoinMarketUSD_ETH", 2);
  GetData_CoinMarket("ethereum", "KRW", "CoinMarketKRW_ETH", 0);
  GetData_CoinMarket("ethereum", "JPY", "CoinMarketJPY_ETH", 2);
  GetData_CoinMarket("ethereum", "CNY", "CoinMarketCNY_ETH", 2);
  GetData_CoinMarket("ethereum", "EUR", "CoinMarketEUR_ETH", 2);
  GetData_CoinMarket("ethereum", "USDT", "CoinMarketUSDT_ETH", 2);
  GetData_Poloniex("USDT_ETH", "PoloniexUSDT_ETH", 2);
  GetData_Poloniex("BTC_ETH", "PoloniexBTC_ETH", 8);
  GetData_Multiply(["CoinMarketUSDT_KRW", "PoloniexUSDT_ETH"], "PoloniexKRW_ETH");
  GetData_Coinone("eth", "Coinone_ETH", 0);
  GetData_Korbit("eth", "Korbit_ETH", 0);
  GetData_Bithumb("eth", "Bithumb_ETH", 0);
  GetData_KorDiffPer(["Coinone_ETH", "Korbit_ETH", "Bithumb_ETH"], ["CoinMarketKRW_ETH", "PoloniexKRW_ETH"], "Diff_ETH", "Pre_ETH");
}

function GetETC() {
  GetData_CoinMarket("ethereum-classic", "USD", "CoinMarketUSD_ETC", 2);
  GetData_CoinMarket("ethereum-classic", "KRW", "CoinMarketKRW_ETC", 0);
  GetData_CoinMarket("ethereum-classic", "JPY", "CoinMarketJPY_ETC", 2);
  GetData_CoinMarket("ethereum-classic", "CNY", "CoinMarketCNY_ETC", 2);
  GetData_CoinMarket("ethereum-classic", "EUR", "CoinMarketEUR_ETC", 2);
  GetData_CoinMarket("ethereum-classic", "USDT", "CoinMarketUSDT_ETC", 2);
  GetData_Poloniex("USDT_ETC", "PoloniexUSDT_ETC", 2);
  GetData_Poloniex("BTC_ETC", "PoloniexBTC_ETC", 8);
  GetData_Multiply(["CoinMarketUSDT_KRW", "PoloniexUSDT_ETC"], "PoloniexKRW_ETC");
  GetData_Coinone("etc", "Coinone_ETC", 0);
  GetData_Korbit("etc", "Korbit_ETC", 0);
  GetData_Bithumb("etc", "Bithumb_ETC", 0);
  GetData_KorDiffPer(["Coinone_ETC", "Korbit_ETC", "Bithumb_ETC"], ["CoinMarketKRW_ETC", "PoloniexKRW_ETC"], "Diff_ETC", "Pre_ETC");
}

function GetXRP() {
  GetData_CoinMarket("ripple", "USD", "CoinMarketUSD_XRP", 2);
  GetData_CoinMarket("ripple", "KRW", "CoinMarketKRW_XRP", 0);
  GetData_CoinMarket("ripple", "JPY", "CoinMarketJPY_XRP", 2);
  GetData_CoinMarket("ripple", "CNY", "CoinMarketCNY_XRP", 2);
  GetData_CoinMarket("ripple", "EUR", "CoinMarketEUR_XRP", 2);
  GetData_CoinMarket("ripple", "USDT", "CoinMarketUSDT_XRP", 2);
  GetData_Poloniex("USDT_XRP", "PoloniexUSDT_XRP", 2);
  GetData_Poloniex("BTC_XRP", "PoloniexBTC_XRP", 8);
  GetData_Multiply(["CoinMarketUSDT_KRW", "PoloniexUSDT_XRP"], "PoloniexKRW_XRP");
  GetData_Coinone("xrp", "Coinone_XRP", 0);
  GetData_Korbit("xrp", "Korbit_XRP", 0);
  GetData_Bithumb("xrp", "Bithumb_XRP", 0);
  GetData_KorDiffPer(["Coinone_XRP", "Korbit_XRP", "Bithumb_XRP"], ["CoinMarketKRW_XRP", "PoloniexKRW_XRP"], "Diff_XRP", "Pre_XRP");
}

function GetSTRAT() {
  GetData_CoinMarket("stratis", "USD", "CoinMarketUSD_STRAT", 2);
  GetData_CoinMarket("stratis", "KRW", "CoinMarketKRW_STRAT", 0);
  GetData_CoinMarket("stratis", "JPY", "CoinMarketJPY_STRAT", 2);
  GetData_CoinMarket("stratis", "CNY", "CoinMarketCNY_STRAT", 2);
  GetData_CoinMarket("stratis", "EUR", "CoinMarketEUR_STRAT", 2);
  GetData_CoinMarket("stratis", "USDT", "CoinMarketUSDT_STRAT", 2);
  GetData_Poloniex("BTC_STRAT", "PoloniexBTC_STRAT", 8);
}

function GetDASH() {
  GetData_CoinMarket("dash", "USD", "CoinMarketUSD_DASH", 2);
  GetData_CoinMarket("dash", "KRW", "CoinMarketKRW_DASH", 0);
  GetData_CoinMarket("dash", "JPY", "CoinMarketJPY_DASH", 2);
  GetData_CoinMarket("dash", "CNY", "CoinMarketCNY_DASH", 2);
  GetData_CoinMarket("dash", "EUR", "CoinMarketEUR_DASH", 2);
  GetData_CoinMarket("dash", "USDT", "CoinMarketUSDT_DASH", 2);
  GetData_Poloniex("USDT_DASH", "PoloniexUSDT_DASH", 2);
  GetData_Poloniex("BTC_DASH", "PoloniexBTC_DASH", 8);
  GetData_Multiply(["CoinMarketUSDT_KRW", "PoloniexUSDT_DASH"], "PoloniexKRW_DASH");
  GetData_Bithumb("dash", "Bithumb_DASH", 0);
  GetData_KorDiffPer(["Bithumb_DASH"], ["CoinMarketKRW_DASH", "PoloniexKRW_DASH"], "Diff_DASH", "Pre_DASH");
}

function GetDOGE() {
  GetData_CoinMarket("dogecoin", "USD", "CoinMarketUSD_DOGE", 8);
  GetData_CoinMarket("dogecoin", "KRW", "CoinMarketKRW_DOGE", 0);
  GetData_CoinMarket("dogecoin", "JPY", "CoinMarketJPY_DOGE", 8);
  GetData_CoinMarket("dogecoin", "CNY", "CoinMarketCNY_DOGE", 8);
  GetData_CoinMarket("dogecoin", "EUR", "CoinMarketEUR_DOGE", 8);
  GetData_CoinMarket("dogecoin", "USDT", "CoinMarketUSDT_DOGE", 8);
  GetData_Poloniex("BTC_DOGE", "PoloniexBTC_DOGE", 8);
}

function GetLTC() {
  GetData_CoinMarket("litecoin", "USD", "CoinMarketUSD_LTC", 2);
  GetData_CoinMarket("litecoin", "KRW", "CoinMarketKRW_LTC", 0);
  GetData_CoinMarket("litecoin", "JPY", "CoinMarketJPY_LTC", 2);
  GetData_CoinMarket("litecoin", "CNY", "CoinMarketCNY_LTC", 2);
  GetData_CoinMarket("litecoin", "EUR", "CoinMarketEUR_LTC", 2);
  GetData_CoinMarket("litecoin", "USDT", "CoinMarketUSDT_LTC", 2);
  GetData_Poloniex("USDT_LTC", "PoloniexUSDT_LTC", 2);
  GetData_Poloniex("BTC_LTC", "PoloniexBTC_LTC", 8);
  GetData_Multiply(["CoinMarketUSDT_KRW", "PoloniexUSDT_LTC"], "PoloniexKRW_LTC");
  GetData_Bithumb("ltc", "Bithumb_LTC", 0);
  GetData_KorDiffPer(["Bithumb_LTC"], ["CoinMarketKRW_LTC", "PoloniexKRW_LTC"], "Diff_LTC", "Pre_LTC");
}
