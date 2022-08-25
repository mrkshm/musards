export function sortDesc(a, b) {
  if (a.fields.order > b.fields.order) {
    return -1;
  }
  if (a.fields.order < b.fields.order) {
    return 1;
  }
  return 0;
}

export function sortAsc(a, b) {
  if (a.fields.order < b.fields.order) {
    return -1;
  }
  if (a.fields.order > b.fields.order) {
    return 1;
  }
  return 0;
}
