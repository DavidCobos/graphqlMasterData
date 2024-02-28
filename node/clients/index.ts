import { IOClients } from '@vtex/api'

import { FacturacionClient } from './facturacion'

export class Clients extends IOClients {
  public get facturacion() {
    return this.getOrSet('facturacion', FacturacionClient)
  }

}
