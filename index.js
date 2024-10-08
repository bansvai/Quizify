// Creating Database
const database = {
    questions: [
        {
            question: 
            `
                let a = {}, b = {};
                console.log(a == b);
                console.log(a === b);
            `,
            options:
            {
                a: "true, true",
                b: "true, false",
                c: "false, true",
                d: "false, false"
            },
            answer: 'd'
        },
        {
            question: 
            `
                Object.assign(targer, source) creates which type of copy?
            `,
            options:
            {
                a: "Deep copy",
                b: "Shallow copy",
                c: "Nested copy",
                d: "None of these"
            },
            answer: 'b'
        },
        {
            question: 
            `
                Is method chaining possible with forEach?
            `,
            options:
            {
                a: "Yes",
                b: "No",
                c: "Yes in certain conditions",
                d: "None of these"
            },
            answer: 'b'
        }
    ]
};