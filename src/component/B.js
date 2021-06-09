import React from 'react';
import styled from '@emotion/styled';
import exImgSrc from '../../static/image/ex.jpg';
import ExSvgIcon from '../../static/image/ico_search.svg';
import ExSvgIconComponent from './ExSvgIconComponent';

const ExEmotionStyled = styled.p`
  color: navy;
`;

const ExEmotionStyledBg = styled.div`
  width: 100px;
  height: 100px;
  background: url(${exImgSrc}) no-repeat center center;
  background-size: cover;
`;

const C = () => {
  return (
    <>
      <ExEmotionStyled>가나다라마바사아자차카타파하0123456789abcdefghijklmnopqrstuvwxyz</ExEmotionStyled>
      <ExEmotionStyledBg />
      <ExSvgIcon style={{ width: '48px', height: '48px', fill: 'red' }} />
      <ExSvgIconComponent style={{ width: '48px', height: '48px', fill: 'red' }} />
    </>
  );
};

export default C;
