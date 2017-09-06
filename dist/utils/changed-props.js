'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (props, nextProps) {
  var changedProps = {};

  var propsKeys = Object.keys(props);
  var nextPropsKeys = Object.keys(nextProps);

  for (var i = 0; i < propsKeys.length; i++) {
    var key = propsKeys[i];
    if (key !== 'children' && key.indexOf('on') !== 0 && (!nextProps.hasOwnProperty(key) || props[key] !== nextProps[key])) {
      changedProps[key] = nextProps[key];
    }
  }

  return changedProps;
};

module.exports = exports['default'];