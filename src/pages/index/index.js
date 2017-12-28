import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import {
	Carousel
} from 'ysgreact';
import './index.less';

const carouselData = [{
	url: 'http://yishiguang-img.oss-cn-beijing.aliyuncs.com/index1.png?Expires=1514464288&OSSAccessKeyId=TMP.AQHVEskn5N_Xugq-Bz8M6h9TgJpSTQZM_V7vft0RHwTEP6zJEp5n473I-NA7AAAwLAIUBVnP7-jxnpHtgkM5n58kLc-pUOUCFD6PdfWd08Q7mcr46jSRU1JHsppR&Signature=1EdMoeyKCgzVzoa5mAUeJJOkbaU%3D',
	label: 'test1',
	title: ''
}, {
	url: 'http://yishiguang-img.oss-cn-beijing.aliyuncs.com/index2.png?Expires=1514464320&OSSAccessKeyId=TMP.AQHVEskn5N_Xugq-Bz8M6h9TgJpSTQZM_V7vft0RHwTEP6zJEp5n473I-NA7AAAwLAIUBVnP7-jxnpHtgkM5n58kLc-pUOUCFD6PdfWd08Q7mcr46jSRU1JHsppR&Signature=qe2Lrd2TZlsLX%2FiUqoPYlL70n6w%3D',
	label: 'test2',
	title: ''
}];
const carouselProps = {
	imgData: carouselData,
	animation: "fade",
	control: false,
	inner: false
}

class Index extends Component {
	render() {
		return (
			<div className="ysg-index">
				<div className="ysg-index-header">
					<h1 className='ysg-index-logo'><img src='http://yishiguang-img.oss-cn-beijing.aliyuncs.com/ysg-logo.png?Expires=1514464371&OSSAccessKeyId=TMP.AQHVEskn5N_Xugq-Bz8M6h9TgJpSTQZM_V7vft0RHwTEP6zJEp5n473I-NA7AAAwLAIUBVnP7-jxnpHtgkM5n58kLc-pUOUCFD6PdfWd08Q7mcr46jSRU1JHsppR&Signature=mLZm4ZV0ckkYR7sQItZbGS0mlzg%3D'/></h1>
				</div>
				<div className="ysg-index-container">
					{/*<Link className='ysg-btn' to='/ysg/menu'>*/}
						<Carousel {...carouselProps}></Carousel>
					{/*</Link>*/}
				</div>
				<footer className='ysg-footer'>
						<div className='ysg-footer-wrapper'>
						{/*<img className='ba-img' src='http://yishiguang-img.oss-cn-beijing.aliyuncs.com/ysgba.png?Expires=1514459097&OSSAccessKeyId=TMP.AQHVEskn5N_Xugq-Bz8M6h9TgJpSTQZM_V7vft0RHwTEP6zJEp5n473I-NA7AAAwLAIUBVnP7-jxnpHtgkM5n58kLc-pUOUCFD6PdfWd08Q7mcr46jSRU1JHsppR&Signature=ZH%2BIYO%2BW8eyS1Hb7%2BMX%2BzmnSTmg%3D'/>*/}
						<p className='ba-text'>©2017 YISHIGUANG 京ICP备16049871号 - 1</p>
					</div>
				</footer>
			</div>
		)
	}
}
export default Index;