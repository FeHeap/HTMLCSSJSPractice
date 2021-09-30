$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$("#today").on("click", function() {
    var current = new Date();
    $(".date").val(current.getDate());
    $(".month").val(monthMap[current.getMonth()+1]);
    $(".year").val(current.getFullYear());
});

$("#doCount").on("click", function() {
    
    
    var cdate = ($(".cdate").val() !== "")?parseInt($(".cdate").val()):0;
    var cweek = ($(".cweek").val() !== "")?parseInt($(".cweek").val()):0;
    var cmonth = ($(".cmonth").val() !== "")?parseInt($(".cmonth").val()):0;
    var cyear = ($(".cyear").val() !== "")?parseInt($(".cyear").val()):0;
    
    var dat = new Date(parseInt($(".year").val()), parseInt($(".month").val())-1, parseInt($(".date").val()), 0, 0, 0, 0);
    
    
    //yyyy-mm-dd
    var flag = true;
    var p = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/g;
    var date = $(".year").val() + "-" + monthMap[parseInt($(".month").val())] + "-" + dateMap[$(".date").val()];
    var result = date.match(p);
    if(result == null) {
        alert("輸入不符合規則");
        flag = false;
    }
  
    
    var msg = "開始日期: " + dat.toDateString();
    
    if($("select").val() === "+") {
        dat.setDate(dat.getDate() + cdate + cweek*7);
        dat.setMonth(dat.getMonth() + cmonth);
        dat.setFullYear(dat.getFullYear() + cyear);
        msg += "\n開始日期往後" + cyear.toString() + "年" + cmonth.toString() + "月" + cweek.toString() + "週" + cdate.toString() + "天: " + dat.toDateString();
    }
    else if($("select").val() === "-") {
        dat.setDate(dat.getDate() - cdate - cweek*7);
        dat.setMonth(dat.getMonth() - cmonth);
        dat.setFullYear(dat.getFullYear() - cyear);
        msg += "\n開始日期往前" + cyear.toString() + "年" + cmonth.toString() + "月" + cweek.toString() + "週" + cdate.toString() + "天: " + dat.toDateString();
    }
    
    if(flag) {
        window.alert(msg);   
    }
    
});

var monthMap = { 1: "01", 2: "02", 3: "03", 4: "04", 5: "05", 6: "06", 7: "07", 8: "08", 9: "09", 10: "10", 11: "11", 12: "12" };

var dateMap = { 1: "01", 2: "02", 3: "03", 4: "04", 5: "05", 6: "06", 7: "07", 8: "08", 9: "09", 10: "10", 11: "11", 12: "12", 13: "13", 14: "14", 15: "15", 16: "16", 17: "17", 18: "18", 19: "19", 20: "20", 21: "21", 22: "23", 24: "24", 25: "25", 26: "26", 27: "27", 28: "28", 29: "29", 30: "30", 31: "31"};
