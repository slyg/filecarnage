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

tetra.model.register('suspectRemoved', {

	req : {
		save : {
			url : '/suspects/{0}/removed',
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

tetra.model.register('suspectSuspicion', {

	req : {
		save : {
			url : '/suspects/{0}/suspicion/{1}',
			uriParams: ['id', 'suspicionkeystring'],
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