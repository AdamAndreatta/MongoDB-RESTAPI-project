import React from 'react';

function HomePage(){
    return(
    <>
    <h2>M.E.R.N Stack and Technologies</h2>
    <article>
        <p>My current career goals are to try and be employeed by a major software company microsoft, google, or a company who works in the more technical aspects of software system design,
            creating and handling large datasets, or working on hardware and software we use everyday from operating systems, to planes possibly military contractors. I aspire to hopefully
            become the best engineer I can be by refining my skills through practice, and studying. I also have goals of various side projects which I wish to create whether it is 
            open source software, or backend data handling projects.
        </p>
        <p>
            <dl>
                <dt>Mongoose</dt>
                <dd>Mongoose is JavaScript library that provdies us with a layer of abstraction between the data in the database's collection of objects and documents
                    within our Node application. Providing us with an easy way to interact with our database. Using the MVC pattern we can decompose our application down to more digestable level
                    allowing for easy handling of data between application and database.
                </dd>
                <dt>Express</dt>
                <dd>Express is a framework that provides us with the abilty to use post and get actions from within our application,
                    allowing us to manage user input, posting that data to the screen or to send the data to the neccessary locaiton in order to perform the neccessary operations we
                    need based on our program.
                </dd>
                <dt>React</dt>
                <dd>React is as JavaScript framework which interconnects both javascript and the componenets of html as well as CSS. React gives us the ability to create dynamic applications, and handle
                    data from within our application by interacting with other applcations such a Mongoose.
                </dd>
                <dt>Node</dt>
                <dd>Node is an open source cross-platform run-time environment allowing us to develop server-side and networking applications from within the our private browser or development environment.
                    It allows to access various online packages which we can add to our programs as dependencies. These dependencies will provide various tools that will allow our applicaiton to run as if it were hosted on a web server.
                </dd>
                <dt>Html</dt>
                <dd>HTML also known as HyperText Markup Language is the language which we use to construct the foundation of webpages. It constructs the foundaiton, and components based on what the user chooses. Ranging from various headers,
                    paragraphs, sections, articles.
                </dd>
                <dt>CSS</dt>
                <dd>CSS also known as Cascading Style Sheets is what allows us to to style our html documents dynamically. Making our html tags dynamnic components giving us the ability to create unique styles positioning etc with greater ease technical
                    using HTMLs predefined elements.
                </dd>
            </dl>
        </p>
    </article>
    </>
    );
}
export default HomePage;