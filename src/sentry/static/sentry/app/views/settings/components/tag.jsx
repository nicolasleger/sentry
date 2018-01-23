import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const TagTextStyled = styled('span')`
  display: inline;
  padding: 0.3em 0.6em 0.4em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  margin-left: 0.5em;
  text-transform: lowercase;
  background-color: ${p => {
    switch (p.type) {
      case 'warning':
        return p.theme.yellowOrange;
      case 'success':
        return p.theme.greenLight;
      default:
        return p.theme.gray1;
    }
  }};
`;

const Tag = ({children, type, ...props}) => (
  <TagTextStyled type={type}>{children}</TagTextStyled>
);

Tag.propTypes = {
  type: PropTypes.string,
};

export default Tag;