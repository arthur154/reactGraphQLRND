#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UserApiLocalStack } from '../lib/user-api-local-stack';

const app = new cdk.App();

// Build Pipeline Deff

new UserApiLocalStack(app, 'user-api-local-stack');

// Dev Stack Deff (for deploying directly to Dev from your local)
