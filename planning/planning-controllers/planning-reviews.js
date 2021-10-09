/*
we'll import our router from express
we'll import our Review Schema
We'll import our User Schema
We'll import our Attraction Schema.Schema


When we POST a review, we'll:
add the review to the User's reviews array,
AND add it to the attraction's reviews array.

When we DELETE a review, we'll:
SPLICE the review from the user's array,
AND splice it from the attraction's array.

When we PUT a review, we'll:
REDEFINE the review at the appropriate index in the user's array, 
AND do the same in the attraction's array.


Export our router!
*/
