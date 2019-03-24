# React Redux with Sagas


## Setup


1. Create a database named `portfolio`
1. Run the following SQL using the `portfolio` database:

```SQL
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');
```

1. `npm install`
2. `npm run server`
3. `npm run client`

## Notes

### Tags



### General Tasks

- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Wireframes

> NOTE: Feel free to modify the styling and layout of content on the page. 

### Project Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/project_page.png" width="560">


### Admin Page

<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/admin_page.png" width="560">

