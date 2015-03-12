'use strict';

( function() {
	// All .tree-a elements in DOM.
	var trees = CKEDITOR.document.find( '.tree-a' );

	for ( var i = trees.count(); i--; ) {
		trees.getItem( i ).on( 'click', function( evt ) {
			var target = evt.data.getTarget();

			// Collapse or expand item groups.
			if ( target.is( 'h2' ) ) {
				target[ target.hasClass( 'active' ) ? 'removeClass' : 'addClass' ]( 'active' );
			}

			// Activate atomic items.
			if ( target.is( 'a' ) ) {
				var parent = target.getParent(),
					currentActive = this.findOne( 'li.active' );

				if ( !parent.hasClass( 'active' ) ) {
					parent.addClass( 'active' );

					if ( currentActive ) {
						currentActive.removeClass( 'active' );
					}
				}
			}
		} );
	}
} )();