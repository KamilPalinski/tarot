import { CSSProperties } from 'react';

export enum EsotericCardVariant {
  REVERSE,
  TWOOFCUPS,
  THREEOFCUPS,
  FOUROFCUPS,
  FIVEOFCUPS,
  SIXOFCUPS,
  SEVENOFCUPS,
  EIGHTOFCUPS,
  NINEOFCUPS,
  TENOFCUPS,
  KINGOFCUPS,
  QUEENOFCUPS,
  KNIGHTOFCUPS,
  PAGEOFCUPS,
  ACEOFCUPS,
  TWOOFSWORDS,
  THREEOFSWORDS,
  FOUROFSWORDS,
  FIVEOFSWORDS,
  SIXOFSWORDS,
  SEVENOFSWORDS,
  EIGHTOFSWORDS,
  NINEOFSWORDS,
  TENOFSWORDS,
  KINGOFSWORDS,
  QUEENOFSWORDS,
  KNIGHTOFSWORDS,
  PAGEOFSWORDS,
  ACEOFSWORDS,
  TWOOFWANDS,
  THREEOFWANDS,
  FOUROFWANDS,
  FIVEOFWANDS,
  SIXOFWANDS,
  SEVENOFWANDS,
  EIGHTOFWANDS,
  NINEOFWANDS,
  TENOFWANDS,
  KINGOFWANDS,
  QUEENOFWANDS,
  PAGEOFWANDS,
  ACEOFWANDS,
  KNIGHTOFWANDS,
  TWOOFPENTACLES,
  THREEOFPENTACLES,
  FOUROFPENTACLES,
  FIVEOFPENTACLES,
  SIXOFPENTACLES,
  SEVENOFPENTACLES,
  EIGHTOFPENTACLES,
  NINEOFPENTACLES,
  TENOFPENTACLES,
  KINGOFPENTACLES,
  QUEENOFPENTACLES,
  KNIGHTOFPENTACLES,
  PAGEOFPENTACLES,
  ACEOFPENTACLES,
  CHARIOT,
  DEATH,
  DEVIL,
  EMPRESS,
  FOOL,
  HANGEDMAN,
  HERMIT,
  HIEROPHANT,
  HIGHPRIESTESS,
  JUDGEMENT,
  JUSTICE,
  LOVERS,
  MAGICIAN,
  MOON,
  STAR,
  STRENGHT,
  SUN,
  TEMPERANCE,
  TOWER,
  WHEELOFFORTUNE,
  WORLD,
}

export type EsotericCardProps = {
  variant?: EsotericCardVariant;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  isSelected?: boolean;
};