import { renderHook, act } from '@testing-library/react-hooks';
import { PivotSheet, S2Options, SpreadSheet } from '@antv/s2';
import { getContainer } from 'tests/util/helpers';
import * as mockDataConfig from 'tests/data/simple-data.json';
import { useResize } from '@/hooks';

const s2Options: S2Options = {
  width: 200,
  height: 200,
  hdAdapter: false,
};

describe('useResize tests', () => {
  let s2: SpreadSheet;
  let container: HTMLDivElement;

  beforeEach(() => {
    container = getContainer();
    s2 = new PivotSheet(container, mockDataConfig, s2Options);
    s2.render();
    jest.spyOn(s2, 'buildFacet' as any).mockImplementation(() => {});
  });

  test('should rerender when option width or height changed and adaptive disable', () => {
    const renderSpy = jest.spyOn(s2, 'render').mockImplementation(() => {});
    const changeSizeSpy = jest
      .spyOn(s2, 'changeSize')
      .mockImplementation(() => {});

    const { rerender } = renderHook(() =>
      useResize({
        container,
        s2,
        adaptive: false,
      }),
    );

    expect(s2.options.width).toEqual(s2Options.width);
    expect(s2.options.height).toEqual(s2Options.height);

    act(() => {
      s2.setOptions({ width: 300, height: 400 });
    });

    rerender();

    const canvas = s2.container.get('el') as HTMLCanvasElement;
    expect(s2.options.width).toEqual(300);
    expect(s2.options.height).toEqual(400);

    expect(canvas.style.width).toEqual(`200px`);
    expect(canvas.style.height).toEqual(`200px`);

    expect(renderSpy).toHaveBeenCalled();
    expect(changeSizeSpy).toHaveBeenCalled();

    renderSpy.mockRestore();
    changeSizeSpy.mockRestore();
  });

  test('should cannot change table size when width or height updated and enable adaptive', () => {
    const renderSpy = jest.spyOn(s2, 'render').mockImplementation(() => {});
    const changeSizeSpy = jest
      .spyOn(s2, 'changeSize')
      .mockImplementation(() => {});

    const { rerender } = renderHook(() =>
      useResize({
        container,
        s2,
        adaptive: true,
      }),
    );

    act(() => {
      s2.setOptions({ width: 300, height: 400 });
    });

    rerender();

    expect(renderSpy).not.toHaveBeenCalled();
    expect(changeSizeSpy).not.toHaveBeenCalled();

    renderSpy.mockRestore();
    changeSizeSpy.mockRestore();
  });
});
