import Ember from 'ember';

export default Ember.Component.extend({
	height: 100, // default height
	width: 100, // default width

	src: Ember.computed('height', 'width', function(){
		var base = 'http://placekitten.com/g/';
		return base + this.get('width') + '/' + this.get('height');
	})
});
