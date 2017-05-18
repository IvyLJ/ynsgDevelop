var src = './src';
var dest = './dev';

module.exports = {
    less: {
        all: src + "/**/**/*.less", //所有less
        src: src + "/**/**/*.less", //需要编译的less
        dest: dest + "/css", //输出目录
        rev: dest + "/rev/css",
        settings: { //编译less过程需要的配置，可以为空

        }
    },
    // images: {
    //     src: src + "/img/**/*",      
    //     dest: dest + "/img"
    // },
    // js: {
    //     src: src + "/js/**/*",
    //     dest: dest + "/js",
    //     rev: dest + "/rev/js"
    // },
    json: {
        src: src + "/**/**/*.json",
        dest: dest + "/data",
        rev: dest + "/rev/data"
    },
    clean: {
        src: dest
    },
    rev: { //use rev to reset html resource url
        revJson: dest + "/rev/**/*.json",
        src: "*.html", //root index.html
        dest: ""
    }

}