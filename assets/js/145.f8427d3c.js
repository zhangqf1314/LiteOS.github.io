(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{532:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"智慧路灯实验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#智慧路灯实验","aria-hidden":"true"}},[t._v("#")]),t._v(" 智慧路灯实验")]),t._v(" "),r("h2",{attrs:{id:"实验背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 实验背景")]),t._v(" "),r("p",[t._v("随着城市经济和规模的发展，各种类型的道路越来越长，机动车数量迅速增加，夜间交通流量也越来越大，道路照明质量直接影响交通安全和城市发展。如何提高道路照明质量、降低能耗、实现绿色照明已成为城市照明的关键问题。道路照明的首要任务是在节约公共能源的基础上，提供安全和舒适的照明亮度，达到减少交通事故，提升交通运输效率的目的。由于基础设施的条件所限，目前普遍缺少路灯级的通信链路，路灯控制方式一般只能对整条道路统一控制，无法测量和控制到每一盏灯。")]),t._v(" "),r("p",[t._v("NB-IoT智能路灯可实现单灯精确控制和维护，并根据季节、天气、场景变化灵活设置路灯开/关/亮度，节省电耗10-20%；使用NB-IoT智能路灯方案后，路灯运营方无需人工巡检，可远程检测并定位故障，并结合路灯运行历史开展生命周期管理，降低运维成本达50%。")]),t._v(" "),r("p",[t._v("NB-IoT智能路灯利用运营商网络，路灯即插即用，并通过“一跳”的方式将数据传到路灯管理云平台。由于使用运营商的网络，省去了后期的维护成本，网络的覆盖质量和优化也由电信运营商负责。")]),t._v(" "),r("p",[t._v("本实验将以NB-IoT智能路灯为场景，带大家快速了解NB-IoT智能路灯的原型开发，实现环境光强度的采集，及路灯单灯控制")]),t._v(" "),r("h2",{attrs:{id:"实验准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实验准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 实验准备")]),t._v(" "),r("p",[t._v("名称\t数量\t备注\nEVB_M1开发板\t1\t\n光照强度传感器扩展板\t1\t\nMDK(keil 5)软件\t1\t自行导入License\nOceanConnect账号\t1\t可远程实验室申请\nLiteOS开源代码\t1\tGitHub地址：xxxx\n安卓手机\t1\t\n手机APK\t1")]),t._v(" "),r("h2",{attrs:{id:"熟悉liteos工程文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#熟悉liteos工程文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 熟悉LiteOS工程文件")]),t._v(" "),r("h2",{attrs:{id:"创建liteos系统任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建liteos系统任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建LiteOS系统任务")]),t._v(" "),r("h2",{attrs:{id:"移植传感器程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移植传感器程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 移植传感器程序")]),t._v(" "),r("h2",{attrs:{id:"编写传感器数据采集任务回调函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编写传感器数据采集任务回调函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写传感器数据采集任务回调函数")]),t._v(" "),r("h2",{attrs:{id:"编写数据发送任务回调函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编写数据发送任务回调函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写数据发送任务回调函数")]),t._v(" "),r("h2",{attrs:{id:"编写urc数据消息回调函数处理程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编写urc数据消息回调函数处理程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写URC数据消息回调函数处理程序")]),t._v(" "),r("h2",{attrs:{id:"编写初始化nb-iot模块函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编写初始化nb-iot模块函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写初始化NB-IoT模块函数")]),t._v(" "),r("h2",{attrs:{id:"nb-iot模块对接平台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nb-iot模块对接平台","aria-hidden":"true"}},[t._v("#")]),t._v(" NB-IoT模块对接平台")]),t._v(" "),r("h2",{attrs:{id:"liteos调测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#liteos调测","aria-hidden":"true"}},[t._v("#")]),t._v(" LiteOS调测")]),t._v(" "),r("h2",{attrs:{id:"体验手机app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#体验手机app","aria-hidden":"true"}},[t._v("#")]),t._v(" 体验手机APP")])])}],!1,null,null,null);s.options.__file="light.md";a.default=s.exports}}]);