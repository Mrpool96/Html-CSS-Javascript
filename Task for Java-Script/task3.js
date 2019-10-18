function marks(grade){
    if(grade<40&&grade<60){
        console.log("Fail");
    }
    else if (grade>=40&&grade<60) {
        console.log("Pass");
    }
    else if (grade>=60&&grade<90) {
        console.log("Passed with First Class");
    }
    else if (grade>=90 && grade<=100) {
        console.log("Passed with Distinction");
    }
    else{
        console.log("invalid input");
    }
}
marks(95)
