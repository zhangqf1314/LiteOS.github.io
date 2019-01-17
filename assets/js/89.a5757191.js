(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{834:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"代码结构导读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码结构导读","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码结构导读")]),t._v(" "),s("h2",{attrs:{id:"代码入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码入口","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码入口")]),t._v(" "),s("p",[t._v("LiteOS 入口在工程对应的 "),s("code",[t._v("main.c")]),t._v(" 中，基本流程如下：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    UINT32 uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token function"}},[t._v("HardWare_Init")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),s("span",{attrs:{class:"token comment"}},[t._v("//硬件初始化")]),t._v("\n\n    uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("LOS_KernelInit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("//初始化LiteOS内核")]),t._v("\n    \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token function"}},[t._v("LOS_Inspect_Entry")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{attrs:{class:"token comment"}},[t._v("//初始化内核例程")]),t._v("\n\n    "),s("span",{attrs:{class:"token function"}},[t._v("LOS_Start")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),s("span",{attrs:{class:"token comment"}},[t._v("//进行task调度，LiteOS开始正常工作")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("h2",{attrs:{id:"代码目录结构说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码目录结构说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码目录结构说明")]),t._v(" "),s("p",[t._v("关于代码树中各个目录存放的源代码的相关内容简介如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ arch\n│  ├─ arm\n│     ├─ arm-m      ------  M核中断、调度、tick相关代码\n│     ├─ common     ------  arm核公用的cmsis core接口\n├─ components\n│  ├─ cmsis         ------  LiteOS提供的cmsis os接口实现\n│  ├─ connectivity\n│     ├─ agent_tiny ------  agent_tiny端云互通组件，包括公共头文件、示例代码、客户端实现代码、操作系统适配层代码\n│     ├─ lwm2m      ------  lwm2m协议实现\n│  ├─ net\n│     ├─ lwip_port  ------  lwip驱动及OS适配代码\n│     ├─ lwip-2.0.3 ------  lwip协议实现\n│  ├─ security\n│     ├─ mbedtls/mbedtls_port  ------ MBEDTLS的OS适配代码\n│     ├─ mbedtls/mbedtl-2.6.0  ------ MBEDTLS协议实现\n├─ doc              ------    此目录存放的是LiteOS的使用文档和API说明等文档\n├─ examples\n│  ├─ API           ------    供开发者测试LiteOS内核的demo示例，此目录存放的是内核功能测试用的相关用例的代码\n│  ├─ include       ------    API功能头文件存放目录\n├─ kernel\n│  ├─ base\n│     ├─ core       ------    LiteOS基础内核代码，包括队列、task调度、软timer、时间片计算等功能\n│     ├─ OM         ------    与错误处理相关的文件\n│     ├─ include    ------    LiteOS内核内部使用的头文件\n│     ├─ ipc        ------    LiteOS中task间通讯的相关接口，包括事件、信号量、消息队列、互斥锁等\n│     ├─ mem        ------    LiteOS中的内核内存管理的相关代码\n│     ├─ misc       ------    内存对齐功能以及毫秒级休眠sleep功能\n│  ├─ include       ------    LiteOS开源内核头文件\n│  ├─ extended\n│     ├─ tickless   ------    低功耗框架代码\n├─ targets\n   ├─ Standard_FRDM_KW41Z          ------  FRDM（ARM Cortex M0+）板端工程代码（含原厂芯片驱动）\n   ├─ Standard_STM32F103RB_NUCLEO  ------  F103（ARM Cortex M3）板端工程代码（含原厂芯片驱动）\n   ├─ Cloud_STM32F429IGTx_FIRE     ------  F429（ARM Cortex M4）板端工程代码（含原厂芯片驱动）\n   └─ Standard_STM32F746ZG_NUCLEO  ------  F746（ARM Cortex M7）板端工程代码（含原厂芯片驱动）\n\n")])])])])}],!1,null,null,null);e.options.__file="code-info.md";n.default=e.exports}}]);