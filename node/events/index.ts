import { EventContext } from "@vtex/api";
import { Clients } from "../clients";

export async function initializeDB(ctx: EventContext<Clients>) {
    const {
        clients: { facturacion }
    } = ctx

    await facturacion.initializeDB()

    return true;
}