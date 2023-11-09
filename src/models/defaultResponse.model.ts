export type DefaultResponse<T> = {
    page: number,
    perPage: number,
    totalItems: number,
    totalPages: number,
    items: T[]
}