tetra.model.register('suspectScanned', {

	req : {
		save : {
			url : '/suspects/{0}/scanned',
			uriParams: ['id'],
			method: 'PUT'
		}
	},
		
	attr : {},
	
	methods : function(attr) { return {
		validate : function(attr, errors){
			return errors;
		}
	};}

});