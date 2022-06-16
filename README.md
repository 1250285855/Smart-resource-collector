# Smart-resource-collector
<div align="center">
  <img src="https://img.shields.io/badge/gitHub-MJU-brightgreen"/>
</div>

[中文版README](#README.zh-CN.md)

## Table of Contents
- [Introduction](#introduction)
- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction
This Project is a system which provide a server for users recycles bottles and cans and exchange the points.
## Background
With the development of society, the demand for environmental protection is getting higher and higher.

And bottles and cans have a high recycling value, there are also huge numbers.

So we create this project to encourage people to recycle bottles and cans.
## Install
This project is made by two part, server part and client part.
  ### Server
  This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

  ```sh
  $ npm install express mysql
  # Prepare the environment we need
  ```

  This project use [mysql](https://www.mysql.com), create a database for this project, and change the information of your database on [server.js](#server.js).

  ### Client
  Prepare the web server and set [index.html](#index.html) as your index.

  ### Raspberry-pie
  This project use [Raspberry-pie](https://www.raspberrypi.com), and a server motor with [RaspberryPi Motor Driver Board](https://github.com/emakefun/RaspberryPi-MotorDriveBoard).

  make sure your raspberry-pie can connect to internet.

  Prepare python environment in your raspberry-pie, and move [Raspberry-pie](#raspberry-pie) to your raspberry-pie. and make sure the [ServoTest.py](#ServoTest.py) can run successfully.
## Usage

  ### Server

  ```sh
  $ mv Smart-resource-collector/Server
  $ node server.js
  # run server
  ```

  ### Client
  Run your web server.

  ### Raspberry-pie
  ```sh
  $ python Smart-resource-collector/Raspberry-pie/ServoGo.py
  ```
## Contributing
Thanks to all team members.