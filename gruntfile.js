/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT license. See LICENSE.md for more information.
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md
 *
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
			},

			docs: {
				files: {
					'docs/css/docs.css' :'docs/less/docs.less'
				},

				options: {
					ieCompat: true,
					paths: [ 'docs/' ],
					relativeUrls: true,

					sourceMap: true,
					sourceMapFileInline: true,
					sourceMapRootpath: '../../'
				}
			}
		},

		watch: {
			less: {
				files: '<%= less.dev.src %>',
				tasks: [ 'less' ],
				options: {
					nospawn: true
				}
			}
		}
	} );
};