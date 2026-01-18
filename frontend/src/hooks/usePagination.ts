export function usePagination<T>(data: T[], pageSize = 5) {
  const totalPages = Math.ceil(data.length / pageSize)

  const getPage = (page: number) => {
    const start = (page - 1) * pageSize
    return data.slice(start, start + pageSize)
  }

  return { totalPages, getPage }
}