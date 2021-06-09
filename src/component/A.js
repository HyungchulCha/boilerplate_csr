/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import exImgSrc from '../../static/image/ex.jpg';
import B from './B';

const exEmotionReact = css`
  color: green;
`;
const exEmotionReactBg = css`
  width: 100px;
  height: 100px;
  background: url(${exImgSrc}) no-repeat center center;
  background-size: cover;
`;

const A = () => {
  return (
    <div>
      <img src={exImgSrc} alt="exImg" />
      <p className="ex_css">가나다라마바사아자차카타파하0123456789abcdefghijklmnopqrstuvwxyz</p>
      <div className="ex_css_bg" />
      <p className="ex_scss">가나다라마바사아자차카타파하0123456789abcdefghijklmnopqrstuvwxyz</p>
      <div className="ex_scss_bg" />
      <p css={exEmotionReact}>가나다라마바사아자차카타파하0123456789abcdefghijklmnopqrstuvwxyz</p>
      <div css={exEmotionReactBg} />
      <B />
    </div>
  );
};

export default A;
