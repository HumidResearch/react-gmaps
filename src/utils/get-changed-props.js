export default (props, nextProps) => {

  const changedProps = {};

  const propsKeys = Object.keys(props);
  const nextPropsKeys = Object.keys(nextProps);

  for (let i = 0; i < propsKeys.length; i++) {
    const key = propsKeys[i];
    if ((key !== 'children' && key.indexOf('on') !== 0) &&
      (!nextProps.hasOwnProperty(key) || props[key] !== nextProps[key])) {
        changedProps[key] = nextProps[key];
    }
  }

  return changedProps;

};
