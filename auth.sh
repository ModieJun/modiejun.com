CODE=NrPBjIQ5SmbuUvvdb5eKk1WljuQGT-1tXEzUHE2r2Q4
CLIENT_ID=TaupGUOmU_-q_Ho1_xRPeFlhtgLSb_rcDOFjVMxaU2I
CLIENT_SECRET=-mRJHiKoDvQ6_2LhY0Nxmq86a5ISw6T5uAwtEuX7E_Q
REDIRECT_URI="http%3A%2F%2Flocalhost%3A3000%2F" # https://localhost:3000/ URL-encoded
GRANT_TYPE="authorization_code"
TOKEN_EXCHANGE_URL="https://auth.teamsnap.com/oauth/token"

curl -X GET "$TOKEN_EXCHANGE_URL?client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&redirect_uri=$REDIRECT_URI&code=$CODE&grant_type=$GRANT_TYPE"