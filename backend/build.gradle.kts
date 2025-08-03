plugins {
    kotlin("jvm") version "1.9.22"
    kotlin("plugin.serialization") version "1.9.22"
    application
    id("com.github.johnrengelman.shadow") version "8.1.1"
}


repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")
    implementation("com.amazonaws:aws-lambda-java-core:1.2.3")
    implementation("software.amazon.awssdk:ses:2.25.39")
}

application {
    mainClass.set("com.koalatyspeechandfeeding.SimpleEmailLambdaHandler")
}

tasks {
    shadowJar {
        archiveBaseName.set("email-lambda")
        archiveClassifier.set("")
        archiveVersion.set("")
        mergeServiceFiles()
    }
}
