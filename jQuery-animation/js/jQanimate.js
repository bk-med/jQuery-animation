$(document).ready(function(){
    $(".container").animate({
        top:"50px",
        left:"35%",
        borderRadius:"15px"
    },2000)
    $(".container").animate({
        width:"400px",
    },2000)
    $(".container").animate({
        height:"400px",
    },2000 , function(){
        $(".one , .tow , .three, .four").animate({
            width:"100px",
            height:"100px"
        },1500 ,function(){
            $(".one").animate({ top:"100px", left:"100px"},1500)
            $(".tow").animate({ top:"100px", right:"100px"},1500, function(){
                $(".three").animate({ 
                    bottom:"100px",
                    borderTopLeftRadius:"30px",
                    borderBottomLeftRadius:"15px"},1500)
                $(".four").animate({ 
                    bottom:"100px",
                    borderTopRightRadius:"30px",
                    borderBottomRightRadius:"30px"},1500 , function(){
                    $("span").fadeIn(1000);
                })
            })
        })
    });
});



