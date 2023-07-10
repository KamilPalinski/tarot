import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { useOnClickOutside } from 'shared/hooks/useOnClickOutside/useOnClickOutside';
import { SelectProps } from './Select.types';
import * as Styles from './Select.styles';

export const Select: React.FC<SelectProps> = ({ style, className, options, placeholder }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number>(placeholder ?? options[0]);

  useOnClickOutside(targetRef, event => {
    if (targetRef?.current?.contains(event.target as Node)) {
      return;
    }

    setIsOpened(false);
  });

  const handleOptionClick = (value: string | number) => {
    setSelectedOption(value);
    setIsOpened(false);
  };

  return (
    <Styles.Wrapper ref={targetRef} style={style} className={classNames('select', className)}>
      <Styles.SelectWrapper onClick={() => setIsOpened(!isOpened)}>
        {selectedOption}
        <Styles.Clip
          className={classNames('clip', {
            'clip--rotated': isOpened,
          })}
        />
      </Styles.SelectWrapper>
      {isOpened && (
        <Styles.OptionsWrapper className="select__options-wrapper">
          {options.map(option => (
            <Styles.Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Styles.Option>
          ))}
        </Styles.OptionsWrapper>
      )}
    </Styles.Wrapper>
  );
};
