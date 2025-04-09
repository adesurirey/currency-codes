declare module "currency-codes" {
  export interface CurrencyCodeRecord {
    code: string;
    number: string;
    digits: number;
    currency: string;
    countries: string[];
    active: boolean;
  }

  export interface CurrencyCodeOptions {
    includeDeprecatedCurrencies: boolean;
  }

  export function code(
    code: string,
    options?: CurrencyCodeOptions
  ): CurrencyCodeRecord | undefined;

  export function country(
    country: string,
    options?: CurrencyCodeOptions
  ): CurrencyCodeRecord[];

  export function number(
    number: string,
    options?: CurrencyCodeOptions
  ): CurrencyCodeRecord | undefined;

  export function codes(options?: CurrencyCodeOptions): string[];

  export function numbers(options?: CurrencyCodeOptions): number[];

  export function countries(options?: CurrencyCodeOptions): string[];

  export function data(options?: CurrencyCodeOptions): CurrencyCodeRecord[];

  export const publishDate: string;
}
