var person = [{
    name: {
        first: 'Gaylin',
        middle: 'Ray',
        last: 'Sharp'
    },
    role: 'Father',
    gender: 'Male',
    birthday: "04/26/50",
    age: 57,
    spouse: 'Joelle Hyer Sharp',
    retired: true,
    siblings: {
        number: 9,
        names: ['Vaughn', 'Evelyn', 'Mary Jo', 'Anita', 'Kelly', 'Doug', 'Nathan', 'Johnathon']
    },
    parents: {
        father: 'Ray George Sharp',
        mother: 'Donnabelle Spratling Sharp'
    },
    children: {
        number: 4,
        names: ['Ryan Anthony Sharp', 'Stephanie Lynn Ames', 'Cameron Royal Sharp', 'Timothy Aaron Sharp']
    }

},{
    name: {
        first: 'Joelle',
        middle: 'Hyer',
        last: 'Sharp'
    },
    role: 'Mother',
    gender: 'Female',
    birthday: '03/05/52',
    age: 55,
    spouse: 'Gaylin Ray Sharp',
    retired: false,
    siblings: {
        number: 7,
        names: ['Kathy', 'Becky', 'Mark', 'Dan', 'Susan', 'Matt', 'Jane']
    },
    parents: {
        father: 'Wendel Claire Hyer',
        mother: 'Yvonne Fabrecious Hyer'
    },
    children: {
        number: 4,
        names: ['Ryan Anthony Sharp', 'Stephanie Lynn Ames', 'Cameron Royal Sharp', 'Timothy Aaron Sharp']
    }
},{
    name: {
        first: 'Ryan',
        middle: 'Anthony',
        last: 'Sharp'
    },
    role: 'Son',
    gender: 'Male',
    birthday: '05/24/75',
    age: 42,
    spouse: 'Shauna Thacker Sharp',
    retired: false,
    siblings: {
        number: 3,
        names: ['Stephanie Lynn Ames', 'Cameron Royal Sharp', 'Timothy Aaron Sharp']
    },
    parents: {
        father: 'Gaylin Ray Sharp',
        mother: 'Joelle Hyer Sharp'
    },
},{
    name: {
        first: 'Stephanie',
        middle: 'Lynn',
        last: 'Ames'
    },
    role: 'Daughter',
    gender: 'Female',
    birthday: '07/30/77',
    age: 40,
    spouse: 'Adam Carl Ames',
    retired: false,
    siblings: {
        number: 3,
        names: ['Ryan Anthony Sharp', 'Cameron Royal Sharp', 'Timothy Aaron Sharp']
    },
    parents: {
        father: 'Gaylin Ray Sharp',
        mother: 'Joelle Hyer Sharp'
    },
}, {
    name: {
        first: 'Cameron',
        middle: 'Royal',
        last: 'Sharp'
    },
    role: 'Son',
    gender: 'Male',
    birthday: '11/24/80',
    age: 36,
    spouse: 'Chiaki Umeki Sharp',
    retired: false,
    siblings: {
        number: 3,
        names: ['Ryan Anthony Sharp', 'Stephanie Lynn Ames', 'Timothy Aaron Sharp']
    },
    parents: {
        father: 'Gaylin Ray Sharp',
        mother: 'Joelle Hyer Sharp'
    },
},{
    name: {
        first: 'Timothy',
        middle: 'Aaron',
        last: 'Sharp'
    },
    role: 'Son',
    gender: 'Male',
    birthday: '02/03/86',
    age: 31,
    spouse: 'None',
    retired: false,
    siblings: {
        number:3,
        names: ['Ryan Anthony Sharp', 'Stephanie Lynn Ames', 'Cameron Royal Sharp']
    },
    parents: {
        father: 'Gaylin Ray Sharp',
        mother: 'Joelle Hyer Sharp'
    }
}];
var family = {
    father: person[0],
    mother: person[1],
    children : [person[2],person[3],person[4],person[5]]
};



