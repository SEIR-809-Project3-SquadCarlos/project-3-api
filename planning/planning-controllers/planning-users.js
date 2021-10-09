/*
we'll import our router from express
we'll import our User model
We'll import our Attraction model
we'll import our Reviews Schema


When we POST a user, we will:
    CREATE a new UNIQUE user


When we GET a user, we will:
    FETCH a user's details, so we can match it to a login.

When a user LOGS IN, we will use a POST to:
verify their information matches the associated user's details.

When we PUT a user, we will:
   UPDATE the UNIQUE user's details.

When we DELETE a user, we will:
    Delete the user object, and mark it as deleted for any "friends".

When we UPDATE a user's SAVED ATTRACTIONS List, we will:
   ADD/DELETE/UPDATE the attraction in the user's saved attractions array.

*/
