# My-Blog

My Blog is a MEAN stack (MongoDB, ExpressJS, Angular 2, NodeJS) Single Page Application.  This application allows users to post new blogs, edit or delete existing blogs, and also post comments, like or dislike blogs.  

## Requirements

* MongoDB
* @angular/cli 
* NodeJS

## Installation & Setup

1. Clone the repository: ```$ git clone https://github.com/quanweilena/My-Blog.git```
2. Go into the main directory: ```$ cd My-Blog```
3. Install the required packages: ```$ npm install ```
4. Go into the client directory: ```$ cd client```
5. Install Angular 2 required packages: ```$ npm install```
6. Go back to the main directory: ```$ cd ..```
7. Build the application: ```$ npm run build```
8. Start the local application: ```$ npm start```
9. Access the API at [http://localhost:8080]

## Features

### Register

	- Automatically display help hint (if username or email is available; if username, email or password meets the criteria);
	- The 'Submit' button is only enabled if all the fields are filled satisfactorily;
	- Automatically display message when successfully registered and redirect to Login page after 2s.

### Login

	- Uses can log into existing accounts using only correct match of username and password;
	- Automatically display message when successfully logged in and redirect to Blog page after 2s.

### Post Blogs

	- User can create a new blog by clicking 'NEW POST' on Blog page;  
	- Blog title and body are required when creating a new blog.  Help hints will be displayed when needed;
	- User can discard a new post anytime by clicking 'GO BACK';
	- Message is shown when successfully post a new blog;
	- Automatically redirect to Blog page after posting.

## Authors

* **Dan Zhou**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.