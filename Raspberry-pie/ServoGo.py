#!/usr/bin/python
# -*- coding: UTF-8 -*-

from Emakefun_MotorHAT import Emakefun_MotorHAT, Emakefun_Servo
import requests
import time
mh = Emakefun_MotorHAT(addr=0x60)

def ServoGo():

    myServo = mh.getServo(1)
    for i in range (0, 181):
        myServo.writeServo(i)
        time.sleep(0.02)
    time.sleep(5)
    myServo.writeServo(0)

def Close():
    requests.get("http://jyuav.net:8000/control/?&id=1&isOpen=0")

#url = "http://jyuav.net:8000/search/?&id=1"
is_run = 1
while(is_run):
    time.sleep(1)
    # response = requests.get("http://jyuav.net:8000/control/?&id=1&isOpen=0").text
    response = requests.get("http://jyuav.net:8000/search/?&id=1").text 
    print(response)
    if (response == "1"):
        ServoGo()
        Close()

