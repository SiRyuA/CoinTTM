function GetData_Money(type, id) {
  let url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%3D%22"
          + type
          + "%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  let data;
  $.getJSON(url, function(result){
      $.each(result, function(i, field){
        data = parseInt(field.results.rate.Rate);
        document.getElementById(id).innerHTML = data;
      });
  });
}

function GetData_CoinMarket(coin, type, id, decimal) {
  let url = "https://api.coinmarketcap.com/v1/ticker/"+coin+"/?convert="+type;
  let data;
  $.getJSON(url, function(result){
    $.each(result, function(i, field){
      if(type == "USD") data = parseFloat(field.price_usd).toFixed(decimal);
      if(type == "KRW") data = parseFloat(field.price_krw).toFixed(decimal);
      if(type == "JPY") data = parseFloat(field.price_jpy).toFixed(decimal);
      if(type == "CNY") data = parseFloat(field.price_cny).toFixed(decimal);
      if(type == "EUR") data = parseFloat(field.price_eur).toFixed(decimal);
      if(type == "USDT") data = parseFloat(field.price_usdt).toFixed(decimal);
      if(type == "BTC") data = parseFloat(field.price_btc).toFixed(decimal);
      if(type == "ETH") data = parseFloat(field.price_btc).toFixed(decimal);
      document.getElementById(id).innerHTML = data;
    });
  });
}

function GetData_Poloniex(type, id, decimal) {
  let url = "https://poloniex.com/public?command=returnTicker";
  let data;
  $.getJSON(url, function(result){
    data = parseFloat(result[type].last).toFixed(decimal);
    document.getElementById(id).innerHTML = data;
  });
}

function GetData_Korbit(coin, id, decimal) {
  let url = "https://api.korbit.co.kr/v1/ticker/detailed?currency_pair="+coin+"_krw";
  let data;
  $.getJSON(url, function(result){
    data = parseFloat(result.last).toFixed(decimal);
    document.getElementById(id).innerHTML = data;
  });
}

function GetData_Bithumb(coin, id, decimal) {
  let url = "https://api.bithumb.com/public/ticker/"+coin;
  let data;
  $.getJSON(url, function(result){
    data = parseFloat(result.data.sell_price).toFixed(decimal);
    document.getElementById(id).innerHTML = data;
  });
}

function GetData_Coinone(coin, id, decimal) {
  let url = "https://api.coinone.co.kr/ticker/?format=json&currency="+coin;
  let data;
  $.getJSON(url, function(result){
    data = parseFloat(result.last).toFixed(decimal);
    document.getElementById(id).innerHTML = data;
  });
}

function GetData_KorDiffPer(idk, idu, outdiff, outper) {
  if(document.getElementById(idk[0]) != null) {
    let kor = 0;
    let usdt = 0;
    for(let i=0; i<idk.length;i++) kor += parseFloat(document.getElementById(idk[i]).innerHTML);
    for(let j=0; j<idu.length;j++) usdt += parseFloat(document.getElementById(idu[j]).innerHTML);
    kor = kor/idk.length;
    usdt = usdt/idu.length;
    let Diff = kor - usdt;
    let Pre = (Diff*100)/usdt;
    document.getElementById(outdiff).innerHTML = Diff.toFixed(0);
    document.getElementById(outper).innerHTML = Pre.toFixed(2);
  }
}


function GetData_Multiply(ids, output, dec) {
  if(document.getElementById(ids[0]) != null) {
    let val = parseFloat(document.getElementById(ids[0]).innerHTML);
    if(ids[1] != null) {
      for(let i=1;i<ids.length;i++) val *= parseFloat(document.getElementById(ids[i]).innerHTML);
    }
    document.getElementById(output).innerHTML = val.toFixed(dec);
  }
}

function GetData_D2D(ids, output) {
  if(document.getElementById(ids) != null) {
    document.getElementById(output).innerHTML = document.getElementById(ids).innerHTML;
  }
}

function GetData_Addition(ids, output, dec) {
  if(document.getElementById(ids[0]) != null) {
    let val = 0;
    for(let i=0;i<ids.length;i++) val += parseFloat(document.getElementById(ids[i]).innerHTML);
    document.getElementById(output).innerHTML = (val/(ids.length)).toFixed(dec);
  }
}
