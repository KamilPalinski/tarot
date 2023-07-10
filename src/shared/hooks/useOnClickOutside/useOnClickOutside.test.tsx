import React, { useRef, RefObject } from 'react';

import { act, fireEvent, render, renderHook, screen } from 'test';
import { useOnClickOutside } from './useOnClickOutside';

describe('useOnClickOutside test', () => {
  it('fires function on click outside ref element', async () => {
    const onClickOutsideFunction = jest.fn();

    const CustomComponent = () => {
      const ref = useRef(null);

      useOnClickOutside(ref, () => {
        onClickOutsideFunction();
      });

      return (
        <div>
          <div>Outside</div>
          <div ref={ref}>Inside</div>
        </div>
      );
    };

    render(<CustomComponent />);

    await screen.findByText('Inside');

    act(() => {
      fireEvent.mouseDown(screen.getByText('Inside'));
    });

    expect(onClickOutsideFunction).not.toHaveBeenCalled();

    act(() => {
      fireEvent.mouseDown(screen.getByText('Outside'));
    });

    expect(onClickOutsideFunction).toHaveBeenCalled();
  });

  it('does nothing when ref is empty or handle is empty', () => {
    renderHook(() => {
      useOnClickOutside((null as unknown) as RefObject<HTMLDivElement>, null);
    });

    renderHook(() => {
      useOnClickOutside((null as unknown) as RefObject<HTMLDivElement>, () => null);
    });
  });
});
