import React from "react";
export default function Profile() {

   
    return (
        <>
            <div className="card" >
            <img class="card-img-top mx-auto" src="https://reactjs.org/logo-og.png" alt="Card image cap"/>
                
                <div className="card-body mx-auto">
                    <h5 className="card-title text-center">Vaishnav Atul Kumar</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className=" container text-center">
                    <a href="https://www.google.com/" className="btn btn-primary mx-3 my-3" >Linkedin</a>
                    <a href="https://www.google.com/" className="btn btn-primary mx-3 my-3"  >Github</a>
                    <a href="https://www.google.com/" className="btn btn-primary mx-3 my-3" >Twitter</a>
                    <a href="https://www.google.com/" className="btn btn-primary mx-3 my-3" >Codeforeces</a>
                    </div>
        </>
    );
}