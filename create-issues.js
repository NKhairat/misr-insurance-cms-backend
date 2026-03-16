// create-issues.js

const axios = require('axios');

// Configuration
const GITHUB_API_URL = 'https://api.github.com';
const REPO_OWNER = 'NKhairat';
const REPO_NAME = 'misr-insurance-cms-backend';
const TOKEN = 'YOUR_GITHUB_TOKEN'; // Replace with your GitHub token

const issues = [
    { title: 'User Story 1', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 2', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 3', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 4', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 5', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 6', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 7', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 8', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 9', body: 'As a user, I want to...', labels: ['user story'] },
    { title: 'User Story 10', body: 'As a user, I want to...', labels: ['user story'] }
];

const createIssue = async (issue) => {
    const response = await axios.post(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues`, issue, {
        headers: {
            Authorization: `token ${TOKEN}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

const createAllIssues = async () => {
    for (const issue of issues) {
        try {
            const createdIssue = await createIssue(issue);
            console.log(`Issue created: ${createdIssue.html_url}`);
        } catch (error) {
            console.error(`Failed to create issue: ${error.message}`);
        }
    }
};

createAllIssues();
