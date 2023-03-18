import {
  __commonJS,
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            w = X[7] = -1;
          else
            w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      // window object or global
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global, plugins, global.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom2;
        });
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : exports,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }
});

// node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/seedrandom/index.js"(exports, module) {
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// node_modules/random/dist/esm/rng.js
var RNG = class {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _seed(seed, _opts) {
    if (seed === (seed || 0)) {
      return seed;
    } else {
      const strSeed = "" + seed;
      let s = 0;
      for (let k = 0; k < strSeed.length; ++k) {
        s ^= strSeed.charCodeAt(k) | 0;
      }
      return s;
    }
  }
};

// node_modules/random/dist/esm/rng-factory.js
var import_seedrandom = __toESM(require_seedrandom2(), 1);

// node_modules/random/dist/esm/generators/function.js
var RNGFunction = class extends RNG {
  constructor(thunk, opts) {
    super();
    this.seed(thunk, opts);
  }
  get name() {
    return "function";
  }
  next() {
    return this._rng();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  seed(thunk, _opts) {
    this._rng = thunk;
  }
  clone(_, opts) {
    return new RNGFunction(this._rng, opts);
  }
};

// node_modules/random/dist/esm/rng-factory.js
var rng_factory_default = (...args) => {
  const [arg0 = "default", ...rest] = args;
  switch (typeof arg0) {
    case "object":
      if (arg0 instanceof RNG) {
        return arg0;
      }
      break;
    case "function":
      return new RNGFunction(arg0);
    case "number":
    case "string":
      return new RNGFunction((0, import_seedrandom.default)(...rest));
  }
  throw new Error(`invalid RNG "${arg0}"`);
};

// node_modules/random/dist/esm/distributions/uniform.js
var uniform_default = (random, min = 0, max = 1) => {
  return () => {
    return random.next() * (max - min) + min;
  };
};

// node_modules/random/dist/esm/validation.js
function numberValidator(num) {
  return new NumberValidator(num);
}
var NumberValidator = class {
  constructor(num) {
    this.isInt = () => {
      if (Number.isInteger(this.n)) {
        return this;
      }
      throw new Error(`Expected number to be an integer, got ${this.n}`);
    };
    this.isPositive = () => {
      if (this.n > 0) {
        return this;
      }
      throw new Error(`Expected number to be positive, got ${this.n}`);
    };
    this.lessThan = (v) => {
      if (this.n < v) {
        return this;
      }
      throw new Error(`Expected number to be less than ${v}, got ${this.n}`);
    };
    this.greaterThanOrEqual = (v) => {
      if (this.n >= v) {
        return this;
      }
      throw new Error(`Expected number to be greater than or equal to ${v}, got ${this.n}`);
    };
    this.greaterThan = (v) => {
      if (this.n > v) {
        return this;
      }
      throw new Error(`Expected number to be greater than ${v}, got ${this.n}`);
    };
    this.n = num;
  }
};

// node_modules/random/dist/esm/distributions/uniform-int.js
var uniform_int_default = (random, min = 0, max = 1) => {
  if (max === void 0) {
    max = min === void 0 ? 1 : min;
    min = 0;
  }
  numberValidator(min).isInt();
  numberValidator(max).isInt();
  return () => {
    return Math.floor(random.next() * (max - min + 1) + min);
  };
};

// node_modules/random/dist/esm/distributions/uniform-boolean.js
var uniform_boolean_default = (random) => {
  return () => {
    return random.next() >= 0.5;
  };
};

// node_modules/random/dist/esm/distributions/normal.js
var normal_default = (random, mu = 0, sigma = 1) => {
  return () => {
    let x, y, r;
    do {
      x = random.next() * 2 - 1;
      y = random.next() * 2 - 1;
      r = x * x + y * y;
    } while (!r || r > 1);
    return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
  };
};

// node_modules/random/dist/esm/distributions/log-normal.js
var log_normal_default = (random, mu = 0, sigma = 1) => {
  const normal = random.normal(mu, sigma);
  return () => {
    return Math.exp(normal());
  };
};

// node_modules/random/dist/esm/distributions/bernoulli.js
var bernoulli_default = (random, p = 0.5) => {
  numberValidator(p).greaterThanOrEqual(0).lessThan(1);
  return () => {
    return Math.floor(random.next() + p);
  };
};

// node_modules/random/dist/esm/distributions/binomial.js
var binomial_default = (random, n = 1, p = 0.5) => {
  numberValidator(n).isInt().isPositive();
  numberValidator(p).greaterThanOrEqual(0).lessThan(1);
  return () => {
    let i = 0;
    let x = 0;
    while (i++ < n) {
      if (random.next() < p) {
        x++;
      }
    }
    return x;
  };
};

// node_modules/random/dist/esm/distributions/geometric.js
var geometric_default = (random, p = 0.5) => {
  numberValidator(p).greaterThan(0).lessThan(1);
  const invLogP = 1 / Math.log(1 - p);
  return () => {
    return Math.floor(1 + Math.log(random.next()) * invLogP);
  };
};

// node_modules/random/dist/esm/distributions/poisson.js
var logFactorialTable = [
  0,
  0,
  0.6931471805599453,
  1.791759469228055,
  3.1780538303479458,
  4.787491742782046,
  6.579251212010101,
  8.525161361065415,
  10.60460290274525,
  12.801827480081469
];
var logFactorial = (k) => {
  return logFactorialTable[k];
};
var logSqrt2PI = 0.9189385332046727;
var poisson_default = (random, lambda = 1) => {
  numberValidator(lambda).isPositive();
  if (lambda < 10) {
    const expMean = Math.exp(-lambda);
    return () => {
      let p = expMean;
      let x = 0;
      let u = random.next();
      while (u > p) {
        u = u - p;
        p = lambda * p / ++x;
      }
      return x;
    };
  } else {
    const smu = Math.sqrt(lambda);
    const b = 0.931 + 2.53 * smu;
    const a = -0.059 + 0.02483 * b;
    const invAlpha = 1.1239 + 1.1328 / (b - 3.4);
    const vR = 0.9277 - 3.6224 / (b - 2);
    return () => {
      var _a;
      while (true) {
        let u;
        let v = random.next();
        if (v <= 0.86 * vR) {
          u = v / vR - 0.43;
          return Math.floor((2 * a / (0.5 - Math.abs(u)) + b) * u + lambda + 0.445);
        }
        if (v >= vR) {
          u = random.next() - 0.5;
        } else {
          u = v / vR - 0.93;
          u = (u < 0 ? -0.5 : 0.5) - u;
          v = random.next() * vR;
        }
        const us = 0.5 - Math.abs(u);
        if (us < 0.013 && v > us) {
          continue;
        }
        const k = Math.floor((2 * a / us + b) * u + lambda + 0.445);
        v = v * invAlpha / (a / (us * us) + b);
        if (k >= 10) {
          const t = (k + 0.5) * Math.log(lambda / k) - lambda - logSqrt2PI + k - (1 / 12 - (1 / 360 - 1 / (1260 * k * k)) / (k * k)) / k;
          if (Math.log(v * smu) <= t) {
            return k;
          }
        } else if (k >= 0) {
          const f = (_a = logFactorial(k)) !== null && _a !== void 0 ? _a : 0;
          if (Math.log(v) <= k * Math.log(lambda) - lambda - f) {
            return k;
          }
        }
      }
    };
  }
};

// node_modules/random/dist/esm/distributions/exponential.js
var exponential_default = (random, lambda = 1) => {
  numberValidator(lambda).isPositive();
  return () => {
    return -Math.log(1 - random.next()) / lambda;
  };
};

// node_modules/random/dist/esm/distributions/irwin-hall.js
var irwin_hall_default = (random, n = 1) => {
  numberValidator(n).isInt().greaterThanOrEqual(0);
  return () => {
    let sum = 0;
    for (let i = 0; i < n; ++i) {
      sum += random.next();
    }
    return sum;
  };
};

// node_modules/random/dist/esm/distributions/bates.js
var bates_default = (random, n = 1) => {
  numberValidator(n).isInt().isPositive();
  const irwinHall = random.irwinHall(n);
  return () => {
    return irwinHall() / n;
  };
};

// node_modules/random/dist/esm/distributions/pareto.js
var pareto_default = (random, alpha = 1) => {
  numberValidator(alpha).greaterThanOrEqual(0);
  const invAlpha = 1 / alpha;
  return () => {
    return 1 / Math.pow(1 - random.next(), invAlpha);
  };
};

// node_modules/random/dist/esm/generators/math-random.js
var RNGMathRandom = class extends RNG {
  get name() {
    return "default";
  }
  next() {
    return Math.random();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  seed(_seed, _opts) {
  }
  clone() {
    return new RNGMathRandom();
  }
};

// node_modules/random/dist/esm/random.js
var Random = class {
  constructor(rng) {
    this._cache = {};
    this.next = () => {
      return this._rng.next();
    };
    this.float = (min, max) => {
      return this.uniform(min, max)();
    };
    this.int = (min, max) => {
      return this.uniformInt(min, max)();
    };
    this.integer = (min, max) => {
      return this.uniformInt(min, max)();
    };
    this.bool = () => {
      return this.uniformBoolean()();
    };
    this.boolean = () => {
      return this.uniformBoolean()();
    };
    this.uniform = (min, max) => {
      return this._memoize("uniform", uniform_default, min, max);
    };
    this.uniformInt = (min, max) => {
      return this._memoize("uniformInt", uniform_int_default, min, max);
    };
    this.uniformBoolean = () => {
      return this._memoize("uniformBoolean", uniform_boolean_default);
    };
    this.normal = (mu, sigma) => {
      return normal_default(this, mu, sigma);
    };
    this.logNormal = (mu, sigma) => {
      return log_normal_default(this, mu, sigma);
    };
    this.bernoulli = (p) => {
      return bernoulli_default(this, p);
    };
    this.binomial = (n, p) => {
      return binomial_default(this, n, p);
    };
    this.geometric = (p) => {
      return geometric_default(this, p);
    };
    this.poisson = (lambda) => {
      return poisson_default(this, lambda);
    };
    this.exponential = (lambda) => {
      return exponential_default(this, lambda);
    };
    this.irwinHall = (n) => {
      return irwin_hall_default(this, n);
    };
    this.bates = (n) => {
      return bates_default(this, n);
    };
    this.pareto = (alpha) => {
      return pareto_default(this, alpha);
    };
    if (rng && rng instanceof RNG) {
      this.use(rng);
    } else {
      this.use(new RNGMathRandom());
    }
    this._cache = {};
  }
  /**
   * @member {RNG} Underlying pseudo-random number generator
   */
  get rng() {
    return this._rng;
  }
  /**
   * Creates a new `Random` instance, optionally specifying parameters to
   * set a new seed.
   *
   * @see RNG.clone
   *
   * @param {string} [seed] - Optional seed for new RNG.
   * @param {object} [opts] - Optional config for new RNG options.
   * @return {Random}
   */
  clone(...args) {
    if (args.length) {
      return new Random(rng_factory_default(...args));
    } else {
      return new Random(this.rng.clone());
    }
  }
  /**
   * Sets the underlying pseudorandom number generator used via
   * either an instance of `seedrandom`, a custom instance of RNG
   * (for PRNG plugins), or a string specifying the PRNG to use
   * along with an optional `seed` and `opts` to initialize the
   * RNG.
   *
   * @example
   * const random = require('random')
   *
   * random.use('example_seedrandom_string')
   * // or
   * random.use(seedrandom('kittens'))
   * // or
   * random.use(Math.random)
   *
   * @param {...*} args
   */
  use(...args) {
    this._rng = rng_factory_default(...args);
  }
  /**
   * Patches `Math.random` with this Random instance's PRNG.
   */
  patch() {
    if (this._patch) {
      throw new Error("Math.random already patched");
    }
    this._patch = Math.random;
    Math.random = this.uniform();
  }
  /**
   * Restores a previously patched `Math.random` to its original value.
   */
  unpatch() {
    if (this._patch) {
      Math.random = this._patch;
      delete this._patch;
    }
  }
  // --------------------------------------------------------------------------
  // Internal
  // --------------------------------------------------------------------------
  /**
   * Memoizes distributions to ensure they're only created when necessary.
   *
   * Returns a thunk which that returns independent, identically distributed
   * samples from the specified distribution.
   *
   * @private
   *
   * @param {string} label - Name of distribution
   * @param {function} getter - Function which generates a new distribution
   * @param {...*} args - Distribution-specific arguments
   *
   * @return {function}
   */
  _memoize(label, getter, ...args) {
    const key = `${args.join(";")}`;
    let value = this._cache[label];
    if (value === void 0 || value.key !== key) {
      value = {
        key,
        distribution: getter(this, ...args)
      };
      this._cache[label] = value;
    }
    return value.distribution;
  }
};
var random_default = new Random();

// node_modules/random/dist/esm/index.esm.js
var index_esm_default = random_default;
export {
  RNG,
  rng_factory_default as RNGFactory,
  Random,
  index_esm_default as default
};
//# sourceMappingURL=random.js.map
