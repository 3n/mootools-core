{
	tests: [
		{
			title: "Element.offsets",
			description: "Tests the offset logic for elements.",
			verify: "When you scroll does the number (offset value) stay the same?",
			before: function(){
        window.addEvent('domready', function(){
          var set_internals = function(){
            $('internal-scroll').getChildren('div').each(function(internal){
              internal.getFirst().set('html', internal.getOffsets().y);
            });
          };   
          $('internal-scroll').addEvent('scroll', set_internals);
          
          var fun = function(pos_style){ $(pos_style).getFirst().set('html', $(pos_style).getOffsets().y); };
          ["fixed", "static", "absolute"].each(function(pos_style){
            fun(pos_style);
            window.addEvent('scroll', function(){
              fun(pos_style);
              set_internals();
            });
          });
        });
    	}
		}
	],
	otherScripts: ['DomReady']
}