(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{266:function(e,t,n){e.exports=n.p+"assets/img/en-us_image_0150623379.2321611d.png"},845:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:n(266),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('\nAT+CGSN=1\n\n+CGSN:XXXXXXXXX\nOK\n//Query the IMEI number. If only "ERROR" is returned, customers need to write the IMEI number. This only happens in early versions. After obtaining the IMEI number, you could use it as the verification code to register a device with the specified profile.\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\nAT+CFUN=0            //Disable the UE function.\n\nOK\n\nAT+NBAND=20  //Set the band corresponding to the module to 20.\n\nOK\n\nAT+CFUN=1   //Enable the UE function.\n\nOK\nAT+NCONFIG=AUTOCONNECT,TRUE  //Set the UE to the automatic mode. When the module powers on, it connects to the network and is activated.\nOK\n\nAT+NRB                               //Reset the UE, and keep the setting.\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n\nAT+CGATT?                     //Check whether the UE is connected to the network.\n\n+CGATT:1                   //1: connected; 0: disconnected, it takes a few seconds to connect.\n\n\nOK\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\nAT+NCDP=device.hw-oc.com,5683 //Set the CDP server with the domain name or the fixed IP address (if any).\n\nOK\n\nAT+NNMI=1                        //Set the reporting function to the automatic mode, which indicates that if any message reaches the module, the module automatically reports.\nOK\n\n+QLWEVTIND:0                  //Register data with the server successfully.\n+QLWEVTIND:3                  //The object 19 has been found on OceanConnect. When the module reports this message, the data is sent to OceanConnect.\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\nAT+NMGS=3,313233   //The format is AT+NMGS = len,hexdata (ascii format). 31: represents the hex byte 0x31. 3: You have sent 3 bytes including 0x31, 0x32, and 0x33.\n\nOK\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n+NNMI:2,4F4E   //The format is +NNMI:len,hexdata(asci format), which means that the server sends 2 bytes including 0x4F and 0x4E.\nOK\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('\nAT+CGPADDR=1        //Check the IP address allocated for the default PDN.\n+CGPADDR: 1,10.52.241.198\nOK\n//Set the IP address and port for OceanConnect.\n//If you need to connect to another IoT platform, execute the AT+QLWDEL command before setting the IP address and port.\nAT+QLWSERV="xx.xxx.xx.xx",5683\nOK\nAT+QLWCONF="867724030023557"//Set the IMEI number.\nOK\nAT+QLWADDOBJ=19,0,1,"0"//Add an LWM2M object 19/0/0.\nOK\nAT+QLWADDOBJ=19,1,1,"0"//Add an LWM2M object 19/1/0.\nOK\nAT+QLWOPEN=0 //Register the LWM2M objects 19/0/0 and 19/1/0 with OceanConnect in direct push mode.\nOK\nCONNECT OK //Registered successfully.\n+QLWOBSERVE: 0,19,0,0 //Receive the request for observing the object 19/0/0.\nAT+QLWCFG="dataformat",1,1 //Configure the hex string mode for sending and receiving data.\nOK\n//Send the NON message to OceanConnect, including 10 hex bytes (0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, and 0xA)\nAT+QLWDATASEND=19,0,0,10,0102030405060708090A ,0x0000\nOK\n+QLWDATARECV: 19,1,0,4,AAAA0000 //Receive data from OceanConnect.\n//Send the CON message to OceanConnect, and wait for an ACK response from OceanConnect.\nAT+QLWDATASEND=19,0,0,10,0102030405060708090A ,0x0100\nOK\nSEND OK //The message has been successfully sent.\n+QLWDATARECV: 19,1,0,4,AAAA0000 //Receive data from OceanConnect.\nAT+QLWDATASTATUS?//Query the sending status of the CON message.\n+QLWDATASTATUS: 4 //The message has been successfully sent.\nOK\nAT+QLWCLOSE //Deregister from OceanConnect.\nOK\nCLOSE OK //Deregistered successfully.\nAT+QLWDEL //Delete the LWM2M context.\nOK\n\n')])])])}],s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("Although there are various NB-IoT module vendors, such as Lierda, Quectel, and u-blox, NB-IoT chip vendors are few. NB-IoT chips can be connected to OceanConnect, and this document will introduce three types of NB-IoT chips. If NB-IoT modules has a reference manual, use the reference manual; or else, you could use this document as a reference.")]),e._v(" "),n("p",[e._v("If NB-IoT chips, such as HiSilicon chips, support OceanConnect, you could just follow their introduction. If NB-IoT chips support the standard LWM2M, you could add the object 19. If NB-IoT chips support the UDP, you could use Huawei LiteOS that well implements the LWM2M or CoAP and adapts to OceanConnect. The following figure shows what you need to do with three types of NB-IoT chips.")]),e._v(" "),n("p",[e._v("Figure 1-1 What you need to do with three types of NB-IoT chips")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("The following chapter takes three examples.")]),e._v(" "),e._m(2),e._v(" "),n("h2",{attrs:{id:"NB-IoT-chips-support-oceanconnect.md"}},[e._v("NB-IoT Chips Support OceanConnect")]),e._v(" "),n("p",[e._v("This example refers to the Quectel AT command reference manual.")]),e._v(" "),n("p",[e._v("All HiSilicon chips support OceanConnect and may have the same process and instructions. Therefore, you could connect the NB-IoT chips to OceanConnect in the following way: Obtain the IMEI number, and use it as the verification code to create a device on OceanConnect.")]),e._v(" "),e._m(3),n("p",[e._v("Set the band. When obtaining the SIM card from a device with NB-IoT modules, you need to check the band of the SIM card and the corresponding module. For example, if the band of an SIM card is 20, and the module supports bands 5, 6, 8, and 20, set the band corresponding to the module to 20. However, you need to disable the UE function.")]),e._v(" "),e._m(4),n("p",[e._v("When the module powers on, it is automatically connected to the network. You could execute AT commands to check whether the module has been connected to the network.")]),e._v(" "),e._m(5),n("p",[e._v("After the module is connected to the network, you could use the network functions, for example, querying the server IP address with the domain name. If the AT+NCDP command does not support the domain name, you could use DNS to get one. HiSillicon chips support the domain name. Therefore, you do not need to query the IP address. Next, you need to set the CDP server properly.")]),e._v(" "),e._m(6),n("p",[e._v("After you connect to the IoT server, you could report data to OceanConnect or receive commands from OceanConnect.")]),e._v(" "),e._m(7),n("p",[e._v("If receiving data from OceanConnect, the module reports the data to the AT interface.")]),e._v(" "),e._m(8),n("p",[e._v("Remember that Boudica 120 (and earlier versions) uses CoAP while Boudica 150 uses LWM2M. You could refer to NB-IoT DRIVER from LiteOS. LiteOS supports the AT framework, which simplifies the processing of AT commands.")]),e._v(" "),n("h2",{attrs:{id:"NB-IoT-chips-support-the-standard-lwm2m.md"}},[e._v("NB-IoT Chips Support the Standard LWM2M")]),e._v(" "),n("p",[e._v("If NB-IoT chips support the standard LWM2M, you could add the object 19. The module can use the object 19 to report data to OceanConnect, and OceanConnect sends commands to the object 19. The following uses MT2625(MTK) as an example:")]),e._v(" "),e._m(9),n("p",[e._v("Some NB-IoT chips do not support IoT setting with the domain name. If only the domain name has been provided for the server, you could decode the domain name with DNS based on the UDP.")]),e._v(" "),n("h2",{attrs:{id:"nb-chips-support-the-udp.md"}},[e._v("NB-IoT Chips Support the UDP")]),e._v(" "),n("p",[e._v("For NB chips supporting the UDP, to connect to NB-IoT modules, MCUs must implement LWM2M, and Huawei LiteOS can implement it and adapt to OceanConnect. Therefore, you can use Huawei LiteOS. To obtain more details about Huawei LiteOS, visit  "),n("a",{attrs:{href:"https://liteos.github.io/en/kernel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://liteos.github.io/en/kernel/"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("and how to connect Huawei IoT platform,please visit "),n("a",{attrs:{href:"https://liteos.github.io/en/sdk/device-cloud-interconnect.html#overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://liteos.github.io/en/sdk/device-cloud-interconnect.html#overview"),n("OutboundLink")],1),e._v(".")])])},o,!1,null,null,null);a.options.__file="nbiot-connect2oc.md";t.default=a.exports}}]);