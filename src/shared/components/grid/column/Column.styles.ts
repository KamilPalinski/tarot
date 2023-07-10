import styled from 'theme';

const getFlex = (size?: number | 'auto') => {
  if (typeof size === 'number') {
    return `0 0 ${size * 100}%`;
  }

  return size === 'auto' ? `0 0 auto` : `1 1 auto`;
};

export const Column = styled.div<{ size?: number | 'auto' }>`
  flex: ${({ size }) => getFlex(size)};
`;
