// @flow
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import composedLanguageWrap from '../hoc/LanguageWrap';
import css from '../../style/index.css';
import copyIcon from '../../img/copy.png';

type Props = {
  service: {
    link: string,
    title: string,
    description: string,
    promocode: string,
    bonus: boolean
  },
  onClick: function,
  bonusActive: function,
  language: {
    promocode: string,
    activate_bonus: string,
    bonus_active: string
  }
};

function ServiceItem(props: Props) {
  const { service, language, bonusActive } = props;
  return (
    <div className={css.serviceItem}>
      <div>
        <h2>
          <a
            target="_blank"
            href={service.link}
          >
            {service.title}
          </a>
        </h2>
        <span className={css.desc}>{service.description}</span>
      </div>
      <div className={css.promocode}>
        <label>{language.promocode}</label>
        <div style={{ border: '1px solid #DDD' }}>
          <input
            style={{ border: 'none', zIndex: "0" }}
            value={service.promocode}
            readOnly
          />
          <CopyToClipboard text={service.promocode}>
            <img
              style={{ width: '20px', zIndex: '1' }}
              src={copyIcon}
            />
          </CopyToClipboard>

        </div>
      </div>
      <div className={css.bonus}>
        {
          service.bonus ?
            <input
              type='button'
              value={language.bonus_active}
              style={{ background: "green" }}
            >
            </input>
            :
            <input
              type='button'
              value={language.activate_bonus}
              onClick={() => { bonusActive(service.title) }}
            >
            </input>

        }
      </div>
    </div>
  )
}

export default composedLanguageWrap(ServiceItem);
