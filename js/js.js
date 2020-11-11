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

  $( ".videodrag" ).draggable();
  /*
  .on('dragstart',function(event,ui){
    $(this).addClass('on-drag');
  })
  .on('dragstop',function(event,ui){
    $(this).removeClass('on-drag')
  });
  */



  $( ".actionsclone" ).droppable({
    drop: function( event, ui ) {
      ui.draggable // on clible l'élément qui est "draggé" (c'est équivalent à $(this) en gros)
      .clone() // on le clone
      .draggable() // on rend draggable le clone
      .css({
        left:'0px',
        top:'0px'
      }) // on modifie son positionnement pour le placer en haut à gauche de zone-drop
      .appendTo('.zone-drop'); // on ajoute le clone à zone-drop
    }
    })
    $( ".actionsdelete" ).droppable({
      drop: function( event, ui ) {
        ui.draggable.remove();
      }
})

  $("#buttonadd").on("click",function(){
  $( ".boxtmldupl" )
  .clone()
  .removeClass("boxtmldupl") // on enlève la classe à l'élément cloné comme ça il ne sera pas dupliqué à nouveau !
  .appendTo('#allboxtml'); // on ajoute à la div (que j'ai créée)
  })

  $('.buttondelete1').on('click', function(){
      $(this).closest("#boxtrklt1").remove();
  });

  $('.buttondelete2').on('click', function(){
      $(this).closest("#boxtrklt2").remove();
  });
  $('.buttondelete3').on('click', function(){
      $(this).closest("#boxtrklt3").remove();
  });
  $('.buttondelete4').on('click', function(){
      $(this).closest("#boxtrklt4").remove();
  });

  $('#img1').click(function() {
    $(this).html('<video autoplay><source src="images/kinoairush.mp4" type="video/mp4"></video>');
  });
