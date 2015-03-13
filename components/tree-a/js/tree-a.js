/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 Licensed under the terms of the MIT license. See LICENSE.md for details.
*/

'use strict';

( function() {
	// All .tree-a elements in DOM.
	var trees = CKEDITOR.document.find( '.tree-a' );

	for ( var i = trees.count(); i--; ) {
		trees.getItem( i ).on( 'click', function( evt ) {
			var target = evt.data.getTarget();

			// Collapse or expand item groups.
			if ( target.is( 'h2' ) && !target.hasClass( 'tree-a-no-sub' ) ) {
				target[ target.hasClass( 'tree-a-active' ) ? 'removeClass' : 'addClass' ]( 'tree-a-active' );
			}
		} );
	}
} )();