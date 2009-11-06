{
	tests: [
		{
			title: "Element.Dimensions.getPosition",
			description: "Tests the getPosition method for elements.",
			verify: "When you scroll the outer bar do the numbers in the left box change and the numbers in the right box stay the same? When you scroll either of the internal bars do the numbers change?",
			before: function(){
        window.addEvent('domready', function(){
          var set_internals = function(){
            $$('.internal-scroll').each(function(x){
              x.getChildren('div').each(function(internal){
                internal.getFirst().set('html', internal.getPosition().y);
              });
            });
          };   

          $$('.internal-scroll').addEvent('scroll', set_internals);          
          window.addEvent('scroll', set_internals);                    
        });
    	}
		}
	],
	otherScripts: ['DomReady','Selectors']
}