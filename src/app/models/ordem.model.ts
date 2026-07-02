export interface Ordem {
    id: string;
    veiculoId: string;
    descricao: string;
    servicoRealizado: string;
    mecanico: string;
    status: string;
    dataEntrada: string;
    valor: number;
}