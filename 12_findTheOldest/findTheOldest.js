const findTheOldest = function(people) {
    people.map(person => {
                    if (!person.yearOfDeath) {
                        person.yearOfDeath = (new Date()).getFullYear();
                    }
                    person.age = person.yearOfDeath - person.yearOfBirth
            })
    people.sort((a, b) => {
                    if (a.age < b.age) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                })
    return people[0]

                
};

module.exports = findTheOldest;
