import '@affine/core/bootstrap/electron';

import { apis } from '@affine/electron-api';
import { broadcastChannelStorages } from '@affine/nbstore/broadcast-channel';
import { cloudStorages } from '@affine/nbstore/cloud';
import { bindNativeDBApis, sqliteStorages } from '@affine/nbstore/sqlite';
import {
  bindNativeDBV1Apis,
  sqliteV1Storages,
} from '@affine/nbstore/sqlite/v1';
import {
  WorkerConsumer,
  type WorkerOps,
} from '@affine/nbstore/worker/consumer';
import { OpConsumer } from '@toeverything/infra/op';

// oxlint-disable-next-line no-non-null-assertion
bindNativeDBApis(apis!.nbstore);
// oxlint-disable-next-line no-non-null-assertion
bindNativeDBV1Apis(apis!.db);

const worker = new WorkerConsumer([
  ...sqliteStorages,
  ...sqliteV1Storages,
  ...broadcastChannelStorages,
  ...cloudStorages,
]);

window.addEventListener('message', ev => {
  if (ev.data.type === 'electron:worker-connect') {
    const port = ev.ports[0];

    const consumer = new OpConsumer<WorkerOps>(port);
    worker.bindConsumer(consumer);
  }
});
