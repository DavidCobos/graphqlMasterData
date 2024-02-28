interface Args {
    orgid: string;
    page: number;
    pageSize: number;
}

interface ArgCreate {
    usoCFDI: string;
    rfc: string;
    orgid: string;
    email: string;
}


export const getFacturation = async (
    _: any,
    { orgid, page, pageSize }: Args,
    { clients: { facturacion } }: Context
) => {
    return facturacion.getFacturacion(orgid, page, pageSize)
}

export const createFacturacion = async (
    _: any,
    { usoCFDI, rfc, orgid, email }: ArgCreate,
    { clients: { facturacion } }: Context
) => {
    return facturacion.createFacturacion(usoCFDI, rfc, email, orgid)
}