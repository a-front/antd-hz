import type { HeightMapToken, SeedToken } from '../../interface';

const genControlHeight = (token: SeedToken): HeightMapToken => {
  const { controlHeight } = token;

  return {
    controlHeightSM: controlHeight * 0.8125,
    controlHeightXS: controlHeight * 1,
    controlHeightLG: controlHeight * 1.125,
  };
};

export default genControlHeight;
