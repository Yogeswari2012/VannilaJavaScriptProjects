



function changebg(c)
{
    // console.log("Im in ");
    // console.log(c);
   // var array=["./videos/vid-1.mp4", "./videos/vid-2.mp4","./videos/vid-3.mp4","./videos/vid-4.mp4","./videos/vid-5.mp4"];

         var source = './videos/vid-'+c+'.mp4';
          var video=document.getElementById('videos')
         var value = document.getElementById('source-video');
         video.pause();
        //  value.setAttribute('src',source);
        value.src=source;
         video.load();
         video.play();
        // $("#source-video").attr('src',source);
        // $("#source-video")[c].load();

        // console.log( $("#source-video").attr('src'))
        
         
}

$(".search-icon").click(function()
{
    
    $(".textbar").slideToggle("slow");
    $(".textbar").css("display","flex");
})

$(".login").click(function()
{
    $(".bg-modal").slideToggle("slow");
    // $(".bg-modal").show("1000");
    $(".bg-modal").css("display","flex");
})

$(".close").click(function(){
    $(".bg-modal").slideToggle("slow");
    // $(".bg-modal").hide("1000");
    // $(".bg-modal").css("display","none");
})

$(".hamburger").click(function(){
    $(".navbar").slideToggle("slow");
    $(".navbar").css("display","flex");

})

$("#arrival").datepicker();
$("#arrival-icon").click(function()
{
    $("#arrival").focus();
})


function scroll(element)
{
    console.log("Im in");
    var ele = '#'+element
//    window.location.href='#'+element;
    $('html,body').animate({
        scrollTop:$(ele).offset().top
    },2000);
}

var listOfChild1=[];

$(".gal1").each(function(i,obj)
{
    
   // listOfChild1.push($(".child1"))[i];
  
        $(this).hover(function()
      {
        var element =$(".child1")[i];
        $(element).slideToggle("slow");
        $(element).css("display","flex");
       

                
        })
 
})

    



console.log(listOfChild1);
    //         console.log("I'm in" + i);
    //         // var element = $(".child1")[i];
    //         // console.log(element);
    //         // element.slideToggle("slow");
    //         // element.css("display","flex");
    //         // console.log(element);
  // // console.log($(".gal1")[i]);
  
