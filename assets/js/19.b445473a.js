(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{484:function(e,t,r){"use strict";r.r(t);var _=r(0),a=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"event-error-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-error-codes","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Error Codes")]),r("p",[e._v("Error codes are returned if errors occur during event operations, such as event initialization, event destroying, event reading, event writing, and event clearance, to facilitate fault locating.")]),r("table",[r("thead",[r("tr",[r("th",[e._v("No.")]),r("th",[e._v("Definition")]),r("th",[e._v("Error Code")]),r("th",[e._v("Description")]),r("th",[e._v("Solution")])])]),r("tbody",[r("tr",[r("td",[e._v("1")]),r("td",[r("code",[e._v("LOS_ERRNO_EVENT_SETBIT_INVALID")])]),r("td",[e._v("0x02001c00")]),r("td",[e._v("Bit 25 of the event ID must not be set to 1 because it is reserved as an error code.")]),r("td",[e._v("Set bit 25 of the event ID to 0.")])]),r("tr",[r("td",[e._v("2")]),r("td",[r("code",[e._v("LOS_ERRNO_EVENT_READ_TIMEOUT")])]),r("td",[e._v("0x02001c01")]),r("td",[e._v("Event reading times out.")]),r("td",[e._v("Increase the permitted wait time. Alternatively, re-read the event.")])]),r("tr",[r("td",[e._v("3")]),r("td",[r("code",[e._v("LOS_ERRNO_EVENT_EVENTMASK_INVALID")])]),r("td",[e._v("0x02001c02")]),r("td",[e._v("The passed-in event ID is invalid.")]),r("td",[e._v("Pass in a valid event ID.")])]),r("tr",[r("td",[e._v("4")]),r("td",[r("code",[e._v("LOS_ERRNO_EVENT_READ_IN_INTERRUPT")])]),r("td",[e._v("0x02001c03")]),r("td",[e._v("The event is being read when an interrupt is being processed.")]),r("td",[e._v("Let a new task read the event.")])]),r("tr",[r("td",[e._v("5")]),r("td",[r("code",[e._v("LOS_ERRNO_EVENT_FLAGS_INVALID")])]),r("td",[e._v("0x02001c04")]),r("td",[e._v("The mode of event reading is invalid.")]),r("td",[e._v("Pass in a valid mode.")])]),r("tr",[r("td",[e._v("6")]),r("td",[r("code",[e._v("LOS_ERRNO_EVENT_READ_IN_LOCK")])]),r("td",[e._v("0x02001c05")]),r("td",[e._v("The task is locked and fails to read the event.")]),r("td",[e._v("Unlock the task, and then let the task read the event.")])]),r("tr",[r("td",[e._v("7")]),r("td",[r("code",[e._v("LOS_ERRNO_EVENT_PTR_NULL")])]),r("td",[e._v("0x02001c06")]),r("td",[e._v("The passed-in pointer is null.")]),r("td",[e._v("Pass in a non-null pointer.")])])])]),r("p",[e._v("An error code is a 32-bit storage unit. Bit 24 to bit 31 indicate an error level; bit 16 to bit 23 indicate an error code flag; bit 8 to bit 15 indicate the ID of the module that reports the error code; bit 0 to bit 7 indicate an error code. The following is the example of an error code:")]),r("div",{staticClass:"language-c extra-class"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[r("span",{attrs:{class:"token macro property"}},[e._v("#"),r("span",{attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" LOS_ERRNO_OS_ERROR(MID, ERRNO)  \\\n(LOS_ERRTYPE_ERROR | LOS_ERRNO_OS_ID | ((UINT32)(MID) << 8) | (ERRNO))")]),e._v("\n")])])]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),r("ul",[r("li",[r("code",[e._v("LOS_ERRTYPE_ERROR")]),e._v(": Define critical OS errors")]),r("li",[r("code",[e._v("LOS_ERRNO_OS_ID")]),e._v(": OS error code flag")]),r("li",[r("code",[e._v("MID")]),e._v(": OS_MOUDLE_ID")]),r("li",[r("code",[e._v("LOS_MOD_EVENT")]),e._v(": Event module ID")]),r("li",[r("code",[e._v("ERRNO")]),e._v(": error ID number")])]),r("p",[e._v("For example:")]),r("div",{staticClass:"language-c extra-class"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[r("span",{attrs:{class:"token macro property"}},[e._v("#"),r("span",{attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" LOS_ERRNO_EVENT_READ_IN_LOCK LOS_ERRNO_OS_ERROR(LOS_MOD_EVENT, 0x05)")]),e._v("\n")])])])])])}],!1,null,null,null);t.default=a.exports}}]);