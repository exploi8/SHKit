![icon](https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/HomeKit-Icon_4-100x100.jpg)

## Smart Home Kit ##

### Installation Guide ###
[![Build Status](https://travis-ci.org/exploi8/SHKit.svg?branch=master)](https://travis-ci.org/exploi8/SHKit)

**Introduction**

First things first, you need to know the concept of connectiong a micro controller with a server to be able to walk throughout this guide with no problems.

In order for you to install and setup the required software and hardware together you will need the following:

### Hardware parts: ###

 - RaspberryPi as a micro controller can be purshased from any online store.
 - Relays module to preform switching an electrical component on and off simultaneously.
 - Breadboard to make connections with I/O pins. (optional)
 - Cables.



#### step 1 ####

Download latest RasparypiPi :link: [(Raspbian Stretch) Operation System][Software] then burn it into a memory card, using either :link: [win32diskimager][win32diskimager], [Etcher][Etcher] or any other .img burn app you preffer.

![Etcher](https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/etching.png)

**Prepare and initialize required repositories.**

Set a static IP Address 


Open Terminal and type the following commands:

```sh
pi@raspberrypi:~ $ sudo apt-get update && sudo apt-get upgrade -y
pi@raspberrypi:~ $ sudo apt-get install npm
pi@raspberrypi:~ $ git clone https://github.com/exploi8/SHKit.git
pi@raspberrypi:~ $ cd SHKit

```

#### step 2 ####

Setup Node-RED for first time use:
By now you should see virsions of npm and node:

```sh
pi@raspberrypi:~ $ node -v
v8.11.1
pi@raspberrypi:~ $ npm -v
1.4.21

```

Auto start services on boot, by entering the following commands:


```sh
pi@raspberrypi:~ $ sudo systemctl enable nodered.service
````
You can specify the service you want it to run on boot with follwing syntax replacing ~~sample~~

```sh
sudo systemctl daemon-reload
sudo systemctl enable sample.service

Install Node-RED Dashboard blugin.

```sh
pi@raspberrypi:~ $ cd .node-red
pi@raspberrypi:~/.node-red $ npm i node-red-dashboard
pi@raspberrypi:~/.node-red $ sudo reboot
```
Now you can open your browser and point to your IP address and Node-RED default port 1880


Flows Control Home Page

[http://127.0.0.1:1880](http://127.0.0.1:1880)

![Node-RED](https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/IMG_9162.jpg)


Dashboard Home Page

[http://127.0.0.1:1880/ui](http://127.0.0.1:1880/ui)

![Node-RED-ui](https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/photo_2019-03-16_23-25-01-330x480.jpg)





#### step 3 ####





___


Check out the [iESH docs][iESH-docs] for more info on how to get the most out of iEcho Smart Systems. File all bugs/feature requests at [iESH’s GitHub repo][iESH-gh]

[iESH-docs]: https://exploi8.github.io/SHKit
[iESH-gh]:   https://github.com/exploi8/SHKit
[Software]: https://downloads.raspberrypi.org/raspbian_full_latest
[win32diskimager]: https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/win32diskimager-1.0.0-install.zip
[Etcher]: https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/Etcher-1.0.0-beta.17-win32-x64.zip
