/**
 * Created by willcarpenter on 3/26/17.
 */



function averageGrade (...grades) {
    let total = 0;

    for(let grade of grades){
        total += grade;
    }

    return (total / grades.length);
}

var avg = averageGrade(1, 44, 99);
console.log(avg);