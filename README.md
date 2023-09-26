# Trello-clone-task
This is a Trello-inspired clone where users can create boards, each with customizable stages like "To Do," "Doing," and "Done." Within these stages, users can manage multiple tasks with the convenience of drag-and-drop functionality, enabling easy task organization within and across stages.

![Application image](./Screenshot%202023-09-26%20142721.png)

## Tech-stack
1.React
2.Tailwindcss
3.Typescript
4.Dnd-kit
5.vite

## Questions and answers
1. How would tables and APIs change if a user can create and edit stages for a particular board?

Tables: We would need to add a "Stages" table to store the stages for each board. This table would have columns like "Stage ID," "Board ID," and "Stage Name."

API Endpoints: We would need to add the following API endpoints:
- `POST /api/boards/{boardId}/stages`: To create a new stage for a specific board.
- `PUT /api/stages/{stageId}`: To edit the name of a stage.
- `DELETE /api/stages/{stageId}`: To delete a stage.

2. If users can comment on tasks?

Tables: We would need to add a "Comments" table to store comments related to tasks. This table would have columns like "Comment ID," "Task ID," "User ID," and "Comment Text."

API Endpoints: We would need to add the following API endpoints:
- `POST /api/tasks/{taskId}/comments`: To add a comment to a specific task.
- `PUT /api/comments/{commentId}`: To edit a comment.
- `DELETE /api/comments/{commentId}`: To delete a comment.

3. How will you do error handling?

For error handling, we can implement the following:
- HTTP Status Codes: Return appropriate HTTP status codes such as 400 for bad requests, 404 for not found, 500 for server errors, etc.
- Error Messages: Include informative error messages in the API responses to help developers understand the issue.
- Try-Catch: Use try-catch blocks to handle exceptions and errors in the code.
- Testing: Implement unit and integration tests to catch errors during development.
