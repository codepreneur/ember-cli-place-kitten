import Ember from 'ember';

export default Ember.Component.extend({
	length: 100, // default length
	width: 100, // default width

	src: Ember.computed('length', 'width', function(){
		var base = 'http://placekitten.com/';
		return base + this.get('width') + '/' + this.get('length');
	})
});
