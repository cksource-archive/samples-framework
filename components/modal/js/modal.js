/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 Licensed under the terms of the MIT license. See LICENSE.md for details.
 */

'use strict';

( function() {
	SF.modal = function( config ) {
		// Modal should use the same style set as the rest of the page.
		config.modalClass = 'content';

		// Purge all pre-defined pico styles. Use the lessfile instead.
		config.modalStyles = function( styles ) {
			for ( var i in styles ) {
				delete styles[ i ];
			}
		};

		return new picoModal( config );
	};
} )();