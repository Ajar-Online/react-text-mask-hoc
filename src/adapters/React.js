/* eslint-disable */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
/* eslint-enable */

export class InputAdapter extends PureComponent {
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        componentRef: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        value: '',
    };

    render() {
        const {componentRef, ...rest} = this.props;

        return <input ref={componentRef} {...rest} />;
    }
}

export class SpanAdapter extends PureComponent {
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        componentRef: PropTypes.func.isRequired,
    };

    state = {
        value: this.props.value,
    };

    get value() {
        return this.state.value;
    }

    set value(value) {
        this.setState({value});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({value: nextProps.value});
        }
    }

    render() {
        const {value, componentRef, ...rest} = this.props;
        componentRef(this);

        return <span {...rest}>{this.state.value}</span>;
    }
}
