(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{633:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo1.1f221bfd.png"},634:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo2.d16d0968.png"},635:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo3.7f710cb9.png"},636:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo4.bdff8786.png"},637:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo5.8f7ffbda.png"},638:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo6.74c0adb5.png"},639:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo7.ab16cfe8.png"},640:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo8.456f2e0e.png"},641:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo9.9ffda860.png"},642:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo10.df2037c0.png"},643:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo11.97559437.png"},644:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo12.77c6635d.png"},645:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo13.10f8cee8.png"},646:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo14.acc98705.png"},647:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo15.850599d5.png"},648:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo16.2e4792b8.png"},649:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo17.a17b64e3.png"},650:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo18.8cffe543.png"},651:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo19.27fa604a.png"},652:function(t,e,n){t.exports=n.p+"assets/img/onelight_demo20.5b7a2b7b.png"},801:function(t,e,n){"use strict";n.r(e);var a=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"运行liteos-onelight-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行liteos-onelight-demo","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行LiteOS onelight demo")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#获取源代码"}},[t._v("获取源代码")])]),a("li",[a("a",{attrs:{href:"#huawei-liteos目录介绍"}},[t._v("Huawei LiteOS目录介绍")])]),a("li",[a("a",{attrs:{href:"#开发板硬件连接"}},[t._v("开发板硬件连接")])]),a("li",[a("a",{attrs:{href:"#打开mdk523项目"}},[t._v("打开MDK523项目")])]),a("li",[a("a",{attrs:{href:"#编译工程"}},[t._v("编译工程")])]),a("li",[a("a",{attrs:{href:"#下载运行"}},[t._v("下载运行")])]),a("li",[a("a",{attrs:{href:"#log打印输出"}},[t._v("LOG打印输出")])]),a("li",[a("a",{attrs:{href:"#查看oceanconnect平台数据"}},[t._v("查看OceanConnect平台数据")])]),a("li",[a("a",{attrs:{href:"#oceanconnect下发命令"}},[t._v("OceanConnect下发命令")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"获取源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取源代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取源代码")]),t._v(" "),a("pre",[a("code",[t._v("链接：https://pan.baidu.com/s/1qdbxR2MlUxfDI01bX4q27g\n密码：dbfe\n::: warning 注意\n下载源代码后，需安装MDK523，安装STLINK驱动，安装CH340驱动等。  \n:::  \n")])]),t._v(" "),a("h2",{attrs:{id:"huawei-liteos目录介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#huawei-liteos目录介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" Huawei LiteOS目录介绍")]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n├── arch\n│   ├── arm\n│   └── msp430\n├── build\n│   └── Makefile\n├── components\n│   ├── connectivity\n│   ├── fs\n│   ├── lib\n│   ├── log\n│   ├── net\n│   ├── ota\n│   └── security\n├── demos\n│   ├── agenttiny_lwm2m\n│   ├── agenttiny_mqtt\n│   ├── dtls_server\n│   ├── fs\n│   ├── kernel\n│   └── nbiot_without_atiny\n├── doc\n│   ├── Huawei_LiteOS_Developer_Guide_en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n│   ├── Huawei_LiteOS_Developer_Guide_zh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n│   ├── Huawei_LiteOS_SDK_Developer_Guide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n│   ├── LiteOS_Code_Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n│   ├── LiteOS_Commit_Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n│   ├── LiteOS_Contribute_Guide_GitGUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n│   ├── LiteOS_Supported_board_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n│   └── meta\n├── include\n│   ├── at_device\n│   ├── at_frame\n│   ├── atiny_error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h\n│   ├── atiny_lwm2m\n│   ├── atiny_mqtt\n│   ├── fs\n│   ├── log\n│   ├── nb_iot\n│   ├── osdepends\n│   ├── ota\n│   ├── sal\n│   └── sota\n├── kernel\n│   ├── base\n│   ├── extended\n│   ├── include\n│   ├── los_init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c\n│   └── Makefile\n├── LICENSE\n├── osdepends\n│   └── liteos\n├── README"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n├── targets\n│   ├── STM32L431CBxx_EVB_L1_Light\n└── tests\n    ├── cmockery\n    ├── test_agenttiny\n    ├── test_main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c\n    ├── test_sota\n    └── test_suit\n\n")])])]),a("h2",{attrs:{id:"开发板硬件连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发板硬件连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发板硬件连接")]),t._v(" "),a("p",[a("img",{attrs:{src:n(633),alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("注意P1短接端子的短接方式。")])]),t._v(" "),a("h2",{attrs:{id:"打开mdk523项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开mdk523项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 打开MDK523项目")]),t._v(" "),a("ul",[a("li",[t._v("进入targets\\STM32L431CBxx_EVB_L1_Light\\MDK-ARM，打开STM32L431CBxx.uvprojx")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(634),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"编译工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译工程","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译工程")]),t._v(" "),a("p",[a("img",{attrs:{src:n(635),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"下载运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载运行","aria-hidden":"true"}},[t._v("#")]),t._v(" 下载运行")]),t._v(" "),a("p",[a("img",{attrs:{src:n(636),alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("【注意】下面的工程设置参数。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(637),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(638),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(639),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(640),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(641),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(642),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(643),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(644),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(645),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(646),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"log打印输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log打印输出","aria-hidden":"true"}},[t._v("#")]),t._v(" LOG打印输出")]),t._v(" "),a("ul",[a("li",[t._v("先登陆OceanConnect平台。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(647),alt:""}})]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("此时串口调试助手，已经开始打印输出的LOG信息。串口波特率要选择115200，因为串口日志是通过USART1来打印的，而程序中将USART1的波特率设为了115200。对应的数据可以在OC平台上查看。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(648),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"查看oceanconnect平台数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看oceanconnect平台数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看OceanConnect平台数据")]),t._v(" "),a("p",[a("img",{attrs:{src:n(649),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"oceanconnect下发命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oceanconnect下发命令","aria-hidden":"true"}},[t._v("#")]),t._v(" OceanConnect下发命令")]),t._v(" "),a("p",[a("img",{attrs:{src:n(650),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(651),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(652),alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("至此，完成LiteOS调测OneLight。")])])])}],s=n(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);i.options.__file="onelight_demo.md";e.default=i.exports}}]);