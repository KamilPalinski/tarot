/* eslint-disable no-new */
import { Server, Response as MockResponse } from 'miragejs';

export const mockServer = () => {
  new Server({
    routes() {
      this.namespace = process.env.REACT_APP_API_URL ?? 'please-set-the-env';

      this.get('/test', () => {
        return new MockResponse(
          200,
          {},
          JSON.stringify({
            testProp: 'testValue',
          }),
        );
      });

      this.passthrough();
    },
  });
};
