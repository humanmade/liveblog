### Instructions

1. Get your API keys from Broker
2. Add constants for API_KEY, API_SECRET and CALLBACK_URL
3. Set CALLBACK_URL to 'http://localhost:3000/'
4. Add brokerCredentials property to window.apiHandler in the constructor
5. Add callbackURL property to window.apiHandler
....
- Add onLogin method that calls authorize
- Add button
