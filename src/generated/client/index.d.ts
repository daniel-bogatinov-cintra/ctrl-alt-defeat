
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Retro
 * 
 */
export type Retro = $Result.DefaultSelection<Prisma.$RetroPayload>
/**
 * Model Lane
 * 
 */
export type Lane = $Result.DefaultSelection<Prisma.$LanePayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model MemeTemplate
 * 
 */
export type MemeTemplate = $Result.DefaultSelection<Prisma.$MemeTemplatePayload>
/**
 * Model MemeEntry
 * 
 */
export type MemeEntry = $Result.DefaultSelection<Prisma.$MemeEntryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Retros
 * const retros = await prisma.retro.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Retros
   * const retros = await prisma.retro.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.retro`: Exposes CRUD operations for the **Retro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Retros
    * const retros = await prisma.retro.findMany()
    * ```
    */
  get retro(): Prisma.RetroDelegate<ExtArgs>;

  /**
   * `prisma.lane`: Exposes CRUD operations for the **Lane** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lanes
    * const lanes = await prisma.lane.findMany()
    * ```
    */
  get lane(): Prisma.LaneDelegate<ExtArgs>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs>;

  /**
   * `prisma.memeTemplate`: Exposes CRUD operations for the **MemeTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemeTemplates
    * const memeTemplates = await prisma.memeTemplate.findMany()
    * ```
    */
  get memeTemplate(): Prisma.MemeTemplateDelegate<ExtArgs>;

  /**
   * `prisma.memeEntry`: Exposes CRUD operations for the **MemeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemeEntries
    * const memeEntries = await prisma.memeEntry.findMany()
    * ```
    */
  get memeEntry(): Prisma.MemeEntryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Retro: 'Retro',
    Lane: 'Lane',
    Participant: 'Participant',
    MemeTemplate: 'MemeTemplate',
    MemeEntry: 'MemeEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'retro' | 'lane' | 'participant' | 'memeTemplate' | 'memeEntry'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Retro: {
        payload: Prisma.$RetroPayload<ExtArgs>
        fields: Prisma.RetroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RetroFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RetroFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>
          }
          findFirst: {
            args: Prisma.RetroFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RetroFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>
          }
          findMany: {
            args: Prisma.RetroFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>[]
          }
          create: {
            args: Prisma.RetroCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>
          }
          createMany: {
            args: Prisma.RetroCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RetroCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>[]
          }
          delete: {
            args: Prisma.RetroDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>
          }
          update: {
            args: Prisma.RetroUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>
          }
          deleteMany: {
            args: Prisma.RetroDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RetroUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RetroUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RetroPayload>
          }
          aggregate: {
            args: Prisma.RetroAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRetro>
          }
          groupBy: {
            args: Prisma.RetroGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RetroGroupByOutputType>[]
          }
          count: {
            args: Prisma.RetroCountArgs<ExtArgs>,
            result: $Utils.Optional<RetroCountAggregateOutputType> | number
          }
        }
      }
      Lane: {
        payload: Prisma.$LanePayload<ExtArgs>
        fields: Prisma.LaneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>
          }
          findFirst: {
            args: Prisma.LaneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>
          }
          findMany: {
            args: Prisma.LaneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>[]
          }
          create: {
            args: Prisma.LaneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>
          }
          createMany: {
            args: Prisma.LaneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaneCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>[]
          }
          delete: {
            args: Prisma.LaneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>
          }
          update: {
            args: Prisma.LaneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>
          }
          deleteMany: {
            args: Prisma.LaneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LaneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LaneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LanePayload>
          }
          aggregate: {
            args: Prisma.LaneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLane>
          }
          groupBy: {
            args: Prisma.LaneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LaneGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaneCountArgs<ExtArgs>,
            result: $Utils.Optional<LaneCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>,
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      MemeTemplate: {
        payload: Prisma.$MemeTemplatePayload<ExtArgs>
        fields: Prisma.MemeTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemeTemplateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemeTemplateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>
          }
          findFirst: {
            args: Prisma.MemeTemplateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemeTemplateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>
          }
          findMany: {
            args: Prisma.MemeTemplateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>[]
          }
          create: {
            args: Prisma.MemeTemplateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>
          }
          createMany: {
            args: Prisma.MemeTemplateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemeTemplateCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>[]
          }
          delete: {
            args: Prisma.MemeTemplateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>
          }
          update: {
            args: Prisma.MemeTemplateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>
          }
          deleteMany: {
            args: Prisma.MemeTemplateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemeTemplateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemeTemplateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeTemplatePayload>
          }
          aggregate: {
            args: Prisma.MemeTemplateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMemeTemplate>
          }
          groupBy: {
            args: Prisma.MemeTemplateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemeTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemeTemplateCountArgs<ExtArgs>,
            result: $Utils.Optional<MemeTemplateCountAggregateOutputType> | number
          }
        }
      }
      MemeEntry: {
        payload: Prisma.$MemeEntryPayload<ExtArgs>
        fields: Prisma.MemeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemeEntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemeEntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>
          }
          findFirst: {
            args: Prisma.MemeEntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemeEntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>
          }
          findMany: {
            args: Prisma.MemeEntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>[]
          }
          create: {
            args: Prisma.MemeEntryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>
          }
          createMany: {
            args: Prisma.MemeEntryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemeEntryCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>[]
          }
          delete: {
            args: Prisma.MemeEntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>
          }
          update: {
            args: Prisma.MemeEntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>
          }
          deleteMany: {
            args: Prisma.MemeEntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemeEntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemeEntryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemeEntryPayload>
          }
          aggregate: {
            args: Prisma.MemeEntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMemeEntry>
          }
          groupBy: {
            args: Prisma.MemeEntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemeEntryCountArgs<ExtArgs>,
            result: $Utils.Optional<MemeEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RetroCountOutputType
   */

  export type RetroCountOutputType = {
    participants: number
    memes: number
    lanes: number
  }

  export type RetroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | RetroCountOutputTypeCountParticipantsArgs
    memes?: boolean | RetroCountOutputTypeCountMemesArgs
    lanes?: boolean | RetroCountOutputTypeCountLanesArgs
  }

  // Custom InputTypes
  /**
   * RetroCountOutputType without action
   */
  export type RetroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetroCountOutputType
     */
    select?: RetroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RetroCountOutputType without action
   */
  export type RetroCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }

  /**
   * RetroCountOutputType without action
   */
  export type RetroCountOutputTypeCountMemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeEntryWhereInput
  }

  /**
   * RetroCountOutputType without action
   */
  export type RetroCountOutputTypeCountLanesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaneWhereInput
  }


  /**
   * Count Type LaneCountOutputType
   */

  export type LaneCountOutputType = {
    memes: number
  }

  export type LaneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memes?: boolean | LaneCountOutputTypeCountMemesArgs
  }

  // Custom InputTypes
  /**
   * LaneCountOutputType without action
   */
  export type LaneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaneCountOutputType
     */
    select?: LaneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LaneCountOutputType without action
   */
  export type LaneCountOutputTypeCountMemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeEntryWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    memes: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memes?: boolean | ParticipantCountOutputTypeCountMemesArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountMemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Retro
   */

  export type AggregateRetro = {
    _count: RetroCountAggregateOutputType | null
    _min: RetroMinAggregateOutputType | null
    _max: RetroMaxAggregateOutputType | null
  }

  export type RetroMinAggregateOutputType = {
    id: string | null
    shareId: string | null
    title: string | null
    teamName: string | null
    createdAt: Date | null
    status: string | null
  }

  export type RetroMaxAggregateOutputType = {
    id: string | null
    shareId: string | null
    title: string | null
    teamName: string | null
    createdAt: Date | null
    status: string | null
  }

  export type RetroCountAggregateOutputType = {
    id: number
    shareId: number
    title: number
    teamName: number
    createdAt: number
    status: number
    _all: number
  }


  export type RetroMinAggregateInputType = {
    id?: true
    shareId?: true
    title?: true
    teamName?: true
    createdAt?: true
    status?: true
  }

  export type RetroMaxAggregateInputType = {
    id?: true
    shareId?: true
    title?: true
    teamName?: true
    createdAt?: true
    status?: true
  }

  export type RetroCountAggregateInputType = {
    id?: true
    shareId?: true
    title?: true
    teamName?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type RetroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Retro to aggregate.
     */
    where?: RetroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retros to fetch.
     */
    orderBy?: RetroOrderByWithRelationInput | RetroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RetroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Retros
    **/
    _count?: true | RetroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RetroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RetroMaxAggregateInputType
  }

  export type GetRetroAggregateType<T extends RetroAggregateArgs> = {
        [P in keyof T & keyof AggregateRetro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRetro[P]>
      : GetScalarType<T[P], AggregateRetro[P]>
  }




  export type RetroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetroWhereInput
    orderBy?: RetroOrderByWithAggregationInput | RetroOrderByWithAggregationInput[]
    by: RetroScalarFieldEnum[] | RetroScalarFieldEnum
    having?: RetroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RetroCountAggregateInputType | true
    _min?: RetroMinAggregateInputType
    _max?: RetroMaxAggregateInputType
  }

  export type RetroGroupByOutputType = {
    id: string
    shareId: string
    title: string
    teamName: string | null
    createdAt: Date
    status: string
    _count: RetroCountAggregateOutputType | null
    _min: RetroMinAggregateOutputType | null
    _max: RetroMaxAggregateOutputType | null
  }

  type GetRetroGroupByPayload<T extends RetroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RetroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RetroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RetroGroupByOutputType[P]>
            : GetScalarType<T[P], RetroGroupByOutputType[P]>
        }
      >
    >


  export type RetroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareId?: boolean
    title?: boolean
    teamName?: boolean
    createdAt?: boolean
    status?: boolean
    participants?: boolean | Retro$participantsArgs<ExtArgs>
    memes?: boolean | Retro$memesArgs<ExtArgs>
    lanes?: boolean | Retro$lanesArgs<ExtArgs>
    _count?: boolean | RetroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["retro"]>

  export type RetroSelectScalar = {
    id?: boolean
    shareId?: boolean
    title?: boolean
    teamName?: boolean
    createdAt?: boolean
    status?: boolean
  }


  export type RetroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Retro$participantsArgs<ExtArgs>
    memes?: boolean | Retro$memesArgs<ExtArgs>
    lanes?: boolean | Retro$lanesArgs<ExtArgs>
    _count?: boolean | RetroCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RetroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Retro"
    objects: {
      participants: Prisma.$ParticipantPayload<ExtArgs>[]
      memes: Prisma.$MemeEntryPayload<ExtArgs>[]
      lanes: Prisma.$LanePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shareId: string
      title: string
      teamName: string | null
      createdAt: Date
      status: string
    }, ExtArgs["result"]["retro"]>
    composites: {}
  }


  type RetroGetPayload<S extends boolean | null | undefined | RetroDefaultArgs> = $Result.GetResult<Prisma.$RetroPayload, S>

  type RetroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RetroFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RetroCountAggregateInputType | true
    }

  export interface RetroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Retro'], meta: { name: 'Retro' } }
    /**
     * Find zero or one Retro that matches the filter.
     * @param {RetroFindUniqueArgs} args - Arguments to find a Retro
     * @example
     * // Get one Retro
     * const retro = await prisma.retro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RetroFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RetroFindUniqueArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Retro that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RetroFindUniqueOrThrowArgs} args - Arguments to find a Retro
     * @example
     * // Get one Retro
     * const retro = await prisma.retro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RetroFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RetroFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Retro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetroFindFirstArgs} args - Arguments to find a Retro
     * @example
     * // Get one Retro
     * const retro = await prisma.retro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RetroFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RetroFindFirstArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Retro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetroFindFirstOrThrowArgs} args - Arguments to find a Retro
     * @example
     * // Get one Retro
     * const retro = await prisma.retro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RetroFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RetroFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Retros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Retros
     * const retros = await prisma.retro.findMany()
     * 
     * // Get first 10 Retros
     * const retros = await prisma.retro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const retroWithIdOnly = await prisma.retro.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RetroFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RetroFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Retro.
     * @param {RetroCreateArgs} args - Arguments to create a Retro.
     * @example
     * // Create one Retro
     * const Retro = await prisma.retro.create({
     *   data: {
     *     // ... data to create a Retro
     *   }
     * })
     * 
    **/
    create<T extends RetroCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RetroCreateArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Retros.
     * @param {RetroCreateManyArgs} args - Arguments to create many Retros.
     * @example
     * // Create many Retros
     * const retro = await prisma.retro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RetroCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RetroCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Retros and returns the data saved in the database.
     * @param {RetroCreateManyAndReturnArgs} args - Arguments to create many Retros.
     * @example
     * // Create many Retros
     * const retro = await prisma.retro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Retros and only return the `id`
     * const retroWithIdOnly = await prisma.retro.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends RetroCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, RetroCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Retro.
     * @param {RetroDeleteArgs} args - Arguments to delete one Retro.
     * @example
     * // Delete one Retro
     * const Retro = await prisma.retro.delete({
     *   where: {
     *     // ... filter to delete one Retro
     *   }
     * })
     * 
    **/
    delete<T extends RetroDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RetroDeleteArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Retro.
     * @param {RetroUpdateArgs} args - Arguments to update one Retro.
     * @example
     * // Update one Retro
     * const retro = await prisma.retro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RetroUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RetroUpdateArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Retros.
     * @param {RetroDeleteManyArgs} args - Arguments to filter Retros to delete.
     * @example
     * // Delete a few Retros
     * const { count } = await prisma.retro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RetroDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RetroDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Retros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Retros
     * const retro = await prisma.retro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RetroUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RetroUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Retro.
     * @param {RetroUpsertArgs} args - Arguments to update or create a Retro.
     * @example
     * // Update or create a Retro
     * const retro = await prisma.retro.upsert({
     *   create: {
     *     // ... data to create a Retro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Retro we want to update
     *   }
     * })
    **/
    upsert<T extends RetroUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RetroUpsertArgs<ExtArgs>>
    ): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Retros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetroCountArgs} args - Arguments to filter Retros to count.
     * @example
     * // Count the number of Retros
     * const count = await prisma.retro.count({
     *   where: {
     *     // ... the filter for the Retros we want to count
     *   }
     * })
    **/
    count<T extends RetroCountArgs>(
      args?: Subset<T, RetroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RetroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Retro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RetroAggregateArgs>(args: Subset<T, RetroAggregateArgs>): Prisma.PrismaPromise<GetRetroAggregateType<T>>

    /**
     * Group by Retro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RetroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RetroGroupByArgs['orderBy'] }
        : { orderBy?: RetroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RetroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRetroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Retro model
   */
  readonly fields: RetroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Retro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RetroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    participants<T extends Retro$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Retro$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'findMany'> | Null>;

    memes<T extends Retro$memesArgs<ExtArgs> = {}>(args?: Subset<T, Retro$memesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    lanes<T extends Retro$lanesArgs<ExtArgs> = {}>(args?: Subset<T, Retro$lanesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Retro model
   */ 
  interface RetroFieldRefs {
    readonly id: FieldRef<"Retro", 'String'>
    readonly shareId: FieldRef<"Retro", 'String'>
    readonly title: FieldRef<"Retro", 'String'>
    readonly teamName: FieldRef<"Retro", 'String'>
    readonly createdAt: FieldRef<"Retro", 'DateTime'>
    readonly status: FieldRef<"Retro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Retro findUnique
   */
  export type RetroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * Filter, which Retro to fetch.
     */
    where: RetroWhereUniqueInput
  }

  /**
   * Retro findUniqueOrThrow
   */
  export type RetroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * Filter, which Retro to fetch.
     */
    where: RetroWhereUniqueInput
  }

  /**
   * Retro findFirst
   */
  export type RetroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * Filter, which Retro to fetch.
     */
    where?: RetroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retros to fetch.
     */
    orderBy?: RetroOrderByWithRelationInput | RetroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Retros.
     */
    cursor?: RetroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Retros.
     */
    distinct?: RetroScalarFieldEnum | RetroScalarFieldEnum[]
  }

  /**
   * Retro findFirstOrThrow
   */
  export type RetroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * Filter, which Retro to fetch.
     */
    where?: RetroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retros to fetch.
     */
    orderBy?: RetroOrderByWithRelationInput | RetroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Retros.
     */
    cursor?: RetroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Retros.
     */
    distinct?: RetroScalarFieldEnum | RetroScalarFieldEnum[]
  }

  /**
   * Retro findMany
   */
  export type RetroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * Filter, which Retros to fetch.
     */
    where?: RetroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retros to fetch.
     */
    orderBy?: RetroOrderByWithRelationInput | RetroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Retros.
     */
    cursor?: RetroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retros.
     */
    skip?: number
    distinct?: RetroScalarFieldEnum | RetroScalarFieldEnum[]
  }

  /**
   * Retro create
   */
  export type RetroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * The data needed to create a Retro.
     */
    data: XOR<RetroCreateInput, RetroUncheckedCreateInput>
  }

  /**
   * Retro createMany
   */
  export type RetroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Retros.
     */
    data: RetroCreateManyInput | RetroCreateManyInput[]
  }

  /**
   * Retro createManyAndReturn
   */
  export type RetroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * The data used to create many Retros.
     */
    data: RetroCreateManyInput | RetroCreateManyInput[]
  }

  /**
   * Retro update
   */
  export type RetroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * The data needed to update a Retro.
     */
    data: XOR<RetroUpdateInput, RetroUncheckedUpdateInput>
    /**
     * Choose, which Retro to update.
     */
    where: RetroWhereUniqueInput
  }

  /**
   * Retro updateMany
   */
  export type RetroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Retros.
     */
    data: XOR<RetroUpdateManyMutationInput, RetroUncheckedUpdateManyInput>
    /**
     * Filter which Retros to update
     */
    where?: RetroWhereInput
  }

  /**
   * Retro upsert
   */
  export type RetroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * The filter to search for the Retro to update in case it exists.
     */
    where: RetroWhereUniqueInput
    /**
     * In case the Retro found by the `where` argument doesn't exist, create a new Retro with this data.
     */
    create: XOR<RetroCreateInput, RetroUncheckedCreateInput>
    /**
     * In case the Retro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RetroUpdateInput, RetroUncheckedUpdateInput>
  }

  /**
   * Retro delete
   */
  export type RetroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
    /**
     * Filter which Retro to delete.
     */
    where: RetroWhereUniqueInput
  }

  /**
   * Retro deleteMany
   */
  export type RetroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Retros to delete
     */
    where?: RetroWhereInput
  }

  /**
   * Retro.participants
   */
  export type Retro$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Retro.memes
   */
  export type Retro$memesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    where?: MemeEntryWhereInput
    orderBy?: MemeEntryOrderByWithRelationInput | MemeEntryOrderByWithRelationInput[]
    cursor?: MemeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemeEntryScalarFieldEnum | MemeEntryScalarFieldEnum[]
  }

  /**
   * Retro.lanes
   */
  export type Retro$lanesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    where?: LaneWhereInput
    orderBy?: LaneOrderByWithRelationInput | LaneOrderByWithRelationInput[]
    cursor?: LaneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaneScalarFieldEnum | LaneScalarFieldEnum[]
  }

  /**
   * Retro without action
   */
  export type RetroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retro
     */
    select?: RetroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetroInclude<ExtArgs> | null
  }


  /**
   * Model Lane
   */

  export type AggregateLane = {
    _count: LaneCountAggregateOutputType | null
    _avg: LaneAvgAggregateOutputType | null
    _sum: LaneSumAggregateOutputType | null
    _min: LaneMinAggregateOutputType | null
    _max: LaneMaxAggregateOutputType | null
  }

  export type LaneAvgAggregateOutputType = {
    order: number | null
  }

  export type LaneSumAggregateOutputType = {
    order: number | null
  }

  export type LaneMinAggregateOutputType = {
    id: string | null
    retroId: string | null
    title: string | null
    order: number | null
  }

  export type LaneMaxAggregateOutputType = {
    id: string | null
    retroId: string | null
    title: string | null
    order: number | null
  }

  export type LaneCountAggregateOutputType = {
    id: number
    retroId: number
    title: number
    order: number
    _all: number
  }


  export type LaneAvgAggregateInputType = {
    order?: true
  }

  export type LaneSumAggregateInputType = {
    order?: true
  }

  export type LaneMinAggregateInputType = {
    id?: true
    retroId?: true
    title?: true
    order?: true
  }

  export type LaneMaxAggregateInputType = {
    id?: true
    retroId?: true
    title?: true
    order?: true
  }

  export type LaneCountAggregateInputType = {
    id?: true
    retroId?: true
    title?: true
    order?: true
    _all?: true
  }

  export type LaneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lane to aggregate.
     */
    where?: LaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanes to fetch.
     */
    orderBy?: LaneOrderByWithRelationInput | LaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lanes
    **/
    _count?: true | LaneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaneMaxAggregateInputType
  }

  export type GetLaneAggregateType<T extends LaneAggregateArgs> = {
        [P in keyof T & keyof AggregateLane]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLane[P]>
      : GetScalarType<T[P], AggregateLane[P]>
  }




  export type LaneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaneWhereInput
    orderBy?: LaneOrderByWithAggregationInput | LaneOrderByWithAggregationInput[]
    by: LaneScalarFieldEnum[] | LaneScalarFieldEnum
    having?: LaneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaneCountAggregateInputType | true
    _avg?: LaneAvgAggregateInputType
    _sum?: LaneSumAggregateInputType
    _min?: LaneMinAggregateInputType
    _max?: LaneMaxAggregateInputType
  }

  export type LaneGroupByOutputType = {
    id: string
    retroId: string
    title: string
    order: number
    _count: LaneCountAggregateOutputType | null
    _avg: LaneAvgAggregateOutputType | null
    _sum: LaneSumAggregateOutputType | null
    _min: LaneMinAggregateOutputType | null
    _max: LaneMaxAggregateOutputType | null
  }

  type GetLaneGroupByPayload<T extends LaneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaneGroupByOutputType[P]>
            : GetScalarType<T[P], LaneGroupByOutputType[P]>
        }
      >
    >


  export type LaneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    retroId?: boolean
    title?: boolean
    order?: boolean
    retro?: boolean | RetroDefaultArgs<ExtArgs>
    memes?: boolean | Lane$memesArgs<ExtArgs>
    _count?: boolean | LaneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lane"]>

  export type LaneSelectScalar = {
    id?: boolean
    retroId?: boolean
    title?: boolean
    order?: boolean
  }


  export type LaneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    retro?: boolean | RetroDefaultArgs<ExtArgs>
    memes?: boolean | Lane$memesArgs<ExtArgs>
    _count?: boolean | LaneCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LanePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lane"
    objects: {
      retro: Prisma.$RetroPayload<ExtArgs>
      memes: Prisma.$MemeEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      retroId: string
      title: string
      order: number
    }, ExtArgs["result"]["lane"]>
    composites: {}
  }


  type LaneGetPayload<S extends boolean | null | undefined | LaneDefaultArgs> = $Result.GetResult<Prisma.$LanePayload, S>

  type LaneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LaneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LaneCountAggregateInputType | true
    }

  export interface LaneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lane'], meta: { name: 'Lane' } }
    /**
     * Find zero or one Lane that matches the filter.
     * @param {LaneFindUniqueArgs} args - Arguments to find a Lane
     * @example
     * // Get one Lane
     * const lane = await prisma.lane.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LaneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LaneFindUniqueArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lane that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LaneFindUniqueOrThrowArgs} args - Arguments to find a Lane
     * @example
     * // Get one Lane
     * const lane = await prisma.lane.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LaneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LaneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lane that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaneFindFirstArgs} args - Arguments to find a Lane
     * @example
     * // Get one Lane
     * const lane = await prisma.lane.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LaneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LaneFindFirstArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lane that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaneFindFirstOrThrowArgs} args - Arguments to find a Lane
     * @example
     * // Get one Lane
     * const lane = await prisma.lane.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LaneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LaneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lanes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lanes
     * const lanes = await prisma.lane.findMany()
     * 
     * // Get first 10 Lanes
     * const lanes = await prisma.lane.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laneWithIdOnly = await prisma.lane.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LaneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LaneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lane.
     * @param {LaneCreateArgs} args - Arguments to create a Lane.
     * @example
     * // Create one Lane
     * const Lane = await prisma.lane.create({
     *   data: {
     *     // ... data to create a Lane
     *   }
     * })
     * 
    **/
    create<T extends LaneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LaneCreateArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lanes.
     * @param {LaneCreateManyArgs} args - Arguments to create many Lanes.
     * @example
     * // Create many Lanes
     * const lane = await prisma.lane.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LaneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LaneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lanes and returns the data saved in the database.
     * @param {LaneCreateManyAndReturnArgs} args - Arguments to create many Lanes.
     * @example
     * // Create many Lanes
     * const lane = await prisma.lane.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lanes and only return the `id`
     * const laneWithIdOnly = await prisma.lane.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LaneCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LaneCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Lane.
     * @param {LaneDeleteArgs} args - Arguments to delete one Lane.
     * @example
     * // Delete one Lane
     * const Lane = await prisma.lane.delete({
     *   where: {
     *     // ... filter to delete one Lane
     *   }
     * })
     * 
    **/
    delete<T extends LaneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LaneDeleteArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lane.
     * @param {LaneUpdateArgs} args - Arguments to update one Lane.
     * @example
     * // Update one Lane
     * const lane = await prisma.lane.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LaneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LaneUpdateArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lanes.
     * @param {LaneDeleteManyArgs} args - Arguments to filter Lanes to delete.
     * @example
     * // Delete a few Lanes
     * const { count } = await prisma.lane.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LaneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LaneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lanes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lanes
     * const lane = await prisma.lane.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LaneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LaneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lane.
     * @param {LaneUpsertArgs} args - Arguments to update or create a Lane.
     * @example
     * // Update or create a Lane
     * const lane = await prisma.lane.upsert({
     *   create: {
     *     // ... data to create a Lane
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lane we want to update
     *   }
     * })
    **/
    upsert<T extends LaneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LaneUpsertArgs<ExtArgs>>
    ): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lanes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaneCountArgs} args - Arguments to filter Lanes to count.
     * @example
     * // Count the number of Lanes
     * const count = await prisma.lane.count({
     *   where: {
     *     // ... the filter for the Lanes we want to count
     *   }
     * })
    **/
    count<T extends LaneCountArgs>(
      args?: Subset<T, LaneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lane.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaneAggregateArgs>(args: Subset<T, LaneAggregateArgs>): Prisma.PrismaPromise<GetLaneAggregateType<T>>

    /**
     * Group by Lane.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaneGroupByArgs['orderBy'] }
        : { orderBy?: LaneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lane model
   */
  readonly fields: LaneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lane.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    retro<T extends RetroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RetroDefaultArgs<ExtArgs>>): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    memes<T extends Lane$memesArgs<ExtArgs> = {}>(args?: Subset<T, Lane$memesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Lane model
   */ 
  interface LaneFieldRefs {
    readonly id: FieldRef<"Lane", 'String'>
    readonly retroId: FieldRef<"Lane", 'String'>
    readonly title: FieldRef<"Lane", 'String'>
    readonly order: FieldRef<"Lane", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lane findUnique
   */
  export type LaneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * Filter, which Lane to fetch.
     */
    where: LaneWhereUniqueInput
  }

  /**
   * Lane findUniqueOrThrow
   */
  export type LaneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * Filter, which Lane to fetch.
     */
    where: LaneWhereUniqueInput
  }

  /**
   * Lane findFirst
   */
  export type LaneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * Filter, which Lane to fetch.
     */
    where?: LaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanes to fetch.
     */
    orderBy?: LaneOrderByWithRelationInput | LaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lanes.
     */
    cursor?: LaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lanes.
     */
    distinct?: LaneScalarFieldEnum | LaneScalarFieldEnum[]
  }

  /**
   * Lane findFirstOrThrow
   */
  export type LaneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * Filter, which Lane to fetch.
     */
    where?: LaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanes to fetch.
     */
    orderBy?: LaneOrderByWithRelationInput | LaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lanes.
     */
    cursor?: LaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lanes.
     */
    distinct?: LaneScalarFieldEnum | LaneScalarFieldEnum[]
  }

  /**
   * Lane findMany
   */
  export type LaneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * Filter, which Lanes to fetch.
     */
    where?: LaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanes to fetch.
     */
    orderBy?: LaneOrderByWithRelationInput | LaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lanes.
     */
    cursor?: LaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanes.
     */
    skip?: number
    distinct?: LaneScalarFieldEnum | LaneScalarFieldEnum[]
  }

  /**
   * Lane create
   */
  export type LaneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * The data needed to create a Lane.
     */
    data: XOR<LaneCreateInput, LaneUncheckedCreateInput>
  }

  /**
   * Lane createMany
   */
  export type LaneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lanes.
     */
    data: LaneCreateManyInput | LaneCreateManyInput[]
  }

  /**
   * Lane createManyAndReturn
   */
  export type LaneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * The data used to create many Lanes.
     */
    data: LaneCreateManyInput | LaneCreateManyInput[]
  }

  /**
   * Lane update
   */
  export type LaneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * The data needed to update a Lane.
     */
    data: XOR<LaneUpdateInput, LaneUncheckedUpdateInput>
    /**
     * Choose, which Lane to update.
     */
    where: LaneWhereUniqueInput
  }

  /**
   * Lane updateMany
   */
  export type LaneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lanes.
     */
    data: XOR<LaneUpdateManyMutationInput, LaneUncheckedUpdateManyInput>
    /**
     * Filter which Lanes to update
     */
    where?: LaneWhereInput
  }

  /**
   * Lane upsert
   */
  export type LaneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * The filter to search for the Lane to update in case it exists.
     */
    where: LaneWhereUniqueInput
    /**
     * In case the Lane found by the `where` argument doesn't exist, create a new Lane with this data.
     */
    create: XOR<LaneCreateInput, LaneUncheckedCreateInput>
    /**
     * In case the Lane was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaneUpdateInput, LaneUncheckedUpdateInput>
  }

  /**
   * Lane delete
   */
  export type LaneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    /**
     * Filter which Lane to delete.
     */
    where: LaneWhereUniqueInput
  }

  /**
   * Lane deleteMany
   */
  export type LaneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lanes to delete
     */
    where?: LaneWhereInput
  }

  /**
   * Lane.memes
   */
  export type Lane$memesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    where?: MemeEntryWhereInput
    orderBy?: MemeEntryOrderByWithRelationInput | MemeEntryOrderByWithRelationInput[]
    cursor?: MemeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemeEntryScalarFieldEnum | MemeEntryScalarFieldEnum[]
  }

  /**
   * Lane without action
   */
  export type LaneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    retroId: string | null
    displayName: string | null
    avatarColor: string | null
    createdAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    retroId: string | null
    displayName: string | null
    avatarColor: string | null
    createdAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    retroId: number
    displayName: number
    avatarColor: number
    createdAt: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    retroId?: true
    displayName?: true
    avatarColor?: true
    createdAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    retroId?: true
    displayName?: true
    avatarColor?: true
    createdAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    retroId?: true
    displayName?: true
    avatarColor?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    retroId: string
    displayName: string
    avatarColor: string | null
    createdAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    retroId?: boolean
    displayName?: boolean
    avatarColor?: boolean
    createdAt?: boolean
    retro?: boolean | RetroDefaultArgs<ExtArgs>
    memes?: boolean | Participant$memesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    retroId?: boolean
    displayName?: boolean
    avatarColor?: boolean
    createdAt?: boolean
  }


  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    retro?: boolean | RetroDefaultArgs<ExtArgs>
    memes?: boolean | Participant$memesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      retro: Prisma.$RetroPayload<ExtArgs>
      memes: Prisma.$MemeEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      retroId: string
      displayName: string
      avatarColor: string | null
      createdAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }


  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParticipantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParticipantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParticipantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
    **/
    create<T extends ParticipantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ParticipantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
    **/
    delete<T extends ParticipantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParticipantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParticipantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParticipantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
    **/
    upsert<T extends ParticipantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>
    ): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    retro<T extends RetroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RetroDefaultArgs<ExtArgs>>): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    memes<T extends Participant$memesArgs<ExtArgs> = {}>(args?: Subset<T, Participant$memesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Participant model
   */ 
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly retroId: FieldRef<"Participant", 'String'>
    readonly displayName: FieldRef<"Participant", 'String'>
    readonly avatarColor: FieldRef<"Participant", 'String'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
  }

  /**
   * Participant.memes
   */
  export type Participant$memesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    where?: MemeEntryWhereInput
    orderBy?: MemeEntryOrderByWithRelationInput | MemeEntryOrderByWithRelationInput[]
    cursor?: MemeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemeEntryScalarFieldEnum | MemeEntryScalarFieldEnum[]
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model MemeTemplate
   */

  export type AggregateMemeTemplate = {
    _count: MemeTemplateCountAggregateOutputType | null
    _avg: MemeTemplateAvgAggregateOutputType | null
    _sum: MemeTemplateSumAggregateOutputType | null
    _min: MemeTemplateMinAggregateOutputType | null
    _max: MemeTemplateMaxAggregateOutputType | null
  }

  export type MemeTemplateAvgAggregateOutputType = {
    lines: number | null
  }

  export type MemeTemplateSumAggregateOutputType = {
    lines: number | null
  }

  export type MemeTemplateMinAggregateOutputType = {
    id: string | null
    memegenId: string | null
    displayName: string | null
    previewUrl: string | null
    lines: number | null
    createdAt: Date | null
  }

  export type MemeTemplateMaxAggregateOutputType = {
    id: string | null
    memegenId: string | null
    displayName: string | null
    previewUrl: string | null
    lines: number | null
    createdAt: Date | null
  }

  export type MemeTemplateCountAggregateOutputType = {
    id: number
    memegenId: number
    displayName: number
    previewUrl: number
    lines: number
    createdAt: number
    _all: number
  }


  export type MemeTemplateAvgAggregateInputType = {
    lines?: true
  }

  export type MemeTemplateSumAggregateInputType = {
    lines?: true
  }

  export type MemeTemplateMinAggregateInputType = {
    id?: true
    memegenId?: true
    displayName?: true
    previewUrl?: true
    lines?: true
    createdAt?: true
  }

  export type MemeTemplateMaxAggregateInputType = {
    id?: true
    memegenId?: true
    displayName?: true
    previewUrl?: true
    lines?: true
    createdAt?: true
  }

  export type MemeTemplateCountAggregateInputType = {
    id?: true
    memegenId?: true
    displayName?: true
    previewUrl?: true
    lines?: true
    createdAt?: true
    _all?: true
  }

  export type MemeTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemeTemplate to aggregate.
     */
    where?: MemeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeTemplates to fetch.
     */
    orderBy?: MemeTemplateOrderByWithRelationInput | MemeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemeTemplates
    **/
    _count?: true | MemeTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemeTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemeTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemeTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemeTemplateMaxAggregateInputType
  }

  export type GetMemeTemplateAggregateType<T extends MemeTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateMemeTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemeTemplate[P]>
      : GetScalarType<T[P], AggregateMemeTemplate[P]>
  }




  export type MemeTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeTemplateWhereInput
    orderBy?: MemeTemplateOrderByWithAggregationInput | MemeTemplateOrderByWithAggregationInput[]
    by: MemeTemplateScalarFieldEnum[] | MemeTemplateScalarFieldEnum
    having?: MemeTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemeTemplateCountAggregateInputType | true
    _avg?: MemeTemplateAvgAggregateInputType
    _sum?: MemeTemplateSumAggregateInputType
    _min?: MemeTemplateMinAggregateInputType
    _max?: MemeTemplateMaxAggregateInputType
  }

  export type MemeTemplateGroupByOutputType = {
    id: string
    memegenId: string
    displayName: string
    previewUrl: string
    lines: number
    createdAt: Date
    _count: MemeTemplateCountAggregateOutputType | null
    _avg: MemeTemplateAvgAggregateOutputType | null
    _sum: MemeTemplateSumAggregateOutputType | null
    _min: MemeTemplateMinAggregateOutputType | null
    _max: MemeTemplateMaxAggregateOutputType | null
  }

  type GetMemeTemplateGroupByPayload<T extends MemeTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemeTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemeTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemeTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], MemeTemplateGroupByOutputType[P]>
        }
      >
    >


  export type MemeTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memegenId?: boolean
    displayName?: boolean
    previewUrl?: boolean
    lines?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["memeTemplate"]>

  export type MemeTemplateSelectScalar = {
    id?: boolean
    memegenId?: boolean
    displayName?: boolean
    previewUrl?: boolean
    lines?: boolean
    createdAt?: boolean
  }



  export type $MemeTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemeTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memegenId: string
      displayName: string
      previewUrl: string
      lines: number
      createdAt: Date
    }, ExtArgs["result"]["memeTemplate"]>
    composites: {}
  }


  type MemeTemplateGetPayload<S extends boolean | null | undefined | MemeTemplateDefaultArgs> = $Result.GetResult<Prisma.$MemeTemplatePayload, S>

  type MemeTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemeTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemeTemplateCountAggregateInputType | true
    }

  export interface MemeTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemeTemplate'], meta: { name: 'MemeTemplate' } }
    /**
     * Find zero or one MemeTemplate that matches the filter.
     * @param {MemeTemplateFindUniqueArgs} args - Arguments to find a MemeTemplate
     * @example
     * // Get one MemeTemplate
     * const memeTemplate = await prisma.memeTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemeTemplateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MemeTemplateFindUniqueArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MemeTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemeTemplateFindUniqueOrThrowArgs} args - Arguments to find a MemeTemplate
     * @example
     * // Get one MemeTemplate
     * const memeTemplate = await prisma.memeTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemeTemplateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeTemplateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MemeTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeTemplateFindFirstArgs} args - Arguments to find a MemeTemplate
     * @example
     * // Get one MemeTemplate
     * const memeTemplate = await prisma.memeTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemeTemplateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeTemplateFindFirstArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MemeTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeTemplateFindFirstOrThrowArgs} args - Arguments to find a MemeTemplate
     * @example
     * // Get one MemeTemplate
     * const memeTemplate = await prisma.memeTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemeTemplateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeTemplateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MemeTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemeTemplates
     * const memeTemplates = await prisma.memeTemplate.findMany()
     * 
     * // Get first 10 MemeTemplates
     * const memeTemplates = await prisma.memeTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memeTemplateWithIdOnly = await prisma.memeTemplate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemeTemplateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeTemplateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MemeTemplate.
     * @param {MemeTemplateCreateArgs} args - Arguments to create a MemeTemplate.
     * @example
     * // Create one MemeTemplate
     * const MemeTemplate = await prisma.memeTemplate.create({
     *   data: {
     *     // ... data to create a MemeTemplate
     *   }
     * })
     * 
    **/
    create<T extends MemeTemplateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemeTemplateCreateArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MemeTemplates.
     * @param {MemeTemplateCreateManyArgs} args - Arguments to create many MemeTemplates.
     * @example
     * // Create many MemeTemplates
     * const memeTemplate = await prisma.memeTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MemeTemplateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeTemplateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemeTemplates and returns the data saved in the database.
     * @param {MemeTemplateCreateManyAndReturnArgs} args - Arguments to create many MemeTemplates.
     * @example
     * // Create many MemeTemplates
     * const memeTemplate = await prisma.memeTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemeTemplates and only return the `id`
     * const memeTemplateWithIdOnly = await prisma.memeTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MemeTemplateCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeTemplateCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a MemeTemplate.
     * @param {MemeTemplateDeleteArgs} args - Arguments to delete one MemeTemplate.
     * @example
     * // Delete one MemeTemplate
     * const MemeTemplate = await prisma.memeTemplate.delete({
     *   where: {
     *     // ... filter to delete one MemeTemplate
     *   }
     * })
     * 
    **/
    delete<T extends MemeTemplateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemeTemplateDeleteArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MemeTemplate.
     * @param {MemeTemplateUpdateArgs} args - Arguments to update one MemeTemplate.
     * @example
     * // Update one MemeTemplate
     * const memeTemplate = await prisma.memeTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemeTemplateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemeTemplateUpdateArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MemeTemplates.
     * @param {MemeTemplateDeleteManyArgs} args - Arguments to filter MemeTemplates to delete.
     * @example
     * // Delete a few MemeTemplates
     * const { count } = await prisma.memeTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemeTemplateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeTemplateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemeTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemeTemplates
     * const memeTemplate = await prisma.memeTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemeTemplateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemeTemplateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemeTemplate.
     * @param {MemeTemplateUpsertArgs} args - Arguments to update or create a MemeTemplate.
     * @example
     * // Update or create a MemeTemplate
     * const memeTemplate = await prisma.memeTemplate.upsert({
     *   create: {
     *     // ... data to create a MemeTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemeTemplate we want to update
     *   }
     * })
    **/
    upsert<T extends MemeTemplateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemeTemplateUpsertArgs<ExtArgs>>
    ): Prisma__MemeTemplateClient<$Result.GetResult<Prisma.$MemeTemplatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MemeTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeTemplateCountArgs} args - Arguments to filter MemeTemplates to count.
     * @example
     * // Count the number of MemeTemplates
     * const count = await prisma.memeTemplate.count({
     *   where: {
     *     // ... the filter for the MemeTemplates we want to count
     *   }
     * })
    **/
    count<T extends MemeTemplateCountArgs>(
      args?: Subset<T, MemeTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemeTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemeTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemeTemplateAggregateArgs>(args: Subset<T, MemeTemplateAggregateArgs>): Prisma.PrismaPromise<GetMemeTemplateAggregateType<T>>

    /**
     * Group by MemeTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemeTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemeTemplateGroupByArgs['orderBy'] }
        : { orderBy?: MemeTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemeTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemeTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemeTemplate model
   */
  readonly fields: MemeTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemeTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemeTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MemeTemplate model
   */ 
  interface MemeTemplateFieldRefs {
    readonly id: FieldRef<"MemeTemplate", 'String'>
    readonly memegenId: FieldRef<"MemeTemplate", 'String'>
    readonly displayName: FieldRef<"MemeTemplate", 'String'>
    readonly previewUrl: FieldRef<"MemeTemplate", 'String'>
    readonly lines: FieldRef<"MemeTemplate", 'Int'>
    readonly createdAt: FieldRef<"MemeTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemeTemplate findUnique
   */
  export type MemeTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which MemeTemplate to fetch.
     */
    where: MemeTemplateWhereUniqueInput
  }

  /**
   * MemeTemplate findUniqueOrThrow
   */
  export type MemeTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which MemeTemplate to fetch.
     */
    where: MemeTemplateWhereUniqueInput
  }

  /**
   * MemeTemplate findFirst
   */
  export type MemeTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which MemeTemplate to fetch.
     */
    where?: MemeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeTemplates to fetch.
     */
    orderBy?: MemeTemplateOrderByWithRelationInput | MemeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemeTemplates.
     */
    cursor?: MemeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemeTemplates.
     */
    distinct?: MemeTemplateScalarFieldEnum | MemeTemplateScalarFieldEnum[]
  }

  /**
   * MemeTemplate findFirstOrThrow
   */
  export type MemeTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which MemeTemplate to fetch.
     */
    where?: MemeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeTemplates to fetch.
     */
    orderBy?: MemeTemplateOrderByWithRelationInput | MemeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemeTemplates.
     */
    cursor?: MemeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemeTemplates.
     */
    distinct?: MemeTemplateScalarFieldEnum | MemeTemplateScalarFieldEnum[]
  }

  /**
   * MemeTemplate findMany
   */
  export type MemeTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which MemeTemplates to fetch.
     */
    where?: MemeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeTemplates to fetch.
     */
    orderBy?: MemeTemplateOrderByWithRelationInput | MemeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemeTemplates.
     */
    cursor?: MemeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeTemplates.
     */
    skip?: number
    distinct?: MemeTemplateScalarFieldEnum | MemeTemplateScalarFieldEnum[]
  }

  /**
   * MemeTemplate create
   */
  export type MemeTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * The data needed to create a MemeTemplate.
     */
    data: XOR<MemeTemplateCreateInput, MemeTemplateUncheckedCreateInput>
  }

  /**
   * MemeTemplate createMany
   */
  export type MemeTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemeTemplates.
     */
    data: MemeTemplateCreateManyInput | MemeTemplateCreateManyInput[]
  }

  /**
   * MemeTemplate createManyAndReturn
   */
  export type MemeTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * The data used to create many MemeTemplates.
     */
    data: MemeTemplateCreateManyInput | MemeTemplateCreateManyInput[]
  }

  /**
   * MemeTemplate update
   */
  export type MemeTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * The data needed to update a MemeTemplate.
     */
    data: XOR<MemeTemplateUpdateInput, MemeTemplateUncheckedUpdateInput>
    /**
     * Choose, which MemeTemplate to update.
     */
    where: MemeTemplateWhereUniqueInput
  }

  /**
   * MemeTemplate updateMany
   */
  export type MemeTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemeTemplates.
     */
    data: XOR<MemeTemplateUpdateManyMutationInput, MemeTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MemeTemplates to update
     */
    where?: MemeTemplateWhereInput
  }

  /**
   * MemeTemplate upsert
   */
  export type MemeTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * The filter to search for the MemeTemplate to update in case it exists.
     */
    where: MemeTemplateWhereUniqueInput
    /**
     * In case the MemeTemplate found by the `where` argument doesn't exist, create a new MemeTemplate with this data.
     */
    create: XOR<MemeTemplateCreateInput, MemeTemplateUncheckedCreateInput>
    /**
     * In case the MemeTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemeTemplateUpdateInput, MemeTemplateUncheckedUpdateInput>
  }

  /**
   * MemeTemplate delete
   */
  export type MemeTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
    /**
     * Filter which MemeTemplate to delete.
     */
    where: MemeTemplateWhereUniqueInput
  }

  /**
   * MemeTemplate deleteMany
   */
  export type MemeTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemeTemplates to delete
     */
    where?: MemeTemplateWhereInput
  }

  /**
   * MemeTemplate without action
   */
  export type MemeTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeTemplate
     */
    select?: MemeTemplateSelect<ExtArgs> | null
  }


  /**
   * Model MemeEntry
   */

  export type AggregateMemeEntry = {
    _count: MemeEntryCountAggregateOutputType | null
    _min: MemeEntryMinAggregateOutputType | null
    _max: MemeEntryMaxAggregateOutputType | null
  }

  export type MemeEntryMinAggregateOutputType = {
    id: string | null
    retroId: string | null
    participantId: string | null
    laneId: string | null
    templateId: string | null
    topText: string | null
    bottomText: string | null
    generatedImageUrl: string | null
    createdAt: Date | null
    reactions: string | null
  }

  export type MemeEntryMaxAggregateOutputType = {
    id: string | null
    retroId: string | null
    participantId: string | null
    laneId: string | null
    templateId: string | null
    topText: string | null
    bottomText: string | null
    generatedImageUrl: string | null
    createdAt: Date | null
    reactions: string | null
  }

  export type MemeEntryCountAggregateOutputType = {
    id: number
    retroId: number
    participantId: number
    laneId: number
    templateId: number
    topText: number
    bottomText: number
    generatedImageUrl: number
    createdAt: number
    reactions: number
    _all: number
  }


  export type MemeEntryMinAggregateInputType = {
    id?: true
    retroId?: true
    participantId?: true
    laneId?: true
    templateId?: true
    topText?: true
    bottomText?: true
    generatedImageUrl?: true
    createdAt?: true
    reactions?: true
  }

  export type MemeEntryMaxAggregateInputType = {
    id?: true
    retroId?: true
    participantId?: true
    laneId?: true
    templateId?: true
    topText?: true
    bottomText?: true
    generatedImageUrl?: true
    createdAt?: true
    reactions?: true
  }

  export type MemeEntryCountAggregateInputType = {
    id?: true
    retroId?: true
    participantId?: true
    laneId?: true
    templateId?: true
    topText?: true
    bottomText?: true
    generatedImageUrl?: true
    createdAt?: true
    reactions?: true
    _all?: true
  }

  export type MemeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemeEntry to aggregate.
     */
    where?: MemeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeEntries to fetch.
     */
    orderBy?: MemeEntryOrderByWithRelationInput | MemeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemeEntries
    **/
    _count?: true | MemeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemeEntryMaxAggregateInputType
  }

  export type GetMemeEntryAggregateType<T extends MemeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMemeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemeEntry[P]>
      : GetScalarType<T[P], AggregateMemeEntry[P]>
  }




  export type MemeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeEntryWhereInput
    orderBy?: MemeEntryOrderByWithAggregationInput | MemeEntryOrderByWithAggregationInput[]
    by: MemeEntryScalarFieldEnum[] | MemeEntryScalarFieldEnum
    having?: MemeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemeEntryCountAggregateInputType | true
    _min?: MemeEntryMinAggregateInputType
    _max?: MemeEntryMaxAggregateInputType
  }

  export type MemeEntryGroupByOutputType = {
    id: string
    retroId: string
    participantId: string
    laneId: string | null
    templateId: string
    topText: string | null
    bottomText: string | null
    generatedImageUrl: string
    createdAt: Date
    reactions: string
    _count: MemeEntryCountAggregateOutputType | null
    _min: MemeEntryMinAggregateOutputType | null
    _max: MemeEntryMaxAggregateOutputType | null
  }

  type GetMemeEntryGroupByPayload<T extends MemeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MemeEntryGroupByOutputType[P]>
        }
      >
    >


  export type MemeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    retroId?: boolean
    participantId?: boolean
    laneId?: boolean
    templateId?: boolean
    topText?: boolean
    bottomText?: boolean
    generatedImageUrl?: boolean
    createdAt?: boolean
    reactions?: boolean
    retro?: boolean | RetroDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    lane?: boolean | MemeEntry$laneArgs<ExtArgs>
  }, ExtArgs["result"]["memeEntry"]>

  export type MemeEntrySelectScalar = {
    id?: boolean
    retroId?: boolean
    participantId?: boolean
    laneId?: boolean
    templateId?: boolean
    topText?: boolean
    bottomText?: boolean
    generatedImageUrl?: boolean
    createdAt?: boolean
    reactions?: boolean
  }


  export type MemeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    retro?: boolean | RetroDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    lane?: boolean | MemeEntry$laneArgs<ExtArgs>
  }


  export type $MemeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemeEntry"
    objects: {
      retro: Prisma.$RetroPayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
      lane: Prisma.$LanePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      retroId: string
      participantId: string
      laneId: string | null
      templateId: string
      topText: string | null
      bottomText: string | null
      generatedImageUrl: string
      createdAt: Date
      reactions: string
    }, ExtArgs["result"]["memeEntry"]>
    composites: {}
  }


  type MemeEntryGetPayload<S extends boolean | null | undefined | MemeEntryDefaultArgs> = $Result.GetResult<Prisma.$MemeEntryPayload, S>

  type MemeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemeEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemeEntryCountAggregateInputType | true
    }

  export interface MemeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemeEntry'], meta: { name: 'MemeEntry' } }
    /**
     * Find zero or one MemeEntry that matches the filter.
     * @param {MemeEntryFindUniqueArgs} args - Arguments to find a MemeEntry
     * @example
     * // Get one MemeEntry
     * const memeEntry = await prisma.memeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemeEntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MemeEntryFindUniqueArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MemeEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemeEntryFindUniqueOrThrowArgs} args - Arguments to find a MemeEntry
     * @example
     * // Get one MemeEntry
     * const memeEntry = await prisma.memeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemeEntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeEntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MemeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeEntryFindFirstArgs} args - Arguments to find a MemeEntry
     * @example
     * // Get one MemeEntry
     * const memeEntry = await prisma.memeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemeEntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeEntryFindFirstArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MemeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeEntryFindFirstOrThrowArgs} args - Arguments to find a MemeEntry
     * @example
     * // Get one MemeEntry
     * const memeEntry = await prisma.memeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemeEntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeEntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MemeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemeEntries
     * const memeEntries = await prisma.memeEntry.findMany()
     * 
     * // Get first 10 MemeEntries
     * const memeEntries = await prisma.memeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memeEntryWithIdOnly = await prisma.memeEntry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemeEntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeEntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MemeEntry.
     * @param {MemeEntryCreateArgs} args - Arguments to create a MemeEntry.
     * @example
     * // Create one MemeEntry
     * const MemeEntry = await prisma.memeEntry.create({
     *   data: {
     *     // ... data to create a MemeEntry
     *   }
     * })
     * 
    **/
    create<T extends MemeEntryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemeEntryCreateArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MemeEntries.
     * @param {MemeEntryCreateManyArgs} args - Arguments to create many MemeEntries.
     * @example
     * // Create many MemeEntries
     * const memeEntry = await prisma.memeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MemeEntryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeEntryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemeEntries and returns the data saved in the database.
     * @param {MemeEntryCreateManyAndReturnArgs} args - Arguments to create many MemeEntries.
     * @example
     * // Create many MemeEntries
     * const memeEntry = await prisma.memeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemeEntries and only return the `id`
     * const memeEntryWithIdOnly = await prisma.memeEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MemeEntryCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeEntryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a MemeEntry.
     * @param {MemeEntryDeleteArgs} args - Arguments to delete one MemeEntry.
     * @example
     * // Delete one MemeEntry
     * const MemeEntry = await prisma.memeEntry.delete({
     *   where: {
     *     // ... filter to delete one MemeEntry
     *   }
     * })
     * 
    **/
    delete<T extends MemeEntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemeEntryDeleteArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MemeEntry.
     * @param {MemeEntryUpdateArgs} args - Arguments to update one MemeEntry.
     * @example
     * // Update one MemeEntry
     * const memeEntry = await prisma.memeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemeEntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemeEntryUpdateArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MemeEntries.
     * @param {MemeEntryDeleteManyArgs} args - Arguments to filter MemeEntries to delete.
     * @example
     * // Delete a few MemeEntries
     * const { count } = await prisma.memeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemeEntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemeEntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemeEntries
     * const memeEntry = await prisma.memeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemeEntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemeEntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemeEntry.
     * @param {MemeEntryUpsertArgs} args - Arguments to update or create a MemeEntry.
     * @example
     * // Update or create a MemeEntry
     * const memeEntry = await prisma.memeEntry.upsert({
     *   create: {
     *     // ... data to create a MemeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemeEntry we want to update
     *   }
     * })
    **/
    upsert<T extends MemeEntryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemeEntryUpsertArgs<ExtArgs>>
    ): Prisma__MemeEntryClient<$Result.GetResult<Prisma.$MemeEntryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MemeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeEntryCountArgs} args - Arguments to filter MemeEntries to count.
     * @example
     * // Count the number of MemeEntries
     * const count = await prisma.memeEntry.count({
     *   where: {
     *     // ... the filter for the MemeEntries we want to count
     *   }
     * })
    **/
    count<T extends MemeEntryCountArgs>(
      args?: Subset<T, MemeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemeEntryAggregateArgs>(args: Subset<T, MemeEntryAggregateArgs>): Prisma.PrismaPromise<GetMemeEntryAggregateType<T>>

    /**
     * Group by MemeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemeEntryGroupByArgs['orderBy'] }
        : { orderBy?: MemeEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemeEntry model
   */
  readonly fields: MemeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    retro<T extends RetroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RetroDefaultArgs<ExtArgs>>): Prisma__RetroClient<$Result.GetResult<Prisma.$RetroPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    lane<T extends MemeEntry$laneArgs<ExtArgs> = {}>(args?: Subset<T, MemeEntry$laneArgs<ExtArgs>>): Prisma__LaneClient<$Result.GetResult<Prisma.$LanePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MemeEntry model
   */ 
  interface MemeEntryFieldRefs {
    readonly id: FieldRef<"MemeEntry", 'String'>
    readonly retroId: FieldRef<"MemeEntry", 'String'>
    readonly participantId: FieldRef<"MemeEntry", 'String'>
    readonly laneId: FieldRef<"MemeEntry", 'String'>
    readonly templateId: FieldRef<"MemeEntry", 'String'>
    readonly topText: FieldRef<"MemeEntry", 'String'>
    readonly bottomText: FieldRef<"MemeEntry", 'String'>
    readonly generatedImageUrl: FieldRef<"MemeEntry", 'String'>
    readonly createdAt: FieldRef<"MemeEntry", 'DateTime'>
    readonly reactions: FieldRef<"MemeEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemeEntry findUnique
   */
  export type MemeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * Filter, which MemeEntry to fetch.
     */
    where: MemeEntryWhereUniqueInput
  }

  /**
   * MemeEntry findUniqueOrThrow
   */
  export type MemeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * Filter, which MemeEntry to fetch.
     */
    where: MemeEntryWhereUniqueInput
  }

  /**
   * MemeEntry findFirst
   */
  export type MemeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * Filter, which MemeEntry to fetch.
     */
    where?: MemeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeEntries to fetch.
     */
    orderBy?: MemeEntryOrderByWithRelationInput | MemeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemeEntries.
     */
    cursor?: MemeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemeEntries.
     */
    distinct?: MemeEntryScalarFieldEnum | MemeEntryScalarFieldEnum[]
  }

  /**
   * MemeEntry findFirstOrThrow
   */
  export type MemeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * Filter, which MemeEntry to fetch.
     */
    where?: MemeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeEntries to fetch.
     */
    orderBy?: MemeEntryOrderByWithRelationInput | MemeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemeEntries.
     */
    cursor?: MemeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemeEntries.
     */
    distinct?: MemeEntryScalarFieldEnum | MemeEntryScalarFieldEnum[]
  }

  /**
   * MemeEntry findMany
   */
  export type MemeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * Filter, which MemeEntries to fetch.
     */
    where?: MemeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemeEntries to fetch.
     */
    orderBy?: MemeEntryOrderByWithRelationInput | MemeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemeEntries.
     */
    cursor?: MemeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemeEntries.
     */
    skip?: number
    distinct?: MemeEntryScalarFieldEnum | MemeEntryScalarFieldEnum[]
  }

  /**
   * MemeEntry create
   */
  export type MemeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MemeEntry.
     */
    data: XOR<MemeEntryCreateInput, MemeEntryUncheckedCreateInput>
  }

  /**
   * MemeEntry createMany
   */
  export type MemeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemeEntries.
     */
    data: MemeEntryCreateManyInput | MemeEntryCreateManyInput[]
  }

  /**
   * MemeEntry createManyAndReturn
   */
  export type MemeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * The data used to create many MemeEntries.
     */
    data: MemeEntryCreateManyInput | MemeEntryCreateManyInput[]
  }

  /**
   * MemeEntry update
   */
  export type MemeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MemeEntry.
     */
    data: XOR<MemeEntryUpdateInput, MemeEntryUncheckedUpdateInput>
    /**
     * Choose, which MemeEntry to update.
     */
    where: MemeEntryWhereUniqueInput
  }

  /**
   * MemeEntry updateMany
   */
  export type MemeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemeEntries.
     */
    data: XOR<MemeEntryUpdateManyMutationInput, MemeEntryUncheckedUpdateManyInput>
    /**
     * Filter which MemeEntries to update
     */
    where?: MemeEntryWhereInput
  }

  /**
   * MemeEntry upsert
   */
  export type MemeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MemeEntry to update in case it exists.
     */
    where: MemeEntryWhereUniqueInput
    /**
     * In case the MemeEntry found by the `where` argument doesn't exist, create a new MemeEntry with this data.
     */
    create: XOR<MemeEntryCreateInput, MemeEntryUncheckedCreateInput>
    /**
     * In case the MemeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemeEntryUpdateInput, MemeEntryUncheckedUpdateInput>
  }

  /**
   * MemeEntry delete
   */
  export type MemeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
    /**
     * Filter which MemeEntry to delete.
     */
    where: MemeEntryWhereUniqueInput
  }

  /**
   * MemeEntry deleteMany
   */
  export type MemeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemeEntries to delete
     */
    where?: MemeEntryWhereInput
  }

  /**
   * MemeEntry.lane
   */
  export type MemeEntry$laneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lane
     */
    select?: LaneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaneInclude<ExtArgs> | null
    where?: LaneWhereInput
  }

  /**
   * MemeEntry without action
   */
  export type MemeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemeEntry
     */
    select?: MemeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RetroScalarFieldEnum: {
    id: 'id',
    shareId: 'shareId',
    title: 'title',
    teamName: 'teamName',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type RetroScalarFieldEnum = (typeof RetroScalarFieldEnum)[keyof typeof RetroScalarFieldEnum]


  export const LaneScalarFieldEnum: {
    id: 'id',
    retroId: 'retroId',
    title: 'title',
    order: 'order'
  };

  export type LaneScalarFieldEnum = (typeof LaneScalarFieldEnum)[keyof typeof LaneScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    retroId: 'retroId',
    displayName: 'displayName',
    avatarColor: 'avatarColor',
    createdAt: 'createdAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const MemeTemplateScalarFieldEnum: {
    id: 'id',
    memegenId: 'memegenId',
    displayName: 'displayName',
    previewUrl: 'previewUrl',
    lines: 'lines',
    createdAt: 'createdAt'
  };

  export type MemeTemplateScalarFieldEnum = (typeof MemeTemplateScalarFieldEnum)[keyof typeof MemeTemplateScalarFieldEnum]


  export const MemeEntryScalarFieldEnum: {
    id: 'id',
    retroId: 'retroId',
    participantId: 'participantId',
    laneId: 'laneId',
    templateId: 'templateId',
    topText: 'topText',
    bottomText: 'bottomText',
    generatedImageUrl: 'generatedImageUrl',
    createdAt: 'createdAt',
    reactions: 'reactions'
  };

  export type MemeEntryScalarFieldEnum = (typeof MemeEntryScalarFieldEnum)[keyof typeof MemeEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RetroWhereInput = {
    AND?: RetroWhereInput | RetroWhereInput[]
    OR?: RetroWhereInput[]
    NOT?: RetroWhereInput | RetroWhereInput[]
    id?: StringFilter<"Retro"> | string
    shareId?: StringFilter<"Retro"> | string
    title?: StringFilter<"Retro"> | string
    teamName?: StringNullableFilter<"Retro"> | string | null
    createdAt?: DateTimeFilter<"Retro"> | Date | string
    status?: StringFilter<"Retro"> | string
    participants?: ParticipantListRelationFilter
    memes?: MemeEntryListRelationFilter
    lanes?: LaneListRelationFilter
  }

  export type RetroOrderByWithRelationInput = {
    id?: SortOrder
    shareId?: SortOrder
    title?: SortOrder
    teamName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    participants?: ParticipantOrderByRelationAggregateInput
    memes?: MemeEntryOrderByRelationAggregateInput
    lanes?: LaneOrderByRelationAggregateInput
  }

  export type RetroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareId?: string
    AND?: RetroWhereInput | RetroWhereInput[]
    OR?: RetroWhereInput[]
    NOT?: RetroWhereInput | RetroWhereInput[]
    title?: StringFilter<"Retro"> | string
    teamName?: StringNullableFilter<"Retro"> | string | null
    createdAt?: DateTimeFilter<"Retro"> | Date | string
    status?: StringFilter<"Retro"> | string
    participants?: ParticipantListRelationFilter
    memes?: MemeEntryListRelationFilter
    lanes?: LaneListRelationFilter
  }, "id" | "shareId">

  export type RetroOrderByWithAggregationInput = {
    id?: SortOrder
    shareId?: SortOrder
    title?: SortOrder
    teamName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: RetroCountOrderByAggregateInput
    _max?: RetroMaxOrderByAggregateInput
    _min?: RetroMinOrderByAggregateInput
  }

  export type RetroScalarWhereWithAggregatesInput = {
    AND?: RetroScalarWhereWithAggregatesInput | RetroScalarWhereWithAggregatesInput[]
    OR?: RetroScalarWhereWithAggregatesInput[]
    NOT?: RetroScalarWhereWithAggregatesInput | RetroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Retro"> | string
    shareId?: StringWithAggregatesFilter<"Retro"> | string
    title?: StringWithAggregatesFilter<"Retro"> | string
    teamName?: StringNullableWithAggregatesFilter<"Retro"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Retro"> | Date | string
    status?: StringWithAggregatesFilter<"Retro"> | string
  }

  export type LaneWhereInput = {
    AND?: LaneWhereInput | LaneWhereInput[]
    OR?: LaneWhereInput[]
    NOT?: LaneWhereInput | LaneWhereInput[]
    id?: StringFilter<"Lane"> | string
    retroId?: StringFilter<"Lane"> | string
    title?: StringFilter<"Lane"> | string
    order?: IntFilter<"Lane"> | number
    retro?: XOR<RetroRelationFilter, RetroWhereInput>
    memes?: MemeEntryListRelationFilter
  }

  export type LaneOrderByWithRelationInput = {
    id?: SortOrder
    retroId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    retro?: RetroOrderByWithRelationInput
    memes?: MemeEntryOrderByRelationAggregateInput
  }

  export type LaneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LaneWhereInput | LaneWhereInput[]
    OR?: LaneWhereInput[]
    NOT?: LaneWhereInput | LaneWhereInput[]
    retroId?: StringFilter<"Lane"> | string
    title?: StringFilter<"Lane"> | string
    order?: IntFilter<"Lane"> | number
    retro?: XOR<RetroRelationFilter, RetroWhereInput>
    memes?: MemeEntryListRelationFilter
  }, "id">

  export type LaneOrderByWithAggregationInput = {
    id?: SortOrder
    retroId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    _count?: LaneCountOrderByAggregateInput
    _avg?: LaneAvgOrderByAggregateInput
    _max?: LaneMaxOrderByAggregateInput
    _min?: LaneMinOrderByAggregateInput
    _sum?: LaneSumOrderByAggregateInput
  }

  export type LaneScalarWhereWithAggregatesInput = {
    AND?: LaneScalarWhereWithAggregatesInput | LaneScalarWhereWithAggregatesInput[]
    OR?: LaneScalarWhereWithAggregatesInput[]
    NOT?: LaneScalarWhereWithAggregatesInput | LaneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lane"> | string
    retroId?: StringWithAggregatesFilter<"Lane"> | string
    title?: StringWithAggregatesFilter<"Lane"> | string
    order?: IntWithAggregatesFilter<"Lane"> | number
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    retroId?: StringFilter<"Participant"> | string
    displayName?: StringFilter<"Participant"> | string
    avatarColor?: StringNullableFilter<"Participant"> | string | null
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    retro?: XOR<RetroRelationFilter, RetroWhereInput>
    memes?: MemeEntryListRelationFilter
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    retroId?: SortOrder
    displayName?: SortOrder
    avatarColor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    retro?: RetroOrderByWithRelationInput
    memes?: MemeEntryOrderByRelationAggregateInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    retroId?: StringFilter<"Participant"> | string
    displayName?: StringFilter<"Participant"> | string
    avatarColor?: StringNullableFilter<"Participant"> | string | null
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    retro?: XOR<RetroRelationFilter, RetroWhereInput>
    memes?: MemeEntryListRelationFilter
  }, "id">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    retroId?: SortOrder
    displayName?: SortOrder
    avatarColor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    retroId?: StringWithAggregatesFilter<"Participant"> | string
    displayName?: StringWithAggregatesFilter<"Participant"> | string
    avatarColor?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type MemeTemplateWhereInput = {
    AND?: MemeTemplateWhereInput | MemeTemplateWhereInput[]
    OR?: MemeTemplateWhereInput[]
    NOT?: MemeTemplateWhereInput | MemeTemplateWhereInput[]
    id?: StringFilter<"MemeTemplate"> | string
    memegenId?: StringFilter<"MemeTemplate"> | string
    displayName?: StringFilter<"MemeTemplate"> | string
    previewUrl?: StringFilter<"MemeTemplate"> | string
    lines?: IntFilter<"MemeTemplate"> | number
    createdAt?: DateTimeFilter<"MemeTemplate"> | Date | string
  }

  export type MemeTemplateOrderByWithRelationInput = {
    id?: SortOrder
    memegenId?: SortOrder
    displayName?: SortOrder
    previewUrl?: SortOrder
    lines?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memegenId?: string
    AND?: MemeTemplateWhereInput | MemeTemplateWhereInput[]
    OR?: MemeTemplateWhereInput[]
    NOT?: MemeTemplateWhereInput | MemeTemplateWhereInput[]
    displayName?: StringFilter<"MemeTemplate"> | string
    previewUrl?: StringFilter<"MemeTemplate"> | string
    lines?: IntFilter<"MemeTemplate"> | number
    createdAt?: DateTimeFilter<"MemeTemplate"> | Date | string
  }, "id" | "memegenId">

  export type MemeTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    memegenId?: SortOrder
    displayName?: SortOrder
    previewUrl?: SortOrder
    lines?: SortOrder
    createdAt?: SortOrder
    _count?: MemeTemplateCountOrderByAggregateInput
    _avg?: MemeTemplateAvgOrderByAggregateInput
    _max?: MemeTemplateMaxOrderByAggregateInput
    _min?: MemeTemplateMinOrderByAggregateInput
    _sum?: MemeTemplateSumOrderByAggregateInput
  }

  export type MemeTemplateScalarWhereWithAggregatesInput = {
    AND?: MemeTemplateScalarWhereWithAggregatesInput | MemeTemplateScalarWhereWithAggregatesInput[]
    OR?: MemeTemplateScalarWhereWithAggregatesInput[]
    NOT?: MemeTemplateScalarWhereWithAggregatesInput | MemeTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemeTemplate"> | string
    memegenId?: StringWithAggregatesFilter<"MemeTemplate"> | string
    displayName?: StringWithAggregatesFilter<"MemeTemplate"> | string
    previewUrl?: StringWithAggregatesFilter<"MemeTemplate"> | string
    lines?: IntWithAggregatesFilter<"MemeTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MemeTemplate"> | Date | string
  }

  export type MemeEntryWhereInput = {
    AND?: MemeEntryWhereInput | MemeEntryWhereInput[]
    OR?: MemeEntryWhereInput[]
    NOT?: MemeEntryWhereInput | MemeEntryWhereInput[]
    id?: StringFilter<"MemeEntry"> | string
    retroId?: StringFilter<"MemeEntry"> | string
    participantId?: StringFilter<"MemeEntry"> | string
    laneId?: StringNullableFilter<"MemeEntry"> | string | null
    templateId?: StringFilter<"MemeEntry"> | string
    topText?: StringNullableFilter<"MemeEntry"> | string | null
    bottomText?: StringNullableFilter<"MemeEntry"> | string | null
    generatedImageUrl?: StringFilter<"MemeEntry"> | string
    createdAt?: DateTimeFilter<"MemeEntry"> | Date | string
    reactions?: StringFilter<"MemeEntry"> | string
    retro?: XOR<RetroRelationFilter, RetroWhereInput>
    participant?: XOR<ParticipantRelationFilter, ParticipantWhereInput>
    lane?: XOR<LaneNullableRelationFilter, LaneWhereInput> | null
  }

  export type MemeEntryOrderByWithRelationInput = {
    id?: SortOrder
    retroId?: SortOrder
    participantId?: SortOrder
    laneId?: SortOrderInput | SortOrder
    templateId?: SortOrder
    topText?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    generatedImageUrl?: SortOrder
    createdAt?: SortOrder
    reactions?: SortOrder
    retro?: RetroOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
    lane?: LaneOrderByWithRelationInput
  }

  export type MemeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemeEntryWhereInput | MemeEntryWhereInput[]
    OR?: MemeEntryWhereInput[]
    NOT?: MemeEntryWhereInput | MemeEntryWhereInput[]
    retroId?: StringFilter<"MemeEntry"> | string
    participantId?: StringFilter<"MemeEntry"> | string
    laneId?: StringNullableFilter<"MemeEntry"> | string | null
    templateId?: StringFilter<"MemeEntry"> | string
    topText?: StringNullableFilter<"MemeEntry"> | string | null
    bottomText?: StringNullableFilter<"MemeEntry"> | string | null
    generatedImageUrl?: StringFilter<"MemeEntry"> | string
    createdAt?: DateTimeFilter<"MemeEntry"> | Date | string
    reactions?: StringFilter<"MemeEntry"> | string
    retro?: XOR<RetroRelationFilter, RetroWhereInput>
    participant?: XOR<ParticipantRelationFilter, ParticipantWhereInput>
    lane?: XOR<LaneNullableRelationFilter, LaneWhereInput> | null
  }, "id">

  export type MemeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    retroId?: SortOrder
    participantId?: SortOrder
    laneId?: SortOrderInput | SortOrder
    templateId?: SortOrder
    topText?: SortOrderInput | SortOrder
    bottomText?: SortOrderInput | SortOrder
    generatedImageUrl?: SortOrder
    createdAt?: SortOrder
    reactions?: SortOrder
    _count?: MemeEntryCountOrderByAggregateInput
    _max?: MemeEntryMaxOrderByAggregateInput
    _min?: MemeEntryMinOrderByAggregateInput
  }

  export type MemeEntryScalarWhereWithAggregatesInput = {
    AND?: MemeEntryScalarWhereWithAggregatesInput | MemeEntryScalarWhereWithAggregatesInput[]
    OR?: MemeEntryScalarWhereWithAggregatesInput[]
    NOT?: MemeEntryScalarWhereWithAggregatesInput | MemeEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemeEntry"> | string
    retroId?: StringWithAggregatesFilter<"MemeEntry"> | string
    participantId?: StringWithAggregatesFilter<"MemeEntry"> | string
    laneId?: StringNullableWithAggregatesFilter<"MemeEntry"> | string | null
    templateId?: StringWithAggregatesFilter<"MemeEntry"> | string
    topText?: StringNullableWithAggregatesFilter<"MemeEntry"> | string | null
    bottomText?: StringNullableWithAggregatesFilter<"MemeEntry"> | string | null
    generatedImageUrl?: StringWithAggregatesFilter<"MemeEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MemeEntry"> | Date | string
    reactions?: StringWithAggregatesFilter<"MemeEntry"> | string
  }

  export type RetroCreateInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    participants?: ParticipantCreateNestedManyWithoutRetroInput
    memes?: MemeEntryCreateNestedManyWithoutRetroInput
    lanes?: LaneCreateNestedManyWithoutRetroInput
  }

  export type RetroUncheckedCreateInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    participants?: ParticipantUncheckedCreateNestedManyWithoutRetroInput
    memes?: MemeEntryUncheckedCreateNestedManyWithoutRetroInput
    lanes?: LaneUncheckedCreateNestedManyWithoutRetroInput
  }

  export type RetroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    participants?: ParticipantUpdateManyWithoutRetroNestedInput
    memes?: MemeEntryUpdateManyWithoutRetroNestedInput
    lanes?: LaneUpdateManyWithoutRetroNestedInput
  }

  export type RetroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    participants?: ParticipantUncheckedUpdateManyWithoutRetroNestedInput
    memes?: MemeEntryUncheckedUpdateManyWithoutRetroNestedInput
    lanes?: LaneUncheckedUpdateManyWithoutRetroNestedInput
  }

  export type RetroCreateManyInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
  }

  export type RetroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RetroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LaneCreateInput = {
    id?: string
    title: string
    order: number
    retro: RetroCreateNestedOneWithoutLanesInput
    memes?: MemeEntryCreateNestedManyWithoutLaneInput
  }

  export type LaneUncheckedCreateInput = {
    id?: string
    retroId: string
    title: string
    order: number
    memes?: MemeEntryUncheckedCreateNestedManyWithoutLaneInput
  }

  export type LaneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    retro?: RetroUpdateOneRequiredWithoutLanesNestedInput
    memes?: MemeEntryUpdateManyWithoutLaneNestedInput
  }

  export type LaneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    memes?: MemeEntryUncheckedUpdateManyWithoutLaneNestedInput
  }

  export type LaneCreateManyInput = {
    id?: string
    retroId: string
    title: string
    order: number
  }

  export type LaneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LaneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCreateInput = {
    id?: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
    retro: RetroCreateNestedOneWithoutParticipantsInput
    memes?: MemeEntryCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    retroId: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
    memes?: MemeEntryUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retro?: RetroUpdateOneRequiredWithoutParticipantsNestedInput
    memes?: MemeEntryUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memes?: MemeEntryUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    id?: string
    retroId: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeTemplateCreateInput = {
    id?: string
    memegenId: string
    displayName: string
    previewUrl: string
    lines?: number
    createdAt?: Date | string
  }

  export type MemeTemplateUncheckedCreateInput = {
    id?: string
    memegenId: string
    displayName: string
    previewUrl: string
    lines?: number
    createdAt?: Date | string
  }

  export type MemeTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memegenId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    lines?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memegenId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    lines?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeTemplateCreateManyInput = {
    id?: string
    memegenId: string
    displayName: string
    previewUrl: string
    lines?: number
    createdAt?: Date | string
  }

  export type MemeTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    memegenId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    lines?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memegenId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    lines?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeEntryCreateInput = {
    id?: string
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
    retro: RetroCreateNestedOneWithoutMemesInput
    participant: ParticipantCreateNestedOneWithoutMemesInput
    lane?: LaneCreateNestedOneWithoutMemesInput
  }

  export type MemeEntryUncheckedCreateInput = {
    id?: string
    retroId: string
    participantId: string
    laneId?: string | null
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type MemeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
    retro?: RetroUpdateOneRequiredWithoutMemesNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutMemesNestedInput
    lane?: LaneUpdateOneWithoutMemesNestedInput
  }

  export type MemeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    laneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type MemeEntryCreateManyInput = {
    id?: string
    retroId: string
    participantId: string
    laneId?: string | null
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type MemeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type MemeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    laneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type MemeEntryListRelationFilter = {
    every?: MemeEntryWhereInput
    some?: MemeEntryWhereInput
    none?: MemeEntryWhereInput
  }

  export type LaneListRelationFilter = {
    every?: LaneWhereInput
    some?: LaneWhereInput
    none?: LaneWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemeEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RetroCountOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    title?: SortOrder
    teamName?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type RetroMaxOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    title?: SortOrder
    teamName?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type RetroMinOrderByAggregateInput = {
    id?: SortOrder
    shareId?: SortOrder
    title?: SortOrder
    teamName?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RetroRelationFilter = {
    is?: RetroWhereInput
    isNot?: RetroWhereInput
  }

  export type LaneCountOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    title?: SortOrder
    order?: SortOrder
  }

  export type LaneAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LaneMaxOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    title?: SortOrder
    order?: SortOrder
  }

  export type LaneMinOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    title?: SortOrder
    order?: SortOrder
  }

  export type LaneSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    displayName?: SortOrder
    avatarColor?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    displayName?: SortOrder
    avatarColor?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    displayName?: SortOrder
    avatarColor?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    memegenId?: SortOrder
    displayName?: SortOrder
    previewUrl?: SortOrder
    lines?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeTemplateAvgOrderByAggregateInput = {
    lines?: SortOrder
  }

  export type MemeTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    memegenId?: SortOrder
    displayName?: SortOrder
    previewUrl?: SortOrder
    lines?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    memegenId?: SortOrder
    displayName?: SortOrder
    previewUrl?: SortOrder
    lines?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeTemplateSumOrderByAggregateInput = {
    lines?: SortOrder
  }

  export type ParticipantRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type LaneNullableRelationFilter = {
    is?: LaneWhereInput | null
    isNot?: LaneWhereInput | null
  }

  export type MemeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    participantId?: SortOrder
    laneId?: SortOrder
    templateId?: SortOrder
    topText?: SortOrder
    bottomText?: SortOrder
    generatedImageUrl?: SortOrder
    createdAt?: SortOrder
    reactions?: SortOrder
  }

  export type MemeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    participantId?: SortOrder
    laneId?: SortOrder
    templateId?: SortOrder
    topText?: SortOrder
    bottomText?: SortOrder
    generatedImageUrl?: SortOrder
    createdAt?: SortOrder
    reactions?: SortOrder
  }

  export type MemeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    retroId?: SortOrder
    participantId?: SortOrder
    laneId?: SortOrder
    templateId?: SortOrder
    topText?: SortOrder
    bottomText?: SortOrder
    generatedImageUrl?: SortOrder
    createdAt?: SortOrder
    reactions?: SortOrder
  }

  export type ParticipantCreateNestedManyWithoutRetroInput = {
    create?: XOR<ParticipantCreateWithoutRetroInput, ParticipantUncheckedCreateWithoutRetroInput> | ParticipantCreateWithoutRetroInput[] | ParticipantUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRetroInput | ParticipantCreateOrConnectWithoutRetroInput[]
    createMany?: ParticipantCreateManyRetroInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type MemeEntryCreateNestedManyWithoutRetroInput = {
    create?: XOR<MemeEntryCreateWithoutRetroInput, MemeEntryUncheckedCreateWithoutRetroInput> | MemeEntryCreateWithoutRetroInput[] | MemeEntryUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutRetroInput | MemeEntryCreateOrConnectWithoutRetroInput[]
    createMany?: MemeEntryCreateManyRetroInputEnvelope
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
  }

  export type LaneCreateNestedManyWithoutRetroInput = {
    create?: XOR<LaneCreateWithoutRetroInput, LaneUncheckedCreateWithoutRetroInput> | LaneCreateWithoutRetroInput[] | LaneUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: LaneCreateOrConnectWithoutRetroInput | LaneCreateOrConnectWithoutRetroInput[]
    createMany?: LaneCreateManyRetroInputEnvelope
    connect?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutRetroInput = {
    create?: XOR<ParticipantCreateWithoutRetroInput, ParticipantUncheckedCreateWithoutRetroInput> | ParticipantCreateWithoutRetroInput[] | ParticipantUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRetroInput | ParticipantCreateOrConnectWithoutRetroInput[]
    createMany?: ParticipantCreateManyRetroInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type MemeEntryUncheckedCreateNestedManyWithoutRetroInput = {
    create?: XOR<MemeEntryCreateWithoutRetroInput, MemeEntryUncheckedCreateWithoutRetroInput> | MemeEntryCreateWithoutRetroInput[] | MemeEntryUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutRetroInput | MemeEntryCreateOrConnectWithoutRetroInput[]
    createMany?: MemeEntryCreateManyRetroInputEnvelope
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
  }

  export type LaneUncheckedCreateNestedManyWithoutRetroInput = {
    create?: XOR<LaneCreateWithoutRetroInput, LaneUncheckedCreateWithoutRetroInput> | LaneCreateWithoutRetroInput[] | LaneUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: LaneCreateOrConnectWithoutRetroInput | LaneCreateOrConnectWithoutRetroInput[]
    createMany?: LaneCreateManyRetroInputEnvelope
    connect?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParticipantUpdateManyWithoutRetroNestedInput = {
    create?: XOR<ParticipantCreateWithoutRetroInput, ParticipantUncheckedCreateWithoutRetroInput> | ParticipantCreateWithoutRetroInput[] | ParticipantUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRetroInput | ParticipantCreateOrConnectWithoutRetroInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutRetroInput | ParticipantUpsertWithWhereUniqueWithoutRetroInput[]
    createMany?: ParticipantCreateManyRetroInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutRetroInput | ParticipantUpdateWithWhereUniqueWithoutRetroInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutRetroInput | ParticipantUpdateManyWithWhereWithoutRetroInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type MemeEntryUpdateManyWithoutRetroNestedInput = {
    create?: XOR<MemeEntryCreateWithoutRetroInput, MemeEntryUncheckedCreateWithoutRetroInput> | MemeEntryCreateWithoutRetroInput[] | MemeEntryUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutRetroInput | MemeEntryCreateOrConnectWithoutRetroInput[]
    upsert?: MemeEntryUpsertWithWhereUniqueWithoutRetroInput | MemeEntryUpsertWithWhereUniqueWithoutRetroInput[]
    createMany?: MemeEntryCreateManyRetroInputEnvelope
    set?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    disconnect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    delete?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    update?: MemeEntryUpdateWithWhereUniqueWithoutRetroInput | MemeEntryUpdateWithWhereUniqueWithoutRetroInput[]
    updateMany?: MemeEntryUpdateManyWithWhereWithoutRetroInput | MemeEntryUpdateManyWithWhereWithoutRetroInput[]
    deleteMany?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
  }

  export type LaneUpdateManyWithoutRetroNestedInput = {
    create?: XOR<LaneCreateWithoutRetroInput, LaneUncheckedCreateWithoutRetroInput> | LaneCreateWithoutRetroInput[] | LaneUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: LaneCreateOrConnectWithoutRetroInput | LaneCreateOrConnectWithoutRetroInput[]
    upsert?: LaneUpsertWithWhereUniqueWithoutRetroInput | LaneUpsertWithWhereUniqueWithoutRetroInput[]
    createMany?: LaneCreateManyRetroInputEnvelope
    set?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    disconnect?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    delete?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    connect?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    update?: LaneUpdateWithWhereUniqueWithoutRetroInput | LaneUpdateWithWhereUniqueWithoutRetroInput[]
    updateMany?: LaneUpdateManyWithWhereWithoutRetroInput | LaneUpdateManyWithWhereWithoutRetroInput[]
    deleteMany?: LaneScalarWhereInput | LaneScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutRetroNestedInput = {
    create?: XOR<ParticipantCreateWithoutRetroInput, ParticipantUncheckedCreateWithoutRetroInput> | ParticipantCreateWithoutRetroInput[] | ParticipantUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRetroInput | ParticipantCreateOrConnectWithoutRetroInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutRetroInput | ParticipantUpsertWithWhereUniqueWithoutRetroInput[]
    createMany?: ParticipantCreateManyRetroInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutRetroInput | ParticipantUpdateWithWhereUniqueWithoutRetroInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutRetroInput | ParticipantUpdateManyWithWhereWithoutRetroInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type MemeEntryUncheckedUpdateManyWithoutRetroNestedInput = {
    create?: XOR<MemeEntryCreateWithoutRetroInput, MemeEntryUncheckedCreateWithoutRetroInput> | MemeEntryCreateWithoutRetroInput[] | MemeEntryUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutRetroInput | MemeEntryCreateOrConnectWithoutRetroInput[]
    upsert?: MemeEntryUpsertWithWhereUniqueWithoutRetroInput | MemeEntryUpsertWithWhereUniqueWithoutRetroInput[]
    createMany?: MemeEntryCreateManyRetroInputEnvelope
    set?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    disconnect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    delete?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    update?: MemeEntryUpdateWithWhereUniqueWithoutRetroInput | MemeEntryUpdateWithWhereUniqueWithoutRetroInput[]
    updateMany?: MemeEntryUpdateManyWithWhereWithoutRetroInput | MemeEntryUpdateManyWithWhereWithoutRetroInput[]
    deleteMany?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
  }

  export type LaneUncheckedUpdateManyWithoutRetroNestedInput = {
    create?: XOR<LaneCreateWithoutRetroInput, LaneUncheckedCreateWithoutRetroInput> | LaneCreateWithoutRetroInput[] | LaneUncheckedCreateWithoutRetroInput[]
    connectOrCreate?: LaneCreateOrConnectWithoutRetroInput | LaneCreateOrConnectWithoutRetroInput[]
    upsert?: LaneUpsertWithWhereUniqueWithoutRetroInput | LaneUpsertWithWhereUniqueWithoutRetroInput[]
    createMany?: LaneCreateManyRetroInputEnvelope
    set?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    disconnect?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    delete?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    connect?: LaneWhereUniqueInput | LaneWhereUniqueInput[]
    update?: LaneUpdateWithWhereUniqueWithoutRetroInput | LaneUpdateWithWhereUniqueWithoutRetroInput[]
    updateMany?: LaneUpdateManyWithWhereWithoutRetroInput | LaneUpdateManyWithWhereWithoutRetroInput[]
    deleteMany?: LaneScalarWhereInput | LaneScalarWhereInput[]
  }

  export type RetroCreateNestedOneWithoutLanesInput = {
    create?: XOR<RetroCreateWithoutLanesInput, RetroUncheckedCreateWithoutLanesInput>
    connectOrCreate?: RetroCreateOrConnectWithoutLanesInput
    connect?: RetroWhereUniqueInput
  }

  export type MemeEntryCreateNestedManyWithoutLaneInput = {
    create?: XOR<MemeEntryCreateWithoutLaneInput, MemeEntryUncheckedCreateWithoutLaneInput> | MemeEntryCreateWithoutLaneInput[] | MemeEntryUncheckedCreateWithoutLaneInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutLaneInput | MemeEntryCreateOrConnectWithoutLaneInput[]
    createMany?: MemeEntryCreateManyLaneInputEnvelope
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
  }

  export type MemeEntryUncheckedCreateNestedManyWithoutLaneInput = {
    create?: XOR<MemeEntryCreateWithoutLaneInput, MemeEntryUncheckedCreateWithoutLaneInput> | MemeEntryCreateWithoutLaneInput[] | MemeEntryUncheckedCreateWithoutLaneInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutLaneInput | MemeEntryCreateOrConnectWithoutLaneInput[]
    createMany?: MemeEntryCreateManyLaneInputEnvelope
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RetroUpdateOneRequiredWithoutLanesNestedInput = {
    create?: XOR<RetroCreateWithoutLanesInput, RetroUncheckedCreateWithoutLanesInput>
    connectOrCreate?: RetroCreateOrConnectWithoutLanesInput
    upsert?: RetroUpsertWithoutLanesInput
    connect?: RetroWhereUniqueInput
    update?: XOR<XOR<RetroUpdateToOneWithWhereWithoutLanesInput, RetroUpdateWithoutLanesInput>, RetroUncheckedUpdateWithoutLanesInput>
  }

  export type MemeEntryUpdateManyWithoutLaneNestedInput = {
    create?: XOR<MemeEntryCreateWithoutLaneInput, MemeEntryUncheckedCreateWithoutLaneInput> | MemeEntryCreateWithoutLaneInput[] | MemeEntryUncheckedCreateWithoutLaneInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutLaneInput | MemeEntryCreateOrConnectWithoutLaneInput[]
    upsert?: MemeEntryUpsertWithWhereUniqueWithoutLaneInput | MemeEntryUpsertWithWhereUniqueWithoutLaneInput[]
    createMany?: MemeEntryCreateManyLaneInputEnvelope
    set?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    disconnect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    delete?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    update?: MemeEntryUpdateWithWhereUniqueWithoutLaneInput | MemeEntryUpdateWithWhereUniqueWithoutLaneInput[]
    updateMany?: MemeEntryUpdateManyWithWhereWithoutLaneInput | MemeEntryUpdateManyWithWhereWithoutLaneInput[]
    deleteMany?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
  }

  export type MemeEntryUncheckedUpdateManyWithoutLaneNestedInput = {
    create?: XOR<MemeEntryCreateWithoutLaneInput, MemeEntryUncheckedCreateWithoutLaneInput> | MemeEntryCreateWithoutLaneInput[] | MemeEntryUncheckedCreateWithoutLaneInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutLaneInput | MemeEntryCreateOrConnectWithoutLaneInput[]
    upsert?: MemeEntryUpsertWithWhereUniqueWithoutLaneInput | MemeEntryUpsertWithWhereUniqueWithoutLaneInput[]
    createMany?: MemeEntryCreateManyLaneInputEnvelope
    set?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    disconnect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    delete?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    update?: MemeEntryUpdateWithWhereUniqueWithoutLaneInput | MemeEntryUpdateWithWhereUniqueWithoutLaneInput[]
    updateMany?: MemeEntryUpdateManyWithWhereWithoutLaneInput | MemeEntryUpdateManyWithWhereWithoutLaneInput[]
    deleteMany?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
  }

  export type RetroCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RetroCreateWithoutParticipantsInput, RetroUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RetroCreateOrConnectWithoutParticipantsInput
    connect?: RetroWhereUniqueInput
  }

  export type MemeEntryCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MemeEntryCreateWithoutParticipantInput, MemeEntryUncheckedCreateWithoutParticipantInput> | MemeEntryCreateWithoutParticipantInput[] | MemeEntryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutParticipantInput | MemeEntryCreateOrConnectWithoutParticipantInput[]
    createMany?: MemeEntryCreateManyParticipantInputEnvelope
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
  }

  export type MemeEntryUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MemeEntryCreateWithoutParticipantInput, MemeEntryUncheckedCreateWithoutParticipantInput> | MemeEntryCreateWithoutParticipantInput[] | MemeEntryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutParticipantInput | MemeEntryCreateOrConnectWithoutParticipantInput[]
    createMany?: MemeEntryCreateManyParticipantInputEnvelope
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
  }

  export type RetroUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<RetroCreateWithoutParticipantsInput, RetroUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RetroCreateOrConnectWithoutParticipantsInput
    upsert?: RetroUpsertWithoutParticipantsInput
    connect?: RetroWhereUniqueInput
    update?: XOR<XOR<RetroUpdateToOneWithWhereWithoutParticipantsInput, RetroUpdateWithoutParticipantsInput>, RetroUncheckedUpdateWithoutParticipantsInput>
  }

  export type MemeEntryUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MemeEntryCreateWithoutParticipantInput, MemeEntryUncheckedCreateWithoutParticipantInput> | MemeEntryCreateWithoutParticipantInput[] | MemeEntryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutParticipantInput | MemeEntryCreateOrConnectWithoutParticipantInput[]
    upsert?: MemeEntryUpsertWithWhereUniqueWithoutParticipantInput | MemeEntryUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MemeEntryCreateManyParticipantInputEnvelope
    set?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    disconnect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    delete?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    update?: MemeEntryUpdateWithWhereUniqueWithoutParticipantInput | MemeEntryUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MemeEntryUpdateManyWithWhereWithoutParticipantInput | MemeEntryUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
  }

  export type MemeEntryUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MemeEntryCreateWithoutParticipantInput, MemeEntryUncheckedCreateWithoutParticipantInput> | MemeEntryCreateWithoutParticipantInput[] | MemeEntryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MemeEntryCreateOrConnectWithoutParticipantInput | MemeEntryCreateOrConnectWithoutParticipantInput[]
    upsert?: MemeEntryUpsertWithWhereUniqueWithoutParticipantInput | MemeEntryUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MemeEntryCreateManyParticipantInputEnvelope
    set?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    disconnect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    delete?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    connect?: MemeEntryWhereUniqueInput | MemeEntryWhereUniqueInput[]
    update?: MemeEntryUpdateWithWhereUniqueWithoutParticipantInput | MemeEntryUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MemeEntryUpdateManyWithWhereWithoutParticipantInput | MemeEntryUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
  }

  export type RetroCreateNestedOneWithoutMemesInput = {
    create?: XOR<RetroCreateWithoutMemesInput, RetroUncheckedCreateWithoutMemesInput>
    connectOrCreate?: RetroCreateOrConnectWithoutMemesInput
    connect?: RetroWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutMemesInput = {
    create?: XOR<ParticipantCreateWithoutMemesInput, ParticipantUncheckedCreateWithoutMemesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMemesInput
    connect?: ParticipantWhereUniqueInput
  }

  export type LaneCreateNestedOneWithoutMemesInput = {
    create?: XOR<LaneCreateWithoutMemesInput, LaneUncheckedCreateWithoutMemesInput>
    connectOrCreate?: LaneCreateOrConnectWithoutMemesInput
    connect?: LaneWhereUniqueInput
  }

  export type RetroUpdateOneRequiredWithoutMemesNestedInput = {
    create?: XOR<RetroCreateWithoutMemesInput, RetroUncheckedCreateWithoutMemesInput>
    connectOrCreate?: RetroCreateOrConnectWithoutMemesInput
    upsert?: RetroUpsertWithoutMemesInput
    connect?: RetroWhereUniqueInput
    update?: XOR<XOR<RetroUpdateToOneWithWhereWithoutMemesInput, RetroUpdateWithoutMemesInput>, RetroUncheckedUpdateWithoutMemesInput>
  }

  export type ParticipantUpdateOneRequiredWithoutMemesNestedInput = {
    create?: XOR<ParticipantCreateWithoutMemesInput, ParticipantUncheckedCreateWithoutMemesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutMemesInput
    upsert?: ParticipantUpsertWithoutMemesInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutMemesInput, ParticipantUpdateWithoutMemesInput>, ParticipantUncheckedUpdateWithoutMemesInput>
  }

  export type LaneUpdateOneWithoutMemesNestedInput = {
    create?: XOR<LaneCreateWithoutMemesInput, LaneUncheckedCreateWithoutMemesInput>
    connectOrCreate?: LaneCreateOrConnectWithoutMemesInput
    upsert?: LaneUpsertWithoutMemesInput
    disconnect?: LaneWhereInput | boolean
    delete?: LaneWhereInput | boolean
    connect?: LaneWhereUniqueInput
    update?: XOR<XOR<LaneUpdateToOneWithWhereWithoutMemesInput, LaneUpdateWithoutMemesInput>, LaneUncheckedUpdateWithoutMemesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ParticipantCreateWithoutRetroInput = {
    id?: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
    memes?: MemeEntryCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutRetroInput = {
    id?: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
    memes?: MemeEntryUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutRetroInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutRetroInput, ParticipantUncheckedCreateWithoutRetroInput>
  }

  export type ParticipantCreateManyRetroInputEnvelope = {
    data: ParticipantCreateManyRetroInput | ParticipantCreateManyRetroInput[]
  }

  export type MemeEntryCreateWithoutRetroInput = {
    id?: string
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
    participant: ParticipantCreateNestedOneWithoutMemesInput
    lane?: LaneCreateNestedOneWithoutMemesInput
  }

  export type MemeEntryUncheckedCreateWithoutRetroInput = {
    id?: string
    participantId: string
    laneId?: string | null
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type MemeEntryCreateOrConnectWithoutRetroInput = {
    where: MemeEntryWhereUniqueInput
    create: XOR<MemeEntryCreateWithoutRetroInput, MemeEntryUncheckedCreateWithoutRetroInput>
  }

  export type MemeEntryCreateManyRetroInputEnvelope = {
    data: MemeEntryCreateManyRetroInput | MemeEntryCreateManyRetroInput[]
  }

  export type LaneCreateWithoutRetroInput = {
    id?: string
    title: string
    order: number
    memes?: MemeEntryCreateNestedManyWithoutLaneInput
  }

  export type LaneUncheckedCreateWithoutRetroInput = {
    id?: string
    title: string
    order: number
    memes?: MemeEntryUncheckedCreateNestedManyWithoutLaneInput
  }

  export type LaneCreateOrConnectWithoutRetroInput = {
    where: LaneWhereUniqueInput
    create: XOR<LaneCreateWithoutRetroInput, LaneUncheckedCreateWithoutRetroInput>
  }

  export type LaneCreateManyRetroInputEnvelope = {
    data: LaneCreateManyRetroInput | LaneCreateManyRetroInput[]
  }

  export type ParticipantUpsertWithWhereUniqueWithoutRetroInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutRetroInput, ParticipantUncheckedUpdateWithoutRetroInput>
    create: XOR<ParticipantCreateWithoutRetroInput, ParticipantUncheckedCreateWithoutRetroInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutRetroInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutRetroInput, ParticipantUncheckedUpdateWithoutRetroInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutRetroInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutRetroInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: StringFilter<"Participant"> | string
    retroId?: StringFilter<"Participant"> | string
    displayName?: StringFilter<"Participant"> | string
    avatarColor?: StringNullableFilter<"Participant"> | string | null
    createdAt?: DateTimeFilter<"Participant"> | Date | string
  }

  export type MemeEntryUpsertWithWhereUniqueWithoutRetroInput = {
    where: MemeEntryWhereUniqueInput
    update: XOR<MemeEntryUpdateWithoutRetroInput, MemeEntryUncheckedUpdateWithoutRetroInput>
    create: XOR<MemeEntryCreateWithoutRetroInput, MemeEntryUncheckedCreateWithoutRetroInput>
  }

  export type MemeEntryUpdateWithWhereUniqueWithoutRetroInput = {
    where: MemeEntryWhereUniqueInput
    data: XOR<MemeEntryUpdateWithoutRetroInput, MemeEntryUncheckedUpdateWithoutRetroInput>
  }

  export type MemeEntryUpdateManyWithWhereWithoutRetroInput = {
    where: MemeEntryScalarWhereInput
    data: XOR<MemeEntryUpdateManyMutationInput, MemeEntryUncheckedUpdateManyWithoutRetroInput>
  }

  export type MemeEntryScalarWhereInput = {
    AND?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
    OR?: MemeEntryScalarWhereInput[]
    NOT?: MemeEntryScalarWhereInput | MemeEntryScalarWhereInput[]
    id?: StringFilter<"MemeEntry"> | string
    retroId?: StringFilter<"MemeEntry"> | string
    participantId?: StringFilter<"MemeEntry"> | string
    laneId?: StringNullableFilter<"MemeEntry"> | string | null
    templateId?: StringFilter<"MemeEntry"> | string
    topText?: StringNullableFilter<"MemeEntry"> | string | null
    bottomText?: StringNullableFilter<"MemeEntry"> | string | null
    generatedImageUrl?: StringFilter<"MemeEntry"> | string
    createdAt?: DateTimeFilter<"MemeEntry"> | Date | string
    reactions?: StringFilter<"MemeEntry"> | string
  }

  export type LaneUpsertWithWhereUniqueWithoutRetroInput = {
    where: LaneWhereUniqueInput
    update: XOR<LaneUpdateWithoutRetroInput, LaneUncheckedUpdateWithoutRetroInput>
    create: XOR<LaneCreateWithoutRetroInput, LaneUncheckedCreateWithoutRetroInput>
  }

  export type LaneUpdateWithWhereUniqueWithoutRetroInput = {
    where: LaneWhereUniqueInput
    data: XOR<LaneUpdateWithoutRetroInput, LaneUncheckedUpdateWithoutRetroInput>
  }

  export type LaneUpdateManyWithWhereWithoutRetroInput = {
    where: LaneScalarWhereInput
    data: XOR<LaneUpdateManyMutationInput, LaneUncheckedUpdateManyWithoutRetroInput>
  }

  export type LaneScalarWhereInput = {
    AND?: LaneScalarWhereInput | LaneScalarWhereInput[]
    OR?: LaneScalarWhereInput[]
    NOT?: LaneScalarWhereInput | LaneScalarWhereInput[]
    id?: StringFilter<"Lane"> | string
    retroId?: StringFilter<"Lane"> | string
    title?: StringFilter<"Lane"> | string
    order?: IntFilter<"Lane"> | number
  }

  export type RetroCreateWithoutLanesInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    participants?: ParticipantCreateNestedManyWithoutRetroInput
    memes?: MemeEntryCreateNestedManyWithoutRetroInput
  }

  export type RetroUncheckedCreateWithoutLanesInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    participants?: ParticipantUncheckedCreateNestedManyWithoutRetroInput
    memes?: MemeEntryUncheckedCreateNestedManyWithoutRetroInput
  }

  export type RetroCreateOrConnectWithoutLanesInput = {
    where: RetroWhereUniqueInput
    create: XOR<RetroCreateWithoutLanesInput, RetroUncheckedCreateWithoutLanesInput>
  }

  export type MemeEntryCreateWithoutLaneInput = {
    id?: string
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
    retro: RetroCreateNestedOneWithoutMemesInput
    participant: ParticipantCreateNestedOneWithoutMemesInput
  }

  export type MemeEntryUncheckedCreateWithoutLaneInput = {
    id?: string
    retroId: string
    participantId: string
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type MemeEntryCreateOrConnectWithoutLaneInput = {
    where: MemeEntryWhereUniqueInput
    create: XOR<MemeEntryCreateWithoutLaneInput, MemeEntryUncheckedCreateWithoutLaneInput>
  }

  export type MemeEntryCreateManyLaneInputEnvelope = {
    data: MemeEntryCreateManyLaneInput | MemeEntryCreateManyLaneInput[]
  }

  export type RetroUpsertWithoutLanesInput = {
    update: XOR<RetroUpdateWithoutLanesInput, RetroUncheckedUpdateWithoutLanesInput>
    create: XOR<RetroCreateWithoutLanesInput, RetroUncheckedCreateWithoutLanesInput>
    where?: RetroWhereInput
  }

  export type RetroUpdateToOneWithWhereWithoutLanesInput = {
    where?: RetroWhereInput
    data: XOR<RetroUpdateWithoutLanesInput, RetroUncheckedUpdateWithoutLanesInput>
  }

  export type RetroUpdateWithoutLanesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    participants?: ParticipantUpdateManyWithoutRetroNestedInput
    memes?: MemeEntryUpdateManyWithoutRetroNestedInput
  }

  export type RetroUncheckedUpdateWithoutLanesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    participants?: ParticipantUncheckedUpdateManyWithoutRetroNestedInput
    memes?: MemeEntryUncheckedUpdateManyWithoutRetroNestedInput
  }

  export type MemeEntryUpsertWithWhereUniqueWithoutLaneInput = {
    where: MemeEntryWhereUniqueInput
    update: XOR<MemeEntryUpdateWithoutLaneInput, MemeEntryUncheckedUpdateWithoutLaneInput>
    create: XOR<MemeEntryCreateWithoutLaneInput, MemeEntryUncheckedCreateWithoutLaneInput>
  }

  export type MemeEntryUpdateWithWhereUniqueWithoutLaneInput = {
    where: MemeEntryWhereUniqueInput
    data: XOR<MemeEntryUpdateWithoutLaneInput, MemeEntryUncheckedUpdateWithoutLaneInput>
  }

  export type MemeEntryUpdateManyWithWhereWithoutLaneInput = {
    where: MemeEntryScalarWhereInput
    data: XOR<MemeEntryUpdateManyMutationInput, MemeEntryUncheckedUpdateManyWithoutLaneInput>
  }

  export type RetroCreateWithoutParticipantsInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    memes?: MemeEntryCreateNestedManyWithoutRetroInput
    lanes?: LaneCreateNestedManyWithoutRetroInput
  }

  export type RetroUncheckedCreateWithoutParticipantsInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    memes?: MemeEntryUncheckedCreateNestedManyWithoutRetroInput
    lanes?: LaneUncheckedCreateNestedManyWithoutRetroInput
  }

  export type RetroCreateOrConnectWithoutParticipantsInput = {
    where: RetroWhereUniqueInput
    create: XOR<RetroCreateWithoutParticipantsInput, RetroUncheckedCreateWithoutParticipantsInput>
  }

  export type MemeEntryCreateWithoutParticipantInput = {
    id?: string
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
    retro: RetroCreateNestedOneWithoutMemesInput
    lane?: LaneCreateNestedOneWithoutMemesInput
  }

  export type MemeEntryUncheckedCreateWithoutParticipantInput = {
    id?: string
    retroId: string
    laneId?: string | null
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type MemeEntryCreateOrConnectWithoutParticipantInput = {
    where: MemeEntryWhereUniqueInput
    create: XOR<MemeEntryCreateWithoutParticipantInput, MemeEntryUncheckedCreateWithoutParticipantInput>
  }

  export type MemeEntryCreateManyParticipantInputEnvelope = {
    data: MemeEntryCreateManyParticipantInput | MemeEntryCreateManyParticipantInput[]
  }

  export type RetroUpsertWithoutParticipantsInput = {
    update: XOR<RetroUpdateWithoutParticipantsInput, RetroUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RetroCreateWithoutParticipantsInput, RetroUncheckedCreateWithoutParticipantsInput>
    where?: RetroWhereInput
  }

  export type RetroUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RetroWhereInput
    data: XOR<RetroUpdateWithoutParticipantsInput, RetroUncheckedUpdateWithoutParticipantsInput>
  }

  export type RetroUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    memes?: MemeEntryUpdateManyWithoutRetroNestedInput
    lanes?: LaneUpdateManyWithoutRetroNestedInput
  }

  export type RetroUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    memes?: MemeEntryUncheckedUpdateManyWithoutRetroNestedInput
    lanes?: LaneUncheckedUpdateManyWithoutRetroNestedInput
  }

  export type MemeEntryUpsertWithWhereUniqueWithoutParticipantInput = {
    where: MemeEntryWhereUniqueInput
    update: XOR<MemeEntryUpdateWithoutParticipantInput, MemeEntryUncheckedUpdateWithoutParticipantInput>
    create: XOR<MemeEntryCreateWithoutParticipantInput, MemeEntryUncheckedCreateWithoutParticipantInput>
  }

  export type MemeEntryUpdateWithWhereUniqueWithoutParticipantInput = {
    where: MemeEntryWhereUniqueInput
    data: XOR<MemeEntryUpdateWithoutParticipantInput, MemeEntryUncheckedUpdateWithoutParticipantInput>
  }

  export type MemeEntryUpdateManyWithWhereWithoutParticipantInput = {
    where: MemeEntryScalarWhereInput
    data: XOR<MemeEntryUpdateManyMutationInput, MemeEntryUncheckedUpdateManyWithoutParticipantInput>
  }

  export type RetroCreateWithoutMemesInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    participants?: ParticipantCreateNestedManyWithoutRetroInput
    lanes?: LaneCreateNestedManyWithoutRetroInput
  }

  export type RetroUncheckedCreateWithoutMemesInput = {
    id?: string
    shareId?: string
    title: string
    teamName?: string | null
    createdAt?: Date | string
    status?: string
    participants?: ParticipantUncheckedCreateNestedManyWithoutRetroInput
    lanes?: LaneUncheckedCreateNestedManyWithoutRetroInput
  }

  export type RetroCreateOrConnectWithoutMemesInput = {
    where: RetroWhereUniqueInput
    create: XOR<RetroCreateWithoutMemesInput, RetroUncheckedCreateWithoutMemesInput>
  }

  export type ParticipantCreateWithoutMemesInput = {
    id?: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
    retro: RetroCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateWithoutMemesInput = {
    id?: string
    retroId: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
  }

  export type ParticipantCreateOrConnectWithoutMemesInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutMemesInput, ParticipantUncheckedCreateWithoutMemesInput>
  }

  export type LaneCreateWithoutMemesInput = {
    id?: string
    title: string
    order: number
    retro: RetroCreateNestedOneWithoutLanesInput
  }

  export type LaneUncheckedCreateWithoutMemesInput = {
    id?: string
    retroId: string
    title: string
    order: number
  }

  export type LaneCreateOrConnectWithoutMemesInput = {
    where: LaneWhereUniqueInput
    create: XOR<LaneCreateWithoutMemesInput, LaneUncheckedCreateWithoutMemesInput>
  }

  export type RetroUpsertWithoutMemesInput = {
    update: XOR<RetroUpdateWithoutMemesInput, RetroUncheckedUpdateWithoutMemesInput>
    create: XOR<RetroCreateWithoutMemesInput, RetroUncheckedCreateWithoutMemesInput>
    where?: RetroWhereInput
  }

  export type RetroUpdateToOneWithWhereWithoutMemesInput = {
    where?: RetroWhereInput
    data: XOR<RetroUpdateWithoutMemesInput, RetroUncheckedUpdateWithoutMemesInput>
  }

  export type RetroUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    participants?: ParticipantUpdateManyWithoutRetroNestedInput
    lanes?: LaneUpdateManyWithoutRetroNestedInput
  }

  export type RetroUncheckedUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    participants?: ParticipantUncheckedUpdateManyWithoutRetroNestedInput
    lanes?: LaneUncheckedUpdateManyWithoutRetroNestedInput
  }

  export type ParticipantUpsertWithoutMemesInput = {
    update: XOR<ParticipantUpdateWithoutMemesInput, ParticipantUncheckedUpdateWithoutMemesInput>
    create: XOR<ParticipantCreateWithoutMemesInput, ParticipantUncheckedCreateWithoutMemesInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutMemesInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutMemesInput, ParticipantUncheckedUpdateWithoutMemesInput>
  }

  export type ParticipantUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retro?: RetroUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaneUpsertWithoutMemesInput = {
    update: XOR<LaneUpdateWithoutMemesInput, LaneUncheckedUpdateWithoutMemesInput>
    create: XOR<LaneCreateWithoutMemesInput, LaneUncheckedCreateWithoutMemesInput>
    where?: LaneWhereInput
  }

  export type LaneUpdateToOneWithWhereWithoutMemesInput = {
    where?: LaneWhereInput
    data: XOR<LaneUpdateWithoutMemesInput, LaneUncheckedUpdateWithoutMemesInput>
  }

  export type LaneUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    retro?: RetroUpdateOneRequiredWithoutLanesNestedInput
  }

  export type LaneUncheckedUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCreateManyRetroInput = {
    id?: string
    displayName: string
    avatarColor?: string | null
    createdAt?: Date | string
  }

  export type MemeEntryCreateManyRetroInput = {
    id?: string
    participantId: string
    laneId?: string | null
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type LaneCreateManyRetroInput = {
    id?: string
    title: string
    order: number
  }

  export type ParticipantUpdateWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memes?: MemeEntryUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memes?: MemeEntryUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeEntryUpdateWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
    participant?: ParticipantUpdateOneRequiredWithoutMemesNestedInput
    lane?: LaneUpdateOneWithoutMemesNestedInput
  }

  export type MemeEntryUncheckedUpdateWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    laneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type MemeEntryUncheckedUpdateManyWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    laneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type LaneUpdateWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    memes?: MemeEntryUpdateManyWithoutLaneNestedInput
  }

  export type LaneUncheckedUpdateWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    memes?: MemeEntryUncheckedUpdateManyWithoutLaneNestedInput
  }

  export type LaneUncheckedUpdateManyWithoutRetroInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MemeEntryCreateManyLaneInput = {
    id?: string
    retroId: string
    participantId: string
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type MemeEntryUpdateWithoutLaneInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
    retro?: RetroUpdateOneRequiredWithoutMemesNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutMemesNestedInput
  }

  export type MemeEntryUncheckedUpdateWithoutLaneInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type MemeEntryUncheckedUpdateManyWithoutLaneInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type MemeEntryCreateManyParticipantInput = {
    id?: string
    retroId: string
    laneId?: string | null
    templateId: string
    topText?: string | null
    bottomText?: string | null
    generatedImageUrl: string
    createdAt?: Date | string
    reactions?: string
  }

  export type MemeEntryUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
    retro?: RetroUpdateOneRequiredWithoutMemesNestedInput
    lane?: LaneUpdateOneWithoutMemesNestedInput
  }

  export type MemeEntryUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    laneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }

  export type MemeEntryUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    retroId?: StringFieldUpdateOperationsInput | string
    laneId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: StringFieldUpdateOperationsInput | string
    topText?: NullableStringFieldUpdateOperationsInput | string | null
    bottomText?: NullableStringFieldUpdateOperationsInput | string | null
    generatedImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RetroCountOutputTypeDefaultArgs instead
     */
    export type RetroCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RetroCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LaneCountOutputTypeDefaultArgs instead
     */
    export type LaneCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaneCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParticipantCountOutputTypeDefaultArgs instead
     */
    export type ParticipantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParticipantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RetroDefaultArgs instead
     */
    export type RetroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RetroDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LaneDefaultArgs instead
     */
    export type LaneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParticipantDefaultArgs instead
     */
    export type ParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParticipantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemeTemplateDefaultArgs instead
     */
    export type MemeTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemeTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemeEntryDefaultArgs instead
     */
    export type MemeEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemeEntryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}