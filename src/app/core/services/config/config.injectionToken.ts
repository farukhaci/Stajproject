import { InjectionToken } from '@angular/core';

import { ConfigInterface } from '../../interfaces';

export const ConfigInjectionToken: InjectionToken<
  ConfigInterface
> = new InjectionToken<ConfigInterface>('ConfigInterface');
