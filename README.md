# CoderSpace
The backend code is [here](https://github.com/Sabreen-Parveen/CoderSpace-Api)
## Introduction

The main objective of this project is to create a personalized workspace for programmers to manage their day-to-day activities with an analytical dashboard which brings everything at one place and makes it easy to manage.
The workspace is protected, only authorized people, who have the email id and password can access it. I have followed microservices architecture, not monolithic.

Firstly the user will login. I have used the amplify framework, provided by aws for easy integration with aws cognito, when the user logs in, the app sends a request to cognito, which then provides a jwt token, which is stored in local storage to verify that the user stays logged in. Upon account creation, cognito returns a unique id for each user known as subId, this id will also be stored in local storage to identify the user.
Since I am focussing on microservices architecture, there is a separate repository for coderspace's backend, the backend service has a no. of apis, which will interact with the database and Amazon s3. I have used using Amazon s3 for file storage. The frontend will send api requests to the backend and then the backend will call database or api as per requirement.

The overall architecture of the project is:

![image](https://user-images.githubusercontent.com/53360510/187066439-aae2774e-0eed-4161-b139-84cdc48753ae.png)


## Features

The key features implemented in the project are-

### Home Page:

![image](https://user-images.githubusercontent.com/53360510/187066491-6269d20b-89aa-436d-92bd-6f07dbe99db4.png)


### Login and sign up functionality:

To implement login signup feature we have used aws amplify framework which is a part of aws sdk
Upon signup, the user will receive a verification link on his/her email provided as part of the signup process. Upon clicking on the verification link the user gets confirmed.
Then he/she can login using email id and password.
To implement this feature I have used AWS cognito. In the first step the app user signs in through a user pool and receives user pool tokens after a successful authentication. Next, the app exchanges the user pool tokens for AWS credentials through an identity pool. Finally, the app user can then use those AWS credentials to access other AWS services such as Amazon S3 or DynamoDB.

![image](https://user-images.githubusercontent.com/53360510/187066510-479892cf-70c9-4f27-bde0-9a44c9eb290b.png)


#### Tables in Amazon dynamodb:
Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data export tools. I have used dynamodb which is a nosql datastore, due to the ability of nosql databases to have a flexible schema, as application requirements may change in the future and there is no need for a rigid schema for our app.

#### s3 bucket to store files uploaded by the users:
Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements. The public access to the bucket has been blocked, so that only the app which has the permission to use the bucket can access it.

### Dashboard:
The dashboard is the area where a user can navigate to various tabs and options to see the required feature they want to use. The entire frontend is implemented using reactjs and nextjs.

![image](https://user-images.githubusercontent.com/53360510/187066538-22efbfa7-74df-4823-af76-cfb217f73f39.png)


### User Profile page:

This page will show the profile of the user, which will include various details about him/her. Initially it only shows the name and username of the user, but later on I will add some more. A user can also edit his/her profile.

![image](https://user-images.githubusercontent.com/53360510/187066557-b9313b7a-330c-4cbf-90f9-ef3dbc5d281a.png)


### APIs for file uploader and for user profile creation:

File Uploader API:
To upload files in aws S3, I have used AWS SDK for javascript. Controller functions are defined to get the requested data from the models.
The various controller functions are:
uploadFiles: Uploads file in S3, the path of a file is subId(unique id of user)/name of file. The filename is sanitized before sending data to s3, that is names are converted into s3 acceptable form. After the file is uploaded to s3, as a response s3 returns a versionId which is then stored in the files table.
getFileController: This controller is defined to get files from s3, a s3 signed url is generated and using this url a user gets access to the files according to their fileId. By default, all S3 objects are private. Only the object owner has permission to access them. However, the object owner can optionally share objects with others by creating a presigned URL, using their own security credentials, to grant time-limited permission to download the objects.
When a presigned URL is created for the object, you must provide your security credentials and then specify a bucket name, an object key, an HTTP method (GET to download the object), and an expiration date and time. The presigned URLs are valid only for the specified duration. If it is created using a temporary token, then the URL expires when the token expires, even if the URL was created with a later expiration time.
Anyone who receives the presigned URL can then access the object. For example, if you have a video in your bucket and both the bucket and the object are private, you can share the video with others by generating a presigned URL.
getFileController: Used to get all the files of a particular user, the user is identified on the basis of his/her subId which is the userId in the users table
createUser: This controller helps to create a user, the subId is provided from the frontend side, which will then be used as the userId for the user table.

#### Routes:

- POST `/api/files/post` - Post files
- GET `/api/files/user/:id` - Get files by user ID.
- GET `/api/file/:id` - Get a file by ID
- PUT `/api/file/:id` - Update a file using ID
- DELETE `/api/file/:id` - Delete a file by ID
- GET `/api/user/:userId` - Get user by the given userId (subId of the user)
- POST `/api/user/:userId` - Create user with the given userId

### Analyser:
The analyser shows analytics from different competitive coding platforms, so that a user can analyze his/her performance. I have currently added only leetcode.

#### Leetcode:
To view the leetcode profile, the username of the user is entered in the input area, upon the click of the submit button, a function will be called which will call the backend api to get the user data from leetcode. To show the charts, react’s chart js library is used, it provides various interactive charts for visualizing data. As shown in figure total easy questions solved, difficult problems solved and medium problems solved percentage is shown.

![image](https://user-images.githubusercontent.com/53360510/187066592-8077eac8-6273-42b5-bc99-75e03c74d6df.png)


Todo List:
A user can add his day to day activities in the todo list. In this to-do list, a user can check the to-do items and mark them as completed. The items in the list can be edited and deleted.

![image](https://user-images.githubusercontent.com/53360510/187066659-9689e0bb-f67e-42f4-b19a-7be0f37e7e5d.png)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Got to `http://localhost:3000/` to see the development version of the server.
