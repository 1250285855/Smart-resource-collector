# 智能资源回收器
<div align="center">
  <img src="https://img.shields.io/badge/gitHub-MJU-brightgreen"/>
</div>

[English README](README.md)

## 目录
- [简介](#简介)
- [背景](#背景)
- [安装](#安装)
- [使用](#使用)
- [鸣谢](#鸣谢)

## 简介
该项目是一个用于引导用户回收瓶罐并获得相应积分的系统，由智能资源回收器为本体，服务器为信息交互储存为载体组合而成。

## 背景
随着社会发展，保护环境越来越受到人们的重视，为了鼓励人们积极参加垃圾回收，本项目应运而生。

当今社会，瓶瓶罐罐等白色污染越来越多，而瓶罐又具有不可忽视的回收价值，所以我们创建了这个项目鼓励用户回收瓶罐。

## 安装
本项目主要由三个部分组成，分别是服务端、用户端、树莓派。

### 服务端
本项目使用了 [node](http://nodejs.org) 和 [npm](https://npmjs.com)。请确保你已经安装好这两个部分。

```sh
$ npm install express mysql
# 安装服务端依赖
```

本项目也使用了 [mysql](https://www.mysql.com)，作为数据库，请准备好环境并建立一个新的数据库。

并且在[server.js](server.js)文件中更改数据库信息。

### 客户端
准备好网站服务器，并且设置[index.html](index.html)作为你的网站服务器首页。

### 树莓派
本项目使用了[树莓派](https://www.raspberrypi.com)作为电机控制和驱动，请准备好电机和[树莓派电机驱动板](https://github.com/emakefun/RaspberryPi-MotorDriveBoard)。

请确保你的树莓派可以上网并且可以和你的服务器通讯。

在树莓派上准备好[Python](https://www.python.org)环境，移动本项目中的[Raspberry-pie](Raspberry-pie)文件夹到你的树莓派中，并且测试[ServoTest.py](ServoTest.py)是否能够成功运行。

## 使用

### 服务端

```sh
$ mv Smart-resource-collector/Server
$ node server.js
# 启动服务端
```

### 用户端
启动你的网站服务器

### 树莓派
启动树莓派监听与控制电机程序。
```sh
$ python Smart-resource-collector/Raspberry-pie/ServoGo.py
```

## 鸣谢
感谢所有团队成员