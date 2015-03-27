/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 Licensed under the terms of the MIT license. See LICENSE.md for details.
 */

'use strict';

( function() {
	// All .tree-a elements in DOM.
	var expanders = sf.getByClass( 'toggler' );

	var i = expanders.length;
	while ( i-- ) {
		var expander = expanders[ i ];

		sf.attachListener( expander, 'click', function() {
			var containsIcon = sf.classList.contains( this, 'icon-toggler-expanded' ) || sf.classList.contains( this, 'icon-toggler-collapsed' ),
				related = document.getElementById( this.getAttribute( 'data-for' ) );

			sf.classList.toggle( this, 'collapsed' );

			if ( sf.classList.contains( this, 'collapsed' ) ) {
				sf.classList.add( related, 'collapsed' );
				if ( containsIcon ) {
					sf.classList.remove( this, 'icon-toggler-expanded' );
					sf.classList.add( this, 'icon-toggler-collapsed' );
				}
			} else {
				sf.classList.remove( related, 'collapsed' );
				if ( containsIcon ) {
					sf.classList.remove( this, 'icon-toggler-collapsed' );
					sf.classList.add( this, 'icon-toggler-expanded' );
				}
			}
		} );
	}
} )();