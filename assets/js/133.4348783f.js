(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{543:function(t,s,a){t.exports=a.p+"assets/img/result04.f34fe743.png"},878:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"范例04（任务延时实验）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范例04（任务延时实验）","aria-hidden":"true"}},[this._v("#")]),this._v(" 范例04（任务延时实验）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"功能说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 功能说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码讲解","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码讲解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-使用-los-taskcreate-创建两个任务，任务优先级分别为-4-和-5；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-los-taskcreate-创建两个任务，任务优先级分别为-4-和-5；","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 使用 "),s("code",[this._v("LOS_TaskCreate")]),this._v(" 创建两个任务，任务优先级分别为 4 和 5；")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("UINT32 "),a("span",{attrs:{class:"token function"}},[t._v("Example04_Entry")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSK_INIT_PARAM_S stInitParam "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example04_Entry\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_TaskHi"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_HI"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TaskHi"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTaskHi"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskHiID"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example_TaskHi create Failed!\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pfnTaskEntry "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Example_TaskLo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usTaskPrio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_PRIO_LO"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pcName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TaskLo"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwStackSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" TASK_STK_SIZE"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uwArg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("pcTextForTaskLo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("s_uwTskLoID"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("stInitParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Example_TaskLo create Failed!\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-task1-和-task2-周期性打印字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-task1-和-task2-周期性打印字符串","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. "),s("code",[this._v("Task1")]),this._v(" 和 "),s("code",[this._v("Task2")]),this._v(" 周期性打印字符串")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Example_TaskHi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskDelay")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Example_TaskLo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"%s\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CHAR "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uwArg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskDelay")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"效果演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果演示","aria-hidden":"true"}},[this._v("#")]),this._v(" 效果演示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(543),alt:""}})])}],r=a(0),o=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("为了解决"),a("router-link",{attrs:{to:"./example03.html"}},[t._v("范例03")]),t._v("的问题，将独占 "),a("code",[t._v("for")]),t._v(" 循环延时，修改为 "),a("code",[t._v("LOS_TaskDelay")]),t._v("，该函数会在延时期间释放cpu，让低优先级任务运行。")],1),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("为避免高优先级任务一直抢占 cpu，导致低优先级任务无法执行，可以在业务逻辑中，增加延时函数，确保低优先级任务也可以正常执行。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8)])},n,!1,null,null,null);o.options.__file="example04.md";s.default=o.exports}}]);