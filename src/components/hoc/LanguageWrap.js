// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import en from '../../languages/en';
import sr from '../../languages/sr';

type Props = {
  lang: string
};

const LanguageWrap = Component => (props: Props) => {
  if (props.lang === 'en') {
    return (
      <Component language={en} {...props} />
    );
  } else {
    return <Component language={sr} {...props} />
  }
}

const mapStateToProps = (state) => ({
  lang: state.language.lang
})

const composedLanguageWrap = compose(
  connect(mapStateToProps, null),
  LanguageWrap
)

export default composedLanguageWrap;
