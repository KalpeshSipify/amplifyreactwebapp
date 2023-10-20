/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_identity_pool_id": "ap-south-1:3f4c90af-c392-433d-ab8b-90f94c2bd43d",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_PfOH3CObh",
    "aws_user_pools_web_client_id": "2s6lg100vof255kdhuvj5u46ap",
    "oauth": {
        "domain": "amplifyreactwebapp36168432-36168432-staging.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:5173/",
        "redirectSignOut": "http://localhost:5173/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_dynamodb_all_tables_region": "ap-south-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "userinfo-staging",
            "region": "ap-south-1"
        }
    ]
};


export default awsmobile;