tetra.model.register('suspectSearch', {

	req : {
		
		fetch : {
			url: '/suspects/search/jspfile/{0}',
			uriParams : ['querystring'],
			parser : function(resp, col, cond) {
				col[cond.uriParams.url] = {id: cond.uriParams.url, html: resp};
				return col;
			}
		}
	},
	
	attr : {
		html : '',
	},
	
	methods : function(attr) { return {
		validate : function(attr, errors){
			return errors;
		}
	};}

});