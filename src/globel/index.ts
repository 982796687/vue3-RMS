import { App } from 'vue'

import registerProperties from './register-properties'

export function globelRegister(app: App): void {
  app.use(registerProperties)
}
