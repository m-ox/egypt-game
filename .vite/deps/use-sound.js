import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/use-sound/dist/use-sound.esm.js
var import_react = __toESM(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useOnMount(callback) {
  (0, import_react.useEffect)(callback, []);
}
function useSound(src, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref, _ref2$volume = _ref2.volume, volume = _ref2$volume === void 0 ? 1 : _ref2$volume, _ref2$playbackRate = _ref2.playbackRate, playbackRate = _ref2$playbackRate === void 0 ? 1 : _ref2$playbackRate, _ref2$soundEnabled = _ref2.soundEnabled, soundEnabled = _ref2$soundEnabled === void 0 ? true : _ref2$soundEnabled, _ref2$interrupt = _ref2.interrupt, interrupt = _ref2$interrupt === void 0 ? false : _ref2$interrupt, onload = _ref2.onload, delegated = _objectWithoutPropertiesLoose(_ref2, ["id", "volume", "playbackRate", "soundEnabled", "interrupt", "onload"]);
  var HowlConstructor = import_react.default.useRef(null);
  var isMounted = import_react.default.useRef(false);
  var _React$useState = import_react.default.useState(null), duration = _React$useState[0], setDuration = _React$useState[1];
  var _React$useState2 = import_react.default.useState(null), sound = _React$useState2[0], setSound = _React$useState2[1];
  var handleLoad = function handleLoad2() {
    if (typeof onload === "function") {
      onload.call(this);
    }
    if (isMounted.current) {
      setDuration(this.duration() * 1e3);
    }
    setSound(this);
  };
  useOnMount(function() {
    import("./howler-2NGDND32.js").then(function(mod) {
      if (!isMounted.current) {
        var _mod$Howl;
        HowlConstructor.current = (_mod$Howl = mod.Howl) !== null && _mod$Howl !== void 0 ? _mod$Howl : mod["default"].Howl;
        isMounted.current = true;
        new HowlConstructor.current(_extends({
          src: Array.isArray(src) ? src : [src],
          volume,
          rate: playbackRate,
          onload: handleLoad
        }, delegated));
      }
    });
    return function() {
      isMounted.current = false;
    };
  });
  import_react.default.useEffect(function() {
    if (HowlConstructor.current && sound) {
      setSound(new HowlConstructor.current(_extends({
        src: Array.isArray(src) ? src : [src],
        volume,
        onload: handleLoad
      }, delegated)));
    }
  }, [JSON.stringify(src)]);
  import_react.default.useEffect(function() {
    if (sound) {
      sound.volume(volume);
      sound.rate(playbackRate);
    }
  }, [volume, playbackRate]);
  var play = import_react.default.useCallback(function(options) {
    if (typeof options === "undefined") {
      options = {};
    }
    if (!sound || !soundEnabled && !options.forceSoundEnabled) {
      return;
    }
    if (interrupt) {
      sound.stop();
    }
    if (options.playbackRate) {
      sound.rate(options.playbackRate);
    }
    sound.play(options.id);
  }, [sound, soundEnabled, interrupt]);
  var stop = import_react.default.useCallback(function(id) {
    if (!sound) {
      return;
    }
    sound.stop(id);
  }, [sound]);
  var pause = import_react.default.useCallback(function(id) {
    if (!sound) {
      return;
    }
    sound.pause(id);
  }, [sound]);
  var returnedValue = [play, {
    sound,
    stop,
    pause,
    duration
  }];
  return returnedValue;
}
var use_sound_esm_default = useSound;
export {
  use_sound_esm_default as default,
  useSound
};
//# sourceMappingURL=use-sound.js.map
