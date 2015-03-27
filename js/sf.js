( function() {
	window.sf = {};

	sf.attachListener = function( elem, evtName, callback ) {
		if ( elem.addEventListener ) {
			elem.addEventListener( evtName, callback, false );
		} else if ( elem.attachEvent ) {
			elem.attachEvent( 'on' + evtName , callback );
		} else {
			throw new Error( 'Could not attach event.' );
		}
	};

	sf.accept = function( node, visitor ) {
		var children;

		// Handling node as a node and array
		if ( node.children ) {
			children = node.children;

			visitor( node );
		} else if ( typeof node.length === 'number' ) {
			children = node;
		}

		var i = children ? ( children.length || 0 ) : 0;
		while( i-- ) {
			sf.accept( children[ i ], visitor );
		}
	};

	sf.getByClass = ( function(  ) {
		var getByClass = document.getElementsByClassName;
		if ( typeof getByClass === 'function' ) {
			return function( root, className ) {
				if (typeof root === 'string') {
					className = root;
					root = document;
				}

				return getByClass.call( root, className );
			};
		}

		return function( root, className ) {
			if (typeof root === 'string') {
				className = root;
				root = document;
			}
			var results = [];

			sf.accept( root, function( elem ) {
				if ( sf.classList.contains( elem, className ) ) {
					results.push( elem );
				}
			} );

			return results;
		};
	}() );

	sf.classList = {};

	sf.classList.add = function( elem, className ) {
		var classes = parseClasses( elem );
		classes.push( className );

		elem.attributes.setNamedItem( createClassAttr( classes ) );
	};

	sf.classList.remove = function( elem, className ) {
		var classes = parseClasses( elem, className ),
			foundAt = classes.indexOf( className );

		if ( foundAt === -1 ) {
			return;
		}

		classes.splice( foundAt, 1 );
		elem.attributes.setNamedItem( createClassAttr( classes ) );
	};

	sf.classList.contains = function( elem, className ) {
		return findIndex( elem, className ) !== -1;
	};

	sf.classList.toggle = function( elem, className ) {
		this.contains( elem, className ) ? this.remove( elem, className ) : this.add( elem, className );
	};

	function findIndex( elem, className ) {
		return parseClasses( elem ).indexOf( className );
	}

	function parseClasses( elem ) {
		var classAttr = elem.attributes.getNamedItem( 'class' );

		return classAttr ? classAttr.value.split( ' ' ) : [];
	}

	function createClassAttr( classesArray ) {
		var attr = document.createAttribute( 'class' );

		attr.value = classesArray.join( ' ' );

		return attr;
	}
}() );