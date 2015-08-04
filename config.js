module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Chicago Web Friends',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'chicagowebfriends.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-8463098420-8463090530-8630890163-76772d'
};
