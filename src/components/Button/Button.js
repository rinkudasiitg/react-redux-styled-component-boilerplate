import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: ${props => props.theme.colorPrimary};
    border: 5px solid ${props => props.theme.colorGrayDark};
    border-radius: 50px;
    font-size: 20px;
    color: ${props => props.theme.colorSecondary};
    outline: none;
    
    ${props => props.primary && css`
      background: yellow;
    `}
`;

export default Button;