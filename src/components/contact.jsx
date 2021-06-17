import React from 'react';
//This is the Contact Component

const Contact = () =>
{
    return(
        <div id="contact">
            <div className="row">
                <div className="column2" id="address">
                    <p>Address:</p>
                    <h5>77 Mehmet Akif Caddesi (Dereboyu),<br/>Nicosia KKTC</h5>
                </div>
                <div className="column2" id="socialmedia">
                    <p>Follow  Us:</p>
                    <div className="sociallinks">
                        <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                        <a href="https://twitter.com/" className="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                        <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                    </div>
                </div>
                <div className="column2" id="email">
                    <p>Reach us:</p>
                    <h5>contact@101cars.com</h5>
                    <h5>0533 XXX XXXX</h5>
                    <h5>0548 XXX XXXX</h5>
                </div>
            </div>
        </div>
    );
}

export default Contact;