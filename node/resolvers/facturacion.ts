interface Arg {
    orgid: string,
    page: number,
    pageSize: number
}

interface ArgCreate {
    usoCFDI: string,
    rfc: string,
    orgid: string,
    email: string
}


export const getFacturation = async (
    _: any,
    { orgid, page, pageSize }: Arg,
    { clients: { facturacion } }: Context
) => {
    facturacion.getFacturacion(orgid, page, pageSize)
}

export const createFacturacion = async (
    _: any,
    { usoCFDI, rfc, orgid, email }: ArgCreate,
    { clients: { facturacion } }: Context
) => {
    facturacion.createFacturacion(usoCFDI, rfc, email, orgid)
}