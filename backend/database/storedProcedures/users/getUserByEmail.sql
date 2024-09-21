USE agriSmart;

CREATE OR ALTER PROCEDURE getUserByEmail(
    @email VARCHAR(255)
)

AS 
BEGIN 
SELECT * FROM users
WHERE email=@email
AND isDeleted=0     --necessary to prevent selecting deleted users
END 

GO;