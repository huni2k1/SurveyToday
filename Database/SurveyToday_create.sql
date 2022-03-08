
--ALTER TABLE Survey DROP FOREIGN KEY CreatorID;
--ALTER TABLE SurveyQuestion DROP FOREIGN KEY SurveyID;
--ALTER TABLE SurveyQuestionAnswer DROP FOREIGN KEY QuestionID;
--ALTER TABLE SurveyQuestionAnswer DROP FOREIGN KEY SurveyID;

DROP TABLE IF EXISTS Survey;
DROP TABLE IF EXISTS SurveyQuestion;
DROP TABLE IF EXISTS SurveyQuestionAnswer;
DROP TABLE IF EXISTS User;


-- Table: Survey
CREATE TABLE Survey (
    SurveyID int NOT NULL,
    CreatorID int NOT NULL,
    SurveyName varchar(30) NOT NULL,
    DateCreated date NOT NULL,
    DateExpired date NOT NULL,
    SubmissionCount int NOT NULL,
    CONSTRAINT SurveyID PRIMARY KEY (SurveyID)
);

-- Table: SurveyQuestion
CREATE TABLE SurveyQuestion (
    QuestionID int NOT NULL,
    SurveyID int NOT NULL,
    Question varchar(100) NOT NULL,
    CONSTRAINT SurveyQuestion_pk PRIMARY KEY (SurveyID,QuestionID)
);

-- Table: SurveyQuestionAnswer
CREATE TABLE SurveyQuestionAnswer (
    AnswerID int NOT NULL,
    QuestionID int NOT NULL,
    Answer varchar(50) NOT NULL,
    AnswerLetter varchar(1) NULL,
    AnswerCount int NOT NULL,
    CONSTRAINT SurveyQuestionAnswer_pk PRIMARY KEY (AnswerID,QuestionID)
);

-- Table: User
CREATE TABLE User (
    UserID int NOT NULL,
    UserGmail varchar(50) NOT NULL,
    User_FName varchar(20) NOT NULL,
    User_LName varchar(20) NOT NULL,
    User_DoB date NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (UserID)
);

-- foreign keys
-- Reference: SurveyAnswer_SurveyQuestion (table: SurveyQuestionAnswer)
ALTER TABLE SurveyQuestionAnswer ADD CONSTRAINT SurveyAnswer_SurveyQuestion FOREIGN KEY SurveyAnswer_SurveyQuestion (QuestionID,SurveyID)
    REFERENCES SurveyQuestion (QuestionID,SurveyID);

-- Reference: SurveyQuestion_Survey (table: SurveyQuestion)
ALTER TABLE SurveyQuestion ADD CONSTRAINT SurveyQuestion_Survey FOREIGN KEY SurveyQuestion_Survey (SurveyID)
    REFERENCES Survey (SurveyID);

-- Reference: Survey_User (table: Survey)
ALTER TABLE Survey ADD CONSTRAINT Survey_User FOREIGN KEY Survey_User (CreatorID)
    REFERENCES User (UserID);

-- End of file.
