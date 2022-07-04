export const WeekDay = [
    { value: 'SUNDAY', label: 'Domingo' },
    { value: 'MONDAY', label: 'Segunda-Feira' },
    { value: 'TUESDAY', label: 'Terça-feira' },
    { value: 'WEDNESDAY', label: 'Quarta-Feira' },
    { value: 'THURSDAY', label: 'Quinta-Feira' },
    { value: 'FRIDAY', label: 'Sexta-Feira' },
    { value: 'SATURDAY', label: 'Sábado' }
];

export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
});