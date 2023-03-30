export const mapToCollection = <A, B>(collection: A[], mapFn: (arg0: any) => B): B[] =>
  Array.isArray(collection) ? collection.map(mapFn) : [];
