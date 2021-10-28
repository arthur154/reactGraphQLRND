import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as config from "../cdk.json";

export class UserApiBaseStack extends cdk.Stack {
  protected getUsersFunction: lambda.Function;
  protected getUserFunction: lambda.Function;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appName = config.appName;

    // Database

    // Lambda Functions
    this.getUsersFunction = new lambda.Function(this, `${appName}-get-users`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "get-users.handler",
      code: lambda.Code.fromAsset("src/functions"),
      timeout: cdk.Duration.seconds(5),
      environment: {},
    });

    this.getUserFunction = new lambda.Function(this, `${appName}-get-user`, {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "get-user.handler",
      code: lambda.Code.fromAsset("src/functions"),
      timeout: cdk.Duration.seconds(5),
      environment: {},
    });

    // Outputs
  }
}
