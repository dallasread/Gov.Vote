"role": "arn:aws:iam::262478563235:role/HelloFocusAPI",
"operationId": "HelloFocus-Accounts-Create",
"arn": "arn:aws:lambda:us-east-1:262478563235:function:HelloFocus-Accounts-Create"


# TODO
- FB Login (save email)
  - Hit /oauth/:provider for URL
  - Send to FBURL?/oauth
  - Return to /oauth?Accesstoken=xxx
  - Save Access Token
  - Redirect to ca.gov.vote
- Vote
- Suggest an issue
- Suggest a stance
- Populate 5 issues

# Bars-App
- HTML Escape
- String literals for helpers
- History API

# API
- /issues/{id}/vote [stanceID]
- FB SDK
- /oauth/:provider
