// @flow
import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions/languages';
import composedLanguageWrap from '../hoc/LanguageWrap';
import css from '../../style/index.css';

type Props = {
  language: {
    balance: string,
    payout: string
  },
  changeLanguage: Function,
  servicesHeader: {
    balance: number,
    next_payout: number,
    currency: string
  }
};

function Header(props: Props) {
  const { servicesHeader, changeLanguage, language } = props;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div className={css.header}>
      <div>
        <h3>{language.balance}</h3>
        <div>{servicesHeader && formatter.format(servicesHeader.balance)}</div>
      </div>
      <div>
        <h3>{language.payout}</h3>
        <div>{servicesHeader && formatter.format(servicesHeader.next_payout)}</div>
      </div>
      <div className={css.language}>
        <button onClick={() => changeLanguage('sr')}>SR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  servicesHeader: state.services.header
});

export default connect(mapStateToProps, { changeLanguage })(composedLanguageWrap(Header));





