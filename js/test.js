// テーブル形式の位置特定用　（クラスx,クラスy）
// day1 row1	day2 row1
// day1 row2	day2 row2
// day1 row3	day2 row3
// day1 row4	day2 row4
function calTotal(this){
    var classes = $(this).attr('class');
    var classNameList = classes.split(' ');
 
    for (var className in classNameList) {
        var subtotalElmId = className + "_subtotal";
        var subtotalVal = 0;
        $("." + className).each(function(){
            var value = $(this).val();
            subtotalVal += value;
        });
        $("." + subtotalElmId).text(subtotalVal);
    }
}