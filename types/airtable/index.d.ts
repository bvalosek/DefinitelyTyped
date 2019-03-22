// Type definitions for airtable 0.5
// Project: https://github.com/airtable/airtable.js
// Definitions by: Brandon Valosek <https://github.com/bvalosek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Airtable {
    base(appId: string): Base
}

interface Base {
    <TFields extends object>(tableName: string): Table<TFields>
}

interface Table<TFields extends object> {
    select(opt?: SelectOptions): Query<TFields>
}

interface SelectOptions {
    view?: string
}

interface Query<TFields extends object> {
    all(): Promise<Response<TFields>>
    firstPage(): Promise<Response<TFields>>
}

type Response<TFields> = ReadonlyArray<Row<TFields>>;

interface Row<TFields> {
    id: string
    fields: TFields
}

export interface Attachment {
    id: string
    url: string
    filename: string
    size: number
    type: string
    thumbnails?: {
        small: Thumbnail
        large: Thumbnail
        full: Thumbnail
    }
}

interface Thumbnail {
    url: string
    width: number
    height: number
}