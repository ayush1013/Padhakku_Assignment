# Padhakku_Assignment

# User Sign-Up and Post Management API

This API provides endpoints for user sign-up, creating posts, deleting posts, and fetching user's posts.

## API Link

[API Link](https://navy-blue-skunk-wig.cyclic.app)

## Endpoints

### 1. User Sign-Up API

- **Method:** `POST`
- **Endpoint:** `/api/signup`
- **Request Body:**
  - `name` (string): The user's name.
  - `email` (string): The user's email address.
- **Response:**
  - `200 OK`: Successful user sign-up.

### 2. Create Post API

- **Method:** `POST`
- **Endpoint:** `/api/posts`
- **Request Body:**
  - `userId` (string): The ID of the user creating the post.
  - `content` (string): The content of the post.
- **Response:**
  - `200 OK`: Successfully created.

### 3. Delete Post API

- **Method:** `DELETE`
- **Endpoint:** `/api/deletepost/:postId`
- **Request Params:**
  - `postId` (string): The ID of the post to be deleted.
- **Request Body:**
  -`userId` (string): The ID of the user
- **Response:**
  - `200 OK`: Successful post deletion.

### 4. Fetch User's Posts API

- **Method:** `GET`
- **Endpoint:** `/api/posts/:userId`
- **Request Params:**
  - `userId` (string): The ID of the user whose posts are to be fetched.
- **Response:**
  - `200`: All the posts from the user.
