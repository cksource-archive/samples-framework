/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 Licensed under the terms of the MIT license. See LICENSE.md for details.
 */

'use strict';

( function() {
	// All .tree-a elements in DOM.
	var expanders = document.getElementsByClassName( 'toggler' );

	var i = expanders.length;
	while ( i-- ) {
		var expander = expanders[ i ];

		expander.addEventListener( 'click', function() {
			var containsIcon = this.classList.contains( 'icon-toggler-expanded' ) || this.classList.contains( 'icon-toggler-collapsed' ),
				related = document.getElementById( this.dataset.for );

			this.classList.toggle( 'collapsed' );

			if ( this.classList.contains( 'collapsed' ) ) {
				related.classList.add( 'collapsed' );
				if ( containsIcon ) {
					this.classList.remove( 'icon-toggler-expanded' );
					this.classList.add( 'icon-toggler-collapsed' );
				}
			} else {
				related.classList.remove( 'collapsed' );
				if ( containsIcon ) {
					this.classList.remove( 'icon-toggler-collapsed' );
					this.classList.add( 'icon-toggler-expanded' );
				}
			}
		} );
	}
} )();