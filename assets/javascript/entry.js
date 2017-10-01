document.addEventListener("DOMContentLoaded", ()=> {
  let params = 
  {
    fontColor: "green",
    backgroundColor: "black",
    apn: "Stylez",
    div: "#testbox",
    nextBtn: 10,
  };

  MYAPPs.renderNavbar(params);

  MYAPPs.showNextBtn();
});