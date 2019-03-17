[
    {
        "id": "b6e18574.bf8618",
        "type": "tab",
        "label": "Control",
        "disabled": false,
        "info": "## Control\n# controls garage door lamps and buzzer."
    },
    {
        "id": "c84aae51.ffeed",
        "type": "tab",
        "label": "Pi Ctl",
        "disabled": false,
        "info": ""
    },
    {
        "id": "2746dc96.5984f4",
        "type": "tab",
        "label": "Auth",
        "disabled": false,
        "info": ""
    },
    {
        "id": "1f598891.b00e47",
        "type": "tab",
        "label": "Admin",
        "disabled": false,
        "info": ""
    },
    {
        "id": "29b80129.3a178e",
        "type": "tab",
        "label": "Links",
        "disabled": false,
        "info": ""
    },
    {
        "id": "e468ec31.23399",
        "type": "tab",
        "label": "Calc",
        "disabled": false,
        "info": ""
    },
    {
        "id": "441b5ba4.d906c4",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "da8fd6dc.9e69e8",
        "type": "twitter-credentials",
        "z": "",
        "screen_name": "h3xaploi8"
    },
    {
        "id": "c62c1f44.f06cd",
        "type": "ui_base",
        "theme": {
            "name": "theme-dark",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#000000",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#6d696a",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#858585",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "reset": false
            },
            "themeState": {
                "base-color": {
                    "default": "#097479",
                    "value": "#6d696a",
                    "edited": true
                },
                "page-titlebar-backgroundColor": {
                    "value": "#6d696a",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#111111",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#000000",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#938f90",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#555555",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#333333",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#eeeeee",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#6d696a",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#333333",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey"
            }
        },
        "site": {
            "name": "iEchoSystem Smart Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 2,
                "gy": 3,
                "cx": 6,
                "cy": 6,
                "px": 2,
                "py": 2
            }
        }
    },
    {
        "id": "49245e98.f776d",
        "type": "ui_group",
        "z": "",
        "name": "Social Media",
        "tab": "d0aed8f7.1c86b8",
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "e66dfd8c.fc7c9",
        "type": "mongodb-config",
        "z": "",
        "hostname": "127.0.0.1",
        "port": "27017",
        "db": "local",
        "name": "MainDB"
    },
    {
        "id": "99da3667.7c1478",
        "type": "mqtt-broker",
        "z": "",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "3d3158e6.ed5f18",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/ttyAMA0",
        "serialbaud": "57600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": false,
        "responsetimeout": "10000"
    },
    {
        "id": "c10321e3.3d93c",
        "type": "ui_tab",
        "z": "",
        "name": "Control",
        "icon": "fa-bolt",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "732f938e.b07ebc",
        "type": "ui_group",
        "z": "",
        "name": "GPIO Pins",
        "tab": "8a7336af.098ce8",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "e6eefd25.db1b2",
        "type": "ui_group",
        "z": "",
        "name": "Tests",
        "tab": "c10321e3.3d93c",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "465ecb9c.f72554",
        "type": "ui_group",
        "z": "",
        "name": "Room Lamp",
        "tab": "c10321e3.3d93c",
        "order": 2,
        "disp": false,
        "width": "2",
        "collapse": false
    },
    {
        "id": "fd49dea9.6d273",
        "type": "ui_group",
        "z": "",
        "name": "Relays",
        "tab": "8a7336af.098ce8",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "9f736aec.a6d908",
        "type": "ui_group",
        "z": "",
        "name": "Garage Door",
        "tab": "c10321e3.3d93c",
        "order": 1,
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "b3c43cba.25fd7",
        "type": "ui_group",
        "z": "",
        "name": "Home Door",
        "tab": "c10321e3.3d93c",
        "order": 4,
        "disp": false,
        "width": "2",
        "collapse": false
    },
    {
        "id": "8a7336af.098ce8",
        "type": "ui_tab",
        "z": "",
        "name": "Pi Ctl",
        "icon": "fa-braille",
        "order": 2,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "c0bdbb18.41baa8",
        "type": "ui_link",
        "z": "",
        "name": "هوم فليكس",
        "link": "http://ipool.remotewebaccess.com",
        "icon": "fa-television",
        "target": "iframe",
        "order": 3
    },
    {
        "id": "6b98b728.840248",
        "type": "ui_group",
        "z": "",
        "name": "System",
        "tab": "8a7336af.098ce8",
        "order": 1,
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "b3127d2d.d0af1",
        "type": "ui_link",
        "z": "",
        "name": "Admin",
        "link": "http://ipool.remotewebaccess.com:1880/root",
        "icon": "fa-gear",
        "target": "iframe",
        "order": 7
    },
    {
        "id": "d0aed8f7.1c86b8",
        "type": "ui_tab",
        "z": "",
        "name": "2019",
        "icon": "fa-copyright",
        "order": 8,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "6521b84b.2827c8",
        "type": "ui_link",
        "z": "",
        "name": "Server",
        "link": "https://ipool.remotewebaccess.com",
        "icon": "fa-server",
        "target": "newtab",
        "order": 4
    },
    {
        "id": "2ecb5c8b.6a3364",
        "type": "ui_link",
        "z": "",
        "name": "Cloud",
        "link": "http://ipool.remotewebaccess.com:420",
        "icon": "fa-cloud",
        "target": "newtab",
        "order": 5
    },
    {
        "id": "af44271.6061dd8",
        "type": "ui_link",
        "z": "",
        "name": "Mail",
        "link": "http://ipool.remotewebaccess.com/mail/Mondo/lang/sys/login.aspx",
        "icon": "fa-envelope-o ",
        "target": "iframe",
        "order": 6
    },
    {
        "id": "1bbc4b8c.26e5b4",
        "type": "ui_group",
        "z": "",
        "name": "Bench lamp",
        "tab": "c10321e3.3d93c",
        "order": 3,
        "disp": false,
        "width": "2",
        "collapse": false
    },
    {
        "id": "92ddf2ae.9a455",
        "type": "Twitter-User-Timeline-config",
        "z": "",
        "name": "h3xaploi8"
    },
    {
        "id": "cd2d582c.be8618",
        "type": "ui_link",
        "z": "",
        "name": "OAuth",
        "link": "http://ipool.remotewebaccess.com:1880/OAuth",
        "icon": "open_in_browser",
        "target": "iframe",
        "order": 9
    },
    {
        "id": "23d0ac25.f2b804",
        "type": "ui_tab",
        "z": "",
        "name": "Calc",
        "icon": "calc",
        "disabled": false,
        "hidden": false
    },
    {
        "id": "49559d3c.94b564",
        "type": "ui_group",
        "z": "",
        "name": "Expenses",
        "tab": "23d0ac25.f2b804",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "f2d002a.83803",
        "type": "mqtt-broker",
        "z": "",
        "name": "Trunky",
        "broker": "192.168.5.57",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "ac7c0126.50ff7",
        "type": "mqtt-broker",
        "z": "",
        "name": "",
        "broker": "192.168.1.140",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "284ce192.650bae",
        "type": "ui_group",
        "z": "",
        "name": "Default",
        "tab": "f08286e9.73c608",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "f08286e9.73c608",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard"
    },
    {
        "id": "5ed138c2.3eeef8",
        "type": "ui_group",
        "z": "",
        "name": "Column 2",
        "tab": "cadc5fe0.b9482",
        "order": 2,
        "disp": false,
        "width": "12",
        "collapse": false
    },
    {
        "id": "cadc5fe0.b9482",
        "type": "ui_tab",
        "z": "",
        "name": "Feeder test",
        "icon": "dashboard"
    },
    {
        "id": "6cfa6f8.17aee9",
        "type": "debug",
        "z": "b6e18574.bf8618",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "payload",
        "x": 890,
        "y": 375,
        "wires": []
    },
    {
        "id": "c869155d.329838",
        "type": "rpi-gpio out",
        "z": "b6e18574.bf8618",
        "name": "",
        "pin": "38",
        "set": true,
        "level": "1",
        "freq": "",
        "out": "out",
        "x": 525,
        "y": 525,
        "wires": []
    },
    {
        "id": "6a4a7fc7.d6bee",
        "type": "trigger",
        "z": "b6e18574.bf8618",
        "op1": "0",
        "op2": "1",
        "op1type": "str",
        "op2type": "str",
        "duration": "100",
        "extend": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "name": "",
        "x": 275,
        "y": 210,
        "wires": [
            [
                "78590585.1996fc"
            ]
        ]
    },
    {
        "id": "2b6377a1.8d7de8",
        "type": "exec",
        "z": "b6e18574.bf8618",
        "command": "/home/pi/tts.sh Lamp on",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 305,
        "y": 45,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "11b887c4.a0fc88",
        "type": "exec",
        "z": "b6e18574.bf8618",
        "command": "/home/pi/tts.sh Lamp off",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 305,
        "y": 150,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "f7579178.4010a",
        "type": "ui_button",
        "z": "b6e18574.bf8618",
        "name": "",
        "group": "9f736aec.a6d908",
        "order": 2,
        "width": "6",
        "height": "1",
        "passthru": false,
        "label": "Open Garage",
        "tooltip": "",
        "color": "green",
        "bgcolor": "black",
        "icon": "fa-car",
        "payload": "1",
        "payloadType": "str",
        "topic": "",
        "x": 80,
        "y": 210,
        "wires": [
            [
                "821902d2.53687",
                "6a4a7fc7.d6bee",
                "3511dd2b.9b3e62",
                "16746f6c.bf18c1"
            ]
        ]
    },
    {
        "id": "1da42669.f7b2da",
        "type": "ui_button",
        "z": "b6e18574.bf8618",
        "name": "",
        "group": "9f736aec.a6d908",
        "order": 3,
        "width": "6",
        "height": "1",
        "passthru": false,
        "label": "Close Garage",
        "tooltip": "",
        "color": "red",
        "bgcolor": "white",
        "icon": "fa-car",
        "payload": "0",
        "payloadType": "str",
        "topic": "",
        "x": 80,
        "y": 240,
        "wires": [
            [
                "500d31a0.10a88",
                "1bad414.84a17bf",
                "cf9a85bf.927f98",
                "1682468b.33de69"
            ]
        ]
    },
    {
        "id": "821902d2.53687",
        "type": "exec",
        "z": "b6e18574.bf8618",
        "command": "/home/pi/tts.sh Opening garage door",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 705,
        "y": 195,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "500d31a0.10a88",
        "type": "exec",
        "z": "b6e18574.bf8618",
        "command": "/home/pi/tts.sh Garage door is closing.",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 705,
        "y": 255,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "3511dd2b.9b3e62",
        "type": "ui_toast",
        "z": "b6e18574.bf8618",
        "position": "bottom right",
        "displayTime": "14",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "Please wite while door opens...",
        "name": "",
        "x": 450,
        "y": 210,
        "wires": []
    },
    {
        "id": "cf9a85bf.927f98",
        "type": "ui_toast",
        "z": "b6e18574.bf8618",
        "position": "top right",
        "displayTime": "14",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "Please wite wihle door closes...",
        "name": "",
        "x": 450,
        "y": 240,
        "wires": []
    },
    {
        "id": "1bad414.84a17bf",
        "type": "trigger",
        "z": "b6e18574.bf8618",
        "op1": "0",
        "op2": "1",
        "op1type": "str",
        "op2type": "str",
        "duration": "100",
        "extend": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "name": "",
        "x": 275,
        "y": 240,
        "wires": [
            [
                "78590585.1996fc"
            ]
        ]
    },
    {
        "id": "c9571997.ee6438",
        "type": "rpi-gpio out",
        "z": "b6e18574.bf8618",
        "name": "",
        "pin": "35",
        "set": true,
        "level": "1",
        "freq": "",
        "out": "out",
        "x": 555,
        "y": 75,
        "wires": []
    },
    {
        "id": "78590585.1996fc",
        "type": "rpi-gpio out",
        "z": "b6e18574.bf8618",
        "name": "",
        "pin": "36",
        "set": true,
        "level": "1",
        "freq": "",
        "out": "out",
        "x": 930,
        "y": 225,
        "wires": []
    },
    {
        "id": "16e7f9a6.a6b7d6",
        "type": "exec",
        "z": "2746dc96.5984f4",
        "command": "/home/pi/tts.sh you have pressed number 1",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 725,
        "y": 120,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "da02ebbf.f17cc8",
        "type": "function",
        "z": "2746dc96.5984f4",
        "name": "check inputs",
        "func": "// Get value\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 355,
        "y": 90,
        "wires": [
            [
                "f73c262b.0d7af8"
            ]
        ]
    },
    {
        "id": "8a7e0e8d.ac779",
        "type": "rpi-keyboard",
        "z": "2746dc96.5984f4",
        "name": "",
        "x": 115,
        "y": 165,
        "wires": [
            [
                "da02ebbf.f17cc8",
                "2ece7c20.0eb544"
            ]
        ]
    },
    {
        "id": "f73c262b.0d7af8",
        "type": "debug",
        "z": "2746dc96.5984f4",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 745,
        "y": 240,
        "wires": []
    },
    {
        "id": "bee364ae.6b6de8",
        "type": "inject",
        "z": "2746dc96.5984f4",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 120,
        "y": 90,
        "wires": [
            [
                "da02ebbf.f17cc8"
            ]
        ]
    },
    {
        "id": "79a46ddf.ab4ff4",
        "type": "mongodb-node",
        "z": "2746dc96.5984f4",
        "mongodb": "e66dfd8c.fc7c9",
        "name": "",
        "collection": "password",
        "operation": "find",
        "upsert": false,
        "multi": false,
        "x": 405,
        "y": 435,
        "wires": [
            [
                "65de81d8.84447"
            ]
        ]
    },
    {
        "id": "b0d75e25.bae",
        "type": "http in",
        "z": "2746dc96.5984f4",
        "name": "",
        "url": "/password",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 420,
        "wires": [
            [
                "79a46ddf.ab4ff4"
            ]
        ]
    },
    {
        "id": "65de81d8.84447",
        "type": "http response",
        "z": "2746dc96.5984f4",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 645,
        "y": 450,
        "wires": []
    },
    {
        "id": "2ece7c20.0eb544",
        "type": "mongodb-node",
        "z": "2746dc96.5984f4",
        "mongodb": "e66dfd8c.fc7c9",
        "name": "",
        "collection": "password",
        "operation": "find",
        "upsert": false,
        "multi": false,
        "x": 360,
        "y": 240,
        "wires": [
            [
                "f73c262b.0d7af8"
            ]
        ]
    },
    {
        "id": "1c9ca7df.b90de8",
        "type": "inject",
        "z": "2746dc96.5984f4",
        "name": "",
        "topic": "password",
        "payload": "79",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 115,
        "y": 270,
        "wires": [
            [
                "2ece7c20.0eb544"
            ]
        ]
    },
    {
        "id": "d732ad32.1893b",
        "type": "function",
        "z": "2746dc96.5984f4",
        "name": "",
        "func": "\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 540,
        "y": 270,
        "wires": [
            []
        ]
    },
    {
        "id": "dcab4602.ee0328",
        "type": "batch",
        "z": "2746dc96.5984f4",
        "name": "",
        "mode": "count",
        "count": 10,
        "overlap": 0,
        "interval": 10,
        "allowEmptySequence": false,
        "topics": [
            {
                "topic": ""
            }
        ],
        "x": 285,
        "y": 525,
        "wires": [
            []
        ]
    },
    {
        "id": "9059d27a.3a647",
        "type": "ui_button",
        "z": "b6e18574.bf8618",
        "name": "",
        "group": "b3c43cba.25fd7",
        "order": 0,
        "width": "2",
        "height": "4",
        "passthru": false,
        "label": "Open",
        "tooltip": "",
        "color": "gray",
        "bgcolor": "white",
        "icon": "home",
        "payload": "1",
        "payloadType": "str",
        "topic": "",
        "x": 65,
        "y": 525,
        "wires": [
            [
                "516ad969.b48d4"
            ]
        ]
    },
    {
        "id": "673bda94.542ac4",
        "type": "exec",
        "z": "b6e18574.bf8618",
        "command": "/home/pi/tts.sh Welcome back home",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 480,
        "y": 585,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "2beeef57.8dcd7",
        "type": "rpi-gpio out",
        "z": "c84aae51.ffeed",
        "name": "",
        "pin": "7",
        "set": true,
        "level": "1",
        "freq": "",
        "out": "out",
        "x": 390,
        "y": 75,
        "wires": []
    },
    {
        "id": "f2779823.b4da58",
        "type": "rpi-gpio out",
        "z": "c84aae51.ffeed",
        "name": "Pin 11",
        "pin": "11",
        "set": true,
        "level": "0",
        "freq": "",
        "out": "out",
        "x": 380,
        "y": 165,
        "wires": []
    },
    {
        "id": "5f99bf0c.a1af5",
        "type": "rpi-gpio out",
        "z": "c84aae51.ffeed",
        "name": "",
        "pin": "12",
        "set": true,
        "level": "0",
        "freq": "",
        "out": "out",
        "x": 390,
        "y": 270,
        "wires": []
    },
    {
        "id": "a8d86931.109758",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 7 is now on",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts 7",
        "x": 245,
        "y": 45,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "85099e86.14d25",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "7 ON",
        "tooltip": "",
        "color": "green",
        "bgcolor": "black",
        "icon": "",
        "payload": "1",
        "payloadType": "str",
        "topic": "",
        "x": 95,
        "y": 60,
        "wires": [
            [
                "a8d86931.109758",
                "2beeef57.8dcd7"
            ]
        ]
    },
    {
        "id": "e5d35790.1f9a78",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 7 is off",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts 7",
        "x": 245,
        "y": 90,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "1e798c3.78db674",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "7 OFF",
        "tooltip": "",
        "color": "red",
        "bgcolor": "white",
        "icon": "",
        "payload": "0",
        "payloadType": "str",
        "topic": "",
        "x": 95,
        "y": 90,
        "wires": [
            [
                "e5d35790.1f9a78",
                "2beeef57.8dcd7"
            ]
        ]
    },
    {
        "id": "709e4b29.e54e74",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 11 is now on",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts11",
        "x": 245,
        "y": 150,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "e8c0a733.89d848",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "11 ON",
        "tooltip": "",
        "color": "green",
        "bgcolor": "black",
        "icon": "",
        "payload": "1",
        "payloadType": "str",
        "topic": "",
        "x": 95,
        "y": 150,
        "wires": [
            [
                "709e4b29.e54e74",
                "f2779823.b4da58"
            ]
        ]
    },
    {
        "id": "8e00d22.747a43",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 11 is off",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts11",
        "x": 245,
        "y": 195,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "9218bae4.dea908",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "11 OFF",
        "tooltip": "",
        "color": "red",
        "bgcolor": "white",
        "icon": "",
        "payload": "0",
        "payloadType": "str",
        "topic": "",
        "x": 90,
        "y": 180,
        "wires": [
            [
                "8e00d22.747a43",
                "f2779823.b4da58"
            ]
        ]
    },
    {
        "id": "2193c777.b4e808",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 12 is now on",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts12",
        "x": 245,
        "y": 255,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "86c7966b.129cc8",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "12 ON",
        "tooltip": "",
        "color": "green",
        "bgcolor": "black",
        "icon": "",
        "payload": "1",
        "payloadType": "str",
        "topic": "",
        "x": 95,
        "y": 255,
        "wires": [
            [
                "2193c777.b4e808",
                "5f99bf0c.a1af5"
            ]
        ]
    },
    {
        "id": "9a809a7c.0eb138",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 12 is off",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts12",
        "x": 245,
        "y": 300,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "5f15fe87.46e32",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "12 OFF",
        "tooltip": "",
        "color": "red",
        "bgcolor": "white",
        "icon": "",
        "payload": "0",
        "payloadType": "str",
        "topic": "",
        "x": 90,
        "y": 285,
        "wires": [
            [
                "9a809a7c.0eb138",
                "5f99bf0c.a1af5"
            ]
        ]
    },
    {
        "id": "7a49e207.2c152c",
        "type": "rpi-gpio out",
        "z": "c84aae51.ffeed",
        "name": "",
        "pin": "13",
        "set": true,
        "level": "0",
        "freq": "",
        "out": "out",
        "x": 390,
        "y": 375,
        "wires": []
    },
    {
        "id": "bb4e03a8.39dde",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 13 is now on",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts 13",
        "x": 245,
        "y": 360,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "c8373812.993af8",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "13 ON",
        "tooltip": "",
        "color": "green",
        "bgcolor": "black",
        "icon": "",
        "payload": "1",
        "payloadType": "str",
        "topic": "",
        "x": 95,
        "y": 360,
        "wires": [
            [
                "bb4e03a8.39dde",
                "7a49e207.2c152c"
            ]
        ]
    },
    {
        "id": "f9f38715.1b16c8",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh Pin 13 is off",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "tts 13",
        "x": 230,
        "y": 390,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "de409ddf.2a336",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "732f938e.b07ebc",
        "order": 3,
        "width": "3",
        "height": "1",
        "passthru": false,
        "label": "13 OFF",
        "tooltip": "",
        "color": "red",
        "bgcolor": "white",
        "icon": "",
        "payload": "0",
        "payloadType": "str",
        "topic": "",
        "x": 90,
        "y": 390,
        "wires": [
            [
                "f9f38715.1b16c8",
                "7a49e207.2c152c"
            ]
        ]
    },
    {
        "id": "ace863c7.04b2a",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "6b98b728.840248",
        "order": 3,
        "width": "3",
        "height": "2",
        "passthru": false,
        "label": "Reboot",
        "tooltip": "",
        "color": "green",
        "bgcolor": "white",
        "icon": "fa-repeat",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 75,
        "y": 495,
        "wires": [
            [
                "7fef8b55.0011a4"
            ]
        ]
    },
    {
        "id": "c6cca7e9.dd0eb8",
        "type": "ui_button",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "6b98b728.840248",
        "order": 4,
        "width": "3",
        "height": "2",
        "passthru": false,
        "label": "Shutdown",
        "tooltip": "",
        "color": "red",
        "bgcolor": "white",
        "icon": "fa-power-off ",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 330,
        "y": 495,
        "wires": [
            [
                "136346f3.7c0ca9",
                "cdcbe932.f8c3f8"
            ]
        ]
    },
    {
        "id": "136346f3.7c0ca9",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh I would not recommend that action to be taken.",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "shutdown",
        "x": 480,
        "y": 495,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "7fef8b55.0011a4",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "/home/pi/tts.sh rebooting && sudo reboot",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": true,
        "name": "reboot",
        "x": 200,
        "y": 495,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "4f7064a3.60a43c",
        "type": "http in",
        "z": "1f598891.b00e47",
        "name": "Admin",
        "url": "/root",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 95,
        "y": 75,
        "wires": [
            [
                "817ef70.7e6ac08"
            ]
        ]
    },
    {
        "id": "817ef70.7e6ac08",
        "type": "template",
        "z": "1f598891.b00e47",
        "name": "page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n    <head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial;\n  font-size: 17px;\n}\n\n#myVideo {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n    min-width: 100%; \n  min-height: 100%;\n}\n\n.content {\n  position: fixed;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1;\n  width: 100%;\n  padding: 20px;\n}\n\n#myBtn {\n  width: 200px;\n  font-size: 18px;\n  padding: 10px;\n  border: none;\n  background: #000;\n  color: #fff;\n  cursor: pointer;\n}\n\n#myBtn:hover {\n  background: #ddd;\n  color: black;\n}\n\n\nbody {\n  background-color: black;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}\n\np {\n  font-family: verdana;\n  font-size: 20px;\n}\n\n</style>\n</head>\n<body>\n\n<img id=\"myVideo\" src=\"http://ipool.remotewebaccess.com:808/amspace/wp-content/uploads/2018/04/distributed.gif\">\n\n\n<div class=\"content\">\n\n<i class=\"fa fa-refresh\"><a href=\"http://ipool.remotewebaccess.com:1880/root\">Refresh</a></i>\n\n<center>\n        <h1 style=\"color:gray\">iEchoSmartSystem, Inc.</h1>\n       \n       \n       \n\n<img width=\"200px\" height=\"200px\" src=\"http://ipool.remotewebaccess.com:808/amspace/wp-content/uploads/2019/01/IMG_8495.jpg\">\n<br />\n<img width=\"160px\" height=\"150px\" padding-top=\"10px\" src=\"http://ipool.remotewebaccess.com:808/amspace/wp-content/uploads/2019/01/IMG_8494.png\">\n  <br />\n  <br />\n<i style=\"font-size:7\">&copy; 2019 All Rights Reserved.</i>\n  <br />\n\n</center>\n    \n    </div>\n    </body>\n\n\n\n\n\n\n\n\n\n\n</html>\n\n\n",
        "x": 470,
        "y": 75,
        "wires": [
            [
                "96f841a3.a8db7"
            ]
        ]
    },
    {
        "id": "96f841a3.a8db7",
        "type": "http response",
        "z": "1f598891.b00e47",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 680,
        "y": 75,
        "wires": []
    },
    {
        "id": "cdcbe932.f8c3f8",
        "type": "ui_toast",
        "z": "c84aae51.ffeed",
        "position": "top right",
        "displayTime": "5",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "You are not allowed to shut me down, try to restart me if there were a problem.",
        "name": "",
        "x": 480,
        "y": 555,
        "wires": []
    },
    {
        "id": "944d2c90.3d173",
        "type": "debug",
        "z": "29b80129.3a178e",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 790,
        "y": 270,
        "wires": []
    },
    {
        "id": "989e8099.9b848",
        "type": "ui_button",
        "z": "29b80129.3a178e",
        "name": "",
        "group": "49245e98.f776d",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "button",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 60,
        "y": 135,
        "wires": [
            [
                "6adffb80.da1544"
            ]
        ]
    },
    {
        "id": "2ee9f9c4.62cfa6",
        "type": "mongodb-node",
        "z": "29b80129.3a178e",
        "mongodb": "e66dfd8c.fc7c9",
        "name": "",
        "collection": "uploads",
        "operation": "store",
        "upsert": false,
        "multi": false,
        "x": 545,
        "y": 240,
        "wires": [
            [
                "944d2c90.3d173"
            ]
        ]
    },
    {
        "id": "14c25e97.7848c1",
        "type": "http response",
        "z": "29b80129.3a178e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 860,
        "y": 375,
        "wires": []
    },
    {
        "id": "6adffb80.da1544",
        "type": "camerapi-takephoto",
        "z": "29b80129.3a178e",
        "filemode": "1",
        "filename": "/home/pi/img0001.jpeg",
        "filedefpath": "1",
        "filepath": "",
        "fileformat": "jpeg",
        "resolution": "10",
        "rotation": "0",
        "fliph": "0",
        "flipv": "0",
        "brightness": "50",
        "contrast": "0",
        "sharpness": "0",
        "quality": "80",
        "imageeffect": "none",
        "exposuremode": "auto",
        "iso": "0",
        "agcwait": "1.0",
        "led": "0",
        "awb": "auto",
        "name": "",
        "x": 245,
        "y": 285,
        "wires": [
            [
                "2ee9f9c4.62cfa6"
            ]
        ]
    },
    {
        "id": "dc9ed498.d0f3e8",
        "type": "mongodb-node",
        "z": "29b80129.3a178e",
        "mongodb": "e66dfd8c.fc7c9",
        "name": "",
        "collection": "uploads",
        "operation": "find",
        "upsert": false,
        "multi": false,
        "x": 455,
        "y": 360,
        "wires": [
            [
                "14c25e97.7848c1"
            ]
        ]
    },
    {
        "id": "59c1fe26.1e01e",
        "type": "http request",
        "z": "29b80129.3a178e",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 235,
        "y": 360,
        "wires": [
            []
        ]
    },
    {
        "id": "1941774e.dc7af9",
        "type": "http in",
        "z": "29b80129.3a178e",
        "name": "",
        "url": "/uploads",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 245,
        "y": 420,
        "wires": [
            [
                "dc9ed498.d0f3e8"
            ]
        ]
    },
    {
        "id": "b822b4d3.a896f8",
        "type": "ui_chart",
        "z": "b6e18574.bf8618",
        "name": "",
        "group": "9f736aec.a6d908",
        "order": 1,
        "width": "6",
        "height": "5",
        "label": "Door level indicator",
        "chartType": "bar",
        "legend": "false",
        "xformat": "auto",
        "interpolate": "bezier",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "13",
        "removeOlder": "1",
        "removeOlderPoints": "10",
        "removeOlderUnit": "1",
        "cutout": "10",
        "useOneColor": false,
        "colors": [
            "#cecece",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "x": 585,
        "y": 315,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "16746f6c.bf18c1",
        "type": "exec",
        "z": "b6e18574.bf8618",
        "command": "python /home/pi/open.py",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": true,
        "name": "",
        "x": 320,
        "y": 300,
        "wires": [
            [
                "b822b4d3.a896f8"
            ],
            [],
            []
        ]
    },
    {
        "id": "1682468b.33de69",
        "type": "exec",
        "z": "b6e18574.bf8618",
        "command": "python /home/pi/close.py",
        "addpay": true,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 320,
        "y": 360,
        "wires": [
            [
                "b822b4d3.a896f8"
            ],
            [],
            []
        ]
    },
    {
        "id": "66678d17.bf9564",
        "type": "rpi-gpio out",
        "z": "b6e18574.bf8618",
        "name": "",
        "pin": "37",
        "set": true,
        "level": "1",
        "freq": "",
        "out": "out",
        "x": 390,
        "y": 435,
        "wires": []
    },
    {
        "id": "b319ff29.fea0b",
        "type": "ui_switch",
        "z": "b6e18574.bf8618",
        "name": "Bench lamp I/O",
        "label": "lamp II I/O",
        "tooltip": "",
        "group": "1bbc4b8c.26e5b4",
        "order": 2,
        "width": "2",
        "height": "4",
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "fa-toggle-on",
        "oncolor": "green",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "fa-toggle-off",
        "offcolor": "red",
        "x": 110,
        "y": 435,
        "wires": [
            [
                "66678d17.bf9564"
            ]
        ]
    },
    {
        "id": "757c28a5.0be278",
        "type": "ui_switch",
        "z": "b6e18574.bf8618",
        "name": "Room lamp I/O",
        "label": "lamp I I/O",
        "tooltip": "",
        "group": "465ecb9c.f72554",
        "order": 2,
        "width": "2",
        "height": "4",
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "false",
        "onvalueType": "bool",
        "onicon": "fa-toggle-on",
        "oncolor": "green",
        "offvalue": "true",
        "offvalueType": "bool",
        "officon": "fa-toggle-off",
        "offcolor": "red",
        "x": 80,
        "y": 105,
        "wires": [
            [
                "c9571997.ee6438"
            ]
        ]
    },
    {
        "id": "881567ec.1f31a8",
        "type": "mongodb-node",
        "z": "1f598891.b00e47",
        "mongodb": "e66dfd8c.fc7c9",
        "name": "",
        "collection": "OAuth",
        "operation": "find",
        "upsert": false,
        "multi": false,
        "x": 380,
        "y": 330,
        "wires": [
            [
                "83fb8133.6d521"
            ]
        ]
    },
    {
        "id": "a4f60c8f.0786f",
        "type": "http in",
        "z": "1f598891.b00e47",
        "name": "OAuth",
        "url": "/OAuth",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 270,
        "wires": [
            [
                "881567ec.1f31a8"
            ]
        ]
    },
    {
        "id": "df7ef8bd.b02638",
        "type": "http response",
        "z": "1f598891.b00e47",
        "name": "",
        "statusCode": "",
        "headers": {
            "location": "xyz"
        },
        "x": 695,
        "y": 330,
        "wires": []
    },
    {
        "id": "83fb8133.6d521",
        "type": "template",
        "z": "1f598891.b00e47",
        "name": "page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n    <head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial;\n  font-size: 17px;\n}\n\n\n\n.content {\n  position: fixed;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1;\n  width: 100%;\n  padding: 20px;\n}\n\n\n\nbody {\n  background-color: black;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}\n\np {\n  font-family: verdana;\n  font-size: 20px;\n}\n\n</style>\n</head>\n<body>\n\n<img id=\"myVideo\" src=\"http://ipool.remotewebaccess.com:808/amspace/wp-content/uploads/2018/04/distributed.gif\">\n\n\n<div class=\"content\">\n<center>\n        <h2 style=\"color:gray\">iEchoSmartSystem, Inc.</h2>\n       \n    <script>var code = \"1234\";\n\n$('a').click(function(e) {\n    if($('input[type=\"text\"]').val() != code) {\n        e.preventDefault();\n    }\n});\n       </script>   \n       \n       <p>Please enter passcode:</p>\n       <form action=\"/action_page.php\">\n   <input width=\"24px\" type=\"password\" name=\"d1\">\n   <input width=\"24px\" type=\"password\" name=\"d2\">\n   <input width=\"24px\" type=\"password\" name=\"d3\">\n   <input width=\"24px\" type=\"password\" name=\"d4\">\n  <input width=\"24px\" type=\"submit\" value=\"Submit\">\n</form>\n       <br />\n\n</center>\n    \n    </div>\n    </body>\n\n\n\n\n\n\n\n\n\n\n</html>\n\n\n",
        "x": 545,
        "y": 330,
        "wires": [
            [
                "df7ef8bd.b02638"
            ]
        ]
    },
    {
        "id": "516ad969.b48d4",
        "type": "trigger",
        "z": "b6e18574.bf8618",
        "op1": "0",
        "op2": "1",
        "op1type": "str",
        "op2type": "str",
        "duration": "400",
        "extend": true,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "name": "",
        "x": 305,
        "y": 525,
        "wires": [
            [
                "673bda94.542ac4",
                "c869155d.329838"
            ]
        ]
    },
    {
        "id": "8442aead.aac92",
        "type": "mongodb-node",
        "z": "e468ec31.23399",
        "mongodb": "e66dfd8c.fc7c9",
        "name": "",
        "collection": "expenses",
        "operation": "insert",
        "upsert": false,
        "multi": false,
        "x": 495,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "afaf44d1.fc47b8",
        "type": "http in",
        "z": "e468ec31.23399",
        "name": "ShowExpenses",
        "url": "/expenses",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 210,
        "wires": [
            [
                "2a808f8d.051e4"
            ]
        ]
    },
    {
        "id": "2a808f8d.051e4",
        "type": "mongodb-node",
        "z": "e468ec31.23399",
        "mongodb": "e66dfd8c.fc7c9",
        "name": "",
        "collection": "expenses",
        "operation": "find",
        "upsert": false,
        "multi": false,
        "x": 420,
        "y": 240,
        "wires": [
            [
                "f7e51ce5.9d452",
                "6a6e2ced.f91b24"
            ]
        ]
    },
    {
        "id": "f7e51ce5.9d452",
        "type": "http response",
        "z": "e468ec31.23399",
        "name": "ShowExpenses",
        "statusCode": "",
        "headers": {},
        "x": 785,
        "y": 240,
        "wires": []
    },
    {
        "id": "8c93d034.e9baa",
        "type": "ui_text_input",
        "z": "e468ec31.23399",
        "name": "",
        "label": "Amount",
        "tooltip": "",
        "group": "49559d3c.94b564",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 300,
        "y": 120,
        "wires": [
            [
                "8442aead.aac92"
            ]
        ]
    },
    {
        "id": "6a6e2ced.f91b24",
        "type": "ui_text",
        "z": "e468ec31.23399",
        "group": "49559d3c.94b564",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Total",
        "format": "{{msg.payload}}",
        "layout": "col-center",
        "x": 630,
        "y": 210,
        "wires": []
    },
    {
        "id": "d9c606cd.f99cd8",
        "type": "ui_template",
        "z": "e468ec31.23399",
        "group": "49559d3c.94b564",
        "name": "Toggle Button",
        "order": 1,
        "width": "6",
        "height": "1",
        "format": "<style>\n.nr-dashboard-template {\n    padding: 0px;\n}\n</style>\n<div class=\"momentary\">\n   <md-button style=\"width:100%; height:48px; margin: 0px\"> Momentary Button</md-button>\n</div>\n\n<script>\n\n(function($scope) {\n    \n$('.momentary').on('touchstart mousedown', function(e) {\n    e.preventDefault(); //prevent default behavior\n    $scope.send({\"payload\": true});\n});\n\n$('.momentary').on('touchend mouseup', function(e) {\n    e.preventDefault(); //prevent default behavior\n    $scope.send({\"payload\": false});\n});\n    \n})(scope);\n</script>",
        "storeOutMessages": false,
        "fwdInMessages": false,
        "templateScope": "local",
        "x": 238.91058349609375,
        "y": 427.7821044921875,
        "wires": [
            []
        ]
    },
    {
        "id": "44e42a2b.922ce4",
        "type": "inject",
        "z": "c84aae51.ffeed",
        "name": "tick 6",
        "topic": "temp °C",
        "payload": "",
        "payloadType": "str",
        "repeat": "6",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 110,
        "y": 615,
        "wires": [
            [
                "54707d04.24ce34"
            ]
        ]
    },
    {
        "id": "54707d04.24ce34",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "vcgencmd measure_temp",
        "addpay": false,
        "append": "",
        "useSpawn": "",
        "timer": "",
        "oldrc": false,
        "name": "read cpu temperature",
        "x": 220,
        "y": 695,
        "wires": [
            [
                "40629aa2.ad2904"
            ],
            [],
            []
        ]
    },
    {
        "id": "40629aa2.ad2904",
        "type": "function",
        "z": "c84aae51.ffeed",
        "name": "format temperature",
        "func": "msg.payload = Number(msg.payload.slice(5,-3));\nmsg.payload = msg.payload\nreturn msg;",
        "outputs": "1",
        "noerr": 0,
        "x": 450,
        "y": 675,
        "wires": [
            [
                "a63acb7d.5ff348"
            ]
        ]
    },
    {
        "id": "58db4a9a.3a72f4",
        "type": "comment",
        "z": "c84aae51.ffeed",
        "name": "Read Raspberry Pi cpu temperature",
        "info": "Reads the Raspberry Pi cpu temperature every 15 seconds, \nformats the data to tidy up the string and \nthen sends the data to the IBM Watson IOT platform\n\nAfter deploying the example, open the Watson IoT\nnode and click the link button to take you to the \nQuickstartdashboard for your flow.\n",
        "x": 200,
        "y": 555,
        "wires": []
    },
    {
        "id": "a63acb7d.5ff348",
        "type": "ui_gauge",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "6b98b728.840248",
        "order": 2,
        "width": "3",
        "height": "3",
        "gtype": "donut",
        "title": "CPU Temp",
        "label": "°C",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "75",
        "x": 820,
        "y": 660,
        "wires": []
    },
    {
        "id": "bdb6b886.f0d5b8",
        "type": "inject",
        "z": "c84aae51.ffeed",
        "name": "tick 6",
        "topic": "tempC",
        "payload": "",
        "payloadType": "str",
        "repeat": "6",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 170,
        "y": 870,
        "wires": [
            [
                "5fae3c88.e4d6f4"
            ]
        ]
    },
    {
        "id": "5fae3c88.e4d6f4",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "uptime ",
        "addpay": false,
        "append": "",
        "useSpawn": "",
        "timer": "",
        "oldrc": false,
        "name": "read cpu uptime and load",
        "x": 230,
        "y": 950,
        "wires": [
            [
                "5fbaf37b.e451dc"
            ],
            [],
            []
        ]
    },
    {
        "id": "5fbaf37b.e451dc",
        "type": "function",
        "z": "c84aae51.ffeed",
        "name": "format load",
        "func": "\nmsg.payload = msg.payload.split(\"average\")[1].split(\" \")[1];\nmsg.payload = Number(msg.payload.replace(\",\",\"\"));\nmsg.payload = msg.payload\nreturn msg;",
        "outputs": "1",
        "noerr": 0,
        "x": 450,
        "y": 950,
        "wires": [
            [
                "d4fcdfff.a4d1f",
                "bfd5556f.322378"
            ]
        ]
    },
    {
        "id": "6b9ceed7.a4a58",
        "type": "comment",
        "z": "c84aae51.ffeed",
        "name": "Read cpu load (Linux, OSX and Pi)",
        "info": "Reads the cpu load by parsing the result\nof the `uptime` command. Does not work on Windows.\n\nReads every 15 seconds, \nformats the data to tidy up the string and \nthen sends the data to the IBM Watson IOT platform\n\nAfter deploying the example, open the Watson IoT\nnode and click the link button\nto take you to the \nQuickstart dashboard for your flow.\n",
        "x": 240,
        "y": 830,
        "wires": []
    },
    {
        "id": "1648d445.c75eec",
        "type": "ui_gauge",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "6b98b728.840248",
        "order": 1,
        "width": "3",
        "height": "3",
        "gtype": "donut",
        "title": "CPU Usage",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#cabfbd",
            "#e68400",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "75",
        "x": 805,
        "y": 915,
        "wires": []
    },
    {
        "id": "5d1e1b0c.430234",
        "type": "mqtt out",
        "z": "441b5ba4.d906c4",
        "name": "",
        "topic": "dingdong",
        "qos": "",
        "retain": "",
        "broker": "99da3667.7c1478",
        "x": 615,
        "y": 525,
        "wires": []
    },
    {
        "id": "cf86b2c4.656d4",
        "type": "rpi-gpio in",
        "z": "441b5ba4.d906c4",
        "name": "",
        "pin": "40",
        "intype": "up",
        "debounce": "25",
        "read": true,
        "x": 95,
        "y": 185,
        "wires": [
            [
                "da2b33f.67045d"
            ]
        ]
    },
    {
        "id": "da2b33f.67045d",
        "type": "switch",
        "z": "441b5ba4.d906c4",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 285,
        "y": 145,
        "wires": [
            [
                "7e7e9f5d.1e88b"
            ],
            [
                "fbaf95a9.cdf868"
            ]
        ]
    },
    {
        "id": "df8f663b.767e38",
        "type": "function",
        "z": "441b5ba4.d906c4",
        "name": "joined function",
        "func": "var date = Date(msg.payload);\nvar msg1 = {payload: \"Someone pressed the doorbell at\"};\nvar msg2 = {payload: date.toString() };\n\nreturn [[msg1,msg2]];",
        "outputs": 1,
        "noerr": 0,
        "x": 785,
        "y": 165,
        "wires": [
            [
                "8f64ccbb.037c6"
            ]
        ]
    },
    {
        "id": "8f64ccbb.037c6",
        "type": "join",
        "z": "441b5ba4.d906c4",
        "name": "",
        "mode": "custom",
        "build": "string",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "accumulate": false,
        "timeout": "1",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "",
        "reduceFixup": "",
        "x": 685,
        "y": 345,
        "wires": [
            [
                "5135c950.862668",
                "2c5bd8fa.345878"
            ]
        ]
    },
    {
        "id": "2c5bd8fa.345878",
        "type": "debug",
        "z": "441b5ba4.d906c4",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 945,
        "y": 585,
        "wires": []
    },
    {
        "id": "77dba1aa.51ed5",
        "type": "ui_button",
        "z": "441b5ba4.d906c4",
        "name": "",
        "group": "284ce192.650bae",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "button",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "0",
        "payloadType": "num",
        "topic": "",
        "x": 110,
        "y": 135,
        "wires": [
            [
                "da2b33f.67045d"
            ]
        ]
    },
    {
        "id": "8105bdb5.8accb",
        "type": "ui_toast",
        "z": "441b5ba4.d906c4",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 985,
        "y": 485,
        "wires": []
    },
    {
        "id": "5135c950.862668",
        "type": "file in",
        "z": "441b5ba4.d906c4",
        "name": "",
        "filename": "/home/pi/Desktop/log.txt",
        "format": "lines",
        "sendError": true,
        "x": 785,
        "y": 425,
        "wires": [
            [
                "8105bdb5.8accb"
            ]
        ]
    },
    {
        "id": "7e7e9f5d.1e88b",
        "type": "change",
        "z": "441b5ba4.d906c4",
        "name": "change to 0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 445,
        "y": 125,
        "wires": [
            [
                "df8f663b.767e38",
                "78f425fa.d1e78c"
            ]
        ]
    },
    {
        "id": "fbaf95a9.cdf868",
        "type": "change",
        "z": "441b5ba4.d906c4",
        "name": "change to 1",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 445,
        "y": 165,
        "wires": [
            [
                "df8f663b.767e38"
            ]
        ]
    },
    {
        "id": "78f425fa.d1e78c",
        "type": "trigger",
        "z": "441b5ba4.d906c4",
        "op1": "1",
        "op2": "0",
        "op1type": "str",
        "op2type": "str",
        "duration": "5",
        "extend": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "name": "",
        "x": 495,
        "y": 305,
        "wires": [
            [
                "5d1e1b0c.430234"
            ]
        ]
    },
    {
        "id": "d4fcdfff.a4d1f",
        "type": "range",
        "z": "c84aae51.ffeed",
        "minin": "0",
        "maxin": "1",
        "minout": "0",
        "maxout": "100",
        "action": "scale",
        "round": false,
        "property": "payload",
        "name": "",
        "x": 635,
        "y": 930,
        "wires": [
            [
                "1648d445.c75eec"
            ]
        ]
    },
    {
        "id": "b2fb2c90.9658d",
        "type": "inject",
        "z": "c84aae51.ffeed",
        "name": "tick 6",
        "topic": "tempC",
        "payload": "",
        "payloadType": "str",
        "repeat": "6",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 200,
        "y": 1275,
        "wires": [
            [
                "adf3d733.bd07f8"
            ]
        ]
    },
    {
        "id": "99cd015e.0deae",
        "type": "exec",
        "z": "c84aae51.ffeed",
        "command": "ifconfig",
        "addpay": false,
        "append": "",
        "useSpawn": "",
        "timer": "",
        "oldrc": false,
        "name": "netstat",
        "x": 185,
        "y": 1160,
        "wires": [
            [
                "eceb758f.cdb078"
            ],
            [],
            []
        ]
    },
    {
        "id": "eceb758f.cdb078",
        "type": "function",
        "z": "c84aae51.ffeed",
        "name": "format load",
        "func": "\nmsg.payload = msg.payload.split(\"wlan0\")[1].split(\"RX packets\")[1];\nmsg.payload = Number(msg.payload.replace(\" \",\"\"));\nmsg.payload = msg.payload\nreturn msg;",
        "outputs": "1",
        "noerr": 0,
        "x": 580,
        "y": 1170,
        "wires": [
            []
        ]
    },
    {
        "id": "57b1e845.d79a88",
        "type": "comment",
        "z": "c84aae51.ffeed",
        "name": "Networking (Linux, OSX and Pi)",
        "info": "",
        "x": 245,
        "y": 1040,
        "wires": []
    },
    {
        "id": "99eaf510.39a028",
        "type": "ui_text",
        "z": "c84aae51.ffeed",
        "group": "6b98b728.840248",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Network",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 940,
        "y": 1140,
        "wires": []
    },
    {
        "id": "bfd5556f.322378",
        "type": "debug",
        "z": "c84aae51.ffeed",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 835,
        "y": 1245,
        "wires": []
    },
    {
        "id": "adf3d733.bd07f8",
        "type": "DeviceStats",
        "z": "c84aae51.ffeed",
        "name": "",
        "mem": false,
        "nw": true,
        "load": false,
        "hostname": false,
        "useString": false,
        "x": 405,
        "y": 1245,
        "wires": [
            [
                "bb22e51.5c39518"
            ]
        ]
    },
    {
        "id": "bb22e51.5c39518",
        "type": "function",
        "z": "c84aae51.ffeed",
        "name": "",
        "func": "if (msg.topic === \"TX\") {\n   return [ null, msg ];\n} else {\n   return [ msg, null ];\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 600,
        "y": 1305,
        "wires": [
            [
                "695137c9.b3b908"
            ]
        ]
    },
    {
        "id": "695137c9.b3b908",
        "type": "ui_gauge",
        "z": "c84aae51.ffeed",
        "name": "",
        "group": "6b98b728.840248",
        "order": 1,
        "width": "3",
        "height": "3",
        "gtype": "donut",
        "title": "TX",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#cabfbd",
            "#e68400",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "75",
        "x": 755,
        "y": 1365,
        "wires": []
    }
]