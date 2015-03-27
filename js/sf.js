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