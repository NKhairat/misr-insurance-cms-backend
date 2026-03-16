// create-issues.js

// This script creates 10 issues in the repository.

const octokit = require('@octokit/rest')();

// Replace with your GitHub repository information
const owner = 'NKhairat';
const repo = 'misr-insurance-cms-backend';

// Function to create an issue
async function createIssue(title, body) {
    try {
        const response = await octokit.issues.create({
            owner,
            repo,
            title,
            body,
        });
        console.log('Issue created: ' + response.data.html_url);
    } catch (error) {
        console.error('Error creating issue:', error);
    }
}

// List of user stories with detailed technical implementation
const userStories = [
    {
        title: 'User Story 1',
        body: 'Detailed description of User Story 1 with implementation details...'
    },
    {
        title: 'User Story 2',
        body: 'Detailed description of User Story 2 with implementation details...'
    },
    {
        title: 'User Story 3',
        body: 'Detailed description of User Story 3 with implementation details...'
    },
    {
        title: 'User Story 4',
        body: 'Detailed description of User Story 4 with implementation details...'
    },
    {
        title: 'User Story 5',
        body: 'Detailed description of User Story 5 with implementation details...'
    },
    {
        title: 'User Story 6',
        body: 'Detailed description of User Story 6 with implementation details...'
    },
    {
        title: 'User Story 7',
        body: 'Detailed description of User Story 7 with implementation details...'
    },
    {
        title: 'User Story 8',
        body: 'Detailed description of User Story 8 with implementation details...'
    },
    {
        title: 'User Story 9',
        body: 'Detailed description of User Story 9 with implementation details...'
    },
    {
        title: 'User Story 10',
        body: 'Detailed description of User Story 10 with implementation details...'
    }
];

// Iterating through user stories to create issues
(async () => {
    for (const story of userStories) {
        await createIssue(story.title, story.body);
    }
})();