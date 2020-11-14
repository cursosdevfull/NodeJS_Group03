export interface DatabaseRepository {
  initialize(): Promise<any>;
  disconnect(): void;
}
