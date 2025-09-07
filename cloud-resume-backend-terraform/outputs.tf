output "lambda_function_url" {
  description = "URL of the Lambda function"
  value       = aws_lambda_function_url.visitor_counter_url.function_url
}

output "dynamodb_table_name" {
  description = "Name of the DynamoDB table"
  value       = aws_dynamodb_table.visitor_counter.name
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.visitor_counter.function_name
}
