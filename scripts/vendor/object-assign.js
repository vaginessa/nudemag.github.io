!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.objectAssign=e()}}(function(){return function e(r,n,t){function o(f,u){if(!n[f]){if(!r[f]){var c="function"==typeof require&&require;if(!u&&c)return c(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var s=n[f]={exports:{}};r[f][0].call(s.exports,function(e){var n=r[f][1][e];return o(n?n:e)},s,s.exports,e,r,n,t)}return n[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(e,r,n){"use strict";function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;var t=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==t.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var i=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;r.exports=o()?Object.assign:function(e,r){for(var n,o,c=t(e),a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var s in n)f.call(n,s)&&(c[s]=n[s]);if(i){o=i(n);for(var l=0;l<o.length;l++)u.call(n,o[l])&&(c[o[l]]=n[o[l]])}}return c}},{}]},{},[1])(1)});