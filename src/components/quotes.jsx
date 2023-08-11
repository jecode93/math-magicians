import React from 'react';
import PropTypes from 'prop-types';

export default function Quotes(props) {
  const { text } = props;

  return (
    <>
      <section className="quotes">
        <p>{text}</p>
      </section>
    </>
  );
}

Quotes.propTypes = {
  text: PropTypes.string.isRequired,
};
