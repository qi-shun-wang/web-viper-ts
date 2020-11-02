export interface EntryInteractorIntput {
  fetchData(): void;

  startServer(): void;
  stopServer(): void;
  getServerStatus(): boolean;
}
