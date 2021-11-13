// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var n = 1;

getPAGE.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('get', "/page".concat(n + 1));

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var array = JSON.parse(request.response);
      array.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item.id;
        turn.appendChild(li);
      });
      n += 1;
    }
  };

  request.send();
};

getJSON.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('get', '/5.json');

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response); //把符合JSON语法的字符串变成对应的对象

      var object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };

  request.send();
};

getXML.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('GET', '/4.xml');

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var dom = request.responseXML;
      var text = dom.getElementsByTagName('warning')[0].textContent;
      console.log(text.trim());
    }
  };

  request.send();
};

getHTML.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('GET', '/3.html');

  request.onload = function () {
    // 创建div标签
    console.log(request.response); // 填写div内容

    var div = document.createElement('div'); // 插入到body后面

    div.innerHTML = request.response;
    document.body.appendChild(div);
  };

  request.onerror = function () {};

  request.send();
};

getJS.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('GET', '/2.js');

  request.onload = function () {
    console.log(request.response);
    var script = document.createElement('script');
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };

  request.onerror = function () {};

  request.send();
};

getCSS.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('GET', '/style.css');

  request.onreadystatechange = function () {
    //下载完成，但不知道是成功的2xx 还是失败的4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        var style = document.createElement('style'); //填写style内容

        style.innerHTML = request.response; //插入head后面

        document.head.appendChild(style);
      } else {
        alert('加载css失败');
      }
    }
  };

  request.onerror = function () {
    console.log('失败');
  };

  request.send();
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f30c03f7.js.map