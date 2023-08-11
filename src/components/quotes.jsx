import React from 'react';
import PropTypes from 'prop-types';

export default function Quotes(props) {
  const { text } = props;

  return (
    <>
      <section className="quotes">
        <q>{text}</q>
      </section>
    </>
  );
}

Quotes.propTypes = {
  text: PropTypes.string.isRequired,
};
