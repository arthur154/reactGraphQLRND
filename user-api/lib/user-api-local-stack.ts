import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigatewayv2';
import * as apigatewayintegrations from '@aws-cdk/aws-apigatewayv2-integrations';
import { UserApiBaseStack } from './user-api-local-base-stack';

export class UserApiLocalStack extends UserApiBaseStack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Proxy Integration
    const userApiIntegration = new apigatewayintegrations.HttpProxyIntegration({
        url: 'https://user-api.myproxy.internal',
    });

    // Lambda Proxy Integration
    const getUserApiDefaultIntegration = new apigatewayintegrations.LambdaProxyIntegration({
        handler: this.getUserFunction
    });

    const getUsersApiDefaultIntegration = new apigatewayintegrations.LambdaProxyIntegration({
        handler: this.getUsersFunction
    });

    // API Gateway
    const userApiGateway = new apigateway.HttpApi(this, 'UserApi');

    // API Routes
    userApiGateway.addRoutes({
        path: '/user',
        methods: [ apigateway.HttpMethod.GET ],
        integration: userApiIntegration
    });
    userApiGateway.addRoutes({
        path: '/user',
        methods: [ apigateway.HttpMethod.ANY ],
        integration: getUserApiDefaultIntegration
    });

    userApiGateway.addRoutes({
        path: '/users',
        methods: [ apigateway.HttpMethod.GET ],
        integration: userApiIntegration
    });
    userApiGateway.addRoutes({
        path: '/users',
        methods: [ apigateway.HttpMethod.ANY ],
        integration: getUsersApiDefaultIntegration
    });
    
    // Outputs
  }
}
