export class Database {
    private static itens: any[] = []

    insert(item: any) {
        Database.itens.push(item)
        return item
    }
}