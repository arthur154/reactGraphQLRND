# Graph QL User API

## Project Startup
cdk init  app --language=typescript
cdk bootstrap

## Install sam-beta-cdk
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-cdk-getting-started.html
sam-beta-cdk --version
sam-beta-cdk local start-api --warm-containers EAGER

## Useful commands
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
