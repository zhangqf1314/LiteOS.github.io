(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{616:function(t,a,_){"use strict";_.r(a);var s=_(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"liteos-sdk-端云互通组件-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#liteos-sdk-端云互通组件-api","aria-hidden":"true"}},[t._v("#")]),t._v(" LiteOS SDK 端云互通组件 API")]),t._v(" "),_("h2",{attrs:{id:"数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),_("h4",{attrs:{id:"平台下发命令枚举类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#平台下发命令枚举类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 平台下发命令枚举类型")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    ATINY_GET_MANUFACTURER"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取厂商名字*/")]),t._v(" \n    ATINY_GET_DEV_TYPE，                    "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取设备类型，由厂商定义和使用*/")]),t._v(" \n    ATINY_GET_MODEL_NUMBER"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取设备模型，由厂商定义和使用*/")]),t._v(" \n    ATINY_GET_SERIAL_NUMBER"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取设备序列号*/")]),t._v(" \n    ATINY_DO_DEV_REBOOT"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),_("span",{attrs:{class:"token comment"}},[t._v("/*下发设备复位命令*/")]),t._v(" \n \n    ATINY_GET_BATERRY_LEVEL"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取电池剩余电量*/")]),t._v(" \n    ATINY_GET_TOTAL_MEMORY"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取内存总量*/")]),t._v(" \n    ATINY_GET_MEMORY_FREE"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取空闲内存*/")]),t._v(" \n    ATINY_GET_DEV_ERR"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),_("span",{attrs:{class:"token comment"}},[t._v("/*获取设备状态，比如内存耗尽、电池不足、信号强度低等*/")]),t._v(" \n \n    ATINY_DO_FACTORY_RESET"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),_("span",{attrs:{class:"token comment"}},[t._v("/*厂商复位*/")]),t._v(" \n    ATINY_GET_FIRMWARE_VER"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),_("span",{attrs:{class:"token comment"}},[t._v("/*设备版本号*/")]),t._v(" \n \n    ATINY_GET_NETWORK_BEARER"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),_("span",{attrs:{class:"token comment"}},[t._v("/*网络通信承载类型，比如GSM、WCDMA、TD-SCDMA等*/")]),t._v(" \n    ATINY_GET_SIGNAL_STRENGTH"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              "),_("span",{attrs:{class:"token comment"}},[t._v("/*网络信号强度*/")]),t._v(" \n    ATINY_GET_CELL_ID"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                      "),_("span",{attrs:{class:"token comment"}},[t._v("/*网络小区ID*/")]),t._v(" \n    ATINY_GET_LINK_QUALITY"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),_("span",{attrs:{class:"token comment"}},[t._v("/*网络链路质量*/")]),t._v(" \n \n    ATINY_WRITE_APP_DATA"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   "),_("span",{attrs:{class:"token comment"}},[t._v("/*业务数据下发命令字*/")]),t._v(" \n    ATINY_UPDATE_PSK"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),_("span",{attrs:{class:"token comment"}},[t._v("/*更新psk命令字*/")]),t._v(" \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" atiny_cmd_e"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h4",{attrs:{id:"关键事件枚举类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关键事件枚举类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 关键事件枚举类型")]),t._v(" "),_("p",[t._v("该枚举类型用于LiteOS SDK端云互通组件把自身状态通知用户")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    ATINY_REG_OK"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("              "),_("span",{attrs:{class:"token comment"}},[t._v("/*设备注册成功*/")]),t._v(" \n    ATINY_REG_FAIL"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),_("span",{attrs:{class:"token comment"}},[t._v("/*设备注册失败*/")]),t._v(" \n    ATINY_DATA_SUBSCRIBLE"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),_("span",{attrs:{class:"token comment"}},[t._v("/*数据开始订阅，设备侧允许上报数据 */")]),t._v(" \n    ATINY_DATA_UNSUBSCRIBLE"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),_("span",{attrs:{class:"token comment"}},[t._v("/*数据取消订阅 ，设备侧停止上报数据*/")]),t._v(" \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" atiny_event_e"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h4",{attrs:{id:"lwm2m协议参数结构体"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lwm2m协议参数结构体","aria-hidden":"true"}},[t._v("#")]),t._v(" LwM2M协议参数结构体")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v("   life_time"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             "),_("span",{attrs:{class:"token comment"}},[t._v("/*LwM2M协议生命周期，默认50000,*/")]),t._v("  \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v("  storing_cnt"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),_("span",{attrs:{class:"token comment"}},[t._v("/* L2M2M缓存数据报文个数*/")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" atiny_server_param_t"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h4",{attrs:{id:"安全及服务器参数结构体"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全及服务器参数结构体","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全及服务器参数结构体")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    bool  is_bootstrap"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),_("span",{attrs:{class:"token comment"}},[t._v("/*是否bootstrap服务器*/")]),t._v(" \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("char")]),_("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" server_ip"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),_("span",{attrs:{class:"token comment"}},[t._v("/*服务器ip，字符串表示，支持ipv4和ipv6*/")]),t._v(" \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("char")]),_("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" server_port"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),_("span",{attrs:{class:"token comment"}},[t._v("/*服务器端口号*/")]),t._v(" \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("char")]),_("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" psk_Id"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),_("span",{attrs:{class:"token comment"}},[t._v("/*预置共享密钥ID*/")]),t._v(" \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("char")]),_("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" psk"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               "),_("span",{attrs:{class:"token comment"}},[t._v("/*预置共享密钥*/")]),t._v(" \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("short")]),t._v(" psk_len"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),_("span",{attrs:{class:"token comment"}},[t._v("/*预置共享密钥长度*/")]),t._v(" \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" atiny_security_param_t"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),_("h4",{attrs:{id:"上报数据的枚举类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#上报数据的枚举类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 上报数据的枚举类型")]),t._v(" "),_("p",[t._v("用户上报数据的数据类型，用户根据自身应用扩展")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    BATERRY_LEVEL，  "),_("span",{attrs:{class:"token comment"}},[t._v("/*电池电量*/")]),t._v(" \n    APP_DATA         "),_("span",{attrs:{class:"token comment"}},[t._v("/*用户数据*/")]),t._v(" \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" atiny_report_type_e"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),_("h4",{attrs:{id:"服务器参数结构体"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器参数结构体","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器参数结构体")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    atiny_server_param_t   server_params"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    atiny_security_param_t security_params"),_("span",{attrs:{class:"token punctuation"}},[t._v("[")]),_("span",{attrs:{class:"token number"}},[t._v("2")]),_("span",{attrs:{class:"token punctuation"}},[t._v("]")]),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),_("span",{attrs:{class:"token comment"}},[t._v("/*支持一个IOT服务器，一个bootstrap服务器*/")]),t._v(" \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" atiny_param_t"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h4",{attrs:{id:"终端设备参数结构体"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#终端设备参数结构体","aria-hidden":"true"}},[t._v("#")]),t._v(" 终端设备参数结构体")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("char")]),_("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" endpoint_name"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),_("span",{attrs:{class:"token comment"}},[t._v("/*北向申请产生的epname，每个设备对应唯一一个epname*/")]),t._v(" \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" atiny_device_info_t"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h4",{attrs:{id:"数据上报数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据上报数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据上报数据结构")]),t._v(" "),_("p",[t._v("以下枚举值，表述了用户上报的数据，最终的反馈类型，比如数据发送成功，数据发送但未得到确认，具体定义如下：")]),t._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    NOT_SENT "),_("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{attrs:{class:"token number"}},[t._v("0")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),_("span",{attrs:{class:"token comment"}},[t._v("/*待上报的数据未发送*/")]),t._v(" \n    SENT_WAIT_RESPONSE"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),_("span",{attrs:{class:"token comment"}},[t._v("/*待上报的数据已发送，等待响应*/")]),t._v(" \n    SENT_FAIL"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),_("span",{attrs:{class:"token comment"}},[t._v("/*待上报的数据发送失败*/")]),t._v(" \n    SENT_TIME_OUT"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),_("span",{attrs:{class:"token comment"}},[t._v("/*待上报的数据已发送，等待响应超时*/")]),t._v(" \n    SENT_SUCCESS"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),_("span",{attrs:{class:"token comment"}},[t._v("/*待上报的数据发送成功*/")]),t._v(" \n    SENT_GET_RST"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),_("span",{attrs:{class:"token comment"}},[t._v("/*待上报的数据已发送，但对端响应RST报文*/")]),t._v(" \n    SEND_PENDING"),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),_("span",{attrs:{class:"token comment"}},[t._v("/*待上报的数据等待发送*/")]),t._v(" \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" data_send_status_e"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n \n用户使用以下数据结构上报数据： \n"),_("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" _data_report_t  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    atiny_report_type_e type"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),_("span",{attrs:{class:"token comment"}},[t._v("/*数据上报类型，比如业务数据，电池剩余电量等 */")]),t._v("  \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cookie"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),_("span",{attrs:{class:"token comment"}},[t._v("/*数据cookie,用以在ack回调中，区分不同的数据*/")]),t._v("  \n    "),_("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                     "),_("span",{attrs:{class:"token comment"}},[t._v("/*数据长度，不应大于MAX_REPORT_DATA_LEN*/")]),t._v("  \n    uint8_t"),_("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" buf"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),_("span",{attrs:{class:"token comment"}},[t._v("/*数据缓冲区首地址*/")]),t._v("  \n    atiny_ack_callback callback"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),_("span",{attrs:{class:"token comment"}},[t._v("/*ack回调，其入参取值data_send_status_e类型 */")]),t._v("  \n"),_("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" data_report_t"),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h2",{attrs:{id:"api接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#api接口","aria-hidden":"true"}},[t._v("#")]),t._v(" API接口")]),t._v(" "),_("p",[_("strong",[t._v("接口列表")])]),t._v(" "),_("p",[t._v("LiteOS SDK端云互通组件为用户提供以下几类接口：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口分类")]),t._v(" "),_("th",[t._v("接口名")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("依赖接口")]),t._v(" "),_("td",[t._v("int atiny_cmd_ioctl (atiny_cmd_e cmd, char* arg, int len);")]),t._v(" "),_("td",[t._v("LiteOS SDK端云互通组件申明和调用，由开发者实现。该接口是LwM2M标准对象向设备下发命令的统一入口，包含的参数有：")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("void atiny_event_notify(atiny_event_e event, const char* arg, int len);")]),t._v(" "),_("td",[t._v("LiteOS SDK端云互通组件申明和调用，由开发者实现。LiteOS SDK端云互通组件把注册过程的关键状态，以及运行过程的关键事件通知用户，便于用户根据自身的应用场景灵活地做可靠性处理。该接口包含的参数有：")])]),t._v(" "),_("tr",[_("td",[t._v("对外接口")]),t._v(" "),_("td",[t._v("int atiny_init(atiny_param_t* atiny_params, void** phandle);")]),t._v(" "),_("td",[t._v("LiteOS SDK端云互通组件的初始化接口，由LiteOS SDK端云互通组件实现，设备调用。该接口包含的参数有：")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("int atiny_bind(atiny_device_info_t* device_info, void* phandle);")]),t._v(" "),_("td",[t._v("LiteOS SDK端云互通组件的主函数体，由LiteOS SDK端云互通组件实现，设备调用，调用成功后，不会返回。该接口是LiteOS SDK端云互通组件主循环体，实现了LwM2M协议处理，注册状态机，重传队列，订阅上报。该接口包含的参数有：")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("void atiny_deinit(void* phandle);")]),t._v(" "),_("td",[t._v("LiteOS SDK端云互通组件的去初始化接口，由LiteOS SDK端云互通组件实现，设备调用。该接口为阻塞式接口，调用该接口时，会直到agent tiny主任务退出，资源释放完毕，该接口才会退出。 该接口的参数phandle为atiny_init调用获取到的LiteOS SDK端云互通组件句柄。")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("int atiny_data_report(void* phandle, data_report_t* report_data);")]),t._v(" "),_("td",[t._v("LiteOS SDK端云互通组件数据上报接口，由LiteOS SDK端云互通组件实现，设备调用，设备应用数据使用该接口上报。该接口为阻塞接口，不允许在中断中使用。该接口包含的参数有：")])])])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("参数cmd为具体命令字，比如下发业务数据，下发复位，升级命令等。")])]),t._v(" "),_("li",[_("p",[t._v("参数arg和参数len为具体命令对应的参数及参数长度。")])])]),t._v(" "),_("p",[t._v("为了避免死锁，该接口中禁止调用LiteOS SDK端云互通组件对外接口。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("参数event为具体事件类型，比如设备注册，去注册，数据订阅和去订阅等。")])]),t._v(" "),_("li",[_("p",[t._v("参数arg和参数len为具体事件的参数和参数长度。")])])]),t._v(" "),_("p",[t._v("为了避免死锁，该接口中禁止调用LiteOS SDK端云互通组件对外接口。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("参数atiny_params请参考atiny_param_t数据结构说明。")])]),t._v(" "),_("li",[_("p",[t._v("参数phandle为出参，返回表征当前创建的LiteOS SDK端云互通组件的句柄。")])]),t._v(" "),_("li",[_("p",[t._v("参数device_info请参考数据结构atiny_device_info_t说明。")])]),t._v(" "),_("li",[_("p",[t._v("参数phandle为atiny_init调用获取到的LiteOS SDK端云互通组件句柄。")])]),t._v(" "),_("li",[_("p",[t._v("参数phandle为atiny_init调用获取到的Agent Tiny句柄。")])]),t._v(" "),_("li",[_("p",[t._v("参数report_data请参考数据结构data_report_t说明。")])])]),t._v(" "),_("p",[_("strong",[t._v("错误码")])]),t._v(" "),_("p",[t._v("LiteOS SDK端云互通组件对外接口和依赖接口，统一使用以下错误码：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("序号")]),t._v(" "),_("th",[t._v("定义")]),t._v(" "),_("th",[t._v("实际数值")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("参考解决方案")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("ATINY_OK")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("正常返回码")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("ATINY_ARG_INVALID")]),t._v(" "),_("td",[t._v("-1")]),t._v(" "),_("td",[t._v("非法参数")]),t._v(" "),_("td",[t._v("确保入参合法")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("ATINY_BUF_OVERFLOW")]),t._v(" "),_("td",[t._v("-2")]),t._v(" "),_("td",[t._v("缓冲区溢出")]),t._v(" "),_("td",[t._v("确保缓冲区充足")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("ATINY_MSG_CONGEST")]),t._v(" "),_("td",[t._v("-3")]),t._v(" "),_("td",[t._v("消息拥塞")]),t._v(" "),_("td",[t._v("暂缓数据上报")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("ATINY_MALLOC_FAILED")]),t._v(" "),_("td",[t._v("-4")]),t._v(" "),_("td",[t._v("内存申请失败")]),t._v(" "),_("td",[t._v("检查内存是否有泄漏")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("ATINY_RESOURCE_NOT_FOUND")]),t._v(" "),_("td",[t._v("-5")]),t._v(" "),_("td",[t._v("数据上报类型非法")]),t._v(" "),_("td",[t._v("检查数据类型是否正确")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("ATINY_RESOURCE_NOT_ENOUGH")]),t._v(" "),_("td",[t._v("-6")]),t._v(" "),_("td",[t._v("系统资源不足")]),t._v(" "),_("td",[t._v("检查系统资源，比如信号量，套接字个数等，是否配置过少，或是否有泄漏")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("ATINY_CLIENT_UNREGISTERED")]),t._v(" "),_("td",[t._v("-7")]),t._v(" "),_("td",[t._v("LiteOS SDK端云互通组件注册失败")]),t._v(" "),_("td",[t._v("检查psk，服务器信息等是否正确")])]),t._v(" "),_("tr",[_("td",[t._v("9")]),t._v(" "),_("td",[t._v("ATINY_SOCKET_CREATE_FAILED")]),t._v(" "),_("td",[t._v("-8")]),t._v(" "),_("td",[t._v("网络套接字创建失败")]),t._v(" "),_("td",[t._v("检查网络配置参数是否正确")])])])]),t._v(" "),_("h2",{attrs:{id:"atiny-cmd-ioctl实现示例接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#atiny-cmd-ioctl实现示例接口","aria-hidden":"true"}},[t._v("#")]),t._v(" atiny_cmd_ioctl实现示例接口")]),t._v(" "),_("p",[t._v("atiny_cmd_ioctl是LiteOS\nSDK端云互通组件定义的一个通用可扩展的接口，其命令字如atiny_cmd_e所定义，用户根据自身需求进行选择性实现，也可以根据自身需求进行扩展。常用的接口定义如下表所示，每一个接口都和atiny_cmd_e的枚举值一一对应：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("回调接口函数")]),t._v(" "),_("th",[t._v("描述[w1]")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("int atiny_get_manufacturer(char* manufacturer,int len)")]),t._v(" "),_("td",[t._v("获取厂商名字，参数manufacturer指向的内存由LiteOS SDK端云互通组件分配，户填充自身的厂商名字，长度不能超过参数len。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_dev_type(char * dev_type,int len)")]),t._v(" "),_("td",[t._v("获取设备类型，参数dev_type指向的内存由LiteOS SDK端云互通组件分配，户填充自身的设备类型，长度不能超过参数len。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_model_number((char * model_numer, int len)")]),t._v(" "),_("td",[t._v("获取设备模型号，参数model_numer指向的内存由LiteOS SDK端云互通组件分配，户填充自身的设备模型号，长度不能超过参数len。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_serial_number(char* num,int len)")]),t._v(" "),_("td",[t._v("获取设备序列号，参数numer指向的内存由LiteOS SDK端云互通组件分配，户填充自身的设备序列号，长度不能超过参数len。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_dev_err(int* arg，int len)")]),t._v(" "),_("td",[t._v("获取设备状态，比如内存耗尽、电池不足、信号强度低等，参数arg由LiteOS SDK端云互通组件分配，用户填充，长度不能超过len。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_do_dev_reboot(void)")]),t._v(" "),_("td",[t._v("设备复位。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_do_factory_reset(void)")]),t._v(" "),_("td",[t._v("厂商复位。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_baterry_level(int* voltage)")]),t._v(" "),_("td",[t._v("获取电池剩余电量。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_memory_free(int* size)")]),t._v(" "),_("td",[t._v("获取空闲内存大小。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_total_memory(int* size)")]),t._v(" "),_("td",[t._v("获取总共内存大小。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_signal_strength(int* singal_strength)")]),t._v(" "),_("td",[t._v("获取信号强度。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_cell_id(long* cell_id)")]),t._v(" "),_("td",[t._v("获取小区ID。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_get_link_quality(int* quality)")]),t._v(" "),_("td",[t._v("获取信道质量。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_write_app_write(void* user_data, int len)")]),t._v(" "),_("td",[t._v("业务数据下发。")])]),t._v(" "),_("tr",[_("td",[t._v("int atiny_update_psk(char* psk_id, int len)")]),t._v(" "),_("td",[t._v("预置共享密钥更新。")])])])])])}],!1,null,null,null);n.options.__file="sdk-apis.md";a.default=n.exports}}]);