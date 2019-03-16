---
layout: post
title:  "Installation"
permalink: /docs/
categories: Documentation
tags: #SHKit #Smart_Home_Kit #Documentation
---

Download latest RasparypiPi [(Raspbian Stretch) Operation System][Software] then burn it into a memory card, using either [win32diskimager][win32diskimager] or any other .img burn app you preffer.

**Prepare and initialize required repositories.**

{% highlight sh %}
pi@raspberrypi:~ $ sudo apt-get update && apt-get upgrade -y
pi@raspberrypi:~ $ sudo apt-get install python python3 ssh mysql apache2 cmatrix git php7.0
pi@raspberrypi:~ $ cd /var/www/html/
pi@raspberrypi:~ $ git clone https://github.com/exploi8/SHKit.git
pi@raspberrypi:~ $ cd SHKit

{% endhighlight %}

Check out the [iESH docs][iESH-docs] for more info on how to get the most out of iEcho Smart Systems. File all bugs/feature requests at [iESH’s GitHub repo][iESH-gh]

[iESH-docs]: https://exploi8.github.io/SHKit
[iESH-gh]:   https://github.com/exploi8/SHKit
[Software]: https://downloads.raspberrypi.org/raspbian_full_latest
[win32diskimager]: https://ipool.remotewebaccess.com/wp-content/uploads/2019/03/win32diskimager-1.0.0-install.exe
