## Quick Start: AngularJS SPA and NodeJS

This repository was created with the intention of simplifying the start up time of a AngularJS single page application running on NodeJS server.

Project was initialized through the use of [Express Generator].  

After running express generator, changes were made to implement Angular SPA, resulting in the following file structure:

```
app.js
routes/
--- api.js
bin/
--- www
public/
--- app/
------ app.js
------ controllers/
--------- controller.js
------ directives/
--------- directive.js
------ services/
--------- service.js
------ views/
--------- index.html
--------- templates/
------------ template.tpl.html
--- js/
------ custom.js
--- styles/
------ custom.css
--- vendor/
------ angular-1.6.6/
------ bootstrap-3.3.7/
package.json
```

-----

### Vendor Files
- AngularJS 1.6.6
- Bootstrap 3.3.7

-----

### Instructions
1. Download repository to local machine
2. Install dependences: 
Run from project root directory ```npm install```
3. Start Server: 
Run from project root directory ```npm run start```
4. Point browser to localhost:3000

-----

### Future Improvements
- improve organization of vendor files
- add Grunt tasks for concatination/minification 
- add unit testing




[Express Generator]: https://www.npmjs.com/package/express-generator