import React, { useState } from 'react';
import shuffle from 'lodash.shuffle';

import { EsotericCard, imageVariants } from '../esotericCard/EsotericCard';
import { EsotericCardVariant } from '../esotericCard/EsotericCard.types';
import { Button } from '../button/Button';
import ReverseCardImage from '../../../assets/images/Reverse-card.jpeg';

import * as Styles from './EsotericCardOmen.styles';
import { EsotericCardOmenProps } from './EsotericCardOmen.types';

const imageVariantsArray = Object.values(imageVariants);
const Result = shuffle(imageVariantsArray)
  .slice(imageVariantsArray.findIndex(item => item !== ReverseCardImage))
  .slice(0, 10);
export const EsotericCardOmen: React.FC<EsotericCardOmenProps> = () => {
  const [arrayChossed, setarrayChossed] = useState<Array<number>>([]);
  const [arrayChossedClicked, setarrayChossedClicked] = useState<Array<number>>([]);
  const [isSelected, setisSelected] = useState(false);
  const handleClick = (index: number) => {
    if (arrayChossed.length <= 2 && !arrayChossedClicked.includes(index)) {
      setarrayChossed([...arrayChossed, Math.floor(Math.random() * 10)]);
      setarrayChossedClicked([...arrayChossedClicked, index]);
    }
  };
  const SelectedCardClick = () => {
    return arrayChossed.length === 3 ? setisSelected(!isSelected) : null;
  };

  return (
    <>
      {!isSelected && (
        <Styles.Wrapper>
          <Styles.Cards>
            {Result.map((item, index) => {
              return (
                <EsotericCard
                  variant={EsotericCardVariant.REVERSE}
                  isSelected={arrayChossedClicked.includes(index)}
                  key={item}
                  onClick={() => handleClick(index)}
                />
              );
            })}
          </Styles.Cards>
          <Button onClick={() => SelectedCardClick()}>Pokaż Wróżbe</Button>
        </Styles.Wrapper>
      )}
      {isSelected && (
        <Styles.WrapperResult>
          <h1>Wrózba Tarot</h1>
          {arrayChossed.map(item => {
            return (
              <Styles.Content key={item}>
                <Styles.Result src={Result[item]} alt="test" />
                <h2>Lorem ipsum</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </Styles.Content>
            );
          })}
        </Styles.WrapperResult>
      )}
    </>
  );
};
