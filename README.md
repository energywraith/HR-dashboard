# HR-dashboard
An application created for the HR team to help manage applications from potential employees.

### :warning: Still needs a lot of work.

## Features
* Create custom application forms,
* Create and manage job positions (each has a corresponding link that redirects to the related form)
* Manage employee applications

## Installation
```
composer install
php artisan migrate:fresh
php artisan db:seed
```
## Usage
```
php artisan serve
```
You can now attend [localhost](http://127.0.0.1:8000/) to visit the page.

## Example screenshots of the project:
#### Landing page:

![Landing Page](https://i.imgur.com/vg0SSNn.png)

#### Dashboard:

![Dashboard](https://i.imgur.com/KNNWhle.png)

#### Application form:

![Application form](https://i.imgur.com/He9YxSh.png)

## Things to create/improve
* More content on landing page
* Edit positions
* Delete applications
* Mobile view in dashboard
* Statistics on dashboard home view
