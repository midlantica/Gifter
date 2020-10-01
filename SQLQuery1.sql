INSERT INTO Comment (UserProfileId, PostId, Message)
VALUES (2, 1, 'Hello everyoneee'),  (2, 1, 'Today is a greatt day'),  (2, 1, 'Wowowee');

SELECT p.Id AS PostId, p.Title, p.Caption, p.DateCreated AS PostDateCreated,
                       p.ImageUrl AS PostImageUrl, p.UserProfileId AS PostUserProfileId,

                       up.Name, up.Bio, up.Email, p.DateCreated AS UserProfileDateCreated,
                       up.ImageUrl AS UserProfileImageUrl,

                       c.Id AS CommentId, c.Message, c.UserProfileId AS CommentUserProfileId
                  FROM Post p
                       LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                       LEFT JOIN Comment c on c.PostId = p.id
                 WHERE Post.id = 1  
              ORDER BY p.DateCreated