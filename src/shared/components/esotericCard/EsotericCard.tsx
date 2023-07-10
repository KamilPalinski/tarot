import React from 'react';
import classNames from 'classnames';

import * as Images from '../../../assets/index';

import * as Styles from './EsotericCard.styles';
import { EsotericCardProps, EsotericCardVariant } from './EsotericCard.types';

export const imageVariants: { [key in EsotericCardVariant]: string } = {
  [EsotericCardVariant.REVERSE]: Images.ReverseCardImage,
  [EsotericCardVariant.TWOOFCUPS]: Images.TwoCupsImage,
  [EsotericCardVariant.THREEOFCUPS]: Images.ThreeCupsImage,
  [EsotericCardVariant.FOUROFCUPS]: Images.FourCupsImage,
  [EsotericCardVariant.FIVEOFCUPS]: Images.FiveCupsImage,
  [EsotericCardVariant.SIXOFCUPS]: Images.SixCupsImage,
  [EsotericCardVariant.SEVENOFCUPS]: Images.SevenCupsImage,
  [EsotericCardVariant.EIGHTOFCUPS]: Images.EightCupsImage,
  [EsotericCardVariant.NINEOFCUPS]: Images.NineCupsImage,
  [EsotericCardVariant.TENOFCUPS]: Images.TenCupsImage,
  [EsotericCardVariant.KNIGHTOFCUPS]: Images.KnightCupsImage,
  [EsotericCardVariant.KINGOFCUPS]: Images.KingCupsImage,
  [EsotericCardVariant.QUEENOFCUPS]: Images.QueenCupsImage,
  [EsotericCardVariant.PAGEOFCUPS]: Images.PageCupsImage,
  [EsotericCardVariant.ACEOFCUPS]: Images.AceCupsImage,
  [EsotericCardVariant.TWOOFSWORDS]: Images.TwoSwordsImage,
  [EsotericCardVariant.THREEOFSWORDS]: Images.ThreeSwordsImage,
  [EsotericCardVariant.FOUROFSWORDS]: Images.FourSwordsImage,
  [EsotericCardVariant.FIVEOFSWORDS]: Images.FiveSwordsImage,
  [EsotericCardVariant.SIXOFSWORDS]: Images.SixSwordsImage,
  [EsotericCardVariant.SEVENOFSWORDS]: Images.SevenSwordsImage,
  [EsotericCardVariant.EIGHTOFSWORDS]: Images.EightSwordsImage,
  [EsotericCardVariant.NINEOFSWORDS]: Images.NineSwordsImage,
  [EsotericCardVariant.TENOFSWORDS]: Images.TenSwordsImage,
  [EsotericCardVariant.KINGOFSWORDS]: Images.KingSwordsImage,
  [EsotericCardVariant.QUEENOFSWORDS]: Images.QueenSwordsImage,
  [EsotericCardVariant.PAGEOFSWORDS]: Images.PageSwordsImage,
  [EsotericCardVariant.ACEOFSWORDS]: Images.AceSwordsImage,
  [EsotericCardVariant.KNIGHTOFSWORDS]: Images.KnightSwordsImage,
  [EsotericCardVariant.TWOOFWANDS]: Images.TwoWandsImage,
  [EsotericCardVariant.THREEOFWANDS]: Images.ThreeWandsImage,
  [EsotericCardVariant.FOUROFWANDS]: Images.FourWandsImage,
  [EsotericCardVariant.FIVEOFWANDS]: Images.FiveWandsImage,
  [EsotericCardVariant.SIXOFWANDS]: Images.SixWandsImage,
  [EsotericCardVariant.SEVENOFWANDS]: Images.SevenWandsImage,
  [EsotericCardVariant.EIGHTOFWANDS]: Images.EightWandsImage,
  [EsotericCardVariant.NINEOFWANDS]: Images.NineWandsImage,
  [EsotericCardVariant.TENOFWANDS]: Images.TenWandsImage,
  [EsotericCardVariant.KINGOFWANDS]: Images.KingWandsImage,
  [EsotericCardVariant.QUEENOFWANDS]: Images.QueenWandsImage,
  [EsotericCardVariant.PAGEOFWANDS]: Images.PageWandsImage,
  [EsotericCardVariant.ACEOFWANDS]: Images.AceWandsImage,
  [EsotericCardVariant.KNIGHTOFWANDS]: Images.KnightWandsImage,
  [EsotericCardVariant.TWOOFPENTACLES]: Images.TwoPentaclesImage,
  [EsotericCardVariant.THREEOFPENTACLES]: Images.ThreePentaclesImage,
  [EsotericCardVariant.FOUROFPENTACLES]: Images.FourPentaclesImage,
  [EsotericCardVariant.FIVEOFPENTACLES]: Images.FivePentaclesImage,
  [EsotericCardVariant.SIXOFPENTACLES]: Images.SixPentaclesImage,
  [EsotericCardVariant.SEVENOFPENTACLES]: Images.SevenPentaclesImage,
  [EsotericCardVariant.EIGHTOFPENTACLES]: Images.EightPentaclesImage,
  [EsotericCardVariant.NINEOFPENTACLES]: Images.NinePentaclesImage,
  [EsotericCardVariant.TENOFPENTACLES]: Images.TenPentaclesImage,
  [EsotericCardVariant.KINGOFPENTACLES]: Images.KingPentaclesImage,
  [EsotericCardVariant.QUEENOFPENTACLES]: Images.QueenPentaclesImage,
  [EsotericCardVariant.PAGEOFPENTACLES]: Images.PagePentaclesImage,
  [EsotericCardVariant.ACEOFPENTACLES]: Images.AcePentaclesImage,
  [EsotericCardVariant.KNIGHTOFPENTACLES]: Images.KnightPentaclesImage,
  [EsotericCardVariant.CHARIOT]: Images.ChariotImage,
  [EsotericCardVariant.DEATH]: Images.DeathImage,
  [EsotericCardVariant.DEVIL]: Images.DevilImage,
  [EsotericCardVariant.EMPRESS]: Images.EmpressImage,
  [EsotericCardVariant.FOOL]: Images.FoolImage,
  [EsotericCardVariant.HERMIT]: Images.HermitImage,
  [EsotericCardVariant.HIEROPHANT]: Images.HierophantImage,
  [EsotericCardVariant.HIGHPRIESTESS]: Images.HighPriestesImage,
  [EsotericCardVariant.HANGEDMAN]: Images.HangedManImage,
  [EsotericCardVariant.JUDGEMENT]: Images.JudgementImage,
  [EsotericCardVariant.JUSTICE]: Images.JusticeImage,
  [EsotericCardVariant.LOVERS]: Images.LoversImage,
  [EsotericCardVariant.MAGICIAN]: Images.MagicianImage,
  [EsotericCardVariant.MOON]: Images.MoonImage,
  [EsotericCardVariant.STAR]: Images.StarImage,
  [EsotericCardVariant.STRENGHT]: Images.StrenghtImage,
  [EsotericCardVariant.SUN]: Images.SunImage,
  [EsotericCardVariant.TEMPERANCE]: Images.TemperanceImage,
  [EsotericCardVariant.TOWER]: Images.TowerImage,
  [EsotericCardVariant.WHEELOFFORTUNE]: Images.WhellOfFortuneImage,
  [EsotericCardVariant.WORLD]: Images.WorldImage,
  [EsotericCardVariant.KNIGHTOFPENTACLES]: Images.KnightPentaclesImage,
};

export const EsotericCard: React.FC<EsotericCardProps> & {
  variant: typeof EsotericCardVariant;
} = ({ className, variant = EsotericCardVariant.REVERSE, style, onClick, isSelected }) => {
  return (
    <Styles.EsotericCard
      onClick={onClick}
      style={style}
      src={imageVariants[variant]}
      alt="esoteric card"
      className={classNames('esoteric-card', className, {
        'esoteric-card--reversed': variant === EsotericCardVariant.REVERSE && !isSelected,
        'esoteric-card--selected': isSelected,
      })}
    />
  );
};
EsotericCard.variant = EsotericCardVariant;
