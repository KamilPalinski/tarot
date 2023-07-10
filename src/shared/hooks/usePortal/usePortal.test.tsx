import { renderHook } from 'test';
import { usePortal } from './usePortal';

describe('usePortal test', () => {
  it('returns portal DOM element', () => {
    const { result, unmount } = renderHook(() => usePortal('menu'), {});

    expect(result.current.tagName).toEqual('DIV');

    unmount();
  });
});
