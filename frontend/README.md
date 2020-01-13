# laptop-invertory-management : frontend
it is the frontend of laptop-inventory-management app, the code is written in react js and designed with @material-ui and it has two phases ( see only and admin page  ) <br/>
The main application pages has the Cards of laptop with their particular details (brand namee, owner, status, charger ) and image of the laptop <br/>
On clicking to the laptop (image/card), one new page will open with the whole details of the laptop which contains laptop specifications, description, maintenance detials, and owner details.

<b>Admin page : </b> Only assigned emails can login to this page with google signin. and the super admin can assign new multiple admins and admin can add / remove other admins except super admin. <br/>
Admin can post new laptops and also can update other details of the laptop. <br/>
Owner details and Maintenance details will exist with their date and also will have proper data from posting a new laptop to the present time. <br/>
Currently the app is running on http://ngapp.ml visit to see.

## Requirements and execution
1. First and foremost, open your terminal and type git clone https://github.com/jagannath-swarnkar/laptop-invertory-management.git to clone this repository. <br/>
2. Go to the <b>laptop-invertory-management and to Frontend</b> directory
3. Install the necessary dependencies to your app by running `npm install` on the terminal.<br/>
4. Launch the development build of the app, by running `npm start` on the terminal.<br/>
5. Visit http://localhost:3000 to use the app.<br/>
6. Start the Backend server as well. Go to <b>backend</b> directory of this repo, and after navigating the directory, type `npm install` to install the necessary dependencies. (setup your mysql details, <a href="https://github.com/jagannath-swarnkar/laptop-invertory-management/tree/master/backend" >`Click here for backend`</a> )
7. Now, you can start your Backend server, by typing `nodemon server.js` or `node server.js`.
Happy Coding :)
