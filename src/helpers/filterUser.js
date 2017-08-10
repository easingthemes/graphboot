export function filterUser(data) {
  const issues = data.issues || [];
  const issue = issues[0] || {};
  const fields = issue.fields || {};
  const personalData = fields.customfield_10209 || {};

  return {
    id: issue.id,
    key: issue.key,
    displayName: personalData.displayName,
    username: personalData.name,
    lastName: fields.customfield_14506,
    firstName: fields.customfield_14508,
    email: personalData.emailAddress,
    avatarUrls: personalData.avatarUrls,
    pathway: fields.customfield_14711,
  }
}
