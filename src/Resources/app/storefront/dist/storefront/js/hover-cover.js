(window.webpackJsonp=window.webpackJsonp||[]).push([["hover-cover"],{"+hIS":function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}o.r(e);var u,l,c,h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,s(e).apply(this,arguments))}var o,n,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),o=e,(n=[{key:"init",value:function(){this.toggleButton=document.querySelector(this.options.dataToggleBtn),this.toggleButton&&this._setCurrentToggleState(),this._registerEvents()}},{key:"_setCurrentToggleState",value:function(){var t=window.localStorage.getItem("showHoverCover");this.toggleButton.checked="true"==t,this.toggleButton.checked&&this._changeAllProductsThumbnail()}},{key:"_registerEvents",value:function(){this.el.addEventListener("mouseenter",this._changeProductThumbnail.bind(this)),this.el.addEventListener("mouseleave",this._changeProductThumbnail.bind(this)),this.toggleButton&&this.toggleButton.addEventListener("change",this._changeAllProductsThumbnail.bind(this))}},{key:"_changeProductThumbnail",value:function(){this.el.classList.contains(this.options.activeCls)?this.el.classList.remove(this.options.activeCls):this.el.classList.add(this.options.activeCls)}},{key:"_changeAllProductsThumbnail",value:function(t){var e=this,o=void 0!==t?t:this.toggleButton.checked;document.querySelectorAll(this.options.hasHoverThumbnail).forEach((function(t){o?t.classList.add(e.options.activeCls):t.classList.remove(e.options.activeCls)})),localStorage.setItem("showHoverCover",o)}}])&&i(o.prototype,n),u&&i(o,u),e}(o("FGIj").a);c={activeCls:"hover-thumbnail-active",dataToggleBtn:"[data-toggle-thumbnail]",hasHoverThumbnail:'[data-hover-thumbnail="true"]'},(l="options")in(u=h)?Object.defineProperty(u,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[l]=c,window.PluginManager.register("CoverSwitchPlugin",h,".has-hover-thumbnail")}},[["+hIS","runtime","vendor-node","vendor-shared"]]]);