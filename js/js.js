  $(".pop-up").hide();

  $(function(){
  $("#rushbtn").on("click",function(){
    $("#rush").toggle(function() {
            $(this).animate({width: "0px"}, "fast");
          },
          function() {
            $(this).animate({width: "352px"}, "fast");
          });
  })

  $("#namesbtn").on("click",function(){
    $("#actors").toggle(function() {
            $(this).animate({width: "0px"}, "fast");
          },
          function() {
            $(this).animate({width: "352px"}, "fast");
          });
  })

  $("#tmlbtn").on("click",function(){
    $("#timeline").toggle(function() {
            $(this).animate({width: "0px"}, "fast");
          },
          function() {
            $(this).animate({width: "352px"}, "fast");
          });
  })

  $("#trkltbtn").on("click",function(){
    $("#tracklets").toggle(function() {
            $(this).animate({width: "0px"}, "fast");
          },
          function() {
            $(this).animate({width: "352px"}, "fast");
          });
  })

  })

  $( ".videodrag" )
  .draggable()
  .on('dragstart',function(event,ui){
    $(this).addClass('on-drag');
  })
  .on('dragstop',function(event,ui){
    $(this).removeClass('on-drag')
  });


    $( ".videodrag" )
    .draggable()
    .on('dragstart',function(event,ui){
      $(this).addClass('on-drag');
    })
    .on('dragstop',function(event,ui){
      $(this).removeClass('on-drag')
    });

    $( ".actionsclone" ).droppable({
      drop: function( event, ui ) {
        $( ".videodrag" ).clone().draggable().prependTo('.zone-drop');
      }
      })
      $( ".actionsdelete" ).droppable({
        drop: function( event, ui ) {
          $( ".videodrag" ).remove();
        }
})
