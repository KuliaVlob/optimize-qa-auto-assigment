# Optimove QA Automation Assignment

Welcome to the Optimove QA Automation Assignment project! This repository contains the automation solution for a specific QA assignment provided by Optimove. The purpose of this project is to demonstrate automated testing skills using Cypress, a powerful end-to-end testing framework.

Table of Contents

- Introduction
- Getting Started
 - Prerequisites
 - Installation
- Project Structure
- Usage

## Introduction

This project is a QA automation assignment implementation for Optimove. It is designed to showcase how to automate the testing of specific features or scenarios using Cypress, a JavaScript-based testing framework.

Please note that this repository may contain sensitive information specific to the assignment and the development environment. Be cautious when sharing or cloning this repository.

## Getting Started

### Prerequisites
Before running the automation scripts, you need to have the following tools installed on your system:

1. Node.js - JavaScript runtime used for executing Cypress tests.
1. npm - Node package manager to install Cypress and other dependencies.
1. Chrome or Firefox browser - Cypress supports running tests on these browsers.

### Installation
Clone the repository:
```
git clone https://github.com/KuliaVlob/optimove-qa-auto-assigment.git
```
Alternatively, you can download and extract the repository as a ZIP archive.
Change the current directory to the project:
```
cd optimove-qa-auto-assigment
```
Install the required dependencies:
```
npm install
```
## Project Structure

- cypress/: This directory contains the Cypress test scripts written in JavaScript.
- cypress/e2e/: The cypress/integration/ directory contains the actual test files.
- cypress/support/: This directory includes support files that may be used to extend Cypress' functionality or set up test data.
- cypress/fixtures/: Contains test data in structured formats like JSON.

## Usage

For example, running the entire test suite:
```
npx cypress run
```
Running tests with a specific tag:
```
npx cypress run --tag <tag_name>
```
