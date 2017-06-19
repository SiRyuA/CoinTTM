const {remote, ipcRenderer} = require('electron');
var clipboard = new Clipboard('#copy');
window.$ = window.jQuery = require('./js/jquery.min.js');

$("#nav").load("./view/nav.html");
$("#home").load("./view/home.html");
$("#info").load("./view/info.html");
$("#guide").load("./view/guide.html");
$("#money").load("./view/money.html");
$("#usdt").load("./view/usdt.html");
$("#btc").load("./view/btc.html");
$("#eth").load("./view/eth.html");
$("#etc").load("./view/etc.html");
$("#xrp").load("./view/xrp.html");
$("#strat").load("./view/strat.html");
$("#doge").load("./view/doge.html");
$("#dash").load("./view/dash.html");
$("#ltc").load("./view/ltc.html");

$(document).ready(function() {
  document.getElementById("node").innerHTML = process.version;
  document.getElementById("chrome").innerHTML = process.versions.chrome;
  document.getElementById("electron").innerHTML = process.versions.electron;
});

function Appclose() {window.close();}

function AppMaxWindow() {
  $("#wmin").show();
  //$("#wmin").hide();
  $("#wmax").hide();
  //$("#wmini").show();
  self.moveTo(0,0);
  self.resizeTo(screen.availWidth,screen.availHeight);
}

function AppMinWindow() {
  $("#wmax").show();
  $("#wmin").hide();
  //$("#wmini").hide();
  //self.moveTo(0,0);
  self.resizeTo(400,600);
}

/*function AppMiniWindow() {
  $("#wmax").hide();
  $("#wmin").show();
  $("#wmini").hide();
  //self.moveTo(0,0);
  self.resizeTo(400,10);
}*/

function AppAlwaysOn() {
  $("#waon").hide();
  $("#waoff").show();
  let data = true;
  ipcRenderer.send('AlwaysOn', data);
}

function AppAlwaysOff() {
  $("#waon").show();
  $("#waoff").hide();
  let data = false;
  ipcRenderer.send('AlwaysOn', data);
}
