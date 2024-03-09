// import logging
// import json
// import os
// import boto3

// LOGGER = logging.getLogger()
// LOGGER.setLevel(logging.INFO)

// def handler(event, context):
//     s3 = boto3.client("s3")
//     symbol = event.get('queryStringParameters', {}).get('symbol')
//     filename = f"{symbol}_data.json"
//     bucket_name = os.getenv("GLOBAL_S3_NAME")
//     group_name = os.getenv("GROUP_NAME")
//     dirc = "/finance_data/"

//     # Full path
//     s3_key = group_name + dirc + filename

//     try:
//         LOGGER.info(f"Received event: {event}")
//         obj = s3.get_object(Bucket=bucket_name, Key=s3_key)
//     except Exception as e:
//         LOGGER.error(f"Retrieval Error: {e}")
//         return {
//             "statusCode": 500,
//             "body": '{"status":"Server error"}',
//             "headers": {
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "*",
//                 "Access-Control-Allow-Methods": "GET",
//                 "Access-Control-Allow-Headers": "Content-Type",
//             },
//         }

//     data = obj["Body"].read()

//     return {
//         "statusCode": 200,
//         "body": data,
//         "headers": {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET",
//             "Access-Control-Allow-Headers": "Content-Type",
//         },
//     }
