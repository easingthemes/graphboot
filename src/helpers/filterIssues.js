export function filterIssues(data) {
  const issues = data.issues || [];
  const total = data.total;
  let epicName = '';

  const badges = issues.map(issue => {
    const fields = issue.fields || {};
    const status = fields.status || {};
    const epic = fields.epic || {};
    epicName = epic.name;

    return {
      id: issue.id,
      key: issue.key,
      name: fields.summary,
      status: status.name,
      epic: epic.name
    }
  });

  return {
    epicName,
    badges,
    total
  }
}
