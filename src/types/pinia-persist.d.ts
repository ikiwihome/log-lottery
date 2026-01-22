import 'pinia'

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
        persist?: {
            enabled?: boolean
            strategies?: Array<{
                storage?: Storage
                key?: string
                paths?: string[]
            }>
        }
    }
}
