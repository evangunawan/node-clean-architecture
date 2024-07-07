export abstract class CommonUseCase<T> {
  abstract execute(...args: any): T;
}
