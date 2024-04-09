/* Deno - alternativa para rodar ts no node */

enum WeekDay {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY'
}

console.log(WeekDay.MONDAY);

const vendas = {
    started: 'iniciado',
    finished: 'finalizado'
} as const // Impede que as propriedades de um objeto sejam alterados

// vendas.finished = 'teste' // Pode ser sobrescrevida

console.log(vendas)

type Status = 'iniciado' | 'não iniciado'