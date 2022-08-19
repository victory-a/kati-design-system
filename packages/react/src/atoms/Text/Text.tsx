import React from 'react';
import { FontSize } from '@ds.e/foundation';

type TextProps = {
  size?: keyof typeof FontSize;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ size = FontSize, children }) => {
  const className = `dse-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
