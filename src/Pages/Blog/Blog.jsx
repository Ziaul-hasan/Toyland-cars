/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='relative '>
                <div className='bg-img1 flex items-center justify-center ps-10'>
                    <h1 className='text-2xl md:text-8xl font-paytonOne text-base-300'>Questions & <span className='text-yellow-400'>Answer</span></h1>
                </div>
                <div className='my-10 w-5/6 md:w-4/5 mx-auto'>
                    <div className='md:my-10 my-2 md:mx-10 mx-4'>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-secularOne font-semibold my-6 text-red-500'><span>Question:</span>  What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <h2 className='text-base md:text-lg font-secularOne text-slate-600 font-medium'><span className='text-xl md:text-2xl me-5'>Answer:</span> An access token and refresh token are commonly used in authentication and authorization mechanisms, particularly in web applications and APIs. They serve different purposes and are used in different stages of the authentication process.
                                <li className='my-3 md:my-5'><span className='text-xl md:text-2xl me-5'>Access Token:</span>An access token is a credential that is issued by an authentication server (such as OAuth 2.0) after a user successfully authenticates and authorizes an application. It represents the user's authorization to access specific resources or perform certain actions within the application or API. The access token typically has an expiration time and is used to make authenticated requests to protected endpoints.</li>
                                <li className='my-3 md:my-5'><span className='text-xl md:text-2xl me-5'>Refresh Token:</span>A refresh token is also issued by the authentication server alongside the access token. Its purpose is to obtain a new access token without requiring the user to re-authenticate. Refresh tokens have a longer lifespan than access tokens and are used to request a new access token when the current one expires. They help improve security by reducing the lifespan of the access token, limiting the window of opportunity for potential misuse.</li>
                                <h2 className='text-base md:text-lg font-medium'>The general flow for using access and refresh tokens is as follows:</h2>
                                <ol className='ms-10'>
                                    <li className='my-3 md:my-5 list-decimal'>User authentication</li>
                                    <li className='my-3 md:my-5 list-decimal'>Access token usage</li>
                                    <li className='my-3 md:my-5 list-decimal'>Access token expiration</li>
                                    <li className='my-3 md:my-5 list-decimal'>Refresh token usage</li>
                                </ol>
                                <h2><span className='text-xl md:text-2xl me-5'>Storing:</span>Store them in memory or a short-lived storage mechanism, such as a secure HTTP-only cookie or browser's localStorage, to be easily accessible for making authenticated requests. Avoid storing them in plain text or exposing them to JavaScript code. This helps protect against cross-site scripting (XSS) attacks and reduces the risk of token theft.</h2>

                            </h2>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-semibold my-6 font-secularOne text-red-500'><span>Question:</span>  Compare SQL and NoSQL databases?</h2>
                            <h2 className='text-base md:text-lg font-medium font-secularOne text-slate-600'><span className='text-xl md:text-2xl me-5'>Answer:</span> Below is the main difference between NoSQL and SQL:
                            </h2>
                            <div className="overflow-x-auto my-6">
                                <table className="table w-full table-compact">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th className='text-base md:text-lg font-secularOne text-slate-600'>Sl</th>
                                            <th className='text-base md:text-lg font-secularOne text-slate-600'>Parameter</th>
                                            <th className='text-base md:text-lg font-secularOne text-slate-600'>SQL</th>
                                            <th className='text-base md:text-lg font-secularOne text-slate-600'>NOSQL</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-base font-secularOne'>
                                        {/* row 1 */}
                                        <tr>
                                            <th>1</th>
                                            <td>Definition</td>
                                            <td>SQL databases are primarily called RDBMS or Relational Databases</td>
                                            <td>NoSQL databases are primarily called as Non-relational or distributed database</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>2</th>
                                            <td>Design for</td>
                                            <td>Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</td>
                                            <td>NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>3</th>
                                            <td>Query Language</td>
                                            <td>Structured query language (SQL)	</td>
                                            <td>No declarative query language</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <th>4</th>
                                            <td>Type</td>
                                            <td>SQL databases are table based databases</td>
                                            <td>NoSQL databases can be document based, key-value pairs, graph databases</td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr>
                                            <th>5</th>
                                            <td>Ability to scale</td>
                                            <td>SQL databases are vertically scalable</td>
                                            <td>NoSQL databases are horizontally scalable</td>
                                        </tr>
                                        {/* row 6 */}
                                        <tr>
                                            <th>6</th>
                                            <td>Examples</td>
                                            <td>Oracle, Postgres, and MS-SQL.</td>
                                            <td>MongoDB, Redis, Neo4j, Cassandra, Hbase.</td>
                                        </tr>
                                        {/* row 7 */}
                                        <tr>
                                            <th>7</th>
                                            <td>Best Used for</td>
                                            <td>RDBMS database is the right option for solving ACID problems.</td>
                                            <td>NoSQL is a best used for solving data availability problems</td>
                                        </tr>
                                        {/* row 8 */}
                                        <tr>
                                            <th>8</th>
                                            <td>Top Companies Using</td>
                                            <td>Hootsuite, CircleCI, Gauges</td>
                                            <td>Airbnb, Uber, Kickstarter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-semibold my-6 font-secularOne text-red-500'><span>Question:</span>  What is express js? What is Nest JS?</h2>
                            <h2 className='text-base md:text-lg font-medium font-secularOne text-slate-600'><span className='text-xl md:text-2xl me-5'>Answer:</span> NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs. </h2>
                            <h2 className='text-base md:text-lg font-secularOne text-slate-600 font-medium'><span className='text-xl md:text-2xl me-5'>Express.js:</span> Express.js is a popular, fast, and minimalist web application framework for Node.js. It provides a simple and flexible set of features for building web applications and APIs. Express.js is known for its unopinionated approach, allowing developers to have more control over the structure and organization of their code. </h2>
                            <h2 className='text-base md:text-lg font-secularOne text-slate-600 font-medium'>Key features of Express.js include:
                                <ol className='ms-10'>
                                    <li className='my-3 md:my-5 list-decimal'>Routing</li>
                                    <li className='my-3 md:my-5 list-decimal'>Middleware</li>
                                    <li className='my-3 md:my-5 list-decimal'>Template Engines</li>
                                    <li className='my-3 md:my-5 list-decimal'>Integration</li>
                                </ol>
                            </h2>
                            <h2 className='text-base md:text-lg font-secularOne text-slate-600 font-medium'><span className='text-xl md:text-2xl me-5'>NestJS:</span> NestJS is a progressive, opinionated, and highly extensible framework for building scalable server-side applications using Node.js. It is inspired by Angular and takes advantage of TypeScript's features to provide a complete development experience. </h2>
                            <h2 className='text-base md:text-lg font-secularOne text-slate-500 font-medium'>Key features of Express.js include:
                                <ol className='ms-10'>
                                    <li className='my-3 md:my-5 list-decimal'>Architecture</li>
                                    <li className='my-3 md:my-5 list-decimal'>Dependency Injection</li>
                                    <li className='my-3 md:my-5 list-decimal'>Middleware</li>
                                    <li className='my-3 md:my-5 list-decimal'>Decorators</li>
                                    <li className='my-3 md:my-5 list-decimal'>Support for TypeScript</li>
                                </ol>
                            </h2>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-semibold font-secularOne my-6 text-red-500'><span>Question:</span>  What is MongoDB aggregate and how does it work?</h2>
                            <h2 className='text-base md:text-lg font-secularOne font-medium text-slate-600'><span className='text-xl md:text-2xl me-5'>Answer:</span> In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data, perform calculations, apply filtering and grouping, and perform other complex operations to derive meaningful results from given data.
                                <br /><br /> Here are some commonly used pipeline stages in the aggregate method:
                                <ol className='ms-10'>
                                    <li className='list-decimal my-3 md:my-5'>$match: Filters the documents based on specified criteria. It works similar to the regular query operations, allowing you to include or exclude documents based on specific conditions.</li>
                                    <li className='list-decimal my-3 md:my-5'>$project: Reshapes the documents, allowing you to specify which fields to include or exclude, create computed fields, rename fields, or apply expressions to modify the document structure.</li>
                                    <li className='list-decimal my-3 md:my-5'>$group: Groups documents together based on a specified key or set of keys. It allows you to perform calculations on grouped data, such as summing, averaging, counting, and finding maximum or minimum values.</li>
                                    <li className='list-decimal my-3 md:my-5'>$sort: Sorts the documents based on one or more fields in ascending or descending order.</li>
                                    <li className='list-decimal my-3 md:my-5'>$limit and $skip: Limits the number of documents returned in the result set and skips a specified number of documents.</li>
                                    <li className='list-decimal my-3 md:my-5'>$unwind: Deconstructs an array field, creating multiple documents for each element in the array. This is useful when you want to perform operations on individual array elements.</li>
                                </ol>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;