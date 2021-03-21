const functions = require("firebase-functions");



const app = require("express")();

 
const FBAuth = require("./util/fbAuth");
const { getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeComment,likeComment,unlikeScream, deleteScream } = require("./handlers/publications");
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser,SendFollowRequest,acceptFollowRequest,getFollow} = require("./handlers/users");









//scream routes
app.get('/publications', getAllScreams);
app.post('/publication', FBAuth, postOneScream);
app.get('/publication/:screamId', getScream);
// add new comment 
app.post('/publication/:screamId/comment', FBAuth, commentOnScream);
// delete scream
app.delete('/publication/:screamId', FBAuth, deleteScream);
// like scream
app.get('/publication/:screamId/like', FBAuth, likeScream);
// unlike scream
app.get('/publication/:screamId/unlike', FBAuth, unlikeScream);


//like comment
app.get('/comment/:commentId/like', FBAuth, likeComment);
app.get('/comment/:commentId/unlike', FBAuth, unlikeComment);

//app.post('/club', FBAuth, postClub);
//app.get('/club', FBAuth, getClub);
//app.post('/follow', FBAuth, onFollow);
//app.post('/follows', FBAuth, onFollowing);

//app.post('/unfollow', FBAuth, unFollow);




//users routes
app.post('/signup', signup);
app.post('/login', login);

app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);
app.post('/add',FBAuth,SendFollowRequest);
app.post('/accept',FBAuth,acceptFollowRequest);

app.get('/getamis',FBAuth,getFollow);













exports.api = functions.https.onRequest(app);
