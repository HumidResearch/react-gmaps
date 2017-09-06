import React from 'react';
import createReactClass from 'create-react-class';
import Listener from '../mixins/listener';
import getChangedProps from '../utils/get-changed-props';

export default (name, latLngProp, events) => {
  return createReactClass({

    mixins: [Listener],

    entity: null,

    componentDidMount() {
      const options = this.getOptions(this.props);
      this.entity = new google.maps[name](options);
      this.addListeners(this.entity, events);
    },

    componentWillReceiveProps(nextProps) {
      const changedProps = getChangedProps(this.props, nextProps);

      if (Object.keys(changedProps).length) {
        const options = this.getOptions(changedProps);
        this.entity.setOptions(options);
      }
    },

    componentWillUnmount() {
      this.entity.setMap(null);
      this.removeListeners();
      this.entity = null;
    },

    getEntity() {
      return this.entity;
    },

    getOptions(props) {
      return {
        ...props,
        [latLngProp]: new google.maps.LatLng(props.lat, props.lng)
      };
    },

    render() {
      return null;
    }

  });
};
