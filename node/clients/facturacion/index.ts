import { MasterData } from '@vtex/api'

export class FacturacionClient extends MasterData {
  private dataEntity = 'facturaciondavid'
  private schemaName = 'schemadavid'
  private schema = {
    name: this.schemaName,
    properties: {
      usoCFDI: { type: 'string', title: 'Uso CFDI' },
      rfc: { type: 'string', title: 'RFC' },
      email: { type: 'string', title: 'Email' },
      orgid: { type: 'string', title: 'Id de la organización' }
    },
    'v-indexed': ['orgid'],
    'v-cache': false,
    'v-security': {
      allowGetAll: true,
      publicRead: [],
      publicWrite: [],
      publicFilter: []
    },
    'v-inmediate-indexing': true
  }

  public async initializeDB() {

    let newSchema = await this.getSchema({
      dataEntity: this.dataEntity,
      schema: this.schemaName
    })

    if (!newSchema) {
      newSchema = await this.createOrUpdateSchema({
        dataEntity: this.dataEntity,
        schemaName: this.schemaName,
        schemaBody: this.schema
      })
    }

    return newSchema
  }

  public async getFacturacion(orgid: string, page: number, pageSize: number) {

    console.log("aqui")

    const hola = await this.searchDocuments({
      dataEntity: this.dataEntity,
      schema: this.schemaName,
      fields: ["usoCFDI", "rfc", "email", "orgid"],
      where: orgid ? `orgid=${orgid}` : '',
      pagination: {
        page: page,
        pageSize: pageSize
      }
    })

    console.log(hola)

    return hola
  }

  public async createFacturacion(usoCFDI: string, rfc: string, email: string, orgid: string) {

    console.log("sigue llegando")

    const hola = await this.createDocument({
      dataEntity: this.dataEntity,
      schema: this.schemaName,
      fields: {
        usoCFDI: usoCFDI,
        rfc: rfc,
        email: email,
        orgid: orgid
      }
    })

    console.log(hola)

    return hola

  }

}