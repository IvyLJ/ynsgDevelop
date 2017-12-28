import Device from './device.js';
((win) => {
	let YSG = window.YSG || {};
	const {
		ios,
		android,
		pc
	} = Device;
	let doc = win.document,
		docEl = doc.documentElement,
		htmlEl = doc.getElementsByTagName('html')[0],
		metaEl = doc.getElementsByTagName('meta')['viewport'],
		dpr = 1,
		scale = 1,
		fontBase = 16;
	let ratio = win.devicePixelRatio;

	if (ios || android) {
		dpr = ratio >= 3 ? 3 : (ratio >= 2 ? 2 : 1);
	} else {
		dpr = 1;
	}
	scale = 1 / dpr;
	docEl.setAttribute('data-dpr', dpr);
	htmlEl.style.fontSize = fontBase * .625 * dpr + 'px';
	metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no');

})(window);