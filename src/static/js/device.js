module.exports = ((ua) => {
	let device = {
		ios: false,
		android: false,
		pc: false,
		version: 0
	};
	let _android, _ios;
	if ((_android = ua.match(/(Android);?[\s\/]+([\d.]+)?/))) {
		device.android = true;
		device.version = _android[2];
		return device;
	}

	if ((_ios = ua.match(/(iPhone|iPod|iPad).*OS\s([\d_]+)/))) {
		device.ios = true;
		device.version = _ios[2].replace(/_/g, '.');
		return device;
	}
	device.pc = true;
	return device;
})(window.navigator.userAgent);