To run this app locally: npm run dev
Prerequisite: npm install -g nodemon
https://nodemon.io/

To deploy this app to AWS: serverless deploy --verbose
Prerequisite: npm install -g serverless
https://www.serverless.com/
Configure serverless deployment user: serverless config credentials --provider aws --key {{aws_user_access_key}} --secret {{aws_user_secret}} -o
