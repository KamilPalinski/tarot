import 'jest-canvas-mock';
import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(global, 'scrollTo', { value: jest.fn() });
