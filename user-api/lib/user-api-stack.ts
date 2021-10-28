import * as cdk from '@aws-cdk/core';
import { UserApiBaseStack } from './user-api-local-base-stack';

export class UserApiStack extends UserApiBaseStack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // AppSync

    // AppSync Datasources

    // AppSync Functions

    // AppSync Resolvers

    // Outputs
  }
}
