import { Server } from '../src/server';

describe('Run Application Server', () => {
  it('should run successfully and can listen HTTP requests.', (done) => {
    const app = Server.initializeServer(() => {
      fetch(`http://localhost:${app.port}/`).then((result) => {
        try {
          expect(String(result?.status)).toMatch(/^(200|404)$/);
          app.server.close();
          done();
        } catch (e) {
          app.server.close();
          done(e);
        }
      });
    });
  });
});
