export function filterWiki(data) {
  const results = data.results || [];
  const result = results[0] || {};
  const body = result.body || {};
  const view = body.view || {};
  const value = view.value || '';

  return {
    value
  }
}

export function filterWikiParent(data) {
  return data.results.map(result => {
    return {
      id: result.id,
      title: result.title
    }
  });
}
