import { TinyColor } from '@ctrl/tinycolor';

import type { ColorMapToken, SeedToken } from '../../interface';
import type { GenerateColorMap, GenerateNeutralColorMap } from '../ColorMap';

interface PaletteGenerators {
  generateColorPalettes: GenerateColorMap;
  generateNeutralColorPalettes: GenerateNeutralColorMap;
}

export default function genColorMapToken(
  seed: SeedToken,
  {
    // generateColorPalettes,
    generateNeutralColorPalettes,
  }: PaletteGenerators,
): ColorMapToken {
  const {
    // colorSuccess: colorSuccessBase,
    // colorWarning: colorWarningBase,
    // colorError: colorErrorBase,
    // colorInfo: colorInfoBase,
    // colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase,
  } = seed;

  // antd default color
  // const primaryColors = generateColorPalettes(colorPrimaryBase);
  // const successColors = generateColorPalettes(colorSuccessBase);
  // const warningColors = generateColorPalettes(colorWarningBase);
  // const errorColors = generateColorPalettes(colorErrorBase);
  // const infoColors = generateColorPalettes(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);

  // Color Link
  // const colorLink = seed.colorLink || seed.colorInfo;
  // const linkColors = generateColorPalettes(colorLink);

  // hz color
  const primaryColors = [
    '',
    '#198eeb', // colorPrimaryBg
    '#4fb1ff', // colorPrimaryBgHover
    '#198eeb', // colorPrimaryBorder
    '#4fb1ff', // colorPrimaryBorderHover
    '#4fb1ff', // colorPrimaryHover
    '#198eeb', //  colorPrimary
    '#197bc9', // colorPrimaryActive
    '#ffffff', // colorPrimaryTextHover
    '#ffffff', // colorPrimaryText
    '#ffffff', // colorPrimaryTextActive
  ];
  const successColors = [
    '',
    '#4acfb1', // colorSuccessBg
    '#', // colorSuccessBgHover
    '#', // colorSuccessBorder
    '#', // colorSuccessBorderHover
    '#', // colorSuccessHover
    '#', // colorSuccess
    '#', // colorSuccessActive
    '#', // colorSuccessTextHover
    '#4acfb1', // colorSuccessText
    '#', // colorSuccessTextActive
  ];

  const errorColors = [
    '',
    '#f36969', // 1 colorErrorBg
    '#fa8383', // 2 colorErrorBgHover
    '#f36969', // 3 colorErrorBorder
    '#fa8383', // 4 colorErrorBorderHover
    '#fa8383', // 5 colorErrorHover
    '#f36969', // 6 colorError
    '#d45353', // 7 colorErrorActive
    '', // 8 colorErrorTextHover
    '', // 9 colorErrorText
    '', // 10 colorErrorTextActive
  ];

  const warningColors = [
    '',
    '#ff9b54', // warningColors
    '#', // colorWarningBgHover
    '#', // colorWarningBorder
    '#', // colorWarningBorderHover colorWarningHover
    '#', //
    '#', // colorWarning
    '#', // colorWarningActive
    '#', // colorWarningTextHover
    '#', // colorWarningText
    '#', // colorWarningTextActive
  ];

  const infoColors = [
    '',
    '#45a8e6', // infoColors
    '#', // colorInfoBgHover
    '#', // colorInfoBorder
    '#', // colorInfoBorderHover colorInfoHover
    '#', //
    '#', // colorInfo
    '#', // colorInfoActive
    '#', // colorInfoTextHover
    '#', // colorInfoText
    '#', // colorInfoTextActive
  ];

  const linkColors = [
    '',
    '', // 1
    '',
    '', // 3
    '#1a78b8', // 4 colorLinkHover
    '', // 5
    '#3b8fd9', // 6 colorLink
    '#0f6cb2', // 7 colorLinkActive
  ];

  return {
    ...neutralColors,

    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],

    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],

    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],

    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],

    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],

    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],

    colorBgMask: new TinyColor('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  };
}
