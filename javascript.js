$(document).ready(function(){
    $(".btn-group .btn").click(function(){

        let inputValue = $(this).find("input").val();
        if(inputValue!='all'){
            let target=$('table tr[data-status="'+inputValue+'"]');
            $("table tbody tr").not(target).hide();
            target.fadeIn();
        } else {
            $("table tbody tr").fadeIn();
        }
    });
    //Changing the class of status label to support bootstrap 4
    let bs=$.fn.tooltip.Constructor.VERSION;
    let support=bs.split(".");

    if(str[0]==4){
        $(".label").each(function(){
            let classStr=$(this).attr("class");
            let newClassStr=classStr.replace(/label/g,"badge");
            $(this).removeAttr("class").addClass(newClassStr);
        });
    }
});