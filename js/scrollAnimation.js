function checkScreenWidth(){
    if (window.matchMedia('(max-width: 2700px)').matches){
      $(window).on('scroll load', checkTilePosition);
      $(window).trigger('scroll');
      adjustTileContainerHeight();
    } else {
      $('.tile').each(function() {
        $(this).css('transform', 'scale(1)');
      })
      $('main').css('height', '100vh');
    }
  }
  
  function adjustTileContainerHeight(){

    windowHeight = $(window).height();
    let px;
    if (windowHeight > 640) {
      px = windowHeight % 640;
    } else if (windowHeight > 600) {
      px = 0;
    } else {
      px = windowHeight % 500 * -1
    }
    $('main').css('height', `calc(233.33vh - ${px}px`)
  }
  
  function checkTilePosition(){

      const scrollTop = $(window).scrollTop();
      $('.tile').each(function() {
          console.log(this)
        const tile = $(this);
        const tileHeight = tile.outerHeight();
        const windowHeight = $(window).height(); 
        const tileTopPosition = tile.offset().top; 
        const tileMiddlePosition = tileTopPosition + tileHeight/2;
        const standard = 1;
        const middle = tileMiddlePosition - scrollTop - windowHeight/2;
        const distanceFromMiddle = Math.abs(middle);
        const rotateVal = Math.floor(Math.random() * 4) % 2 === 0 ? '180' : '0';
        tile.css('transform', `scale(${standard - distanceFromMiddle/540}) rotateX(${rotateVal})`) 
      });
    }
    
  $(checkScreenWidth);