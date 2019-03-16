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



Download latest RasparypiPi :link: [(Raspbian Stretch) Operation System][Software] then burn it into a memory card, using either :link: [win32diskimager][win32diskimager] or any other .img burn app you preffer.

**Prepare and initialize required repositories.**

```sh
pi@raspberrypi:~ $ sudo apt-get update && apt-get upgrade -y
pi@raspberrypi:~ $ sudo apt-get install python python3 ssh mysql apache2 cmatrix git php7.0
pi@raspberrypi:~ $ cd /var/www/html/
pi@raspberrypi:~ $ git clone https://github.com/exploi8/SHKit.git
pi@raspberrypi:~ $ cd SHKit

```

#### step 1 ####

Download latest RasparypiPi [(Raspbian Stretch) Operation System][Software] then burn it into a memory card, using either [win32diskimager][win32diskimager] or any other .img burn app you preffer.

**Prepare and initialize required repositories.**


```sh
pi@raspberrypi:~ $ sudo apt-get update && apt-get upgrade -y
pi@raspberrypi:~ $ sudo apt-get install python python3 npm ssh mysql apache2 cmatrix git php7.0
pi@raspberrypi:~ $ cd /var/www/html/
pi@raspberrypi:~ $ git clone https://github.com/exploi8/SHKit.git
pi@raspberrypi:~ $ cd SHKit

```

#### step 2 ####

Setup Node-RED for first time use:


```sh
pi@raspberrypi:~ $ node -v
v8.11.1
pi@raspberrypi:~ $ npm -v
1.4.21

```

If NOT showing the virsion of node and npm, you'll need to re-install it.

```sh
pi@raspberrypi:~ $ sudo apt-get install nodered
pi@raspberrypi:~ $ sudo dpkg --configure -a
pi@raspberrypi:~ $ sudo reboot

```

#### step 3 ####

Auto start services on boot, by entering the following commands:


```sh
pi@raspberrypi:~ $ sudo systemctl enable nodered.service

```

___


Check out the [iESH docs][iESH-docs] for more info on how to get the most out of iEcho Smart Systems. File all bugs/feature requests at [iESH’s GitHub repo][iESH-gh]

[iESH-docs]: https://exploi8.github.io/SHKit
[iESH-gh]:   https://github.com/exploi8/SHKit
[Software]: https://downloads.raspberrypi.org/raspbian_full_latest
[win32diskimager]: https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/win32diskimager-1.0.0-install.exe
