import React from 'react';

type DisclaimerProps = {
  children?: string;
  description?: string;
};

const Disclaimer = ({ children, description }: DisclaimerProps) => (
  <span className="block max-w-prose md:mx-auto md:text-center text-sm text-gray-700">
    {children || description}
  </span>
);

Disclaimer.defaultProps = {
  children: '',
  description: null,
};

export default Disclaimer;
