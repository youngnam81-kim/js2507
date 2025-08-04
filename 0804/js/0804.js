function dd(word) {
    alert(word);
}
function button1(btName) {
    alert(btName);
}
function changeBg(btName) {
    //document.getElementById("btn2").style.backgroundColor = "black";
    //let result = document.querySelector('#result');
    //result.style.backgroundColor = btName;
    result.style.backgroundColor = btName;
}
function qSelectAll() {
    //const x = document.querySelectorAll("p.intro"); //NodeList (유사 배열) 로 가져온다.
    const x = document.querySelectorAll("p"); //NodeList (유사 배열) 로 가져온다.
    const y = document.querySelector(".intro"); //0번째만 가져옴
    document.getElementById("result1").innerHTML = "--------------------";
    for (let i = 0; i < x.length; i++) {
        if (i % 2 == 0) {
            x[i].style.backgroundColor = "Purple";
        } else {
            x[i].style.backgroundColor = "Orange";
        }
    }
    /*  
                x[0].style.backgroundColor = "red";
                x[1].style.backgroundColor = "blue";
                */
    //y.style.backgroundColor = "blue";
}
function elementTest() {
    const frm = document.forms["frm1"];
    let txt = "";
    alert(frm.length);
    for (let i = 0; i < frm.length; i++) {
        txt = txt + frm[i].value;
    }
    document.getElementById("result2").innerHTML = "" + txt;
}
function imgCg1() {
    if (document.getElementById("img2").src == "https://naverpa-phinf.pstatic.net/MjAyNTAyMTNfMTEg/MDAxNzM5NDMwNjg5MzQ5.5emHiwX3CUmIF5DaGgBk_WbtCMyo2TiKtXwW32zAS5wg.VEVmXiq4bhYh5DBJZi6xPDqSoS2_EBD3CwEJbVgHPfog.JPEG/%EC%9D%B4%EB%8F%9F%7B_gfa_17394306893325526422215461267627.jpg") {
        document.getElementById("img2").src = "https://www.w3schools.com/Jsref/img_pulpit.jpg";
    } else {
        document.getElementById("img2").src = "https://naverpa-phinf.pstatic.net/MjAyNTAyMTNfMTEg/MDAxNzM5NDMwNjg5MzQ5.5emHiwX3CUmIF5DaGgBk_WbtCMyo2TiKtXwW32zAS5wg.VEVmXiq4bhYh5DBJZi6xPDqSoS2_EBD3CwEJbVgHPfog.JPEG/%EC%9D%B4%EB%8F%9F%7B_gfa_17394306893325526422215461267627.jpg"
    }

}