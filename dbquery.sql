  SELECT S.FIRST_NAME, S.LAST_NAME, S.CITY, '2020-01-01' - S.DOB AS AGE  
  FROM STUDENT AS S
  JOIN COURSE AS C 
  ON S.STU_ID = C.STU_ID
  WHERE C.COURSE_NAME IN ('PHYSICS', 'MATHS')