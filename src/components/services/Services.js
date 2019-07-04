// @flow
import React, { Component } from 'react';
import ServiceItem from './ServiceItem';
import composedLanguageWrap from '../hoc/LanguageWrap';
import { connect } from 'react-redux';
import css from '../../style/index.css';
import { servicesFetchRequested } from '../../actions/services';

type Props = {
  services: Array<any>,
  servicesFetchRequested: function,
  language: {
    services: string,
    filter: string,
    reset: string,
    promocode: string,
    activate_bonus: string
  }
};
type State = {
  service: string,
};

class Services extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      service: ''
    }
  }
  componentDidMount() {
    this.props.servicesFetchRequested();
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onClick = () => {
    this.setState({
      service: ''
    })
  }
  render() {
    const { services, language } = this.props;
    const { service } = this.state;
    let serviceItem;
    services ? serviceItem = services
      .filter(item => {
        return item.title.toLowerCase().indexOf(service) >= 0
      })
      .map((service, i) => {
        return (
          <ServiceItem
            key={i}
            service={service}
            language={language}
          />
        )
      }) : serviceItem = null;
    return (
      <div className={css.services}>
        <h1>{language.services}</h1>
        <label>{language.filter}</label><br />
        <input
          name="service"
          value={service}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>{language.reset}</button>
        {serviceItem}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  services: state.services.bonuses
});

export default connect(mapStateToProps, { servicesFetchRequested })(composedLanguageWrap(Services));
