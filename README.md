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

	* Automatically display help hint (if username or email is available; if username, email or password meets the criteria);
	* The 'Submit' button is only enabled if all the fields are filled satisfactorily;
	* Automatically display message when successfully registered and redirect to Login page after 2s.

### Login

	* Users can log into existing accounts using only correct match of username and password;
	* Automatically display message when successfully logged in and redirect to Blog page after 2s.

### Profile

	* Users can access their profile after logged in by clicking 'Profile' on the navigation bar.

### Post Blogs

	* User can create a new blog by clicking 'NEW POST' on Blog page;  
	* Blog title and body are required when creating a new blog.  Help hints will be displayed when needed;
	* User can discard a new post anytime by clicking 'GO BACK';
	* Message is shown when successfully post a new blog;
	* Automatically redirect to Blog page after posting; 
	* Creator and post date are also displayed for each post.

### Edit Blogs

	* The blog creater can edit his/her own blogs when logged in by clicking the 'EDIT' button;
	* Both title and body can be edited;
	* Click 'SAVE CHANGES' to confirm changes; 
	* Click 'GO BACK' to discard changes;
	* Click 'Delete' to delete the blog.

### Delete Blogs

	* The blog creater can delete his/her own blogs when logged in by clicking the 'DELETE' button;
	* A confirm window is displayed, click 'YES' to confirm or 'NO' to cancel;
	* The blog is also displayed below the confirm window for the user.

### Like/Dislike Blogs

	* User can only like/dislike other users' blog by clicking 'LIKE'/'DISLIKE' button;
	* User can only either like or dislike a certain blog;
	* The numbers of likes and dislikes are displayed;
	* When hover on the 'LIKE'/'DISLIKE' button, a list of likers/dislikers is displayed below the button. By clicking the username in this list, user can access the public profile of that liker/disliker.

### Comments

	* Users can post comments on any blogs by clicking 'POST COMMENT' button;
	* Users can choose to show/hide comments;
	* The blog creator can delete any comment for his/her own blogs;
	* Users can delete their own comments.

## Authors

* **Dan Zhou**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.