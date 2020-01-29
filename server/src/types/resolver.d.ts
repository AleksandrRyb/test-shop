export type Resolver = (parrent: any, args: any, content: any, info: any) => any;

export interface Resolvers {
    [key: string]: {
        [key: string]: Resolver
    }
}
