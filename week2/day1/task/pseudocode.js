##################################################################

1. Newton Second Law
## Algorithm
  => create variable m
  => create variable a
  => create variable F
  => save value in variable m
  => save value in variable a
  => calculate m times a then store in variable F

## PseudoCode
  => STORE "m" with value 600
  => STORE "a" with value 2
  => STORE "F" with value m time a

##################################################################
##################################################################

2. Year Kabisat
## Algorithm
  => create variable year
  => input value in variable year
  => check if year modulus by 4 
  => check if year modulus by 100
  => check if year modulus by 400
  => if year modulus by 4 is zero and year modulus by 100 is not zero then print year kabisat
  => if year modulus by 4, year modulus by 100, year modulus by 400 is zero then print year kabisat

## PseudoCode
  => STORE "year" with value user input
  =>  IF year modulus 4 equal to 0
        IF year modulus by 100 equal to 0
          IF year modulus by 400 equal to 0
            PRINT "Year is Leap Year"
          ELSE
            PRINT "Year is not Leap Year"
          END IF
        ELSE
          PRINT "Year is Leap Year"
        END IF
      ELSE 
        PRINT "Year is not Leap Year"
      END IF

 Just checking if my pseudo code whether work
      var year = prompt("input year")
      if (year % 4 == 0)
        if (year % 100 == 0)
          if (year % 400 == 0)
            {console.log("year is leap year")}
          else 
            {console.log("year is not leap year")}
        else 
          {console.log("year is leap year")}
      else
        {console.log("year is not leap year")}

##################################################################
##################################################################

3. Laundry Day 
## Algorithm
  => create variable allClothe
  => create variable usedClothe
  => set allClothe to 20
  => set usedClothe to 0
  => if usedClothe has reached allClothe then do the washing

## PseudoCode
  =>  SET "allClothe" with value 20
  =>  SET "usedClothe" with value 0
  =>  FOR "usedClothe" < "allClothe"
        INCREMENT usedClothe
      END FOR
  =>  DO turn on the washer 

##################################################################
##################################################################

4. Periksa Kuku
## Algorithm
  => create [array] allStudent with {object} student
  => each student either has long nail or short nail
  => create variable checkedStudent
  => set checkedStudent to 0
  => for each checkedStudent < allStudent
  => if checkedStudent has long nail then punish the student, else praise the student

## PseudoCode
  =>  STORE student with value long nail or short nail
  =>  STORE allStudent with value student
  =>  SET checkedStudent to 0
      FOR each student in allStudent
        IF student has long nail THEN
          student will be punish
        ELSE 
          student will be praise
        END IF
      END FOR

##################################################################
