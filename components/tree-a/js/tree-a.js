/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 Licensed under the terms of the MIT license. See LICENSE.md for details.
*/

'use strict';

( function() {
	// All .tree-a elements in DOM.
	var trees = document.getElementsByClassName( 'tree-a' );

	for ( var i = trees.length; i--; ) {
		var tree = trees[ i ];

		sf.attachListener( tree, 'click', function( evt ) {
			var target = evt.target || evt.srcElement;

			// Collapse or expand item groups.
			if ( target.nodeName === 'H2' && !sf.classList.contains( target, 'tree-a-no-sub' ) ) {
				sf.classList.toggle( target, 'tree-a-active' );
			}
		} );
	}
} )();