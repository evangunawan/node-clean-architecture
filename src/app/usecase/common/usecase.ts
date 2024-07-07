export abstract class CommonUseCase<T> {
  abstract execute(...args: never): T;
}
