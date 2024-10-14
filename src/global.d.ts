/// <reference types="@solidjs/start/env" />
import { AuthObject } from '@clerk/backend';

declare module '@solidjs/start/server' {
  export interface RequestEventLocals {
    auth: AuthObject;
  }
}
