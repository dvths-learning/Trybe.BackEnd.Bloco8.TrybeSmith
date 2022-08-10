// Interface para ser substituida por suas implementações
// Um outro serviço que use o método create deverá usar esta mesma interface
export default interface IPersistenceService<T> {
  create(entity: T): Promise<void>;
}
