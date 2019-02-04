CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects"("title", "description", "thumbnail", "github", "date_completed", "tag_id") 
VALUES('Giphy App', 'This is a random Gif generator using the GIPHY API', './../images/giphyAPI.png', 
 'https://github.com/Nick7421/giphy-api-activity, '2019-01-30', '1');

 INSERT INTO "projects"("title", "description", "thumbnail", "github", "date_completed", "tag_id") 
VALUES('Gallery App', 'This is a gallery of my adventures', './../images/AboutMe.png', 
 'https://github.com/Nick7421/zaurak-weekend-4-gallery, '2019-01-22', '1');