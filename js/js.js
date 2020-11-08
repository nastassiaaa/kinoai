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

  $("#buttonadd").on("click",function(){
    $( ".boxtmldupl" ).clone().prependTo('#dupl');
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
    $('#img1').addClass('jeManime');
  });

  function activateMaps() {

      let zoomMap = $('.maps-container-inner').ZoomArea({
          zoomLevel: 1,
          minZoomLevel: 1,
          maxZoomLevel: 15,
          parentOverflow: 'auto',
          exceptionsZoom: ['marker-all'],
          hideWhileAnimate: ['map-area', 'marker-all'],
          virtualScrollbars: false,
          usedAnimateMethod: 'jquery'
      });

      resizeFilterPanel();
  }

  function resizeFilterPanel() {
      $('.map-filter').removeAttr('style');
      if (parseInt($('.measurement').css('max-width'), 10) > 768) {
          $('.map-filter').css('height', $('.maps-container').outerHeight() + 'px');
      }
  }
$(".map-control.map-control-zoomin").trigger("click");

  $(window).on("load", function () {
      activateMaps();
  });

  $(window).on("resize", function () {
      resizeFilterPanel();
  });
