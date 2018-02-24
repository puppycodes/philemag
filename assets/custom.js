/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
		duration: 450,	// the scene should last for a scroll distance of 100px
		offset: 70		// start this scene after scrolling for 50px
	})


	.setTween("#sticky", 1, {opacity:0, scale: .5})
	.addTo(controller) // assign the scene to the controller
  // .addIndicators({name: "1 (duration: 0)"}); // add indicators (requires plugin)


// *-------------* //

  // init controller
  var controller2 = new ScrollMagic.Controller();

  // create a scene
  new ScrollMagic.Scene({
  		duration: 450,	// the scene should last for a scroll distance of 100px
  		offset: 70		// start this scene after scrolling for 50px
  	})


  	.setTween("#white-menu", 1, {opacity: 1})
  	.addTo(controller2) // assign the scene to the controller
    // .addIndicators({name: "1 (duration: 0)"}); // add indicators (requires plugin)
