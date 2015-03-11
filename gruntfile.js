/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the GNU GPL license v3 or later. See LICENSE.md for more information.
 */

'use strict';

module.exports = function( grunt ) {
	require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig( {
		less: {
			dev: {
				expand: true,
				cwd: 'samples/',
				src: '**/*.less',
				dest: 'samples/',
				ext: '.css',
				flatten: false,
				rename: function( src, dest ) {
					return src + dest.replace( '/less/', '/css/' );
				},

				options: {
					ieCompat: true,
					paths: [ 'samples/' ],
					relativeUrls: true,

					sourceMap: true,
					sourceMapFileInline: true,
					sourceMapRootpath: '../../../'
				}
			}
		},

		watch: {
			less: {
				files: '<%= less.dev.src %>',
				tasks: [ 'less:dev' ],
				options: {
					nospawn: true
				}
			}
		}
	} );
};