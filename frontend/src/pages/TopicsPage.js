import React from 'react';

function TopicsPage(){
    return(
        <>
    <section>
        <h2>Web Dev Concepts</h2>
        <nav class="local">
            <a href="#Servers">Servers</a>
            <a href="#Frontend Design">Frontend Design</a>
            <a href="#Optimzing Images">Opimizing Images</a>
            <a href="#Favicons">Favicons</a>
        </nav>
        <article id="Servers">
            <h3>Web Servers</h3>
            <p> 
                The concept of the <strong>designated home page</strong> relative to the server index HTML file is that our home page or our given domain index is what allows the user to access the root directory allowing them to interact with the web service, 
                process responses, and let the user send requests and interact with the other web services or requests needed to create an account, alter data, send other pieces of data to external services, access services on the internet etc. 
                returning the file at the end of the process. <strong>OSU's APACHE web server</strong> renders the page as index.html as well, whereas Microsoft's .NET platform renders it as default.html.
            </p>
            <p>
                What can be seen in the <strong>local network screen</strong> is that no calls are being made on the local system, thus there are no <strong>status codes</strong> to be shown. Instead of having HTTP, it presents the file location on the local system. Once hosted it now shows that there are calls being made, 
                and the status codes are present within the network tab as well as the link presenting an HTTPS, and the domain of the page.
            </p>
            <p> The favicon.ico file presents <strong>status 200</strong> since the request was successful and the response body has the needed information. Whereas the main.css and main.js files return <strong>status 400</strong> since the server was unable to 
                successfully process the request due to client error meaning that they are missing the required parameters necessary to fully process the request.
            </p>
            <p>
                The <strong>scheme</strong> of the file is (HTTPS) used to request a secure encrypted connection to the resource. The <strong>subdomain</strong> is (web.engr) it is a subsection of the domain/server, and appended to the tail end of the front domain. 
                The <strong>host domain</strong> is (oregonstate.edu) used to map the IP address for the given server machine. The <strong>resource</strong> or <strong>path</strong> to the page is (/~andreata/a1-andreata) path used to generate the requested content, considered <strong>designated homepage</strong> of the resource.
            </p>
        </article>
        <article id="Frontend Design">
            <h3>Frontend Design</h3>
            <p>
                The concept of <strong>frontend design</strong> is to create the most appropriate experience for users that includes the visual design of the page, 
                the <strong>graphical user-interface(GUI)</strong>, as well as the interactive experience to bring users back on a consistent basis. Colors are used to create an identity for the web-page, built from the existing colors of the business or entity it is representing.
                Fonts as well as icons giving the user something to identify the site by, navigation systems which if done properly allow the user to have an intuitive and easy experience traversing the site to meet their desired needs. Photography creates a consistent design, and possibly relatable scheme that users identify with when looking through the site's contents. All of these things are what grabs a users attention, bringing them back
                to the site after having a pleasant user experience.
            </p>
            <dl>
                <dt>Effective</dt>
                <dd>Helps users meet their desired goals by being quick and concise accessing, and completing the necessary actions of the given user. The end goal is met if the user is provided the correct results within the given process.</dd>
                <dt>Efficient</dt>
                <dd>Allows users to complete their task in the fewest number of steps. By providing good navigation, and user-interface to reach the desired goal in the fewest amount of steps.</dd>
                <dt>Easy to navigate</dt>
                <dd>Allows users, especially those who have never interacted with the given interface before, to immediately understand how to meet their desired goals with intuitive easy to follow design whether it be visual direction or creative, and effective navigation.</dd>
                <dt>Error-free</dt>
                <dd>Allows users to avoid accessibility and availability issues, providing a great and convenient user experience. Meaning that the use experiences as few bugs as possible, avoiding things that keep them from reaching their end goal in the shortest and most enjoyable time possible.</dd>
                <dt>Enjoyable</dt>
                <dd>The platform is engaging, and fits the desired needs of the given user in both content and design. Meaning that the website feels, and looks good by having intuitive navigation, eye-catching design, and effective yet creative interface that the user interacts with whether it be effects of buttons visual stimulus etc.</dd>
            </dl>
            <p>
                The purpose of the <strong>nav tag</strong> is to create ways for the user to traverse between the various web-pages on a given site. 
                The purpose of the <strong>section tag</strong> is to group content that is all related, but does not stand on its own. 
                The purpose of the <strong>article tag</strong> is to denote a single topic uses a h2 when providing its headline. 
                The purpose of the <strong>footer tag</strong> is to holds legal information such as contact information, and links to critical pages as well as copyright statements. 
                The purpose of the <strong>header tag</strong> is to denote the banner or the masthead for an app/site which includes the name of the publisher, and marketing slogan. 
                The purpose of the <strong>main tag</strong> is to denote the primary block which holds content, such as stories, galleries, tutorials, etc.
            </p>
            <ol>
                <li>External anchors link to, which is outside the current website, referencing an external link or URL to the separate resource. These exist within navigation, helping the user traverse to separate pages of other products shown by the site.</li>
                <li>Internal anchors link one text item to another present on the same page by using separate IDs. When the tag is used as an ID attribute, its value can be used with a hashtag
                    to define the reference for the given anchor. This is used within internal navigation sending you to content that may be important or presented within the current page, data, articles, pictures, etc.
                </li>
                <li>When traversing using page to page, we create a nav tag to nest anchors which will link to pages within using relative paths or outside using absolute paths in the HTML file navigation. Examples being external sites or separate pages of the given site.</li>
            </ol>
        </article>
        <article id="Optimzing Images">
            <h3>Optimizing Images</h3>
            <p>
                The six major specifications of images for the web are <strong>Descriptive file name</strong> which is needed to improve search engine optimization these should be as descriptive and concise as possible.
                <strong>Small file size</strong> in order to have the fastest possible load time, and serve the higher resolution images to high resolution devices.
                <strong>Exact dimensions</strong> so that when serving an image that it is not exceeding the width of the given block that it is contained within while also maintaining the integrity of the image.
                <strong>Correct file format</strong> is necessary for correct presentation and placement within the given page.
                <strong>Reduced resolution</strong> is necessary in order to provide images for resolution sizes of large variances from high to low sizes.
                <strong>Color Mode</strong>, in order to edit the contrast and lighting of the given image to fit the current needs of the page it is presented within.
                The appropriate file format for <strong>photos</strong> would be a JPG since photos have millions of colors, great detail, and are taken typically on high resolution cameras.
                The appropriate file format for <strong>line art</strong> would be GIF since they have 8 bit transparency, and are capable of animation.
            </p>
        </article>
        <article id="Favicons">
            <h3>Favicons</h3>
            <p>
                Browsers and devices use <strong>Favicons</strong> to help the user quickly identify a site in the browser tab, smartwatch, cellphone, or search engine results list, etc. Displaying them in the correct font and file type.
            </p>
        </article>
    </section>
</>
    );
}

export default TopicsPage;