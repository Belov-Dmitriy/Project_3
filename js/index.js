jQuery(document).ready(function(){

    $(".list_window_close").on("click", function(){
        if($(".modal").hasClass("show")){
            $(".modal").removeClass("show");
        }
        else{
            $(".modal ").addClass("show");
        }
    })
})



window.onload = function(){

    let btn_open = document.querySelector(".menu_mobile i");
    let menu_mobile_list = document.querySelector(".menu_mobile_list");

    btn_open.onclick = function(){
        menu_mobile_list.style.display = "block";
    }

    let btn_close = document.querySelector(".mobile_close i");

    btn_close.onclick = function(){
        menu_mobile_list.style.display = "none";
    }


}

