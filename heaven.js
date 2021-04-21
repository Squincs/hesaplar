const ytdl = require('ytdl-core');
var opus = require('opusscript');
const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://boost-aktif.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const scream = new Discord.Client();
const alperen = new Discord.Client();
const samet = new Discord.Client();
const alptug = new Discord.Client();
const emre = new Discord.Client();
const talha = new Discord.Client();
const salih = new Discord.Client();
const ayse = new Discord.Client();
const fatma = new Discord.Client();
const buse = new Discord.Client();
const aynur = new Discord.Client();
const demet = new Discord.Client();
const orospu = new Discord.Client();
const amcek = new Discord.Client();

scream.login("ODI3NTc4ODAxMjIzNDk5ODM3.YG7XpQ.KqJOf4N8ycdvpyLzEMvJzx3a8Rs");
alperen.login("ODI4ODQ1NTk4NDAwMTg0MzIw.YG7bog.m0g_6GrGMK5b6KfZYwMqivGhjpU");
samet.login("ODI4ODUwMjY5MzY1NzMxMzU4.YG7dOw.llVP4jhFP_SEVsMNcPDq-cXzAfk");
alptug.login("ODI4ODU5MzU0MDg1MTk1Nzc3.YG7dwQ.a3alLjZ-OJAyBXpTfdSsQh9k2N8");
emre.login("ODI5MDA0NzU1MjgzMDgzMzI1.YG7eMg.5rYRMnWiz1j4KK2wKJRV8P78AfA");
talha.login("ODI5MDA3NDA1MjUyODcwMTg0.YG_0dg.qdYOyEQU4tApxpXX2YOO-HDn6SM");
salih.login("ODI5MjI2OTY3NzY5MDIyNDg0.YG_04A.f6fvyIHg6fg8fnuycXcnImKJhTw");
ayse.login("ODI5MjMzNjE2MDg0MTQwMDUz.YG_1Sg.bRPND0k4SHpQwnCvx2tPT_Z0LKg");
fatma.login("ODI5MjM2NTg4NzUwOTYyNjk5.YG_13g.Hbtx1PskFCEgEW0p7VcbPZKb4wU");
buse.login("ODI5MjM4Mjc2OTY3MjM1NTg1.YG_2KA.L3UaMGhZigNfRaRgcI1feUbHlK8");
aynur.login("ODI4ODQyNzk4NzAxNjA5MDQw.YHHDxQ.KGEKQA9V1LIioHgO7tixCrPSwPE");
demet.login("ODI5MjI2MzE3NTA0NzA4NjI4.YHHEAg.wJgi-WzGYR1rTqeulSZQx88XFdk");
orospu.login("NjkyMDMyNjMwMzgzNzA2MTQ1.YHHREA.PB1rPM3tdlSsURHWilS07tGsk10");
amcek.login("Nzg5MTI4NjQ2MTgyMzA1Nzk1.YHHRew.vWTTEyDskYWCwp5juLsntkpNBAg");
