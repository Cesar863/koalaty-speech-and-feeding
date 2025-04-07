package com.koalatyspeechandfeeding

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.ses.SesClient
import software.amazon.awssdk.services.ses.model.Body
import software.amazon.awssdk.services.ses.model.Content
import software.amazon.awssdk.services.ses.model.Destination
import software.amazon.awssdk.services.ses.model.Message
import software.amazon.awssdk.services.ses.model.SendEmailRequest

class ContactService : RequestHandler<Map<String, Any>, Map<String, Any>> {
    override fun handleRequest(input: Map<String, Any>, context: Context?): Map<String, Any> {
        val logger = context?.logger ?: return errorResponse("Logger not available")
        val json = Json { ignoreUnknownKeys = true }

        val rawBody = input["body"]?.toString()
            ?: return errorResponse("Missing 'body' from API Gateway event")

        val payload = try {
            json.decodeFromString<ContactForm>(rawBody)
        } catch (e: Exception) {
            return errorResponse("Failed to parse request body: ${e.message}")
        }

        val emailBody = """
            Name: ${payload.name}
            Phone: ${payload.phoneNumber}
            Email: ${payload.email}
            Message:
            ${payload.body}
        """.trimIndent()

        val sesClient = SesClient.builder().region(Region.US_EAST_1).build()

        val request = SendEmailRequest.builder()
            .destination(
                Destination.builder()
                    .toAddresses("charity.bobo@koalatyspeechandfeeding.com")
                    .build()
            )
            .message(
                Message.builder()
                    .subject(Content.builder().data("New Inquiry from ${payload.name}").build())
                    .body(
                        Body.builder()
                            .text(Content.builder().data(emailBody).build())
                            .build()
                    )
                    .build()
            )
            .source("charityboboslp@gmail.com")
            .build()

        return try {
            val result = sesClient.sendEmail(request)
            logger.log("Email sent! Message ID: ${result.messageId()}")
            successResponse()
        } catch (e: Exception) {
            logger.log("Failed to send email: ${e.message}")
            errorResponse("Failed to send email: ${e.message}")
        }
    }

    private fun successResponse(): Map<String, Any> {
        return mapOf(
            "statusCode" to 200,
            "headers" to mapOf(
                "Access-Control-Allow-Origin" to "http://localhost:3000",
                "Access-Control-Allow-Headers" to "Content-Type",
                "Access-Control-Allow-Methods" to "OPTIONS,POST"
            ),
            "body" to """{"status":"Email sent successfully!"}"""
        )
    }

    private fun errorResponse(message: String): Map<String, Any> {
        return mapOf(
            "statusCode" to 500,
            "headers" to mapOf(
                "Access-Control-Allow-Origin" to "http://localhost:3000",
                "Access-Control-Allow-Headers" to "Content-Type",
                "Access-Control-Allow-Methods" to "OPTIONS,POST"
            ),
            "body" to """{"error":"$message"}"""
        )
    }
}

@Serializable
data class ContactForm(
    val name: String,
    val phoneNumber: String,
    val email: String,
    val body: String
)