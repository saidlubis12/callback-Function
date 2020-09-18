function newCallback(nama, asal, callbackPulang) {
  console.log(nama, asal);
  callbackPulang();
}
function peluang() {
  console.log("pulang kampung");
}
newCallback("adi", "yusuf", peluang);
