# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Routes

| **Method** 	|         **Path**         	|                    **Purpose**                   	|
|:----------:	|:------------------------:	|:------------------------------------------------:	|
|     GET    	| /                        	| Home Page                                        	|
|     GET    	| /places                  	| Places index page                                	|
|    POST    	| /places                  	| Create new place                                 	|
|     GET    	| /places/new              	| Form page for creating new place                 	|
|     GET    	| /places/:id              	| Details about a particular place                 	|
|     PUT    	| /places/:id              	| Update a particular place                        	|
|     GET    	| /places/:id/edit         	| Form page for editing an exisitin place          	|
|   DELETE   	| /places/:id              	| Delete a particular place                        	|
|    POST    	| /places/:id/rant         	| Create a rant (comment) about a particular place 	|
|   DELETE   	| /places/:id/rant/:rantId 	| Delete a rant (comment) about a particular place 	|
|     GET    	| *                        	| 404 page (matches any route not defined above)   	|

Database

| **Field** 	| **Type**  	|
|-----------	|-----------	|
| _id       	| Object ID 	|
| name      	| string    	|
| city      	| string    	|
| state     	| string    	|
| cuisines  	| string    	|
| picture   	| string   	|

rants
| **Field** 	| **Type**              	|
|-----------	|-----------------------	|
| _id       	| Object ID             	|
| place-id  	| ref(places) Object_Id 	|
| rant      	| Boolean               	|
| rating    	| Number                	|
| comment   	| string                	|
| review    	| string                	|

Planning
    
    User Stories

    Wireframes

Notes: