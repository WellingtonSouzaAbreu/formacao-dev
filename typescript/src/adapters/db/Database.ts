import { Collection } from "../../app/ports/Collection"

export class Database implements Collection {
    private static itens: any[] = []

    insert(item: any) {
        Database.itens.push(item)
        return item
    }
}