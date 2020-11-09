var setStyle = function( ele, styles ) {
	Object.keys( styles ).forEach( function ( key ) {
		ele.style[key] = styles[key];
	});
}

var calcStrWidth = function( str, sz, fmly ) {
	var ele = document.createElement('span');
	ele.id = 'calc';
	ele.innerHTML = str;
	var styles = {
		'white-space': 'nowrap',
		'visibility': 'hidden'
	};
	if( sz != undefined ) {
		styles['font-size'] = sz;
	}
	if( fmly != undefined ) {
		styles['font-family'] = fmly;
	}
	setStyle( ele, styles );
	document.body.appendChild( ele );
	var ele_w = ele.offsetWidth;
	document.body.removeChild( ele );
	return ele_w;
};

var pushCalc = function() {
	var str = document.forms.form1.txt_str.value;
	var str_w = calcStrWidth( str );

	alert( str_w );
};
